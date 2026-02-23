"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconArrowLeft,
  IconCheck,
  IconSparkles,
  IconChevronDown,
} from "@tabler/icons-react";
import { submitAssessment, type AssessmentData } from "@/app/actions/submit-assessment";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Option {
  label: string;
  value: string;
}

interface Field {
  id: string;
  type: "text" | "email" | "tel" | "dropdown" | "slider" | "cards";
  label: string;
  placeholder?: string;
  options?: Option[];
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  required?: boolean;
  hasOther?: boolean;
  otherPlaceholder?: string;
  half?: boolean; // render side-by-side in a 2-col grid
}

interface Step {
  title: string;
  subtitle: string;
  fields: Field[];
}

// ─── Steps (3 total, 3-4 questions each) ─────────────────────────────────────

const steps: Step[] = [
  {
    title: "Your Practice",
    subtitle: "The basics of your business.",
    fields: [
      {
        id: "practice_name",
        type: "text",
        label: "Practice name",
        placeholder: "e.g. Harmony Wellness Center",
        required: true,
      },
      {
        id: "monthly_inquiries",
        type: "dropdown",
        label: "New patient inquiries per month",
        options: [
          { label: "Under 10", value: "under_10" },
          { label: "10 – 25", value: "10_25" },
          { label: "25 – 50", value: "25_50" },
          { label: "50 – 100", value: "50_100" },
          { label: "100+", value: "100_plus" },
        ],
        half: true,
      },
      {
        id: "patient_value",
        type: "dropdown",
        label: "Average new patient value",
        options: [
          { label: "Under $500", value: "under_500" },
          { label: "$500 – $1,500", value: "500_1500" },
          { label: "$1,500 – $3,000", value: "1500_3000" },
          { label: "$3,000 – $5,000", value: "3000_5000" },
          { label: "$5,000+", value: "5000_plus" },
        ],
        half: true,
      },
    ],
  },
  {
    title: "Attraction & Operations",
    subtitle: "How patients find you and what happens when they do.",
    fields: [
      {
        id: "discovery_channel",
        type: "dropdown",
        label: "Primary patient source",
        options: [
          { label: "Word of mouth / referrals", value: "referrals" },
          { label: "Google Search / Maps", value: "google" },
          { label: "Social media (organic)", value: "social" },
          { label: "Paid advertising", value: "paid_ads" },
          { label: "Directory listings (Yelp, Healthgrades)", value: "directories" },
          { label: "Other / not sure", value: "other" },
        ],
        hasOther: true,
        otherPlaceholder: "e.g. Podcast, local events, referral network...",
        half: true,
      },
      {
        id: "online_presence",
        type: "dropdown",
        label: "Online presence",
        options: [
          { label: "No website", value: "none" },
          { label: "Basic website", value: "basic" },
          { label: "Professional website", value: "professional" },
          { label: "Fully optimized (SEO, reviews, GMB)", value: "optimized" },
        ],
        half: true,
      },
      {
        id: "paid_ads",
        type: "dropdown",
        label: "Current advertising",
        options: [
          { label: "No ads", value: "none" },
          { label: "Tried before, stopped", value: "tried" },
          { label: "Running ads, not great results", value: "running_poor" },
          { label: "Running ads, decent results", value: "running_ok" },
          { label: "Running ads, great results", value: "running_great" },
        ],
        half: true,
      },
      {
        id: "response_time",
        type: "dropdown",
        label: "Lead response speed",
        options: [
          { label: "Within 5 minutes", value: "5_min" },
          { label: "Within 1 hour", value: "1_hour" },
          { label: "Same day", value: "same_day" },
          { label: "Next business day", value: "next_day" },
          { label: "It varies / no system", value: "varies" },
        ],
        half: true,
      },
    ],
  },
  {
    title: "Get Your Growth Roadmap",
    subtitle: "Tell us where to send your personalized plan.",
    fields: [
      {
        id: "show_rate",
        type: "slider",
        label: "Appointment show-up rate",
        min: 10,
        max: 100,
        step: 5,
        suffix: "%",
      },
      {
        id: "follow_up",
        type: "cards",
        label: "Do you automatically follow up with old leads?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Sometimes", value: "sometimes" },
        ],
      },
      {
        id: "full_name",
        type: "text",
        label: "Your name",
        placeholder: "Dr. Jane Smith",
        required: true,
      },
      {
        id: "email",
        type: "email",
        label: "Email address",
        placeholder: "doctor@yourpractice.com",
        required: true,
        half: true,
      },
      {
        id: "phone",
        type: "tel",
        label: "Phone (optional)",
        placeholder: "+1 (555) 000-0000",
        half: true,
      },
    ],
  },
];

const stepLabels = ["Practice", "Attraction", "Get Roadmap"];

// ─── Animations ─────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

// ─── Dropdown Select ────────────────────────────────────────────────────────

