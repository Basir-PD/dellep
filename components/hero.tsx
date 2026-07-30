"use client";

import React from "react";
import { useIntl } from "react-intl";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { IconArrowDown } from "@tabler/icons-react";

export const Hero = () => {
  const intl = useIntl();

  return (
    <div className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      <Container className="flex flex-col items-center justify-center">
        <p className="relative z-10 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          {intl.formatMessage({ defaultMessage: "Meta ads for roofing companies" })}
        </p>

        <Heading
          as="h1"
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto text-center mt-5 relative z-10 tracking-tight leading-[1.1]"
        >
          {intl.formatMessage({
            defaultMessage: "I'll run your Meta ads for 30 days. Free.",
          })}
        </Heading>

        <Subheading className="text-center mt-5 md:mt-7 text-base md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto relative z-10">
          {intl.formatMessage({
            defaultMessage:
              "I'm building my portfolio and I want one roofing company's numbers to show for it. You pay Meta for your own ads. You pay me nothing.",
          })}
        </Subheading>

        <div className="flex flex-col items-center justify-center mt-9 md:mt-12 relative z-10 w-full">
          <a
            href="#intake"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 active:scale-[0.98] transition-all duration-200 text-white font-bold text-lg md:text-xl px-10 py-5 md:px-12 md:py-5 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            {intl.formatMessage({ defaultMessage: "See if we're a fit" })}
            <IconArrowDown className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 text-center">
            {intl.formatMessage({
              defaultMessage:
                "Takes about 90 seconds. No contract, no call required to find out.",
            })}
          </p>
        </div>
      </Container>
    </div>
  );
};
