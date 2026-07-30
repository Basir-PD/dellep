"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { CalendlyEmbed } from "./calendly-embed";
import { useLocale } from "./intl-provider";
import { event as pixelEvent } from "@/lib/fpixel";
import { submitIntake } from "@/app/actions/submit-intake";
import type { IntakeAnswers, Qualification } from "@/lib/qualification";

type Answers = Partial<Record<keyof IntakeAnswers, string>>;

interface Field {
  id: keyof IntakeAnswers;
  type: "text" | "email" | "tel" | "select";
  label: string;
  hint?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export const Intake = () => {
  const intl = useIntl();
  const { locale } = useLocale();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [qualification, setQualification] = useState<Qualification | null>(null);

  const steps: { title: string; subtitle: string; fields: Field[] }[] = [
    {
      title: intl.formatMessage({ defaultMessage: "Your company" }),
      subtitle: intl.formatMessage({
        defaultMessage: "So I know who I'd be working with.",
      }),
      fields: [
        {
          id: "company_name",
          type: "text",
          label: intl.formatMessage({ defaultMessage: "Company name" }),
          placeholder: intl.formatMessage({
            defaultMessage: "e.g. Summit Roofing",
          }),
        },
        {
          id: "market",
          type: "select",
          label: intl.formatMessage({ defaultMessage: "Where do you work?" }),
          options: [
            {
              value: "united_states",
              label: intl.formatMessage({ defaultMessage: "United States" }),
            },
            {
              value: "quebec",
              label: intl.formatMessage({ defaultMessage: "Quebec, Canada" }),
            },
            {
              value: "elsewhere",
              label: intl.formatMessage({ defaultMessage: "Somewhere else" }),
            },
          ],
        },
        {
          id: "service_area",
          type: "text",
          label: intl.formatMessage({
            defaultMessage: "City or area you serve",
          }),
          placeholder: intl.formatMessage({ defaultMessage: "e.g. Dallas, TX" }),
        },
        {
          id: "monthly_revenue",
          type: "select",
          label: intl.formatMessage({ defaultMessage: "Roughly what do you do a month?" }),
          options: [
            {
              value: "under_20k",
              label: intl.formatMessage({ defaultMessage: "Under $20k/month" }),
            },
            {
              value: "20k_50k",
              label: intl.formatMessage({ defaultMessage: "$20k – $50k/month" }),
            },
            {
              value: "50k_100k",
              label: intl.formatMessage({ defaultMessage: "$50k – $100k/month" }),
            },
            {
              value: "100k_250k",
              label: intl.formatMessage({ defaultMessage: "$100k – $250k/month" }),
            },
            {
              value: "250k_plus",
              label: intl.formatMessage({ defaultMessage: "$250k+/month" }),
            },
          ],
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "Your ads" }),
      subtitle: intl.formatMessage({
        defaultMessage: "Where things stand today.",
      }),
      fields: [
        {
          id: "current_ads",
          type: "select",
          label: intl.formatMessage({
            defaultMessage: "Are you running Meta ads right now?",
          }),
          options: [
            {
              value: "none",
              label: intl.formatMessage({ defaultMessage: "Not running any" }),
            },
            {
              value: "boosting",
              label: intl.formatMessage({
                defaultMessage: "I boost posts now and then",
              }),
            },
            {
              value: "self_managed",
              label: intl.formatMessage({
                defaultMessage: "I run proper campaigns myself",
              }),
            },
            {
              value: "agency",
              label: intl.formatMessage({
                defaultMessage: "An agency runs them",
              }),
            },
          ],
        },
        {
          id: "ad_spend_budget",
          type: "select",
          label: intl.formatMessage({
            defaultMessage: "What can you put behind Meta ads each month?",
          }),
          hint: intl.formatMessage({
            defaultMessage:
              "This is paid straight to Meta for your own ads — not to me. I don't charge you anything.",
          }),
          options: [
            {
              value: "under_1000",
              label: intl.formatMessage({ defaultMessage: "Under $1,000" }),
            },
            {
              value: "1000_1500",
              label: intl.formatMessage({ defaultMessage: "$1,000 – $1,500" }),
            },
            {
              value: "1500_3000",
              label: intl.formatMessage({ defaultMessage: "$1,500 – $3,000" }),
            },
            {
              value: "3000_5000",
              label: intl.formatMessage({ defaultMessage: "$3,000 – $5,000" }),
            },
            {
              value: "5000_plus",
              label: intl.formatMessage({ defaultMessage: "$5,000+" }),
            },
          ],
        },
        {
          id: "job_source",
          type: "select",
          label: intl.formatMessage({
            defaultMessage: "Where do most of your jobs come from today?",
          }),
          options: [
            {
              value: "referrals",
              label: intl.formatMessage({
                defaultMessage: "Referrals and word of mouth",
              }),
            },
            {
              value: "door_knocking",
              label: intl.formatMessage({
                defaultMessage: "Door knocking / canvassing",
              }),
            },
            {
              value: "google",
              label: intl.formatMessage({
                defaultMessage: "Google search or Maps",
              }),
            },
            {
              value: "lead_vendors",
              label: intl.formatMessage({
                defaultMessage: "Lead vendors (Angi, HomeAdvisor)",
              }),
            },
            {
              value: "storm_chasing",
              label: intl.formatMessage({ defaultMessage: "Storm work" }),
            },
            {
              value: "meta_ads",
              label: intl.formatMessage({
                defaultMessage: "Facebook / Instagram ads",
              }),
            },
            {
              value: "other",
              label: intl.formatMessage({ defaultMessage: "Other" }),
            },
          ],
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "You" }),
      subtitle: intl.formatMessage({
        defaultMessage: "So I can get back to you.",
      }),
      fields: [
        {
          id: "full_name",
          type: "text",
          label: intl.formatMessage({ defaultMessage: "Your name" }),
          placeholder: intl.formatMessage({ defaultMessage: "First and last" }),
        },
        {
          id: "email",
          type: "email",
          label: intl.formatMessage({ defaultMessage: "Email" }),
          placeholder: "you@company.com",
        },
        {
          id: "phone",
          type: "tel",
          label: intl.formatMessage({ defaultMessage: "Phone" }),
          placeholder: "(555) 123-4567",
        },
      ],
    },
  ];

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;

  const canProceed = currentStep.fields.every((f) =>
    Boolean(answers[f.id]?.trim())
  );

  const setAnswer = (id: keyof IntakeAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const goNext = async () => {
    if (!canProceed || submitting) return;

    if (!isLastStep) {
      setStep((s) => s + 1);
      return;
    }

    setSubmitting(true);
    setError(null);

    const result = await submitIntake(answers as IntakeAnswers, locale);

    setSubmitting(false);

    if (!result.success || !result.qualification) {
      setError(
        intl.formatMessage({
          defaultMessage:
            "Something went wrong saving that. Try again, or email contact@dellep.com.",
        })
      );
      return;
    }

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      pixelEvent("Lead", { content_name: "roofer_intake" });
    }

    setQualification(result.qualification);
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  // ── Outcome: Qualified → Booking ──────────────────────────────────────────
  if (qualification?.outcome === "qualified") {
    return (
      <div className="relative py-16 md:py-24">
        <Container>
          <Heading as="h2">
            {intl.formatMessage({ defaultMessage: "Pick a time that suits you" })}
          </Heading>
          <Subheading className="mt-4">
            {intl.formatMessage({
              defaultMessage:
                "Twenty minutes. I'll tell you what I'd run and you can decide from there.",
            })}
          </Subheading>
          <div className="mt-10 max-w-3xl mx-auto">
            <CalendlyEmbed answers={answers as IntakeAnswers} />
          </div>
        </Container>
      </div>
    );
  }

  // ── Outcome: Not A Fit ────────────────────────────────────────────────────
  if (qualification?.outcome === "not_a_fit") {
    const belowFloor = qualification.reason === "below_floor";
    return (
      <div className="relative py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 p-7 md:p-10">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">
              {belowFloor
                ? intl.formatMessage({
                    defaultMessage:
                      "I'd be wasting your time, so I'll be straight with you.",
                  })
                : intl.formatMessage({
                    defaultMessage: "I'm not the right fit for your market yet.",
                  })}
            </h2>
            <div className="mt-5 space-y-4 text-sm md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
              {belowFloor ? (
                <>
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Under about $1,500 a month in ad spend, Meta doesn't get enough data to optimise, and we'd both spend 30 days learning nothing. That's not a judgement on your business — it's how the platform works.",
                    })}
                  </p>
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "I've kept your details. If that budget changes, email me and we'll pick this up.",
                    })}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Right now I only work with roofers in the United States and Quebec, so I'd be guessing at your market instead of doing a good job in it.",
                    })}
                  </p>
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "I've kept your details in case that changes.",
                    })}
                  </p>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // ── The Intake ────────────────────────────────────────────────────────────
  return (
    <div className="relative py-16 md:py-24">
      <Container>
        <Heading as="h2">
          {intl.formatMessage({ defaultMessage: "See if we're a fit" })}
        </Heading>
        <Subheading className="mt-4">
          {intl.formatMessage({
            defaultMessage:
              "Six questions. If we're not a fit I'll tell you on this page rather than waste a call.",
          })}
        </Subheading>

        <div className="mt-10 max-w-2xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 overflow-hidden">
          {/* Progress */}
          <div className="flex items-center gap-2 px-6 md:px-8 pt-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex-1 flex items-center gap-2">
                <span
                  className={cn(
                    "h-7 w-7 shrink-0 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
                    i < step
                      ? "bg-secondary text-black"
                      : i === step
                      ? "bg-neutral-900 dark:bg-white text-white dark:text-black"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400"
                  )}
                >
                  {i < step ? <IconCheck className="h-4 w-4" /> : i + 1}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-px transition-colors",
                      i < step
                        ? "bg-secondary"
                        : "bg-neutral-200 dark:bg-neutral-800"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Fields */}
          <div className="px-6 md:px-8 py-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">
                  {currentStep.title}
                </h3>
                <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                  {currentStep.subtitle}
                </p>

                <div className="mt-7 space-y-5">
                  {currentStep.fields.map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-sm font-medium text-neutral-900 dark:text-white"
                      >
                        {field.label}
                      </label>
                      {field.hint && (
                        <p className="mt-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                          {field.hint}
                        </p>
                      )}
                      {field.type === "select" ? (
                        <select
                          id={field.id}
                          value={answers[field.id] ?? ""}
                          onChange={(e) => setAnswer(field.id, e.target.value)}
                          className={inputClass}
                        >
                          <option value="" disabled>
                            {intl.formatMessage({ defaultMessage: "Choose one" })}
                          </option>
                          {field.options?.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.id}
                          type={field.type}
                          inputMode={
                            field.type === "tel"
                              ? "tel"
                              : field.type === "email"
                              ? "email"
                              : "text"
                          }
                          value={answers[field.id] ?? ""}
                          placeholder={field.placeholder}
                          onChange={(e) => setAnswer(field.id, e.target.value)}
                          className={inputClass}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {error && (
              <p className="mt-5 text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 md:px-8 py-5 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/30 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goBack}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium px-4 py-3 rounded-lg transition-colors",
                step === 0
                  ? "opacity-0 pointer-events-none"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              )}
            >
              <IconArrowLeft className="h-4 w-4" />
              {intl.formatMessage({ defaultMessage: "Back" })}
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={!canProceed || submitting}
              className={cn(
                "flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 min-h-[48px] rounded-lg transition-all flex-1 sm:flex-none",
                canProceed && !submitting
                  ? "bg-secondary text-black hover:brightness-95 active:scale-[0.98]"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
              )}
            >
              {submitting ? (
                <span className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
              ) : isLastStep ? (
                intl.formatMessage({ defaultMessage: "See if we're a fit" })
              ) : (
                <>
                  {intl.formatMessage({ defaultMessage: "Next" })}
                  <IconArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

// 16px text and a 48px target: this is filled in on a phone, often one-handed,
// and anything smaller makes iOS zoom on focus.
const inputClass = cn(
  "mt-2 w-full min-h-[48px] rounded-lg px-4 py-3 text-base",
  "bg-white dark:bg-neutral-900",
  "border border-neutral-200 dark:border-neutral-700",
  "text-neutral-900 dark:text-white placeholder:text-neutral-400",
  "focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent",
  "transition-shadow"
);
