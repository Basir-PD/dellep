"use server";

import { createClient } from "@/lib/supabase/server";
import { resend } from "@/lib/resend";

export async function submitContact(data: {
  full_name: string;
  email: string;
  practice_name?: string;
  message?: string;
}) {
  const supabase = await createClient();

  // Save to Supabase
  const { error } = await supabase.from("contact_submissions").insert({
    full_name: data.full_name,
    email: data.email,
    practice_name: data.practice_name || null,
    message: data.message || null,
  });

  if (error) {
    console.error("Contact submission error:", error);
    return { success: false, error: error.message };
  }

  // Send notification email to you
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_NOTIFY_EMAIL || "contact@dellep.com",
      subject: `New contact from ${data.full_name}`,
      html: notificationEmailTemplate(data),
    });
  } catch (emailError) {
    // Don't fail the submission if email fails
    console.error("Email notification error:", emailError);
  }

  // Send confirmation email to the person who submitted
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: data.email,
      subject: "We got your message — Dellep",
      html: confirmationEmailTemplate(data.full_name),
    });
  } catch (emailError) {
    console.error("Confirmation email error:", emailError);
  }

  return { success: true };
}

function notificationEmailTemplate(data: {
  full_name: string;
  email: string;
  practice_name?: string;
  message?: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0a0a0a; padding: 24px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">Dellep</h1>
            </td>
          </tr>
          <!-- Badge -->
          <tr>
            <td style="padding: 32px 32px 0;">
              <span style="display: inline-block; background-color: #dbeafe; color: #1d4ed8; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">New Lead</span>
            </td>
          </tr>
          <!-- Title -->
          <tr>
            <td style="padding: 16px 32px 0;">
              <h2 style="margin: 0; color: #0a0a0a; font-size: 22px; font-weight: 600;">New Contact Submission</h2>
              <p style="margin: 8px 0 0; color: #71717a; font-size: 14px;">Someone just reached out through the website.</p>
            </td>
          </tr>
          <!-- Details -->
          <tr>
            <td style="padding: 24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; border-radius: 8px; border: 1px solid #e4e4e7;">
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e4e4e7;">
                    <p style="margin: 0 0 2px; color: #a1a1aa; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                    <p style="margin: 0; color: #18181b; font-size: 15px; font-weight: 500;">${data.full_name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e4e4e7;">
                    <p style="margin: 0 0 2px; color: #a1a1aa; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                    <a href="mailto:${data.email}" style="color: #2563eb; font-size: 15px; font-weight: 500; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                ${
                  data.practice_name
                    ? `<tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e4e4e7;">
                    <p style="margin: 0 0 2px; color: #a1a1aa; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Practice</p>
                    <p style="margin: 0; color: #18181b; font-size: 15px; font-weight: 500;">${data.practice_name}</p>
                  </td>
                </tr>`
                    : ""
                }
                ${
                  data.message
                    ? `<tr>
                  <td style="padding: 16px 20px;">
                    <p style="margin: 0 0 2px; color: #a1a1aa; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                    <p style="margin: 0; color: #18181b; font-size: 15px; line-height: 1.5;">${data.message}</p>
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <a href="mailto:${data.email}" style="display: inline-block; background-color: #0a0a0a; color: #ffffff; font-size: 14px; font-weight: 500; padding: 10px 24px; border-radius: 8px; text-decoration: none;">Reply to ${data.full_name.split(" ")[0]}</a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; border-top: 1px solid #e4e4e7;">
              <p style="margin: 0; color: #a1a1aa; font-size: 12px;">This is an automated notification from your Dellep contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function confirmationEmailTemplate(fullName: string) {
  const firstName = fullName.split(" ")[0];
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0a0a0a; padding: 24px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">Dellep</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 40px 32px 16px;">
              <h2 style="margin: 0; color: #0a0a0a; font-size: 24px; font-weight: 600;">Thanks for reaching out, ${firstName}!</h2>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 32px;">
              <p style="margin: 0 0 16px; color: #3f3f46; font-size: 15px; line-height: 1.6;">
                We received your message and our team will review it shortly. You can expect to hear back from us within <strong>24 hours</strong>.
              </p>
              <p style="margin: 0 0 16px; color: #3f3f46; font-size: 15px; line-height: 1.6;">
                We help functional and naturopathic practitioners grow their practice with done-for-you marketing systems that deliver real, measurable results.
              </p>
            </td>
          </tr>
          <!-- Divider -->
          <tr>
            <td style="padding: 8px 32px 24px;">
              <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 0;" />
            </td>
          </tr>
          <!-- What to expect -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <p style="margin: 0 0 16px; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">What happens next</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 0 12px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; padding-right: 12px;">
                          <span style="display: inline-block; width: 24px; height: 24px; background-color: #dbeafe; color: #2563eb; font-size: 12px; font-weight: 700; border-radius: 50%; text-align: center; line-height: 24px;">1</span>
                        </td>
                        <td style="vertical-align: top;">
                          <p style="margin: 0; color: #18181b; font-size: 14px; font-weight: 500;">We review your message</p>
                          <p style="margin: 2px 0 0; color: #71717a; font-size: 13px;">Our team reads every submission personally.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 0 12px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; padding-right: 12px;">
                          <span style="display: inline-block; width: 24px; height: 24px; background-color: #dbeafe; color: #2563eb; font-size: 12px; font-weight: 700; border-radius: 50%; text-align: center; line-height: 24px;">2</span>
                        </td>
                        <td style="vertical-align: top;">
                          <p style="margin: 0; color: #18181b; font-size: 14px; font-weight: 500;">We reach out to you</p>
                          <p style="margin: 2px 0 0; color: #71717a; font-size: 13px;">Expect a reply within 24 hours via email.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; padding-right: 12px;">
                          <span style="display: inline-block; width: 24px; height: 24px; background-color: #dbeafe; color: #2563eb; font-size: 12px; font-weight: 700; border-radius: 50%; text-align: center; line-height: 24px;">3</span>
                        </td>
                        <td style="vertical-align: top;">
                          <p style="margin: 0; color: #18181b; font-size: 14px; font-weight: 500;">We build your growth plan</p>
                          <p style="margin: 2px 0 0; color: #71717a; font-size: 13px;">A custom strategy tailored to your practice.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; border-top: 1px solid #e4e4e7; background-color: #fafafa;">
              <p style="margin: 0 0 4px; color: #18181b; font-size: 14px; font-weight: 500;">The Dellep Team</p>
              <p style="margin: 0; color: #a1a1aa; font-size: 12px;">Marketing systems for functional &amp; naturopathic practitioners</p>
            </td>
          </tr>
        </table>
        <!-- Unsubscribe -->
        <table width="560" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 16px 0; text-align: center;">
              <p style="margin: 0; color: #a1a1aa; font-size: 11px;">This is a one-time confirmation email. You won&apos;t receive marketing emails unless you opt in.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
