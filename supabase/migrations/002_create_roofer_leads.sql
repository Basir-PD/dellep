-- Intake submissions from Roofers on the landing page.
--
-- Every Intake is stored, including Not A Fit ones: a Roofer who is below the
-- Ad Spend Floor today may clear it next season, and the contact details are
-- worth keeping either way.
--
-- Note: the earlier growth_assessments table is intentionally left in place.
-- It belongs to the previous business and may hold real submissions.

create table if not exists public.roofer_leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,

  -- Their company
  company_name text not null,
  market text not null,          -- united_states | quebec | elsewhere
  service_area text not null,    -- city / region they work in
  monthly_revenue text not null,

  -- Their ads
  current_ads text not null,     -- none | boosting | self_managed | agency
  ad_spend_budget text not null, -- under_1000 | 1000_1500 | 1500_3000 | 3000_5000 | 5000_plus
  job_source text not null,

  -- Them
  full_name text not null,
  email text not null,
  phone text not null,

  -- Outcome of the qualification gate
  qualification text not null,        -- qualified | not_a_fit
  disqualify_reason text,             -- below_floor | outside_served_market
  locale text                         -- en | fr
);

create index if not exists roofer_leads_created_at_idx
  on public.roofer_leads (created_at desc);

alter table public.roofer_leads enable row level security;

-- The Intake is a public form, so anonymous visitors must be able to insert.
create policy "Allow anonymous inserts"
  on public.roofer_leads
  for insert
  to anon
  with check (true);

-- Only signed-in (admin) users can read submissions back.
create policy "Allow authenticated reads"
  on public.roofer_leads
  for select
  to authenticated
  using (true);
