# Setup Supabase + Vercel

Project ini sekarang sudah disiapkan untuk:

- membaca produk dari Supabase
- update katalog secara realtime lewat Supabase Realtime
- menjalankan CRUD admin lewat Vercel Functions
- menyimpan preferensi Export PDF admin ke database
- menyimpan credential sensitif di Environment Variables Vercel

## 1. Buat tabel Supabase

Jalankan file [supabase/schema.sql](./supabase/schema.sql) di SQL Editor Supabase.

Schema ini aman dijalankan ulang. Bagian Supabase Realtime sudah dibuat idempotent supaya tidak error kalau tabelnya sudah pernah ditambahkan ke publication `supabase_realtime`.

Dokumen resmi yang dipakai:

- Supabase JS install: https://supabase.com/docs/reference/javascript/installing
- Supabase Realtime Postgres Changes: https://supabase.com/docs/guides/realtime/postgres-changes

## 2. Isi Environment Variables di Vercel

Tambahkan variabel berikut di project Vercel:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Catatan:

- `SUPABASE_ANON_KEY` aman dipakai di browser untuk read/realtime.
- `SUPABASE_SERVICE_ROLE_KEY` hanya dipakai di Vercel Functions. Jangan pernah taruh di frontend.

Dokumen resmi Vercel:

- Environment Variables: https://vercel.com/docs/environment-variables
- Deployments: https://vercel.com/docs/platform/deployments
- vercel.json: https://vercel.com/docs/project-configuration/vercel-json

## 3. Install dependency

```bash
npm install
```

## 4. Jalankan lokal dengan Vercel

Supaya folder `api/` ikut aktif saat lokal:

```bash
npx vercel dev
```

## 5. Buat akun admin di Supabase

Jalankan SQL ini di SQL Editor Supabase untuk membuat admin pertama:

```sql
insert into public.admin_users (username, password_hash)
values ('admin', crypt('ganti-password-kamu', gen_salt('bf')));
```

Kalau ingin mengganti password admin:

```sql
update public.admin_users
set password_hash = crypt('password-baru-kamu', gen_salt('bf'))
where username = 'admin';
```

## 6. Seed data awal

Setelah login ke dashboard, klik `Reset Data`.

Itu akan mengirim default katalog dari frontend ke Supabase, jadi tabel `products` langsung terisi.

## 7. Preferensi Export PDF

Layout export terbaru sekarang disimpan otomatis ke tabel `export_preferences` saat admin mengubah:

- header toko
- logo
- gambar custom per halaman
- pilihan produk export
- urutan manual produk dan brand

Jadi saat admin membuka lagi dashboard atau halaman export dari sesi berikutnya, konfigurasi terakhir akan dimuat kembali dari database.

## Arsitektur

- Halaman publik dan dashboard membaca produk dari endpoint `/api/products`
- Browser juga subscribe langsung ke Supabase Realtime untuk update live
- Login admin diverifikasi di `/api/admin-login`
- Sesi login admin disimpan di tabel `admin_sessions`
- CRUD admin dan reset data dijalankan lewat Vercel Functions
- Export state dan export settings disimpan lokal sebagai fallback, lalu disinkronkan otomatis ke database saat mode remote aktif
