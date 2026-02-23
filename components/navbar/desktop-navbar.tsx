"use client";
import { Logo } from "@/components/logo";
import { Button } from "../button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { Link } from "next-view-transitions";

type Props = {
  navItems: {
    link: string;
    title: string;
    target?: "_blank";
  }[];
};

export const DesktopNavbar = ({ navItems }: Props) => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

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
      {/* Left — Logo */}
      <Logo />

      {/* Right — Contact + Book a call + Theme */}
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {item.title}
          </Link>
        ))}
        <ThemeToggle />
        <Button>Book a call</Button>
      </div>
    </div>
  );
};
