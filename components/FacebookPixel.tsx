"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import * as pixel from "../lib/fpixel";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (!loaded || initialized.current) return;

    initialized.current = true;
    window.fbq("init", pixel.FB_PIXEL_ID);
    pixel.pageview();
  }, [loaded]);

  useEffect(() => {
    if (!loaded || !initialized.current) return;

    pixel.pageview();
  }, [pathname]);

  return (
    <Script
      id="fb-pixel"
      src="/scripts/pixel.js"
      strategy="afterInteractive"
      onLoad={() => setLoaded(true)}
    />
  );
};

export default FacebookPixel;
