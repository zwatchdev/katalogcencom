create extension if not exists pgcrypto;

create table if not exists public.products (
  id text primary key,
  name text not null,
  price bigint not null default 0,
  stock integer not null default 0,
  product_type text not null default 'Laptop' check (product_type in ('Laptop', 'Printer', 'Monitor', 'Komputer', 'Proyektor')),
  category text not null default 'Office' check (category in ('Gaming', 'Office', 'Kuliahan')),
  description text not null default '',
  feature text not null default '',
  image_data text not null default '',
  specs jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.products
add column if not exists product_type text not null default 'Laptop';

alter table public.products
add column if not exists description text not null default '';

alter table public.products
add column if not exists feature text not null default '';

alter table public.products
add column if not exists image_data text not null default '';

alter table public.products drop constraint if exists products_product_type_check;
alter table public.products
add constraint products_product_type_check
check (product_type in ('Laptop', 'Printer', 'Monitor', 'Komputer', 'Proyektor'));

create table if not exists public.export_preferences (
  id text primary key,
  settings jsonb not null default '{}'::jsonb,
  state jsonb not null default '{"selectedProductIds":[],"manualOrder":false}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password_hash text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.admin_sessions (
  token text primary key,
  user_id uuid not null references public.admin_users(id) on delete cascade,
  expires_at timestamptz not null,
  created_at timestamptz not null default timezone('utc', now())
);

create or replace function public.set_products_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
drop trigger if exists export_preferences_set_updated_at on public.export_preferences;
drop trigger if exists admin_users_set_updated_at on public.admin_users;

create trigger products_set_updated_at
before update on public.products
for each row
execute function public.set_products_updated_at();

create trigger export_preferences_set_updated_at
before update on public.export_preferences
for each row
execute function public.set_products_updated_at();

create trigger admin_users_set_updated_at
before update on public.admin_users
for each row
execute function public.set_products_updated_at();

create or replace function public.verify_admin_login(login_username text, login_password text)
returns table (
  id uuid,
  username text,
  is_active boolean
)
language sql
security definer
set search_path = public
as $$
  select
    admin_users.id,
    admin_users.username,
    admin_users.is_active
  from public.admin_users
  where admin_users.username = login_username
    and admin_users.is_active = true
    and admin_users.password_hash = extensions.crypt(login_password, admin_users.password_hash)
  limit 1;
$$;

alter table public.products enable row level security;
alter table public.export_preferences enable row level security;
alter table public.admin_users enable row level security;
alter table public.admin_sessions enable row level security;

drop policy if exists "Public can read products" on public.products;
create policy "Public can read products"
on public.products
for select
using (true);

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'products'
  ) then
    alter publication supabase_realtime add table public.products;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'export_preferences'
  ) then
    alter publication supabase_realtime add table public.export_preferences;
  end if;
end
$$;

-- Contoh seed admin pertama:
-- insert into public.admin_users (username, password_hash)
-- values ('admin', extensions.crypt('ganti-password-kamu', extensions.gen_salt('bf')));
