-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROFILES
create table if not exists profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text not null,
  full_name text,
  role text check (role in ('admin', 'editor', 'viewer')) default 'viewer',
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- SERVICES
create table if not exists services (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  short_description text,
  full_description text,
  icon_name text,
  image_url text,
  category text check (category in ('mechanical', 'electrical', 'fire-safety', 'project-management', 'consulting')),
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- PROJECTS
create table if not exists projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  client_name text,
  location text,
  completion_date date,
  service_category text references services(slug),
  summary text,
  description text,
  featured_image_url text,
  gallery_images text[],
  is_featured boolean default false,
  client_consent boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- TEAM MEMBERS
create table if not exists team_members (
  id uuid default uuid_generate_v4() primary key,
  full_name text not null,
  role text not null,
  bio text,
  image_url text,
  linkedin_url text,
  certifications text[],
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- CERTIFICATIONS
create table if not exists certifications (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  issuing_body text,
  registration_number text,
  image_url text,
  type text check (type in ('certification', 'award', 'license')),
  date_received date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ENQUIRIES
create table if not exists enquiries (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  company text,
  service_interest text,
  message text,
  status text check (status in ('new', 'contacted', 'closed')) default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- BLOG POSTS
create table if not exists blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  author_id uuid references profiles(id),
  featured_image_url text,
  is_published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table profiles enable row level security;
alter table services enable row level security;
alter table projects enable row level security;
alter table team_members enable row level security;
alter table certifications enable row level security;
alter table enquiries enable row level security;
alter table blog_posts enable row level security;

-- Drop existing policies to avoid conflicts
drop policy if exists "Public profiles are viewable by everyone" on profiles;
drop policy if exists "Public services are viewable by everyone" on services;
drop policy if exists "Public projects are viewable by everyone" on projects;
drop policy if exists "Public team are viewable by everyone" on team_members;
drop policy if exists "Public certifications are viewable by everyone" on certifications;
drop policy if exists "Public blog posts are viewable by everyone" on blog_posts;
drop policy if exists "Admins can insert services" on services;
drop policy if exists "Admins can update services" on services;
drop policy if exists "Admins can delete services" on services;
drop policy if exists "Admins can insert projects" on projects;
drop policy if exists "Admins can update projects" on projects;
drop policy if exists "Admins can delete projects" on projects;
drop policy if exists "Public can create enquiries" on enquiries;
drop policy if exists "Admins can view enquiries" on enquiries;

-- Re-create policies
create policy "Public profiles are viewable by everyone" on profiles for select using (true);
create policy "Public services are viewable by everyone" on services for select using (true);
create policy "Public projects are viewable by everyone" on projects for select using (true);
create policy "Public team are viewable by everyone" on team_members for select using (true);
create policy "Public certifications are viewable by everyone" on certifications for select using (true);
create policy "Public blog posts are viewable by everyone" on blog_posts for select using (is_published = true);

create policy "Admins can insert services" on services for insert with check (auth.role() = 'authenticated');
create policy "Admins can update services" on services for update using (auth.role() = 'authenticated');
create policy "Admins can delete services" on services for delete using (auth.role() = 'authenticated');

create policy "Admins can insert projects" on projects for insert with check (auth.role() = 'authenticated');
create policy "Admins can update projects" on projects for update using (auth.role() = 'authenticated');
create policy "Admins can delete projects" on projects for delete using (auth.role() = 'authenticated');

create policy "Public can create enquiries" on enquiries for insert with check (true);
create policy "Admins can view enquiries" on enquiries for select using (auth.role() = 'authenticated');
