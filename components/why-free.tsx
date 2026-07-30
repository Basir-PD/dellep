"use client";

import React from "react";
import { useIntl } from "react-intl";
import { Container } from "./container";
import { Heading } from "./heading";

export const WhyFree = () => {
  const intl = useIntl();

  return (
    <div className="relative py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Heading as="h2" className="text-left mx-0">
            {intl.formatMessage({ defaultMessage: "Why it's free" })}
          </Heading>

          <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Because I don't have a roofing case study yet, and you have something I want more than $500: a real account with real numbers I can point at when I talk to the next roofer.",
              })}
            </p>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "That's the whole trade. I do the work, you pay Meta for your own ads, and if it goes well I'd like to publish the numbers and a couple of lines from you. If it doesn't go well, you lost 30 days of ad spend you'd probably have spent anyway, and I lost a month.",
              })}
            </p>
            <p className="text-neutral-900 dark:text-white font-medium">
              {intl.formatMessage({
                defaultMessage:
                  "I'm not going to promise you thirty jobs. I don't know your market yet, and anyone who promises that before seeing your account is guessing.",
              })}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
