import Image from "next/image";

const STATS = [
  { value: "15K", label: "Fresh cuts delivered" },
  { value: "12", label: "Master barbers" },
  { value: "234", label: "Customer reviews" },
];

const BAND_TEXT =
  "• Haircut • Style • Standard • Quality • Result • Precision • Service •";

// Foto barbershop untuk section About (Unsplash)
const ABOUT_IMAGE = {
  src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
  alt: "Suasana interior SiBarber barbershop",
};

function UnderlinedLine({ children, className }) {
  return (
    <span className="relative block w-fit">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-[58%] h-[2px] bg-blue-500"
      />
      <span className={`relative ${className}`}>{children}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 px-6 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.3rem)] font-bold italic uppercase leading-[1.15]">
            <UnderlinedLine className="text-white">
              Sibarber is a modern
            </UnderlinedLine>
            <UnderlinedLine className="text-gold">
              Grooming experience.
            </UnderlinedLine>
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-zinc-300">
            <p>
              Since day one, we have been dedicated to redefining the modern
              barbershop culture for the gentlemen of today. From our first
              chair to a trusted community space, we have built a recognizable
              brand where precision cuts meet unmatched comfort.
            </p>
            <p>
              At every visit, we welcome our clients the same way — with
              signature hospitality, professional expertise, and genuine
              attention to detail.
            </p>
            <p>
              Mastery of craft and passion for confidence are the true
              foundations of SiBarber.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <li key={stat.label} className="flex flex-col">
                <span className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-none text-white">
                  {stat.value}
                  <span className="text-gold">+</span>
                </span>
                <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-500">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          role="img"
          aria-label="Photo of the SiBarber barbershop"
          className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950"
        >
          <Image
            src={ABOUT_IMAGE.src}
            alt={ABOUT_IMAGE.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="w-full overflow-hidden bg-gold-soft py-4 text-center sm:py-5">
        <p className="whitespace-nowrap font-serif text-[13px] font-bold uppercase tracking-[0.06em] text-zinc-950 sm:text-[15px]">
          {BAND_TEXT}
        </p>
      </div>
    </section>
  );
}
