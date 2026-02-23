"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-8" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <IconSun className="h-4 w-4 text-neutral-300" />
      ) : (
        <IconMoon className="h-4 w-4 text-neutral-700" />
      )}
    </button>
  );
};
