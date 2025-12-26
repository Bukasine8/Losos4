-- Create admin_integrations table to store OAuth tokens
create table if not exists admin_integrations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  provider text not null, -- e.g., 'google_calendar'
  access_token text,
  refresh_token text,
  expiry bigint,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now(),
  unique(user_id, provider)
);

-- Enable Row Level Security (RLS)
alter table admin_integrations enable row level security;

-- Policies
create policy "Users can view their own integrations"
  on admin_integrations for select
  using ( auth.uid() = user_id );

create policy "Users can insert their own integrations"
  on admin_integrations for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own integrations"
  on admin_integrations for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own integrations"
  on admin_integrations for delete
  using ( auth.uid() = user_id );
