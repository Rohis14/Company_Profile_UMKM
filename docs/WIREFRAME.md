# Wireframe & Design System — SiBarber

Penulis: Arga (UI/UX & Dokumentasi).
File Figma (sumber kebenaran desain): https://www.figma.com/design/O0ShMf9L8F7ojARyujcjqS/SiBarber-UI-UX?node-id=0-1&t=TjJ06M1JGWRwFz7B-1
Implementasi: `components/*.js`, `app/globals.css`, `app/page.js`.

## Cara membaca dokumen ini

- **Low-fi (Figma)** = kotak abu + label, fokus alur bukan warna.
- **Hi-fi (kode)** = hasil Tailwind di repo ini.
- Setiap section di bawah punya pasangan `wireframe-*.png` (dari Figma) dan `hasil-*.png` (screenshot web) di `docs/assets/`.

## Peta frame Figma → section kode

| # | Frame Figma | Section kode | Tujuan & CTA |
| :--- | :--- | :--- | :--- |
| 1 | Navbar + Hero | `navbar.js`, `nav-links.js`, `hero.js` (`#top`) | Kesan pertama: badge rating, headline, CTA. CTA: nav anchor + `Contact Us → #contact`. |
| 2 | About | `about.js` (`#about`) | Kepercayaan: statistik 15K/12/234 + pita layanan. Tanpa CTA, jembatan ke Services. |
| 3 | Services | `services.js` (`#services`) | Keputusan harga: 6 paket + badge signature. CTA: lanjut ke kontak. |
| 4 | Products | `products.js` (`#products`) | Katalog grooming + promo. CTA: tanya via kontak. |
| 5 | Reviews | `reviews.js` | Bukti sosial sebelum konversi. Tanpa form. |
| 6 | Contact + Footer | `contact.js`, `contact-form.js` (`#contact`), `footer.js` | Konversi: info + peta + form pesan; footer menu/sosial. CTA: `Send Message`. |

## Anotasi per section (ringkas)

1. **Navbar**: sticky, 3 kolom (logo kiri, pill nav tengah, CTA kanan). Mobile: pill nav disembunyikan (`hidden lg:block`) — pastikan ada menu mobile atau dokumentasikan sebagai limitasi.
2. **Hero**: badge avatar + rating, H1 dua baris (italic display + gold), marquee mikro, grid brand 2→3→5 kolom.
3. **About**: grid 1 kolom → `lg:2 kolom`, H2 italic uppercase dengan underline biru.
4. **Services**: daftar bernomor 01–06 dengan harga, 1 kartu signature ditonjolkan.
5. **Products**: grid kartu gambar + harga + deskripsi (gambar Unsplash, perlu fallback).
6. **Contact**: kartu `rounded-3xl` 2 kolom (`lg:`), kiri info + peta placeholder, kanan form 2 kolom (`sm:`) + textarea + tombol.

## Design token (dari kode)

| Token | Nilai | Pakai di |
| :--- | :--- | :--- |
| Background | `#0a0a0a` / `bg-zinc-950` | halaman, navbar `zinc-950/70` |
| Aksen emas | `#f5a623` (`text-gold`), lembut `#f0c24b` | harga, ikon, sorotan |
| Teks | `#ededed`, `zinc-300/400/500` | body, deskripsi, placeholder |
| Font headline | Geist italic (`font-display`) | hero H1 |
| Font judul section | Playfair (`font-serif`, small-caps) | About/Contact H2/H3 |
| Radius | `rounded-full` (pill/CTA), `rounded-3xl` (kartu kontak), `rounded-xl` (peta) | nav, tombol, kartu |
| Border | `border-white/10` | kartu, pill nav |
| Scroll | `smooth` + `scroll-padding-top: 96px`, hormati `prefers-reduced-motion` | anchor di bawah sticky header |

## Responsif

- Hero brand: `grid-cols-2 → sm:3 → lg:5`.
- Form kontak: `grid-cols-1 → sm:2`.
- Panel kontak: `grid-cols-1 → lg:2`.
- Uji wajib: 390px (tidak ada scroll-x), 768px, 1440px. Screenshot ketiganya masuk `docs/assets/`.

## Cara ekspor aset (5 menit di Figma)

1. Buka link Figma di atas → pilih 6 frame → Export PNG 2x.
2. Simpan sebagai `docs/assets/wireframe-navbar-hero.png`, `wireframe-about.png`, `wireframe-services.png`, `wireframe-products.png`, `wireframe-reviews.png`, `wireframe-contact-footer.png`.
3. Jalankan `npm run dev`, screenshot tiap section (desktop 1440 + mobile 390) sebagai `hasil-*.png` di folder yang sama.
4. Commit terpisah: `docs: tambah aset wireframe dan screenshot SiBarber`.

## Status implementasi vs desain

| Section | Status | Selisih yang diketahui |
| :--- | :--- | :--- |
| Navbar/Hero | Sudah | CTA `Contact Us` sudah benar ke `#contact`. |
| About/Services/Products/Reviews | Sudah | Harga services di kode (50–130) beda skala dengan `data/services.js` (ribuan) — samakan sebelum rilis. |
| Contact form | Sebagian | Tampilan sudah, pengiriman belum (lihat `USER-FLOW.md` + `TECHNICAL.md` §6). |
| Footer | Sebagian | Link `Industries/Categories/Jacket/...` dan sosial masih `href="#"` placeholder. |
| Peta lokasi | Placeholder | Kotak `Map location` + badge `View larger map` — ganti embed peta asli atau hapus sebelum demo. |
