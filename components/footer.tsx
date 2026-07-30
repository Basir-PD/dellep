"use client";

import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";

// Deliberately plain: no social links, no phone number, no "trusted by" strip.
// Nothing here that isn't real. See docs/adr/0002-no-guarantees-no-fabricated-proof.md
export const Footer = () => {
  const intl = useIntl();

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Dellep" className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {intl.formatMessage({
                defaultMessage: "Meta ads for roofing companies.",
              })}
            </p>
            <a
              href="mailto:contact@dellep.com"
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors w-fit"
            >
              contact@dellep.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <Link
              href="/privacy-policy"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {intl.formatMessage({ defaultMessage: "Privacy Policy" })}
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {intl.formatMessage({ defaultMessage: "Terms and Conditions" })}
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-500">
          {intl.formatMessage({ defaultMessage: "Copyright © 2026 Dellep" })}
        </p>
      </div>
    </footer>
  );
};
