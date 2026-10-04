# Dokumentasi Teknis — SiBarber

Penulis: Arga (UI/UX & Dokumentasi).
Cakupan: arsitektur, routing, komponen, data, API, integrasi, styling, dan checklist QA.
Stack: Next.js 16.3.7 (App Router), React 19.2.8, Tailwind CSS v4, ESLint 9.

## 1. Arsitektur

- **Framework**: Next.js App Router. Setiap folder di `app/` adalah route; `page.js` = UI route, `route.js` = API endpoint.
- **Rendering**: Server Components sebagai default. Hanya komponen interaktif yang memakai `"use client"`: `components/contact-form.js` (form) dan `components/nav-links.js` (status hash aktif via `useState`/`useEffect`).
- **Data**: tidak ada database. Modul CommonJS di `data/*.js` (`module.exports`) diimpor langsung oleh API Routes (`import services from "@/data/services"`). Alias `@` dipetakan ke root via `jsconfig.json`.
- **Alur baca data**: `data/*.js` → `app/api/*/route.js` (GET) → komponen section (saat ini sebagian masih memakai konstanta lokal di komponen, lihat §4).

## 2. Routing & layout

| File | Peran |
| :--- | :--- |
| `app/layout.js` | `RootLayout`: font Geist/Geist_Mono/Playfair Display, `Navbar` sticky, `{children}`, `Footer`. Metadata masih default dan wajib diganti (lihat §7). |
| `app/page.js` | `Home`: satu route `/` berisi `<Hero/> <About/> <Services/> <Products/> <Reviews/> <Contact/>` dalam `<main>`, plus dekorasi radial di atas. |
| `app/globals.css` | `@import "tailwindcss"`, token `@theme inline` (gold, font), `scroll-behavior: smooth`, `scroll-padding-top: 96px`, `color-scheme: dark`. |
| `app/api/*/route.js` | REST JSON untuk profile, services, products, barbers, gallery (+ `[id]`). |

## 3. Komponen (pemetaan file)

| Komponen | File | Isi / catatan |
| :--- | :--- | :--- |
| Navbar | `components/navbar.js` | Logo gunting SVG, link `Sibarber`, CTA `Contact Us → #contact`. |
| NavLinks | `components/nav-links.js` | Pill nav, 5 item anchor, status aktif dari `window.location.hash`. |
| Hero | `components/hero.js` | Badge rating, headline display italic + gold, marquee mikro, 5 brand grooming. |
| About | `components/about.js` | `id="about"`, statistik 15K/12/234, pita teks layanan. |
| Services | `components/services.js` | 6 paket (50–130), 1 paket `signature`. Konstanta lokal `SERVICES` — belum fetch `/api/services`. |
| Products | `components/products.js` | Kartu produk + promo. Perlu dicek apakah sudah fetch `/api/products` atau masih lokal. |
| Reviews | `components/reviews.js` | Bukti sosial pelanggan. |
| Contact | `components/contact.js` | `id="contact"`, panel info + peta placeholder + `<ContactForm/>`. |
| ContactForm | `components/contact-form.js` | Client component, field first/last/email/phone/message, ikon SVG, submit `preventDefault`. |
| Footer | `components/footer.js` | Kolom Menu/Shop/Cart + sosial (Instagram, X, dst., `href="#"` placeholder). |

## 4. Data layer

| Modul | Contoh isi | Konsumen |
| :--- | :--- | :--- |
| `data/profile.js` | `{ nama: "SiBarber", alamat: "Jl. Raya Depok No. 10", telepon: "081234567890", jamBuka: "09:00 - 21:00" }` | `GET /api/profile` |
| `data/services.js` | `[{ id: 1, nama: "Haircut", harga: 25000 }, { id: 2, nama: "Haircut + Wash", harga: 35000 }, { id: 3, nama: "Hair Coloring", harga: 80000 }]` | `GET/POST /api/services` |
| `data/products.js` | 7 produk (Pomade 35000 … Hair Comb 15000) + `gambar` Unsplash | `GET /api/products` |
| `data/barbers.js` | Andi (Classic), Rizky (Modern) | `GET /api/barbers` |
| `data/gallery.js` | 3 item Unsplash + `sumber` | `GET /api/gallery` |

