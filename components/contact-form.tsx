"use client";

import React, { useState } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { Grid } from "./features/grid";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { IconMailFilled, IconCheck } from "@tabler/icons-react";
import { submitContact } from "@/app/actions/submit-contact";
import { useIntl } from "react-intl";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const intl = useIntl();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setIsSubmitting(true);
    const result = await submitContact({
      full_name: form.name,
      email: form.email,
      practice_name: form.company || undefined,
      message: form.message || undefined,
    });

    setIsSubmitting(false);
    if (result.success) {
      setIsSubmitted(true);
      setForm({ name: "", email: "", company: "", message: "" });
    }
  };

  return (
    <Container className="py-40 md:py-60 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6">
      <div>
        <div className="flex">
          <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
            <IconMailFilled className="h-6 w-6 text-green-500" />
          </FeatureIconContainer>
        </div>
        <Heading className="text-left">
          {intl.formatMessage({ defaultMessage: "Let's talk growth" })}
        </Heading>
        <Subheading className="text-left text-neutral-400">
          {intl.formatMessage({ defaultMessage: "Ready to stop guessing and start growing? Reach out and we'll show you exactly how we'll fill your practice with patients." })}
        </Subheading>

        <div className="text-sm mt-10">
          <p className="text-sm text-neutral-700 dark:text-neutral-200">
            {intl.formatMessage({ defaultMessage: "Email" })}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">contact@dellep.com</p>
        </div>
        <div className="text-sm mt-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-200">
            {intl.formatMessage({ defaultMessage: "Phone" })}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">+1 (800) 123 XX21</p>
        </div>
        <div className="text-sm mt-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-200">
            {intl.formatMessage({ defaultMessage: "Support" })}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">support@dellep.com</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-4 max-w-2xl w-full mx-auto bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 p-10 rounded-3xl relative overflow-hidden"
      >
        <Grid size={20} />

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center w-full py-10 relative z-20 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <IconCheck className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-lg font-medium text-neutral-900 dark:text-white">
              {intl.formatMessage({ defaultMessage: "Message sent!" })}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {intl.formatMessage({ defaultMessage: "We'll get back to you within 24 hours." })}
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-sm text-secondary hover:underline"
            >
              {intl.formatMessage({ defaultMessage: "Send another message" })}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 w-full relative z-20">
              <label
                className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-2 inline-block"
                htmlFor="name"
              >
                {intl.formatMessage({ defaultMessage: "Full name" })}
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder={intl.formatMessage({ defaultMessage: "Dr. Jane Smith" })}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-10 pl-4 w-full rounded-md text-sm bg-white dark:bg-charcoal border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-800"
              />
            </div>
            <div className="mb-4 w-full relative z-20">
              <label
                className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-2 inline-block"
                htmlFor="email"
              >
                {intl.formatMessage({ defaultMessage: "Email Address" })}
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder={intl.formatMessage({ defaultMessage: "yourname@yourpractice.com" })}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-10 pl-4 w-full rounded-md text-sm bg-white dark:bg-charcoal border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-800"
              />
            </div>
            <div className="mb-4 w-full relative z-20">
              <label
                className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-2 inline-block"
                htmlFor="company"
              >
                {intl.formatMessage({ defaultMessage: "Practice Name" })}
              </label>
              <input
                id="company"
                type="text"
                placeholder={intl.formatMessage({ defaultMessage: "Your Practice Name" })}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="h-10 pl-4 w-full rounded-md text-sm bg-white dark:bg-charcoal border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-800"
              />
            </div>
            <div className="mb-4 w-full relative z-20">
              <label
                className="text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-2 inline-block"
                htmlFor="message"
              >
                {intl.formatMessage({ defaultMessage: "Message" })}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={intl.formatMessage({ defaultMessage: "Type your message here" })}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="pl-4 pt-4 w-full rounded-md text-sm bg-white dark:bg-charcoal border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-800"
              />
            </div>
            <Button variant="muted" type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? intl.formatMessage({ defaultMessage: "Sending..." })
                : intl.formatMessage({ defaultMessage: "Submit" })}
            </Button>
          </>
        )}
      </form>
    </Container>
  );
};
