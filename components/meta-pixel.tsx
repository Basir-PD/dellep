"use client";

import { useEffect } from "react";
import { FB_PIXEL_ID } from "@/lib/fpixel";

export function MetaPixel() {
  useEffect(() => {
    const loadPixel = () => {
      if (localStorage.getItem("cookie-consent") !== "accepted") return;
      if (typeof window.fbq === "function") return;

      // eslint-disable-next-line
      const w: any = window;
      w.fbq = function () {
        w.fbq.callMethod
          ? w.fbq.callMethod.apply(w.fbq, arguments)
          : w.fbq.queue.push(arguments);
      };
      w._fbq = w.fbq;
      w.fbq.push = w.fbq;
      w.fbq.loaded = true;
      w.fbq.version = "2.0";
      w.fbq.queue = [];

      const s = document.createElement("script");
      s.async = true;
      s.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(s);

      w.fbq("init", FB_PIXEL_ID);
      w.fbq("track", "PageView");
    };

    loadPixel();
    window.addEventListener("cookie-consent-update", loadPixel);
    return () =>
      window.removeEventListener("cookie-consent-update", loadPixel);
  }, []);

  return null;
}
