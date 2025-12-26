-- Create comments table
create table if not exists comments (
  id uuid default gen_random_uuid() primary key,
  post_id uuid references posts(id) on delete cascade not null,
  name text not null,
  content text not null,
  created_at timestamptz default now() not null,
  is_approved boolean default true
);

-- Enable RLS
alter table comments enable row level security;

-- Policies
create policy "Comments are viewable by everyone" 
  on comments for select 
  using ( is_approved = true );

create policy "Anyone can insert comments" 
  on comments for insert 
  with check ( true );

-- Optional: Policy for admin to delete/manage (if you implement auth for admin later)
-- create policy "Admins can do everything" on comments for all using ( auth.uid() in (select id from auth.users) ); 
