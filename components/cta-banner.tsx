"use client";

import React from "react";
import { Container } from "./container";
import { useIntl } from "react-intl";

export const CTABanner = () => {
  const intl = useIntl();

  return (
    <Container className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <a
          href="/contact"
          className="inline-block bg-secondary hover:bg-secondary/90 active:scale-[0.98] transition-all duration-200 text-black font-extrabold text-lg md:text-2xl uppercase tracking-wide px-10 py-5 md:px-14 md:py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          {intl.formatMessage({
            defaultMessage: "Yes! I'm ready to fill my calendar",
          })}
        </a>
        <p className="mt-3 text-xs md:text-sm text-neutral-400">
          {intl.formatMessage({
            defaultMessage: "Free strategy call. No commitment required.",
          })}
        </p>

        <p className="mt-10 md:mt-14 text-xl md:text-2xl italic text-neutral-700 dark:text-neutral-300 font-serif leading-relaxed max-w-2xl mx-auto">
          {intl.formatMessage({
            defaultMessage:
              "Stop losing patients to competitors who showed up first. Every day without a system is revenue left on the table.",
          })}
        </p>
      </div>
    </Container>
  );
};
