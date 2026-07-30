"use client";

import React from "react";
import { useIntl } from "react-intl";
import { Container } from "./container";
import {
  IconCurrencyDollarOff,
  IconKey,
  IconDoorExit,
  IconCreditCard,
} from "@tabler/icons-react";

export const OfferTerms = () => {
  const intl = useIntl();

  const terms = [
    {
      icon: IconCurrencyDollarOff,
      title: intl.formatMessage({ defaultMessage: "Free for 30 days" }),
      body: intl.formatMessage({
        defaultMessage: "I don't invoice you. Not now, not at the end.",
      }),
    },
    {
      icon: IconKey,
      title: intl.formatMessage({ defaultMessage: "You keep your ad account" }),
      body: intl.formatMessage({
        defaultMessage:
          "It's your Business Manager, your Page, your data. I get admin access, not ownership.",
      }),
    },
    {
      icon: IconDoorExit,
      title: intl.formatMessage({ defaultMessage: "Walk away whenever" }),
      body: intl.formatMessage({
        defaultMessage: "No contract, no notice period, nothing to cancel.",
      }),
    },
    {
      icon: IconCreditCard,
      title: intl.formatMessage({ defaultMessage: "You pay Meta directly" }),
      body: intl.formatMessage({
        defaultMessage:
          "Your card, your budget, your control. I never touch your money.",
      }),
    },
  ];

  return (
    <div className="relative py-12 md:py-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {terms.map((term) => (
            <div
              key={term.title}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 p-6"
            >
              <term.icon className="h-6 w-6 text-secondary" />
              <h3 className="mt-4 text-base md:text-lg font-semibold text-neutral-900 dark:text-white">
                {term.title}
              </h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                {term.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
