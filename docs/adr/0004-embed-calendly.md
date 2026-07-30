# Embed Calendly rather than build a booking calendar

Bookings are handled by an inline Calendly embed, prefilled with the Roofer's Intake answers, rather than by a calendar component in this codebase.

## Why

The visible surface of a booking calendar is small; the invisible part is not. A working Booking needs timezone conversion for Roofers across the United States and Quebec, double-booking prevention, reschedules and cancellations, calendar invites, and reminder emails — and above all it must read Dellep's real calendar so a Booking can never land during a full-time job. Calendly's free tier does all of this. Building it would take a day, produce a worse result, and introduce a no-show problem.

## Consequences

- The free tier carries Calendly branding and offers email reminders but **no SMS reminders**. SMS measurably reduces no-shows and is worth paying for once a Pilot Client exists.
- Intake answers are passed to the embed as prefill so the Roofer only picks a slot, and so the Booking notification arrives carrying their Ad Spend Budget and business details.
- Booking data lives with Calendly, not in Supabase; only the Intake is stored locally. Migrating to Cal.com later is a contained change to the embed and the prefill parameters.
