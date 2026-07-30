"use client";
import { Logo } from "@/components/logo";
import { Button } from "../button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useIntl } from "react-intl";

export const DesktopNavbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const intl = useIntl();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 20);
  });

  return (
    <div
      className={cn(
        "w-full h-16 flex items-center justify-between px-8 transition-all duration-300 border-b border-neutral-200 dark:border-neutral-800",
        scrolled
          ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl shadow-sm"
          : "bg-white dark:bg-charcoal"
      )}
    >
      <Logo />

      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <Button as="a" href="#intake">
          {intl.formatMessage({ defaultMessage: "See if we're a fit" })}
        </Button>
      </div>
    </div>
  );
};
