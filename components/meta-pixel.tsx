"use client";

import { useEffect } from "react";
import { FB_PIXEL_ID } from "@/lib/fpixel";

export function MetaPixel() {
  useEffect(() => {
    const loadPixel = () => {
      if (localStorage.getItem("cookie-consent") !== "accepted") return;
      if (window.fbq) return;

      const f = window as any;
      const n = (f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      });
      f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [] as any[];

      const t = document.createElement("script");
      t.async = true;
      t.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(t);

      window.fbq("init", FB_PIXEL_ID);
      window.fbq("track", "PageView");
    };

    loadPixel();
    window.addEventListener("cookie-consent-update", loadPixel);
    return () =>
      window.removeEventListener("cookie-consent-update", loadPixel);
  }, []);

  return null;
}
