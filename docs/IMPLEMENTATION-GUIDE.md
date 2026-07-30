# Implementation Guide — Dellep roofer landing page

A step-by-step build guide written to be executed with a **local coding model in VS Code**
(Qwen or similar), one task at a time.

Read `CONTEXT.md` for the vocabulary and `docs/adr/` for the decisions behind this build.
Terms in **bold** below (Roofer, Intake, Ad Spend Budget, Booking, Not A Fit) are defined
in `CONTEXT.md` and should be used exactly as written.

---

## 0. Current state of the repo

### Already done — do not redo

| Thing | Where |
|---|---|
| Old marketing site deleted (blog, features, pricing, contact, register, fake testimonials, client-logo marquee, showcase components) | — |
| `roofer_leads` table + RLS | `supabase/migrations/002_create_roofer_leads.sql` |
| Qualification gate (pure logic, no React) | `lib/qualification.ts` |
| Email labels for **Intake** answers | `lib/intake-labels.ts` |
| Server action: save + notify + confirm | `app/actions/submit-intake.ts` |
| Domain glossary | `CONTEXT.md` |
| 5 architecture decisions | `docs/adr/` |

### Still to do

1. **Step 0 — make it compile again** (broken right now)
2. Step 1 — `components/intake.tsx`
3. Step 2 — `components/calendly-embed.tsx`
4. Step 3 — page sections + copy
5. Step 4 — navbar, footer, layout, metadata
6. Step 5 — English + Québécois French messages
7. Step 6 — verify

---

## Hard rules — repeat these in every prompt you give the model

A local model will cheerfully invent marketing copy. These are the guardrails from
`docs/adr/0002-no-guarantees-no-fabricated-proof.md`, and they are not stylistic:

- **Never add testimonials, reviews, client logos, star ratings, or named customers.**
  There are no clients yet. Any that appear are fabricated.
- **Never add outcome numbers or guarantees.** No "30 leads in 30 days", no "or you don't
  pay", no "$2M generated", no fake counters or "trusted by 200+ roofers".
- **Never invent statistics.** If a number is not in this guide, it does not go on the page.
- **The Pilot is free.** No pricing table, no "starting at $X".
- **Ad Spend Budget always means money paid to Meta, never money paid to Dellep.** Any
  label mentioning budget must say so.

---

## How to drive the local model

Local models lose the thread on large multi-file tasks. Work like this:

1. **One file per prompt.** Never ask for "the whole landing page".
2. **Paste the spec for that file only** from this guide, plus the hard rules above.
3. **Give it the existing primitives to match**: `components/container.tsx`,
   `components/heading.tsx`, `components/subheading.tsx`, `lib/utils.ts` (`cn`).
   Tell it to reuse them rather than invent new ones.
