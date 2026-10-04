const MICRO_TEXT =
  "precision cuts • modern grooming • expert styling • precision cuts • modern grooming •";

function ScissorsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-blue-500"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="flex w-full flex-col items-center px-6 pb-32 pt-8 text-center sm:pt-10">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/70 py-1.5 pl-2 pr-4 backdrop-blur-sm">
        <div aria-hidden="true" className="flex -space-x-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-[9px] font-bold text-white ring-2 ring-zinc-900">
            JK
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-[9px] font-bold text-zinc-900 ring-2 ring-zinc-900">
            M
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-[9px] font-bold text-zinc-950 ring-2 ring-zinc-900">
            RS
          </span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-100 sm:text-[11px]">
          Loved by 1M+ clients with a 4.8 rating
        </p>
      </div>

      <h1 className="mt-16 max-w-4xl text-[clamp(2.25rem,7.5vw,5.5rem)] font-black uppercase leading-[1.03]">
        <span className="block font-display italic tracking-tight text-white">
          Elevate your style,
        </span>
        <span className="block font-medium text-gold">Define your look</span>
      </h1>

      <div
        aria-hidden="true"
        className="mt-3 flex w-full max-w-[720px] items-center gap-4 text-[9px] font-medium uppercase tracking-[0.35em] text-white/15"
      >
        <span className="min-w-0 flex-1 truncate">{MICRO_TEXT}</span>
        <ScissorsIcon />
        <span className="min-w-0 flex-1 truncate">{MICRO_TEXT}</span>
      </div>

      <p className="mt-3 max-w-[640px] text-base leading-relaxed text-zinc-300 sm:text-lg">
        We help you define your style through precision cuts, modern grooming,
        and expert styling that build confidence and make every look stand out.
      </p>

      <div className="mt-20 w-full">
        <p className="text-xl font-medium text-zinc-100 sm:text-[22px]">
          Trusted grooming brands
        </p>

        <ul className="mt-16 grid w-full max-w-6xl grid-cols-2 items-center gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5">
          <li className="flex justify-center">
            <div className="flex h-[60px] w-[150px] flex-col items-center justify-center">
              <span className="font-serif text-[26px] font-bold leading-none tracking-wide text-[#c9a45c]">
                CAPTAIN
              </span>
              <span className="mt-1 text-[8px] font-semibold tracking-[0.35em] text-[#c9a45c]">
                MEN&apos;S CARE
              </span>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="flex h-[60px] w-[150px] flex-col items-center justify-center rounded-xl border border-white/10 bg-black">
              <span className="text-[15px] font-semibold tracking-[0.3em] text-white">
                TEZZEN
              </span>
              <span className="mt-1 text-[6px] tracking-[0.2em] text-zinc-400">
                MEN&apos;S GROOMING ESSENTIALS
              </span>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="flex h-[60px] w-[150px] flex-col items-center justify-center rounded-xl border border-white/10 bg-black">
              <span className="text-[19px] font-black tracking-wide text-white">
                CHIEF
              </span>
              <span className="mt-0.5 text-[6px] tracking-[0.2em] text-zinc-400">
                BARBER &amp; SUPPLIES CO.
              </span>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="flex h-[60px] w-[150px] flex-col items-center justify-center rounded-xl bg-zinc-200">
              <span className="font-serif text-[22px] font-bold italic text-[#1e3a8a]">
                Smith
              </span>
            </div>
          </li>
          <li className="flex justify-center">
            <div className="flex h-[60px] w-[150px] flex-col items-center justify-center rounded-xl bg-[#6b4a3f]">
              <span className="flex items-center text-[15px] font-bold tracking-[0.12em] text-white">
                HIS
                <span className="mx-[2px] bg-zinc-950 px-1">E</span>
                RHA
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
