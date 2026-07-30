"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useIntl } from "react-intl";

// No hamburger: there is one page and one action, so a menu would hide the
// only thing worth tapping.
export const MobileNavbar = () => {
  const intl = useIntl();
  const { scrollY } = useScroll();
  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setShowBackground(value > 100);
  });

  return (
    <div
      className={cn(
        "flex justify-between items-center w-full h-14 px-4 transition-all duration-300 border-b border-neutral-200 dark:border-neutral-800",
        showBackground
          ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl shadow-sm"
          : "bg-white dark:bg-charcoal"
      )}
    >
      <Logo />
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <Button as="a" href="#intake" className="px-4 py-2.5">
          {intl.formatMessage({ defaultMessage: "Book a call" })}
        </Button>
      </div>
    </div>
  );
};