4. **After every file, run `npx tsc --noEmit`** and paste any errors straight back.
5. Colours already exist in `tailwind.config.ts`: `charcoal` (#08090A) and
   `secondary` (#22C55E). Tell the model to use those, not raw hex.
6. The site is bilingual. Every user-visible string must be written as
   `intl.formatMessage({ defaultMessage: "..." })` with `const intl = useIntl()` from
   `react-intl` in a `"use client"` component. Step 5 extracts them.

---

## Step 0 — Make the project compile

Two files import deleted components.

**`components/hero.tsx`** — remove the imports of `./video-modal` and `./featured-images`
and any JSX using them. (You will rewrite this file entirely in Step 3, so the quickest
path is to leave it broken until then and do Step 3 first.)

**`app/(marketing)/page.tsx`** — currently imports `CTA`, `CTABanner`, `FAQs`,
`TestimonialsCarousel`, `Tools`, `EngineShowcase`, all deleted. Replaced in Step 3.

**Check:**

```bash
npx tsc --noEmit
```

---

## Step 1 — `components/intake.tsx`

The **Intake**: three steps, then the qualification gate, then either a **Booking** or a
**Not A Fit** message.

### Behaviour

- `"use client"`, local `useState`, no form library.
- Steps advance only when the current step's required fields are filled.
- Back button on steps 2 and 3.
- A visible 3-step progress indicator.
- On submit of step 3: call `submitIntake(answers, locale)` from
  `@/app/actions/submit-intake`, disable the button and show a spinner while awaiting.
- The action returns `{ success, qualification }`. Branch on `qualification.outcome`:
  - `"qualified"` → render `<CalendlyEmbed />` (Step 2) with the answers passed in.
  - `"not_a_fit"` → render the Not A Fit message (copy below). **No calendar.**
- If `success` is `false`, show a plain error and keep their answers so they can retry.
- On successful submit, fire the Meta Pixel Lead event:
  ```ts
  import { event } from "@/lib/fpixel";
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    event("Lead", { content_name: "roofer_intake" });
  }
  ```
- Get the current locale with `useLocale()` from `@/components/intl-provider` and pass it
  to `submitIntake`.

### Fields

Types are already defined in `lib/qualification.ts` — **import `IntakeAnswers` from there,
do not redeclare it.** The `value` strings below must match those types exactly.

**Step 1 — "Your company"**

| Field | Type | Values |
|---|---|---|
| `company_name` | text, required | — |
| `market` | select, required | `united_states` "United States" · `quebec` "Quebec, Canada" · `elsewhere` "Somewhere else" |
| `service_area` | text, required | placeholder "e.g. Dallas, TX" |
| `monthly_revenue` | select, required | `under_20k` "Under $20k/month" · `20k_50k` "$20k – $50k" · `50k_100k` "$50k – $100k" · `100k_250k` "$100k – $250k" · `250k_plus` "$250k+" |

**Step 2 — "Your ads"**

| Field | Type | Values |
|---|---|---|
| `current_ads` | select, required | `none` "Not running any" · `boosting` "I boost posts now and then" · `self_managed` "I run proper campaigns myself" · `agency` "An agency runs them" |
| `ad_spend_budget` | select, required | `under_1000` "Under $1,000" · `1000_1500` "$1,000 – $1,500" · `1500_3000` "$1,500 – $3,000" · `3000_5000` "$3,000 – $5,000" · `5000_plus` "$5,000+" |
| `job_source` | select, required | `referrals` · `door_knocking` · `google` · `lead_vendors` · `storm_chasing` · `meta_ads` · `other` (labels in `lib/intake-labels.ts`) |

The `ad_spend_budget` label **must** read:

> **What can you put behind Meta ads each month?**
> This is paid straight to Meta for your own ads — not to me. I don't charge you anything.

**Step 3 — "You"** — `full_name`, `email` (type email), `phone` (type tel). All required.

### Not A Fit copy

`qualification.reason === "below_floor"`:

> **I'd be wasting your time, so I'll be straight with you.**
> Under about $1,500 a month in ad spend, Meta doesn't get enough data to optimise, and
> we'd both spend 30 days learning nothing. That's not a judgement on your business —
> it's how the platform works.
> I've kept your details. If that budget changes, email me and we'll pick this up.

`qualification.reason === "outside_served_market"`:

> **I'm not the right fit for your market yet.**
> Right now I only work with roofers in the United States and Quebec, so I'd be guessing
> at your market instead of doing a good job in it.
> I've kept your details in case that changes.

### Mobile

Roofers open this on a phone, often one-handed on a jobsite. Inputs at least `44px` tall,
`text-base` (16px) minimum so iOS does not zoom on focus, full-width buttons on small
screens.

---

## Step 2 — `components/calendly-embed.tsx`

Renders the inline Calendly widget, prefilled from the **Intake**.

```tsx
"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import type { IntakeAnswers } from "@/lib/qualification";
```

- Props: `{ answers: IntakeAnswers }`.
- Base URL from `process.env.NEXT_PUBLIC_CALENDLY_URL`. If it is missing, render a plain
  fallback: "Booking isn't set up yet — email me at contact@dellep.com" and return early.
  **The page must not crash when the variable is absent.**
- Build the prefill query string:

  | Param | Value |
  |---|---|
  | `name` | `answers.full_name` |
  | `email` | `answers.email` |
  | `a1` | `answers.phone` |
  | `a2` | `answers.company_name` |
  | `hide_gdpr_banner` | `1` |
  | `background_color` | `08090a` |
  | `text_color` | `ffffff` |
  | `primary_color` | `22c55e` |

  `a1`/`a2` map to the **first and second custom questions** on the Calendly event, in the
  order they appear there. Setup instructions are at the bottom of this guide.

- Load the widget script with
  `<Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />`.
- Because the container mounts after the script may have loaded, do not rely on
  auto-initialisation. Initialise explicitly:

  ```ts
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = () => {
      const Calendly = (window as any).Calendly;
      if (!Calendly || !container.current || container.current.childElementCount) return;
      Calendly.initInlineWidget({ url, parentElement: container.current });
    };
    init();
    const timer = setInterval(init, 300);   // script may still be loading
    const stop = setTimeout(() => clearInterval(timer), 10000);
    return () => { clearInterval(timer); clearTimeout(stop); };
  }, [url]);
  ```

- Container: `<div ref={container} style={{ minWidth: 320, height: 700 }} />`.

---

## Step 3 — Page sections

Create each as its own file, then compose them in `app/(marketing)/page.tsx`:

```tsx
import { AmbientColor } from "@/components/ambient-color";
import { Hero } from "@/components/hero";
import { OfferTerms } from "@/components/offer-terms";
import { ThirtyDayPlan } from "@/components/thirty-day-plan";
import { WhyFree } from "@/components/why-free";
import { Intake } from "@/components/intake";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Hero />
      <OfferTerms />
      <ThirtyDayPlan />
      <WhyFree />
      <section id="intake" className="scroll-mt-20">
        <Intake />
      </section>
    </div>
  );
}
```

### Copy deck — use verbatim, do not embellish

**`components/hero.tsx`** (rewrite completely; delete the scroll-animation card, the
`VideoModal` and `FeaturedImages` imports, and the dashboard image)

> # I'll run your Meta ads for 30 days. Free.
> I'm building my portfolio and I want one roofing company's numbers to show for it. You
> pay Meta for your own ads. You pay me nothing.
>
> [Button] **See if we're a fit** → scrolls to `#intake`
> Takes about 90 seconds. No contract, no call required to find out.

**`components/offer-terms.tsx`** — four cards or a simple list:

> **Free for 30 days** — I don't invoice you. Not now, not at the end.
> **You keep your ad account** — It's your Business Manager, your Page, your data. I get admin access, not ownership.
> **Walk away whenever** — No contract, no notice period, nothing to cancel.
> **You pay Meta directly** — Your card, your budget, your control. I never touch your money.

**`components/thirty-day-plan.tsx`** — the credibility section. Roofing-specific,
mechanical, honest. Four blocks:

> ## What I'd actually do with your account
>
> **Week 1 — Setup and tracking**
> Admin access to your Business Manager and Page. Pixel and conversions API checked, because
> most roofing accounts I've looked at are running on broken tracking and don't know it. Lead
> forms built so a homeowner can submit in two taps without leaving Facebook. Radius set to
> the area your crews will actually drive to — not the whole state.
>
> **Week 2 — Creative that looks like roofing, not like an ad**
> Before-and-afters from your own jobs. Drone shots if you have them, phone footage if you
> don't — phone footage often wins. Angles built around what actually makes a homeowner move:
> storm and hail damage, insurance claims, a visibly failing roof, financing.
>
> **Week 3 — Cutting what doesn't work**
> Kill the losing audiences and creatives, put the budget behind what's producing. You get
> the real cost per lead, not a curated screenshot.
>
> **Week 4 — Honest numbers**
> What it cost, what came in, which leads you booked, which turned into signed jobs. If the
> answer is "this didn't work", you'll get that in writing too.
>
> **What I need from you:** admin access before day one, a card on the ad account, and a
> reply when I ask which leads actually closed. That last one is the whole point — without
> it neither of us learns anything.

**`components/why-free.tsx`**:

> ## Why it's free
> Because I don't have a roofing case study yet, and you have something I want more than
> $500: a real account with real numbers I can point at when I talk to the next roofer.
>
> That's the whole trade. I do the work, you pay Meta for your own ads, and if it goes well
> I'd like to publish the numbers and a couple of lines from you. If it doesn't go well, you
> lost 30 days of ad spend you'd probably have spent anyway, and I lost a month.
>
> I'm not going to promise you thirty jobs. I don't know your market yet, and anyone who
> promises that before seeing your account is guessing.

---

## Step 4 — Shell

**`components/navbar/index.tsx`** — remove the `navItems` (`/contact` is deleted). Keep
logo, `LanguageSwitcher`, `ThemeToggle`. The "Book a call" button should scroll to
`#intake`, not link to `/contact`. Same edits in `desktop-navbar.tsx` and
`mobile-navbar.tsx`.

**`components/footer.tsx`** — rewrite small and plain. Keep only: logo, `contact@dellep.com`,
Privacy Policy, Terms links, `Copyright © 2026 Dellep`. **Delete** the fake phone number
`+1 (800) 123 XX21`, the "Refund Policy" link pointing at `#`, the dead social icons
linking to `#`, the "Blog" link, and the "Get Started Today" button pointing at `/contact`.

**`app/layout.tsx`** — replace the metadata:

```ts
export const metadata: Metadata = {
  title: "Dellep — Meta ads for roofing companies",
  description:
    "I run Meta ads for roofing companies in the US and Quebec. Free 30-day pilot: you pay Meta for your own ads, you pay me nothing, and you keep your ad account.",
};
```

**`app/(marketing)/privacy-policy/page.tsx`** and `terms-and-conditions/page.tsx` — read
through and replace every mention of practices, patients, or practitioners with roofing
equivalents. Keep the pages; Meta requires a reachable privacy policy for ad accounts.

---

## Step 5 — Messages

The project uses `react-intl` with hashed message IDs.

```bash
npm run i18n:extract
```

This rewrites `messages/en.json` from every `defaultMessage` in `app/` and `components/`.

`messages/fr.json` must then contain **the same keys** with French values. It currently
holds translations for the deleted site, so most keys will be stale. Rebuild it:

```bash
node -e "
const en = require('./messages/en.json');
const fr = require('./messages/fr.json');
const out = {};
for (const k of Object.keys(en)) out[k] = fr[k] ?? { defaultMessage: en[k].defaultMessage };
require('fs').writeFileSync('./messages/fr.json', JSON.stringify(out, null, 2));
"
```

Then translate every entry that is still English. **Québécois French, not France French** —
see `docs/adr/0005-served-markets-us-and-quebec.md`. Use *couvreur* (roofer), *toiture*
(roof/roofing), *soumission* (quote), *grêle* (hail), *réclamation d'assurance* (insurance
claim). A Montreal roofer spots European French instantly.

Ask the model to translate in batches of ~15 entries, giving it the vocabulary list each
time, and keep the JSON keys untouched.

---

## Step 6 — Verify

```bash
npx tsc --noEmit     # no type errors
npm run lint         # no errors
npm run build        # builds clean
npx vitest run       # green (add tests for lib/qualification.ts — see below)
npm run dev          # then check by hand
```

Worth adding, since it is pure logic and cheap to test — `__tests__/qualification.test.ts`:

- `elsewhere` market → `not_a_fit`, reason `outside_served_market`
- `under_1000` budget in a served market → `not_a_fit`, reason `below_floor`
- `elsewhere` **and** `under_1000` → reason is `outside_served_market` (market is checked first)
- `united_states` + `1500_3000` → `qualified`
- `quebec` + `1000_1500` → `qualified`

Manual checks:

1. On a phone-sized viewport, complete the **Intake** with `$1,500 – $3,000` → calendar appears.
2. Complete it with `Under $1,000` → **no calendar**, Not A Fit copy appears.
3. Set market to `Somewhere else` → **no calendar**, even with a high budget.
4. Both submissions land in the `roofer_leads` table.
5. You receive the notification email; the Roofer receives the confirmation.
6. Switch to FR — no English left on the page.

---

## Environment and accounts

`.env.local` already has Supabase, Resend and the Meta Pixel. Add one line:

```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/YOUR-USERNAME/roofing-ads-call
```

### Calendly setup (do this before Step 2 can be tested)

1. Sign up free at calendly.com and pick your username.
2. **Connect your Google Calendar** — this is what stops a **Booking** landing during your
   day job.
3. Create one event type: *"Roofing Ads Call"*, 30 minutes.
4. Availability: your evenings and weekend mornings. Calendly converts these into each
   Roofer's own timezone automatically.
5. Minimum scheduling notice 4 hours; buffer 15 minutes after each event.
6. Under **Invitee Questions**, add two custom questions in this exact order:
   1. *Phone number* → receives `a1`
   2. *Company name* → receives `a2`
7. Copy the event link into `NEXT_PUBLIC_CALENDLY_URL`.

Free tier gives email confirmations and reminders but **no SMS reminders**. SMS meaningfully
cuts no-shows — worth upgrading once a **Pilot Client** exists.

### Run the migration

```bash
supabase db push
```

Or paste `supabase/migrations/002_create_roofer_leads.sql` into the Supabase SQL editor.

---

## Suggested order of work

Step 0 is entangled with Step 3 (both touch `hero.tsx` and `page.tsx`), so:

1. Step 3 (page sections + `page.tsx`) — this also resolves Step 0
2. Step 1 (Intake)
3. Step 2 (Calendly embed)
4. Step 4 (shell)
5. Step 6 verification, English only
6. Step 5 (French), then verify again

Do not move to the next step until `npx tsc --noEmit` is clean.
