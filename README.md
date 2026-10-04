# SiBarber — Website Profile & Booking UMKM Barbershop

Aplikasi web responsif modern untuk UMKM Barbershop, dibangun dengan **Next.js (App Router)**, **React**, dan **Tailwind CSS**.
Data katalog (layanan, produk, barber, galeri, profil) disajikan lewat **API Routes Next.js** berbasis modul data JS, dan form kontak disiapkan untuk integrasi **Formspree**.

> Proyek ini dikerjakan sebagai simulasi tim software house **"KodeKita Studio"** — mata pelajaran Rekayasa Perangkat Lunak (RPL), Kelas XI.
> Repository: https://github.com/Rohis14/Company_Profile_UMKM
> Desain UI/UX & wireframe (Figma): https://www.figma.com/design/O0ShMf9L8F7ojARyujcjqS/SiBarber-UI-UX?node-id=0-1&t=TjJ06M1JGWRwFz7B-1

---

## Anggota Tim & Peran

| Nama | Peran (Role) | Tanggung Jawab Utama |
| :--- | :--- | :--- |
| **Rois Irfa'i Wahid** | Project Manager & Integration | Repository, branch `develop`, review PR, konfigurasi Next.js, resolve merge conflict |
| **Arga (@argottzz)** | UI/UX Designer & Dokumentasi | Wireframe/prototype di Figma, user flow, `README.md`, dokumentasi teknis |
| **Kaysan** | Frontend Developer | Slicing UI: Hero, Navbar, Footer, About, Services, Products, Reviews, Contact + styling Tailwind |
| **Sultan Azzam** | Backend Developer | Modul `data/*.js`, API Routes `app/api/*`, validasi, rencana integrasi WhatsApp booking |
| **Sultan Rasyid** | QA / Tester | Uji UI/UX & responsif, Issue `bug`, verifikasi PR sebelum merge |

---

## Fitur Utama

- **One-page company profile**: `Hero → About → Services → Products → Reviews → Contact` + `Navbar` sticky + `Footer` (`app/page.js`).
- **Navigasi anchor halus** dengan status aktif: `#top`, `#about`, `#services`, `#products`, `#contact` (`components/nav-links.js`).
- **Katalog layanan & produk**: harga dan deskripsi dari API (`/api/services`, `/api/products`).
- **Data barber, galeri, profil**: `/api/barbers`, `/api/gallery`, `/api/profile` (+ rute `[id]`).
- **Kontak**: info telepon/email/alamat/jam + form nama, email, telepon, pesan (`components/contact.js`, `components/contact-form.js`).
- **Tema dark responsif**: background `zinc-950`, aksen emas `text-gold (#f5a623)`, font Geist + Playfair Display, mobile-first (`sm:`, `lg:`).

---

## Cara Menjalankan Proyek Lokal

### Prasyarat

- Node.js 20+ dan npm
- Git

### 1. Clone repository

```bash
git clone https://github.com/Rohis14/Company_Profile_UMKM.git
cd Company_Profile_UMKM
```

### 2. Install dependensi

```bash
npm install
```

### 3. Jalankan mode pengembangan

```bash
npm run dev
```

Buka http://localhost:3000 di browser.

### 4. Build & jalan produksi

```bash
npm run build
npm start
```

### 5. Lint

```bash
npm run lint
```

---

## Struktur Folder

```
app/
  page.js            # susunan section landing (Hero, About, Services, Products, Reviews, Contact)
  layout.js          # Navbar + Footer global, font Geist & Playfair Display
  globals.css        # tema Tailwind (dark, gold #f5a623, smooth scroll)
  api/
    profile/route.js
    services/route.js + services/[id]/route.js
    products/route.js + products/[id]/route.js
    barbers/route.js  + barbers/[id]/route.js
    gallery/route.js  + gallery/[id]/route.js
components/          # hero, navbar, nav-links, about, services, products, reviews, contact, contact-form, footer
data/                # profile, services, products, barbers, gallery (CommonJS module.exports)
lib/formspree.js     # helper kirimPesan() ke Formspree
public/              # aset statis
docs/                # USER-FLOW, TECHNICAL, WIREFRAME + assets/
```

## API Endpoint

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| GET | `/api/profile` | Profil UMKM SiBarber |
| GET | `/api/services` | Daftar layanan |
| POST | `/api/services` | Tambah layanan (`nama, harga, deskripsi` wajib) |
| GET | `/api/services/[id]` | Detail layanan |
| GET | `/api/products` | Daftar produk grooming |
| GET | `/api/products/[id]` | Detail produk |
| GET | `/api/barbers` | Daftar barber |
| GET | `/api/barbers/[id]` | Detail barber |
| GET | `/api/gallery` | Daftar galeri |
| GET | `/api/gallery/[id]` | Detail galeri |

Contoh:

```bash
curl http://localhost:3000/api/services
curl http://localhost:3000/api/products/1
```

## Integrasi & Batasan Diketahui

- **Formspree**: helper `kirimPesan()` ada di `lib/formspree.js` (endpoint `https://formspree.io/f/mgvgzgw`), tetapi `components/contact-form.js` saat ini masih `onSubmit preventDefault` (belum memanggil helper). QA wajib uji ulang setelah disambungkan.
- **WhatsApp booking**: disebut di brief awal sebagai rencana integrasi, tetapi belum ada kode `wa.me` di repo ini (cek: tidak ada hasil pencarian `whatsapp|wa.me`). Ditandai sebagai TODO backend.
- **Data kontak ganda**: `data/profile.js` (Depok, `081234567890`) berbeda dengan tampilan `components/contact.js` (`+1 561...`, `info@Advizo.com`, Newtown CT). Perlu disepakati satu sumber kebenaran sebelum rilis.
- **Metadata**: `app/layout.js` masih memakai judul default `"Create Next App"` — ganti dengan `"SiBarber — Barbershop UMKM"` + deskripsi sebelum demo.

## Screenshot

| Tampilan | File |
| :--- | :--- |
| Hero desktop | `docs/assets/hasil-hero-desktop.png` |
| Services + Products | `docs/assets/hasil-services-products.png` |
| Contact mobile | `docs/assets/hasil-contact-mobile.png` |
| Wireframe Figma | `docs/assets/wireframe-*.png` + link Figma di atas |

> Cara isi: ekspor frame Figma `SiBarber-UI-UX` sebagai PNG ke `docs/assets/`, lalu screenshot `npm run dev` di `http://localhost:3000` ukuran desktop (1440px) dan mobile (390px).

## Dokumentasi

- Alur pengguna: [`docs/USER-FLOW.md`](docs/USER-FLOW.md)
- Dokumentasi teknis: [`docs/TECHNICAL.md`](docs/TECHNICAL.md)
- Wireframe & design system: [`docs/WIREFRAME.md`](docs/WIREFRAME.md)

Screenshot tampilan ada di [`docs/assets/`](docs/assets/) (diekspos dari Figma + hasil implementasi).
