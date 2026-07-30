"use client";

import React from "react";
import { useIntl } from "react-intl";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

export const ThirtyDayPlan = () => {
  const intl = useIntl();

  const weeks = [
    {
      week: intl.formatMessage({ defaultMessage: "Week 1" }),
      title: intl.formatMessage({ defaultMessage: "Setup and tracking" }),
      body: intl.formatMessage({
        defaultMessage:
          "Admin access to your Business Manager and Page. Pixel and conversions API checked, because most roofing accounts I've looked at are running on broken tracking and don't know it. Lead forms built so a homeowner can submit in two taps without leaving Facebook. Radius set to the area your crews will actually drive to — not the whole state.",
      }),
    },
    {
      week: intl.formatMessage({ defaultMessage: "Week 2" }),
      title: intl.formatMessage({
        defaultMessage: "Creative that looks like roofing, not like an ad",
      }),
      body: intl.formatMessage({
        defaultMessage:
          "Before-and-afters from your own jobs. Drone shots if you have them, phone footage if you don't — phone footage often wins. Angles built around what actually makes a homeowner move: storm and hail damage, insurance claims, a visibly failing roof, financing.",
      }),
    },
    {
      week: intl.formatMessage({ defaultMessage: "Week 3" }),
      title: intl.formatMessage({ defaultMessage: "Cutting what doesn't work" }),
      body: intl.formatMessage({
        defaultMessage:
          "Kill the losing audiences and creatives, put the budget behind what's producing. You get the real cost per lead, not a curated screenshot.",
      }),
    },
    {
      week: intl.formatMessage({ defaultMessage: "Week 4" }),
      title: intl.formatMessage({ defaultMessage: "Honest numbers" }),
      body: intl.formatMessage({
        defaultMessage:
          "What it cost, what came in, which leads you booked, which turned into signed jobs. If the answer is \"this didn't work\", you'll get that in writing too.",
      }),
    },
  ];

  return (
    <div className="relative py-16 md:py-28">
      <Container>
        <Heading as="h2" className="text-left md:text-center mx-0 md:mx-auto">
          {intl.formatMessage({
            defaultMessage: "What I'd actually do with your account",
          })}
        </Heading>
        <Subheading className="text-left md:text-center mx-0 md:mx-auto mt-4">
          {intl.formatMessage({
            defaultMessage:
              "No mystery, no proprietary system. This is the work, week by week.",
          })}
        </Subheading>

        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <ol className="relative border-l border-neutral-200 dark:border-neutral-800">
            {weeks.map((w) => (
              <li key={w.week} className="ml-6 pb-10 last:pb-0">
                <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-secondary" />
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">
                  {w.week}
                </p>
                <h3 className="mt-2 text-lg md:text-xl font-semibold text-neutral-900 dark:text-white">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {w.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/60 p-6 md:p-8">
            <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white">
              {intl.formatMessage({ defaultMessage: "What I need from you" })}
            </h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
              {intl.formatMessage({
                defaultMessage:
                  "Admin access before day one, a card on the ad account, and a reply when I ask which leads actually closed. That last one is the whole point — without it neither of us learns anything.",
              })}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
