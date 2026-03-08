"use client";

import { useState, useEffect } from "react";
import { useIntl } from "react-intl";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    window.dispatchEvent(new Event("cookie-consent-update"));
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg p-4">
      <p className="text-sm text-neutral-700 dark:text-neutral-300">
        {intl.formatMessage({
          defaultMessage:
            "We use cookies to measure site performance and improve your experience.",
        })}
      </p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={accept}
          className="px-3 py-1.5 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors"
        >
          {intl.formatMessage({ defaultMessage: "Accept" })}
        </button>
        <button
          onClick={decline}
          className="px-3 py-1.5 text-sm font-medium rounded-md bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
        >
          {intl.formatMessage({ defaultMessage: "Decline" })}
        </button>
      </div>
    </div>
  );
}
