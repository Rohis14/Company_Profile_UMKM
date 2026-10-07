"use client";

import { useEffect, useState } from "react";

// Harga dari API berupa angka dalam ribuan (mis. 35000),
// format tampilan tetap dollar dengan 2 desimal: $35.00
function formatPrice(harga) {
  const value = Number(harga) / 1000;
  return `$${(Number.isFinite(value) ? value : 0).toFixed(2)}`;
}

function ScissorsIcon({ className = "h-16 w-16" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function BarberIcon() {
  return <ScissorsIcon className="h-5 w-5" />;
}

const FEATURES = [
  {
    icon: <BarberIcon />,
    title: "Barber Formulated",
    desc: "Tested and tuned across 10,000+ Mayfair chair sessions.",
  },
  {
    icon: <LeafIcon />,
    title: "Pure Botanicals",
    desc: "Zero parabens, no synthetic sulfates or artificial heavy dyes.",
  },
  {
    icon: <TruckIcon />,
    title: "Complimentary Dispatch",
    desc: "Free insured courier on all luxury orders exceeding $50.",
  },
];

function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-xl bg-zinc-950">
      <div className="relative aspect-[4/3] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-zinc-600">
            <ScissorsIcon className="h-8 w-8" />
            <span className="text-[8px] font-semibold uppercase tracking-[0.3em]">
              Product photo
            </span>
          </div>
        )}
        {product.rating != null && (
          <span className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold text-white">
            <span className="text-gold-soft">★</span>
            {product.rating}
          </span>
        )}
        {product.tag && (
          <span
            className={`absolute bottom-3 left-3 rounded-md px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] ${
              product.goldTag
                ? "bg-gold-soft text-zinc-950"
                : "bg-black/70 text-white"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-[15px] font-bold text-white">{product.title}</h3>
        <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-zinc-400">
          {product.desc}
        </p>
        <p className="mt-3 font-serif text-[22px] font-semibold text-gold-soft">
          {product.price}
        </p>
      </div>
    </article>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        const response = await fetch("/api/products", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Gagal memuat produk (${response.status})`);
        }

        const result = await response.json();
        const list = Array.isArray(result?.data) ? result.data : [];

        setProducts(
          list.map((item) => ({
            id: item.id,
            title: item.nama,
            desc: item.deskripsi,
            price: formatPrice(item.harga),
            tag: item.tag,
            rating: item.rating,
            image: item.gambar,
            goldTag: item.goldTag,
          }))
        );
        setError(null);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setProducts([]);
        setError(err?.message || "Gagal memuat produk");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  return (
    <section id="products" className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16 text-center sm:pt-20">
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight tracking-[0.02em] text-white [font-variant-caps:small-caps]">
          Our Products
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[13px] leading-relaxed text-zinc-400">
          Engineered for the discerning modern gentleman. Small-batch botanical
          infusions tested across ten thousand lounge chair sessions for
          uncompromised hold, nourishment, and distinction.
        </p>
      </div>

      <div className="bg-gold-soft px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {loading &&
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="h-[280px] animate-pulse rounded-xl bg-zinc-950"
                />
              ))}

            {!loading && error && (
              <p className="col-span-full rounded-xl bg-zinc-950 px-4 py-6 text-center text-[13px] text-zinc-400">
                {error}
              </p>
            )}

            {!loading &&
              !error &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

            <div className="relative flex flex-col justify-center overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-6 sm:col-span-2">
              <div className="flex flex-col items-start gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-soft px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-950">
                  <BellIcon />
                  Member Exclusive Privilege
                </span>
                <h3 className="text-[20px] font-black uppercase leading-tight text-white sm:text-[26px]">
                  Look sharp, save big.
                </h3>
                <p className="text-[20px] font-black uppercase leading-tight text-gold-soft sm:text-[26px]">
                  30% off all formulas
                </p>
                <p className="mt-1 max-w-md text-[12px] leading-relaxed text-zinc-400">
                  Subscribe to our Reserve Grooming Dispensary for automated
                  seasonal shipments, personal master barber formulas, and
                  private CLUB events.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-6 rounded-2xl bg-zinc-950 p-6 sm:grid-cols-3 sm:gap-8 sm:p-8">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300">
                  {feature.icon}
                </span>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.08em] text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-[12px] leading-snug text-zinc-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
