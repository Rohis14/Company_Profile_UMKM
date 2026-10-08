import { ContactForm } from "./contact-form";

const CONTACT_ROWS = [
  {
    label: "Phone",
    value: "+1 561 301 4406",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@Advizo.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Newtown, CT 06482",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Monday \u2013 Friday, 9:00 AM \u2013 6:00 PM (EST)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-serif text-[clamp(1.4rem,2.6vw,1.9rem)] font-medium leading-tight [font-variant-caps:small-caps]">
              <span className="text-white">Contact</span>{" "}
              <span className="text-gold">Information</span>
            </h3>
            <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-zinc-400">
              We help you find direction, remove friction, and keep your
              grooming and schedule moving forward&mdash;confidently.
            </p>

            <ul className="mt-6 space-y-3.5">
              {CONTACT_ROWS.map((row) => (
                <li key={row.label} className="flex items-center gap-3">
                  <span className="text-gold" aria-hidden="true">
                    {row.icon}
                  </span>
                  <span className="text-[13px] text-zinc-200">{row.value}</span>
                </li>
              ))}
            </ul>

            <div
              role="img"
              aria-label="Map showing Newtown, CT"
              className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-zinc-200"
            >
              <span className="absolute left-3 top-3 rounded bg-white px-2.5 py-1.5 text-[10px] font-medium text-zinc-900 shadow">
                View larger map
              </span>
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-gold"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">
                  Map location
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-[clamp(1.4rem,2.6vw,1.9rem)] font-medium leading-tight [font-variant-caps:small-caps]">
              <span className="text-white">Send Us A</span>{" "}
              <span className="text-gold">Message</span>
            </h3>
            <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-zinc-400">
              Fill up the form and our team will get back to you within 24
              hours.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
