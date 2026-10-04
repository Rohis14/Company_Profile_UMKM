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

## Dokumentasi

- Alur pengguna: [`docs/USER-FLOW.md`](docs/USER-FLOW.md)
- Dokumentasi teknis: [`docs/TECHNICAL.md`](docs/TECHNICAL.md)
- Wireframe & design system: [`docs/WIREFRAME.md`](docs/WIREFRAME.md)

Screenshot tampilan ada di [`docs/assets/`](docs/assets/) (diekspos dari Figma + hasil implementasi).
