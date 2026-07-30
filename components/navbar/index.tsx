"use client";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "motion/react";

// One page, one call to action — there is nothing to navigate to, so the bar
// carries the logo, the language switch and a link down to the Intake.
export function NavBar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.05, 0.1, 0.9], duration: 0.8 }}
      className="fixed top-0 inset-x-0 z-50 w-full"
    >
      <div className="hidden lg:block w-full">
        <DesktopNavbar />
      </div>
      <div className="flex h-full w-full items-center lg:hidden">
        <MobileNavbar />
      </div>
    </motion.nav>
  );
}
