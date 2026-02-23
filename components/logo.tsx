"use client";
import { Link } from "next-view-transitions";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "light" ? "/logos/light-logo.png" : "/logos/dark-logo.png";

  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="Dellep"
        className="h-10 md:h-20 w-auto"
      />
    </Link>
  );
};