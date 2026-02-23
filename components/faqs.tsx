"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { Heading } from "./heading";

const questions = [
  {
    id: 1,
    title: "What exactly does Dellep do?",
    description:
      "We build and run done-for-you patient acquisition systems for functional and naturopathic practitioners. That means we handle the ads, the follow-ups, the CRM, and the booking. You just treat patients.",
  },
  {
    id: 2,
    title: "What does 'you don't pay' actually mean?",
    description:
      "If we don't deliver 10-20 new patients to your practice within the agreed timeframe, you don't pay us. Simple. We take on the risk because we know our system works.",
  },
  {
    id: 3,
    title: "How fast will I see results?",
    description:
      "Most practices start seeing leads within 72 hours of campaign launch. Booked patients typically start showing up within the first 2 weeks. Full pipeline momentum usually hits by day 30.",
  },
  {
    id: 4,
    title: "Do I need to do anything on my end?",
    description:
      "Almost nothing. We build everything, launch everything, and optimize everything. All you need to do is show up for your strategy call, approve the campaigns, and see the patients we send you.",
  },
  {
    id: 5,
    title: "What platforms do you run ads on?",
    description:
      "Facebook, Instagram, and Google. We go where your ideal patients are already spending their time. We test, optimize, and scale what works.",
  },
  {
    id: 6,
    title: "I've been burned by agencies before. How are you different?",
    description:
      "Most agencies sell you impressions and clicks. We sell you patients. You see every lead, every booked call, and every dollar spent in a real-time dashboard. Full transparency. No vanity metrics.",
  },
  {
    id: 7,
    title: "Will this work for my type of practice?",
    description:
      "If you're a functional medicine practitioner, naturopathic doctor, integrative health provider, or preventive care specialist — yes. We've built systems specifically for this space. Book a call and we'll tell you if we're a fit.",
  },
  {
    id: 8,
    title: "What's the investment?",
    description:
      "It depends on your market, your goals, and your capacity. We don't do cookie-cutter packages. Book a free strategy call and we'll give you a custom plan with exact numbers.",
  },
  {
    id: 9,
    title: "Do you require long-term contracts?",
    description:
      "No. We don't lock you into 12-month retainers. Our clients stay because the system works, not because of a contract. We earn your business every single month.",
  },
  {
    id: 10,
    title: "How do I get started?",
    description:
      "Book a free strategy call. We'll audit your current patient acquisition, show you exactly where you're leaving money on the table, and map out a plan to get you 10-20 new patients monthly.",
  },
];

export const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 px-4 md:px-8">
      <Heading className="pt-4">Frequently asked questions</Heading>
      <div className="grid gap-6 md:gap-10 pt-10 md:pt-20">
        {questions.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
