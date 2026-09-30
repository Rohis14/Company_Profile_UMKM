import Link from "next/link";

import { NavLinks } from "./nav-links";

function BarberLogo() {
  return (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-amber-200"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    </span>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-5 lg:px-10"
      >
        <Link
          href="/"
          className="flex items-center gap-3 justify-self-start focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <BarberLogo />
          <span className="text-[15px] font-bold uppercase tracking-[0.14em] text-white">
            Sibarber
          </span>
        </Link>

        <div className="hidden justify-self-center lg:block">
          <NavLinks />
        </div>

        <Link
          href="/contact"
          className="justify-self-end rounded-full bg-white px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-950 transition-colors duration-150 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 motion-reduce:transition-none"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
