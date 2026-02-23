"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import {
  getDefaultLocale,
  setStoredLocale,
  type Locale,
} from "@/lib/locale";

import enRaw from "@/messages/en.json";
import frRaw from "@/messages/fr.json";

type ExtractedMessages = Record<string, { defaultMessage: string } | string>;

function flattenMessages(raw: ExtractedMessages): Record<string, string> {
  const flat: Record<string, string> = {};
  for (const [key, value] of Object.entries(raw)) {
    flat[key] = typeof value === "string" ? value : value.defaultMessage;
  }
  return flat;
}

const messages: Record<Locale, Record<string, string>> = {
  en: flattenMessages(enRaw as ExtractedMessages),
  fr: flattenMessages(frRaw as ExtractedMessages),
};

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export function IntlClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getDefaultLocale());
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setStoredLocale(newLocale);
    document.documentElement.lang = newLocale;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="en"
        onError={() => {}}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