Catatan duplikasi: harga/nama di komponen `services.js` (70/65/130…) berbeda skala dengan `data/services.js` (25000/35000/80000). Tim perlu memutuskan: komponen fetch API (satu sumber) atau tetap statis untuk demo.

## 5. API detail

Pola respons sukses: `{ "message": "...", "data": ... }`.

- `GET /api/profile` → `{ message, data: profile }`.
- `GET /api/services` → daftar; `POST /api/services` body `{ nama, harga, deskripsi }`, validasi kosong → `400 { message: "Nama, harga, dan deskripsi wajib diisi" }`, sukses → `201 { message: "Layanan berhasil ditambahkan", data: newService }` dengan `id = services.length + 1` lalu `services.push`. **Catatan**: data in-memory, hilang saat restart; `id` bisa duplikat setelah hapus — cukup untuk demo, bukan produksi.
- `GET /api/products`, `/api/barbers`, `/api/gallery` + varian `[id]` mengikuti pola yang sama (cek tiap `route.js` sebelum demo karena beberapa dibuat saat merge backend dan perlu uji `404` id tidak ada).

Uji cepat setelah `npm run dev`:

```bash
curl http://localhost:3000/api/profile
curl http://localhost:3000/api/services
curl -X POST http://localhost:3000/api/services -H "Content-Type: application/json" -d "{\"nama\":\"Creambath\",\"harga\":40000,\"deskripsi\":\"Cuci + pijat kepala\"}"
curl http://localhost:3000/api/products/1
```

## 6. Integrasi eksternal

- **Formspree** (`lib/formspree.js: kirimPesan(data)`): POST `{ nama, email, pesan }` ke `https://formspree.io/f/mgvgzgw`, return `{ success, message, data }`. Status: **belum dipanggil** dari `ContactForm`. Penyambungan yang disarankan: jadikan `onSubmit` async, petakan field form ke `{ nama, email, pesan }`, tampilkan state loading/sukses/gagal, jangan commit URL kunci lain ke publik selain yang sudah ada.
- **WhatsApp**: tidak ada implementasi di repo (tidak ada `wa.me`). Rencana: tombol `https://wa.me/62XXXXXXXXXX?text=...` berisi nama + layanan + jadwal, nomor diambil dari `data/profile.js` setelah disepakati.

## 7. Styling & tema

- `globals.css`: `--background #0a0a0a`, `--color-gold #f5a623`, `--color-gold-soft #f0c24b`, font `--font-display` (Geist italic) untuk headline, `--font-serif` (Playfair) untuk judul section.
- Pola kelas: layout `mx-auto max-w-6xl px-6`, kartu `rounded-3xl border-white/10 bg-zinc-900/60`, CTA `rounded-full bg-white text-zinc-950`.
- TODO sebelum demo: `app/layout.js: metadata` ganti menjadi `{ title: "SiBarber — Barbershop UMKM", description: "..." }`; ganti `href="#"` footer/sosial dengan link asli atau hapus.

## 8. Checklist QA (untuk Sultan Rasyid)

1. `npm run lint` bersih; `npm run build` sukses.
2. Semua anchor navbar tidak tertutup header sticky (mobile + desktop).
3. Form: uji kosong, email salah, telepon huruf — pastikan ada pesan error setelah validasi ditambahkan.
4. API: GET semua endpoint 200 JSON; POST services tanpa field → 400; `[id]` tidak ada → respons 404 yang jelas (tambah jika belum ada).
5. Gambar Unsplash produk/galeri termuat (uji offline/lambat).
6. Responsif 390px / 768px / 1440px, tidak ada scroll horizontal.
7. Keyboard + `prefers-reduced-motion` (tab order, focus ring, animasi mati).

## 9. Deploy & pengembangan lanjut

- Deploy tercepat: Vercel (import repo, framework Next.js, tanpa env tambahan kecuali jika Formspree diganti env). Alternatif: `npm run build && npm start` di server Node 20+.
- Peningkatan yang disarankan setelah nilai: satukan sumber data (komponen fetch API), simpan data ke file/DB, tambah halaman booking + WhatsApp, ganti peta placeholder dengan embed OpenStreetMap/Google Maps, dan tambah tes (mis. Playwright untuk alur kontak).
