-- Growth Assessment submissions from the contact page
create table if not exists public.growth_assessments (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,

  -- Practice info
  practice_name text not null,
  monthly_inquiries text not null,
  patient_value text not null,

  -- Attraction & operations
  discovery_channel text not null,
  online_presence text not null,
  paid_ads text,
  response_time text not null,
  show_rate integer,
  follow_up text,

  -- Contact info
  full_name text not null,
  email text not null,
  phone text
);

-- Allow anonymous inserts (public form submissions)
alter table public.growth_assessments enable row level security;

create policy "Allow anonymous inserts"
  on public.growth_assessments
  for insert
  to anon
  with check (true);

-- Only authenticated (admin) users can read submissions
create policy "Allow authenticated reads"
  on public.growth_assessments
  for select
  to authenticated
  using (true);
