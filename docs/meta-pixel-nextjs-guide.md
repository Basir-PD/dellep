# Meta Pixel Integration Guide for Next.js (App Router)

## Overview

This guide covers adding Facebook/Meta Pixel to a Next.js App Router project using the **inline `<head>` script approach** — the most reliable method that Meta's own setup wizard expects.

Optionally, a helper library can be used to track custom events on client-side navigations.

---

## Step 1: Set Up Environment Variable

Add your Pixel ID to `.env.local`:

```
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id_here
```

> The `NEXT_PUBLIC_` prefix exposes it to the browser. Find your Pixel ID in [Meta Events Manager](https://business.facebook.com/events_manager).

If deploying to Vercel, also add this variable in **Vercel → Project Settings → Environment Variables**.

---

## Step 2: Add the Pixel Script to Root Layout

In `app/layout.tsx`, add the Meta Pixel inline script inside `<head>` using `dangerouslySetInnerHTML`:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Why inline in `<head>` instead of a React component?**
- Executes synchronously before page render — no dependency on React hydration
- Meta's verification crawler reliably detects it
- The `noscript` fallback covers users with JavaScript disabled
- Using `next/script` with `strategy="afterInteractive"` can cause timing issues where `fbq('init')` fires too late or not at all

---

## Step 3: Create a Helper Library for Custom Events (Optional)

Create `lib/fpixel.ts` for tracking custom conversion events:

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

## Step 4: Track Custom Events

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
2. **Events Manager** — Go to [Meta Events Manager](https://business.facebook.com/events_manager) → Test Events to see live data.
3. **Browser DevTools** — Network tab, filter by `facebook.net` to see requests.
4. **Meta Setup Wizard** — The "Continue" button enables once Meta detects the pixel on your **live, publicly deployed URL** (not localhost).

---

## File Structure Summary

```
project/
├── .env.local              # NEXT_PUBLIC_FB_PIXEL_ID=your_id
├── lib/fpixel.ts           # Helper functions for custom events (optional)
└── app/layout.tsx           # Root layout with inline pixel script in <head>
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Pixel not firing | Check `.env.local` has `NEXT_PUBLIC_FB_PIXEL_ID` set. Restart dev server after adding env vars. |
| Meta wizard "Continue" button disabled | The wizard needs a **live public URL**, not localhost. Deploy first, then verify. |
| Pixel not detected after deploy | Redeploy after adding the env variable — Vercel doesn't pick up new env vars without a new deployment. |
| Duplicate PageView events | Ensure the inline script appears only once in `<head>`. Remove any old `FacebookPixel` components or `next/script` tags. |
| Events not showing in Events Manager | Allow up to 20 minutes for events to appear. Use Test Events for real-time verification. |
