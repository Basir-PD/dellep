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
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <IoIosMenu
          className="text-neutral-900 dark:text-white h-6 w-6"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col items-start justify-start space-y-10 pt-5 text-xl text-zinc-600 transition duration-200 hover:text-zinc-800">
          <div className="flex items-center justify-between w-full px-5">
            <Logo />
            <div className="flex items-center space-x-2">
              <IoIosClose
                className="h-8 w-8 text-neutral-900 dark:text-white"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[14px] px-8">
            {navItems.map((navItem: any, idx: number) => (
              <>
                {navItem.children && navItem.children.length > 0 ? (
                  <>
                    {navItem.children.map((childNavItem: any, idx: number) => (
                      <Link
                        key={`link=${idx}`}
                        href={childNavItem.link}
                        onClick={() => setOpen(false)}
                        className="relative max-w-[15rem] text-left text-2xl"
                      >
                        <span className="block text-neutral-900 dark:text-white">
                          {childNavItem.title}
                        </span>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative"
                  >
                    <span className="block text-[26px] text-neutral-900 dark:text-white">
                      {navItem.title}
                    </span>
                  </Link>
                )}
              </>
            ))}
          </div>
          <div className="flex flex-row w-full items-start gap-2.5  px-8 py-4 ">
            <Button>Book a demo</Button>
            <Button
              variant="simple"
              as={Link}
              href="/register"
              onClick={() => {
                setOpen(false);
              }}
            >
              Register
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
