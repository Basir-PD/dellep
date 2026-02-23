"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { useMotionValueEvent, useScroll } from "motion/react";

export const MobileNavbar = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  return (
    <div
      className={cn(
        "flex justify-between bg-transparent items-center w-full h-14 px-4 transition-all duration-300 border-b border-neutral-200 dark:border-neutral-800",
        showBackground
          ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl shadow-sm"
          : "bg-white dark:bg-charcoal"
      )}
    >
      <Logo />
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <IoIosMenu
          className="text-neutral-900 dark:text-white h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col pt-safe">
          <div className="flex items-center justify-between w-full px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
            <Logo />
            <IoIosClose
              className="h-8 w-8 text-neutral-900 dark:text-white cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="flex flex-col gap-2 px-4 pt-8">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                onClick={() => setOpen(false)}
                className="block py-3 px-2 text-lg font-medium text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-800"
              >
                {navItem.title}
              </Link>
            ))}
          </div>
          <div className="px-4 pt-8">
            <Button
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
