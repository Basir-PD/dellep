import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { Grid } from "./features/grid";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { IconMailFilled } from "@tabler/icons-react";

export const ContactForm = () => {
  return (
    <Container className="py-40 md:py-60 grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
      <div>
        <div className="flex">
          <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
            <IconMailFilled className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
        </div>
        <Heading className="text-left">Let&apos;s talk growth</Heading>
        <Subheading className="text-left text-neutral-400">
          Ready to stop guessing and start growing? Reach out and we&apos;ll
          show you exactly how we&apos;ll fill your practice with patients.
        </Subheading>

        <div className="text-sm mt-10">
          <p className="text-sm text-neutral-700 dark:text-neutral-200">Email</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">contact@dellep.com</p>
        </div>
        <div className="text-sm mt-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-200">Phone</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">+1 (800) 123 XX21</p>
        </div>
        <div className="text-sm mt-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-200">Support</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">support@dellep.com</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 max-w-2xl w-full mx-auto bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 p-10 rounded-3xl relative overflow-hidden">
        <Grid size={20} />
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Dr. Jane Smith"
            className="h-10 pl-4 w-full rounded-md text-sm bg-white dark:bg-charcoal border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="doctor@yourpractice.com"
            className="h-10 pl-4 w-full rounded-md text-sm bg-white dark:bg-charcoal border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="company"
          >
            Practice Name
          </label>
          <input
            id="company"
            type="text"
            placeholder="Your Practice Name"
            className="h-10 pl-4 w-full rounded-md text-sm bg-white dark:bg-charcoal border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Type your message here"
            className="pl-4 pt-4 w-full rounded-md text-sm bg-white dark:bg-charcoal border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-800"
          />
        </div>
        <Button variant="muted">Submit</Button>
      </div>
    </Container>
  );
};
