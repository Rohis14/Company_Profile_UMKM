const FOOTER_COLS = [
  {
    title: "Menu",
    links: [
      { label: "About", href: "#about" },
      { label: "Industries", href: "#" },
      { label: "Product", href: "#products" },
      { label: "Categories", href: "#" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Jacket", href: "#" },
      { label: "Torebag", href: "#" },
      { label: "Hat", href: "#" },
      { label: "Blouse", href: "#" },
    ],
  },
  {
    title: "Cart",
    links: [
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#" },
      { label: "Tutorials", href: "#" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0c0a]";

export default function Footer() {
  return (
    <footer className="bg-[#0d0c0a]">
      <div className="mx-auto w-full max-w-6xl px-6 pt-14">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-10">
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors duration-150 hover:bg-white/10 hover:text-white motion-reduce:transition-none ${linkFocus}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <address className="space-y-4 text-[14px] not-italic leading-relaxed">
              <div className="space-y-1 text-zinc-300">
                <p>9 Pearse Street.</p>
                <p>Kinsale</p>
                <p>York, China</p>
              </div>
              <div className="space-y-1 text-zinc-400">
                <p>
                  <a
                    href="mailto:info@momente.com"
                    className={`transition-colors duration-150 hover:text-white motion-reduce:transition-none ${linkFocus}`}
                  >
                    info@momente.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+128081301190"
                    className={`transition-colors duration-150 hover:text-white motion-reduce:transition-none ${linkFocus}`}
                  >
                    (+12) 808 130 1190
                  </a>
                </p>
              </div>
            </address>
          </div>

          <div className="grid grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h3 className="font-serif text-[13px] font-medium uppercase tracking-[0.2em] text-zinc-100">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`text-[14px] text-zinc-400 transition-colors duration-150 hover:text-white motion-reduce:transition-none ${linkFocus}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="mt-12 border-white/10" />

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[330px] text-[13.5px] leading-relaxed text-zinc-400">
            From branding to digital marketing. Our expert team is here to
            elevate your brand and connect you with your audience
          </p>
          <div className="flex gap-8 text-[12px] font-medium uppercase tracking-[0.12em] text-zinc-200">
            <a
              href="#"
              className={`transition-colors duration-150 hover:text-white motion-reduce:transition-none ${linkFocus}`}
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#"
              className={`transition-colors duration-150 hover:text-white motion-reduce:transition-none ${linkFocus}`}
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-10 h-[0.6em] overflow-hidden text-center text-[clamp(3.5rem,13vw,10rem)]"
        >
          <span className="block font-serif font-bold leading-[0.75] text-[#24201a]">
            SIBARBER.
          </span>
        </div>
      </div>
    </footer>
  );
}
