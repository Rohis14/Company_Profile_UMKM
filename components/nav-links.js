"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "#top", hash: "" },
  { label: "About Us", href: "#about", hash: "#about" },
  { label: "Services", href: "#services", hash: "#services" },
  { label: "Products", href: "#products", hash: "#products" },
  { label: "Locations", href: "#contact", hash: "#contact" },
];

const linkBase =
  "rounded-full px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.06em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 motion-reduce:transition-none";

const activeClass = "bg-white font-semibold text-zinc-950";
const inactiveClass = "text-zinc-300 hover:bg-white/10 hover:text-white";

export function NavLinks() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const currentHash = hash === "#top" ? "" : hash;

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5">
      {NAV_ITEMS.map((item) => {
        const isHashLink = item.href.startsWith("#");
        const isActive = isHashLink
          ? currentHash === item.hash
          : pathname === item.href;

        const props = {
          href: item.href,
          className: isActive
            ? `${linkBase} ${activeClass}`
            : `${linkBase} ${inactiveClass}`,
          "aria-current": isActive ? (isHashLink ? "location" : "page") : undefined,
        };

        return isHashLink ? (
          <a key={item.href} {...props}>
            {item.label}
          </a>
        ) : (
          <Link key={item.href} {...props}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
