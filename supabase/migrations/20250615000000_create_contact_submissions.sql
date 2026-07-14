-- Contact form submissions table
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) > 0),
  email text not null check (char_length(trim(email)) > 0),
  message text not null check (char_length(trim(message)) >= 10),
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Allow anonymous inserts from the public contact form only
create policy "Allow anonymous contact form inserts"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- Block public reads/updates/deletes (submissions are admin-only)
create policy "Deny anonymous reads"
  on public.contact_submissions
  for select
  to anon
  using (false);
