"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/locations", label: "Locations" },
];

const linkBase =
  "rounded-full px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.06em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 motion-reduce:transition-none";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? `${linkBase} bg-white font-semibold text-zinc-950`
                : `${linkBase} text-zinc-300 hover:bg-white/10 hover:text-white`
            }
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
