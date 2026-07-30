"use server";

import { createClient } from "@/lib/supabase/server";
import { resend } from "@/lib/resend";
import {
  qualify,
  type IntakeAnswers,
  type Qualification,
} from "@/lib/qualification";
import { LABELS } from "@/lib/intake-labels";

export type { IntakeAnswers };

export interface IntakeResult {
  success: boolean;
  qualification?: Qualification;
  error?: string;
}

export async function submitIntake(
  answers: IntakeAnswers,
  locale: string = "en"
): Promise<IntakeResult> {
  const qualification = qualify(answers);

  const supabase = await createClient();

  const { error } = await supabase.from("roofer_leads").insert({
    company_name: answers.company_name,
    market: answers.market,
    service_area: answers.service_area,
    monthly_revenue: answers.monthly_revenue,
    current_ads: answers.current_ads,
    ad_spend_budget: answers.ad_spend_budget,
    job_source: answers.job_source,
    full_name: answers.full_name,
    email: answers.email,
    phone: answers.phone,
    qualification: qualification.outcome,
    disqualify_reason: qualification.reason ?? null,
    locale,
  });

  if (error) {
    console.error("Intake submission error:", error);
    return { success: false, error: error.message };
  }

  // A failed email must never lose the lead — it is already saved above.
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_NOTIFY_EMAIL || "contact@dellep.com",
      subject:
        qualification.outcome === "qualified"
          ? `QUALIFIED — ${answers.company_name} (${answers.service_area})`
          : `Not a fit — ${answers.company_name} (${answers.service_area})`,
      html: notificationEmail(answers, qualification),
    });
  } catch (emailError) {
    console.error("Notification email error:", emailError);
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: answers.email,
      subject:
        qualification.outcome === "qualified"
          ? "Your roofing ads call — Dellep"
          : "Thanks for reaching out — Dellep",
      html: confirmationEmail(answers, qualification),
    });
  } catch (emailError) {
    console.error("Confirmation email error:", emailError);
  }

  return { success: true, qualification };
}

function label(field: keyof typeof LABELS, value: string) {
  return LABELS[field][value] ?? value;
}

function notificationEmail(
  answers: IntakeAnswers,
  qualification: Qualification
) {
  const qualified = qualification.outcome === "qualified";
  const rows: [string, string][] = [
    ["Company", answers.company_name],
    ["Works in", `${answers.service_area} — ${label("market", answers.market)}`],
    ["Monthly revenue", label("monthly_revenue", answers.monthly_revenue)],
    ["Meta ads today", label("current_ads", answers.current_ads)],
    ["Ad spend budget", label("ad_spend_budget", answers.ad_spend_budget)],
    ["Jobs come from", label("job_source", answers.job_source)],
    ["Name", answers.full_name],
    ["Email", answers.email],
    ["Phone", answers.phone],
  ];

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;">
        <tr><td style="background:#08090A;padding:24px 32px;">
          <h1 style="margin:0;color:#fff;font-size:20px;font-weight:600;">Dellep</h1>
        </td></tr>
        <tr><td style="padding:32px 32px 0;">
          <span style="display:inline-block;background:${qualified ? "#dcfce7" : "#fee2e2"};color:${qualified ? "#15803d" : "#b91c1c"};font-size:12px;font-weight:700;padding:5px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:.5px;">
            ${qualified ? "Qualified" : `Not a fit — ${qualification.reason === "below_floor" ? "below ad spend floor" : "outside served market"}`}
          </span>
          <h2 style="margin:16px 0 0;color:#0a0a0a;font-size:22px;font-weight:600;">${answers.company_name}</h2>
          <p style="margin:6px 0 0;color:#71717a;font-size:14px;">
            ${qualified ? "They were shown the calendar. Check Calendly for a booking." : "No calendar was shown. Details captured for follow-up."}
          </p>
        </td></tr>
        <tr><td style="padding:24px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border-radius:8px;border:1px solid #e4e4e7;">
            ${rows
              .map(
                ([k, v], i) => `<tr><td style="padding:14px 20px;${i < rows.length - 1 ? "border-bottom:1px solid #e4e4e7;" : ""}">
              <p style="margin:0 0 2px;color:#a1a1aa;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">${k}</p>
              <p style="margin:0;color:#18181b;font-size:15px;font-weight:500;">${escapeHtml(v)}</p>
            </td></tr>`
              )
              .join("")}
          </table>
        </td></tr>
        <tr><td style="padding:0 32px 32px;">
          <a href="tel:${encodeURIComponent(answers.phone)}" style="display:inline-block;background:#22C55E;color:#08090A;font-size:14px;font-weight:600;padding:11px 24px;border-radius:8px;text-decoration:none;margin-right:8px;">Call ${escapeHtml(answers.full_name.split(" ")[0])}</a>
          <a href="mailto:${answers.email}" style="display:inline-block;background:#08090A;color:#fff;font-size:14px;font-weight:500;padding:11px 24px;border-radius:8px;text-decoration:none;">Email</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmationEmail(
  answers: IntakeAnswers,
  qualification: Qualification
) {
  const firstName = escapeHtml(answers.full_name.split(" ")[0]);
  const qualified = qualification.outcome === "qualified";

  const body = qualified
    ? `
      <p style="margin:0 0 16px;color:#3f3f46;font-size:15px;line-height:1.6;">
        Thanks ${firstName} — I got your details for ${escapeHtml(answers.company_name)}.
      </p>
      <p style="margin:0 0 16px;color:#3f3f46;font-size:15px;line-height:1.6;">
        If you picked a time on the calendar, you'll have a separate confirmation with the call details. If you didn't get that far, just reply to this email and we'll sort out a time.
      </p>
      <p style="margin:0 0 16px;color:#3f3f46;font-size:15px;line-height:1.6;">
        On the call I'll walk you through exactly what I'd run for you over 30 days. To be clear about the terms: <strong>I don't charge you anything</strong>. You pay Meta for your own ad spend, you keep ownership of your ad account, and you can end it whenever you want.
      </p>`
    : `
      <p style="margin:0 0 16px;color:#3f3f46;font-size:15px;line-height:1.6;">
        Thanks ${firstName} — I got your details for ${escapeHtml(answers.company_name)}.
      </p>
      <p style="margin:0 0 16px;color:#3f3f46;font-size:15px;line-height:1.6;">
        ${
          qualification.reason === "below_floor"
            ? "I'm going to be straight with you rather than take your time: below about $1,500/month in ad spend, Meta doesn't get enough data to optimise, and I'd be setting us both up to waste a month. That's not a judgement on your business — it's just how the platform works."
            : "Right now I'm only working with roofers in the United States and in Quebec, so I'd be guessing at your market rather than doing a good job in it."
        }
      </p>
      <p style="margin:0 0 16px;color:#3f3f46;font-size:15px;line-height:1.6;">
        I've kept your details. If that changes, reply to this email and we'll pick it up.
      </p>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;">
        <tr><td style="background:#08090A;padding:24px 32px;">
          <h1 style="margin:0;color:#fff;font-size:20px;font-weight:600;">Dellep</h1>
        </td></tr>
        <tr><td style="padding:36px 32px 8px;">${body}</td></tr>
        <tr><td style="padding:20px 32px;border-top:1px solid #e4e4e7;background:#fafafa;">
          <p style="margin:0;color:#71717a;font-size:13px;">Meta ads for roofing companies.</p>
          <p style="margin:6px 0 0;color:#a1a1aa;font-size:11px;">You're getting this because you filled in the form on dellep.com. No marketing emails unless you ask for them.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
