# Served Markets are the United States and Quebec, and the site is bilingual

Dellep sells only to Roofers in the United States and in Quebec, Canada. The site ships in English and Québécois French, using the `react-intl` setup already present in the codebase.

## Why

Dellep operates from Quebec around a full-time job, so Booking slots must fall inside the Roofer's business hours as well as Dellep's evenings. The United States and Quebec sit in effectively one timezone band, which makes that possible. Australia and Europe were considered and rejected: Australian business hours fall in the middle of a Quebec night and its roofing season is inverted, while "Europe" is not a single market but dozens of languages, currencies, and consent regimes. Roofing demand is also weather-driven, and no single message covers opposite hemispheres.

## Consequences

- French copy must be **Québécois, not European French** — *couvreur*, *toiture*, *soumission*. A Montreal Roofer identifies France French immediately and reads it as an outsider.
- The two markets have different seasonality: United States storm and insurance-claim demand runs close to year-round, while Quebec roofing runs roughly April to October. This shapes outreach timing and ad angle, not the page.
- Service area is an Intake question, and a Roofer outside a Served Market is Not A Fit regardless of Ad Spend Budget.
