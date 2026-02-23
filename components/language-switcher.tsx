"use client";

import { useLocale } from "./intl-provider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";

const locales: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      aria-label="Select language"
      className={cn(
        "appearance-none bg-transparent text-sm font-medium cursor-pointer",
        "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white",
        "border border-neutral-200 dark:border-neutral-700 rounded-md px-2 py-1",
        "focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700",
        "transition-colors"
      )}
    >
      {locales.map((l) => (
        <option key={l.value} value={l.value}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
