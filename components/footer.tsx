"use client";

import Link from "next/link";
import React from "react";
import { Logo } from "@/components/logo";
import { useIntl } from "react-intl";
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

export const Footer = () => {
  const intl = useIntl();

  const pages = [
    { name: intl.formatMessage({ defaultMessage: "Contact" }), href: "/contact" },
    { name: "Blog", href: "/blog-coming-soon" },
  ];

  const legal = [
    { name: intl.formatMessage({ defaultMessage: "Privacy Policy" }), href: "/privacy-policy" },
    { name: intl.formatMessage({ defaultMessage: "Terms and Conditions" }), href: "/terms-and-conditions" },
    { name: intl.formatMessage({ defaultMessage: "Refund Policy" }), href: "#" },
  ];

  const socials = [
    { name: "Facebook", href: "#", icon: FaFacebookF },
    { name: "Twitter", href: "#", icon: FaXTwitter },
    { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
    { name: "Instagram", href: "#", icon: FaInstagram },
  ];

  return (
    <footer className="relative px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer card */}
        <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 rounded-3xl overflow-hidden">
          {/* Top section — info + links */}
          <div className="px-8 md:px-12 pt-10 md:pt-14 pb-8 md:pb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
              {/* Left — copyright + CTA */}
              <div className="md:col-span-3 flex flex-col gap-6">
                <p className="text-white/90 text-sm font-medium">
                  {intl.formatMessage({ defaultMessage: "Copyright © 2026 Dellep" })}
                </p>

                <div className="text-white/70 text-sm space-y-1">
                  <p>contact@dellep.com</p>
                  <p>+1 (800) 123 XX21</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-fit px-6 py-2.5 rounded-full bg-white text-green-700 text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
                >
                  {intl.formatMessage({ defaultMessage: "Get Started Today" })}
                </Link>
              </div>

              {/* Center — page links */}
              <div className="md:col-span-2 md:col-start-5">
                <p className="text-white font-semibold text-sm mb-4">
                  {intl.formatMessage({ defaultMessage: "Pages" })}
                </p>
                <div className="flex flex-col gap-3">
                  {pages.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right — legal links */}
              <div className="md:col-span-3 md:col-start-8">
                <p className="text-white font-semibold text-sm mb-4">
                  {intl.formatMessage({ defaultMessage: "Legal" })}
                </p>
                <div className="flex flex-col gap-3">
                  {legal.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Far right — hours */}
              <div className="md:col-span-2 md:col-start-11">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  {intl.formatMessage({ defaultMessage: "Mon — Fri" })}
                </p>
                <p className="text-white font-bold text-lg">
                  9am — 6pm
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-8 md:mx-12 border-t border-white/20" />

          {/* Bottom section — big brand + socials */}
          <div className="px-8 md:px-12 pt-8 md:pt-10 pb-8 md:pb-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              {/* Big brand logo */}
              <Link href="/" className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/dark-logo.png"
                  alt="Dellep"
                  className="h-16 sm:h-20 md:h-28 lg:h-36 w-auto"
                />
              </Link>

              <div className="flex flex-col items-start md:items-end gap-6">
                {/* Social icons */}
                <div className="flex items-center gap-3">
                  {socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                    >
                      <social.icon className="w-4 h-4 text-white" />
                    </Link>
                  ))}
                </div>

                <p className="text-white/50 text-xs">
                  {intl.formatMessage({ defaultMessage: "All rights reserved" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
