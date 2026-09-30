const REVIEWS = [
  {
    initials: "TW",
    name: "Tomasz W.",
    role: "Warsaw Patron",
    quote:
      "\u201CGreat atmosphere and pure professionalism. The barber listened carefully, gave expert advice on beard sculpting, and the result turned out even better than I expected. Best hot towel shave in the city.\u201D",
    tag: "Master Haircut & Beard Trim",
  },
  {
    initials: "MK",
    name: "Micha\u0142 K.",
    role: "Club Reserve Member",
    quote:
      "\u201CHaving visited top barbershops across Europe, I keep coming back to SIBARBER. It is always on the same flawless level \u2014 razor-sharp fades, premium botanical pomades, and bespoke appointments with single malt bourbon.\u201D",
    tag: "Signature Lounge Experience",
  },
  {
    initials: "PR",
    name: "Pawe\u0142 R.",
    role: "Verified Client",
    quote:
      "\u201CFast online booking, strictly on time, and meticulous precision. You can see they craft according to facial anatomy standards, not just by eye. The hot towel and neck massage are unmatched.\u201D",
    tag: "Executive Cut & Hot Towel",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] font-medium leading-[1.1] text-white">
              <span className="block [font-variant-caps:small-caps]">
                Reviews from our
              </span>
              <span className="block italic text-gold [font-variant-caps:small-caps]">
                Gentlemen
              </span>
            </h2>
            <p className="mt-3 max-w-[360px] text-[11.5px] leading-relaxed text-zinc-400">
              Verified impressions from discerning patrons across our Mayfair
              flagship and downtown Warsaw barber chairs. Precision crafted,
              uncompromised hospitality.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-zinc-900 px-4 py-2.5">
            <span className="text-[11px] tracking-[0.1em] text-gold-soft">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
            <span className="text-[13px] font-bold text-white">4.9 / 5.0</span>
            <span className="text-[11px] text-zinc-400">
              (1,200+ VERIFIED)
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={review.initials}
              className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900/70 p-5"
            >
              <header className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-[11px] font-bold text-gold-soft">
                    {review.initials}
                  </span>
                  <div>
                    <span className="block text-[13px] font-bold uppercase tracking-wide text-white">
                      {review.name}
                    </span>
                    <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.15em] text-gold-soft">
                      {review.role}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] tracking-[0.1em] text-gold-soft">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </header>

              <p className="mt-4 flex-1 text-[12.5px] leading-relaxed text-zinc-400">
                {review.quote}
              </p>

              <footer className="mt-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-gold/50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-gold">
                  {review.tag}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-500">
                  <CheckIcon />
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
