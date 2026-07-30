"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { useIntl } from "react-intl";
import type { IntakeAnswers } from "@/lib/qualification";

interface CalendlyWindow {
  Calendly?: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement;
    }) => void;
  };
}

// a1 and a2 map to the first and second custom questions on the Calendly event,
// in the order they appear there: phone, then company name. See
// docs/IMPLEMENTATION-GUIDE.md for the Calendly setup.
function bookingUrl(base: string, answers: IntakeAnswers) {
  const params = new URLSearchParams({
    name: answers.full_name,
    email: answers.email,
    a1: answers.phone,
    a2: answers.company_name,
    hide_gdpr_banner: "1",
    background_color: "08090a",
    text_color: "ffffff",
    primary_color: "22c55e",
  });
  return `${base}?${params.toString()}`;
}

export const CalendlyEmbed = ({ answers }: { answers: IntakeAnswers }) => {
  const intl = useIntl();
  const container = useRef<HTMLDivElement>(null);
  const base = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const url = base ? bookingUrl(base, answers) : null;

  useEffect(() => {
    if (!url) return;

    // The container mounts after the widget script may already have run, so
    // initialise explicitly rather than relying on auto-discovery.
    const init = () => {
      const Calendly = (window as unknown as CalendlyWindow).Calendly;
      if (!Calendly || !container.current || container.current.childElementCount)
        return true;
      Calendly.initInlineWidget({ url, parentElement: container.current });
      return true;
    };

    if (init()) return;

    const timer = setInterval(() => {
      if (init()) clearInterval(timer);
    }, 300);
    const stop = setTimeout(() => clearInterval(timer), 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(stop);
    };
  }, [url]);

  // Booking isn't wired up yet — never crash the page over it.
  if (!url) {
    return (
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 p-7 text-center">
        <p className="text-base text-neutral-900 dark:text-white font-medium">
          {intl.formatMessage({
            defaultMessage: "Got your details — booking isn't set up yet.",
          })}
        </p>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {intl.formatMessage({
            defaultMessage:
              "Email me at contact@dellep.com and we'll find a time.",
          })}
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <div
        ref={container}
        className="rounded-2xl overflow-hidden"
        style={{ minWidth: 320, height: 700 }}
      />
    </>
  );
};