function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select...",
}: {
  options: Option[];
  value: string | undefined;
  onChange: (val: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full h-11 px-4 pr-10 rounded-lg text-sm appearance-none cursor-pointer",
          "bg-white dark:bg-neutral-900/80",
          "border border-neutral-200 dark:border-neutral-700",
          "focus:border-secondary dark:focus:border-secondary focus:ring-1 focus:ring-secondary/30",
          "outline-none transition-all duration-200",
          value
            ? "text-neutral-900 dark:text-white"
            : "text-neutral-400 dark:text-neutral-500"
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <IconChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
    </div>
  );
}

// ─── Card Selector (for Yes/No/Sometimes style) ─────────────────────────────

function CardSelector({
  options,
  value,
  onChange,
}: {
  options: Option[];
  value: string | undefined;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200",
            "border-2 text-center",
            value === opt.value
              ? "border-secondary bg-secondary/10 dark:bg-secondary/5 text-secondary"
              : "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// ─── Slider ─────────────────────────────────────────────────────────────────

function SliderInput({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 5,
  suffix = "",
}: {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <div className="relative flex-1">
          <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-secondary/70 to-secondary"
              animate={{ width: `${percentage}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white dark:bg-neutral-100 border-2 border-secondary shadow-lg pointer-events-none"
            animate={{ left: `calc(${percentage}% - 10px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
        <motion.span
          key={value}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="ml-4 text-lg font-bold text-neutral-900 dark:text-white tabular-nums w-16 text-right"
        >
          {value}
          <span className="text-sm text-neutral-400">{suffix}</span>
        </motion.span>
      </div>
      <div className="flex justify-between text-xs text-neutral-400">
        <span>
          {min}
          {suffix}
        </span>
        <span>
          {max}
          {suffix}
        </span>
      </div>
    </div>
  );
}

// ─── Field Renderer ─────────────────────────────────────────────────────────

function FieldRenderer({
  field,
  value,
  onChange,
  otherText,
  onOtherTextChange,
  inputRef,
}: {
  field: Field;
  value: string | number | undefined;
  onChange: (val: string | number) => void;
  otherText?: string;
  onOtherTextChange?: (val: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}) {
  if (field.type === "text" || field.type === "email" || field.type === "tel") {
    return (
      <input
        ref={inputRef}
        type={field.type}
        placeholder={field.placeholder}
        value={(value as string) || ""}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full h-11 px-4 rounded-lg text-sm bg-white dark:bg-neutral-900/80",
          "border border-neutral-200 dark:border-neutral-700",
          "focus:border-secondary dark:focus:border-secondary focus:ring-1 focus:ring-secondary/30",
          "text-neutral-900 dark:text-white",
          "placeholder:text-neutral-400 dark:placeholder:text-neutral-600",
          "outline-none transition-all duration-200"
        )}
      />
    );
  }

  if (field.type === "dropdown" && field.options) {
    const isOtherSelected = value === "other" && field.hasOther;
    return (
      <div className="space-y-2">
        <Dropdown
          options={field.options}
          value={value as string}
          onChange={(val) => onChange(val)}
          placeholder="Select..."
        />
        {isOtherSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              autoFocus
              placeholder={field.otherPlaceholder || "Please specify..."}
              value={otherText || ""}
              onChange={(e) => onOtherTextChange?.(e.target.value)}
              className={cn(
                "w-full h-11 px-4 rounded-lg text-sm bg-white dark:bg-neutral-900/80",
                "border border-secondary/40 dark:border-secondary/30",
                "focus:border-secondary dark:focus:border-secondary focus:ring-1 focus:ring-secondary/30",
                "text-neutral-900 dark:text-white",
                "placeholder:text-neutral-400 dark:placeholder:text-neutral-600",
                "outline-none transition-all duration-200"
              )}
            />
          </motion.div>
        )}
      </div>
    );
  }

  if (field.type === "cards" && field.options) {
    return (
      <CardSelector
        options={field.options}
        value={value as string}
        onChange={(val) => onChange(val)}
      />
    );
  }

  if (field.type === "slider") {
    return (
      <SliderInput
        value={(value as number) ?? field.min ?? 50}
        onChange={(val) => onChange(val)}
        min={field.min}
        max={field.max}
        step={field.step}
        suffix={field.suffix}
      />
    );
  }

  return null;
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function GrowthAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otherTexts, setOtherTexts] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null) as React.RefObject<HTMLInputElement>;

  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentStepData = steps[currentStep];

  // Focus first text input when step changes
  useEffect(() => {
    const firstText = currentStepData.fields.find(
      (f) => f.type === "text" || f.type === "email" || f.type === "tel"
    );
    if (firstText) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [currentStep, currentStepData]);

  const canProceed = useCallback(() => {
    return currentStepData.fields.every((field) => {
      if (field.required) {
        const val = answers[field.id];
        return val !== undefined && val !== "";
      }
      return true;
    });
  }, [currentStepData, answers]);

  const goNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  }, [currentStep, totalSteps]);

  const goBack = useCallback(() => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  }, [currentStep]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && canProceed()) {
        e.preventDefault();
        goNext();
      }
    },
    [goNext, canProceed]
  );

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const finalAnswers = { ...answers };
    for (const [fieldId, text] of Object.entries(otherTexts)) {
      if (finalAnswers[fieldId] === "other" && text) {
        finalAnswers[fieldId] = `other: ${text}`;
      }
    }
    try {
      const result = await submitAssessment(
        finalAnswers as unknown as AssessmentData
      );
      if (!result.success) {
        console.error("Submission failed:", result.error);
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const handleFieldChange = useCallback(
    (fieldId: string, value: string | number) => {
      setAnswers((prev) => ({ ...prev, [fieldId]: value }));
    },
    []
  );

  // ─── Build field layout (supports half-width side-by-side) ──────────────

  function renderFields(fields: Field[]) {
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < fields.length) {
      const field = fields[i];
      const next = fields[i + 1];

      // If this field and next are both half, render them side by side
      if (field.half && next?.half) {
        elements.push(
          <div key={`row-${field.id}`} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {renderSingleField(field)}
            {renderSingleField(next)}
          </div>
        );
        i += 2;
      } else {
        elements.push(
          <div key={field.id}>{renderSingleField(field)}</div>
        );
        i += 1;
      }
    }

    return elements;
  }

  function renderSingleField(field: Field) {
    const isFirst = currentStepData.fields[0]?.id === field.id;
    return (
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          {field.label}
          {field.required && (
            <span className="text-secondary ml-0.5">*</span>
          )}
        </label>
        <FieldRenderer
          field={field}
          value={answers[field.id]}
          onChange={(val) => handleFieldChange(field.id, val)}
          otherText={otherTexts[field.id]}
          onOtherTextChange={(val) =>
            setOtherTexts((prev) => ({ ...prev, [field.id]: val }))
          }
          inputRef={isFirst ? inputRef : undefined}
        />
      </div>
    );
  }

  // ─── Completion Screen ──────────────────────────────────────────────────

  if (isComplete) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-derek p-10 md:p-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center"
            >
              <IconSparkles className="w-8 h-8 text-secondary" />
            </motion.div>
            <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
              You&apos;re all set!
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-lg mx-auto">
              We&apos;re building a personalized growth roadmap for{" "}
              <span className="text-neutral-900 dark:text-white font-medium">
                {answers.practice_name || "your practice"}
              </span>
              . Expect it in your inbox within 24 hours.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800/50 text-sm text-neutral-600 dark:text-neutral-300">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Sent to {answers.email || "your email"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ─── Main Form ──────────────────────────────────────────────────────────

  return (
    <div className="max-w-4xl mx-auto" onKeyDown={handleKeyDown}>
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-derek overflow-hidden">
        {/* ── Step indicator ── */}
        <div className="px-8 pt-7 pb-5 border-b border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center justify-between mb-4">
            {stepLabels.map((label, i) => (
              <React.Fragment key={label}>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors duration-300",
                      i < currentStep
                        ? "bg-secondary text-black"
                        : i === currentStep
                        ? "bg-secondary/20 text-secondary border-2 border-secondary/50"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600"
                    )}
                  >
                    {i < currentStep ? (
                      <IconCheck className="w-3.5 h-3.5" />
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium hidden md:block transition-colors duration-300",
                      i <= currentStep
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-400 dark:text-neutral-600"
                    )}
                  >
                    {label}
                  </span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-px mx-3 transition-colors duration-300",
                      i < currentStep
                        ? "bg-secondary"
                        : "bg-neutral-200 dark:bg-neutral-800"
                    )}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Step content ── */}
        <div className="px-4 md:px-8 lg:px-10 py-10 min-h-[420px] flex flex-col">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex-1 flex flex-col"
            >
              {/* Step header */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">
                  {currentStepData.title}
                </h2>
                <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mt-1.5">
                  {currentStepData.subtitle}
                </p>
              </div>

              {/* Fields */}
              <div className="flex-1 space-y-6">
                {renderFields(currentStepData.fields)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation footer ── */}
        <div className="px-8 md:px-10 py-5 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex items-center justify-between">
          <button
            onClick={goBack}
            disabled={currentStep === 0}
            type="button"
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200",
              currentStep === 0
                ? "opacity-0 pointer-events-none"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            <IconArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 dark:text-neutral-500 hidden sm:block">
              press{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 font-mono text-[10px]">
                Enter
              </kbd>
            </span>
            <button
              onClick={goNext}
              disabled={!canProceed() || isSubmitting}
              type="button"
              className={cn(
                "flex items-center gap-2 text-sm font-medium px-7 py-2.5 rounded-lg transition-all duration-200",
                canProceed()
                  ? "bg-secondary text-black hover:bg-secondary/90 shadow-sm hover:shadow-md active:scale-[0.98]"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
              )}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                  className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full"
                />
              ) : currentStep === totalSteps - 1 ? (
                <>
                  Get My Roadmap
                  <IconSparkles className="w-4 h-4" />
                </>
              ) : (
                <>
                  Next: {stepLabels[currentStep + 1]}
                  <IconArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
