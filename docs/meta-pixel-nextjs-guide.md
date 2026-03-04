# Meta Pixel Integration Guide for Next.js (App Router)

## Overview

This guide covers adding Facebook/Meta Pixel to a Next.js App Router project with:
- Route-change tracking (client-side navigations)
- Environment variable configuration
- Reusable event helper functions

---

## Step 1: Set Up Environment Variable

Add your Pixel ID to `.env.local`:

```
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id_here
```

> The `NEXT_PUBLIC_` prefix exposes it to the browser. Find your Pixel ID in [Meta Events Manager](https://business.facebook.com/events_manager).

---

## Step 2: Create the Pixel Helper Library

Create `lib/fpixel.ts`:

```ts
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name: string, options: Record<string, unknown> = {}) => {
  window.fbq("track", name, options);
};
```

**Available standard events:** `Lead`, `Contact`, `ViewContent`, `Purchase`, `CompleteRegistration`, `AddToCart`, `InitiateCheckout`, `Subscribe`.

---

## Step 3: Create the Pixel Base Script

Create `public/scripts/pixel.js`:

```js
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
```

> This file only loads the SDK. Initialization (`fbq('init')`) happens in the React component so the Pixel ID comes from the env variable.

---

## Step 4: Create the FacebookPixel Component

Create `components/FacebookPixel.tsx`:

```tsx
"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import * as pixel from "../lib/fpixel";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const initialized = useRef(false);

  // Initialize pixel once after script loads
  useEffect(() => {
    if (!loaded || initialized.current) return;

    initialized.current = true;
    window.fbq("init", pixel.FB_PIXEL_ID);
    pixel.pageview();
  }, [loaded]);

  // Track page views on route changes
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
```

**Key details:**
- `"use client"` — required because it uses hooks and browser APIs
- `strategy="afterInteractive"` — loads after hydration for better performance
- `useRef` prevents re-initialization on route changes
- `usePathname()` triggers pageview tracking on client-side navigations

---

## Step 5: Add to Root Layout

In `app/layout.tsx`, import and place the component inside `<body>`:

```tsx
import FacebookPixel from "@/components/FacebookPixel";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
```

---

## Step 6: Track Custom Events

Use the `event()` helper anywhere in your client components:

```tsx
import * as pixel from "@/lib/fpixel";

// On form submission
pixel.event("Lead", { content_name: "Contact Form" });

// On CTA click
pixel.event("Contact", { content_name: "Book a Call" });

// On purchase
pixel.event("Purchase", { value: 99.99, currency: "USD" });
```

---

## Verification

1. **Meta Pixel Helper** — Install the [Chrome extension](https://chrome.google.com/webstore/detail/meta-pixel-helper). A green icon confirms events are firing.
2. **Events Manager** — Go to [Meta Events Manager](https://business.facebook.com/events_manager) > Test Events to see live data.
3. **Browser DevTools** — Network tab, filter by `facebook.net` to see requests.

---

## File Structure Summary

```
project/
├── .env.local                    # NEXT_PUBLIC_FB_PIXEL_ID=your_id
├── lib/fpixel.ts                 # Helper functions (pageview, event)
├── public/scripts/pixel.js       # Facebook SDK loader
├── components/FacebookPixel.tsx  # Client component for layout
└── app/layout.tsx                # Root layout (imports FacebookPixel)
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Pixel not firing | Check `.env.local` has `NEXT_PUBLIC_FB_PIXEL_ID` set. Restart dev server after adding env vars. |
| PageView only fires on first load | Make sure `FacebookPixel` uses `usePathname()` to detect route changes. |
| Duplicate events | Ensure `fbq('init')` is called only once (use a `useRef` guard). |
| Events not showing in Events Manager | Allow up to 20 minutes for events to appear. Use Test Events for real-time verification. |
