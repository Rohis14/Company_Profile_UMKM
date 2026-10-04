const SERVICES = [
  {
    no: "01",
    title: "Men's Haircut",
    desc: "Precision shear & razor work, scalp cleanse, hot towel finish",
    price: "70",
  },
  {
    no: "02",
    title: "Beard Trimming",
    desc: "Sculpting, straight-razor cheek line, botanical beard oil",
    price: "65",
  },
  {
    no: "03",
    title: "Combo (Hair + Beard)",
    signature: true,
    desc: "Complete grooming experience with hot lather neck shave",
    price: "130",
  },
  {
    no: "04",
    title: "Long Hair Scissor Cut",
    desc: "Shear architecture, texturizing, blowout & clay finish",
    price: "120",
  },
  {
    no: "05",
    title: "Father & Son Haircut",
    desc: "Two classic cuts side-by-side with heritage lounge refreshment",
    price: "130",
  },
  {
    no: "06",
    title: "Sides Only",
    desc: "Skin fade clean-up, contour edging and neck taper refresh",
    price: "50",
  },
];

function ScissorsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-16 sm:pt-20">
        <div className="text-center">
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight tracking-[0.02em] text-white [font-variant-caps:small-caps]">
            Most Popular Service
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[13px] leading-relaxed text-zinc-400">
            These are the refined services most frequently chosen in our
            flagship lounges. Want more bespoke treatments? Inquire about our
            private full repertoire.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-14">
          <ul>
            {SERVICES.map((service) => (
              <li
                key={service.no}
                className="group flex items-center gap-3 border-b border-white/10 py-5 sm:gap-5"
              >
                <span className="hidden shrink-0 text-[13px] tracking-[0.08em] text-zinc-500 sm:block">
                  {`[ ${service.no} ]`}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-[17px] font-black uppercase leading-tight tracking-tight text-white sm:text-[21px]">
                      {service.title}
                    </h3>
                    {service.signature && (
                      <span className="rounded-full border border-gold/60 bg-gold/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-gold">
                        Signature
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[12px] leading-snug text-zinc-400 sm:text-[13px]">
                    {service.desc}
                  </p>
                </div>

                <div className="w-20 shrink-0 sm:w-24">
                  <span className="block text-[9px] font-medium uppercase tracking-[0.15em] text-zinc-500">
                    From
                  </span>
                  <span className="block whitespace-nowrap font-serif text-[22px] font-semibold leading-tight text-white sm:text-[26px]">
                    {service.price} zł
                  </span>
                </div>

                <a
                  href="#contact"
                  aria-label={`Book ${service.title}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-200 transition-colors duration-150 hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 motion-reduce:transition-none"
                >
                  <ArrowUpRightIcon />
                </a>
              </li>
            ))}
          </ul>

          <div
            role="img"
            aria-label="Photo of a SiBarber barber at work"
            className="flex aspect-[13/20] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950"
          >
            <div className="flex flex-col items-center gap-4 text-zinc-600">
              <ScissorsIcon />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
                Barbershop photo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
