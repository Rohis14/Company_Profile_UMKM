"use client";

function UserIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const labelClass =
  "mb-1.5 block text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-zinc-800/80 py-2.5 text-[13px] text-white transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900";

const iconInputClass = `${inputClass} pl-9`;

function FieldIcon({ children }) {
  return (
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
      {children}
    </span>
  );
}

export function ContactForm() {
  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="first-name">
            First name
          </label>
          <div className="relative">
            <FieldIcon>
              <UserIcon className="h-4 w-4" />
            </FieldIcon>
            <input
              id="first-name"
              type="text"
              placeholder="Enter first name"
              className={iconInputClass}
            />
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="last-name">
            Last name
          </label>
          <div className="relative">
            <FieldIcon>
              <UserIcon className="h-4 w-4" />
            </FieldIcon>
            <input
              id="last-name"
              type="text"
              placeholder="Enter last name"
              className={iconInputClass}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <div className="relative">
            <FieldIcon>
              <MailIcon className="h-4 w-4" />
            </FieldIcon>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              className={iconInputClass}
            />
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <div className="relative">
            <FieldIcon>
              <PhoneIcon className="h-4 w-4" />
            </FieldIcon>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone"
              className={iconInputClass}
            />
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Type here . . ."
          className={`${inputClass} min-h-[96px] resize-y px-4 py-3`}
        />
      </div>

      <button
        type="button"
        className="rounded-lg bg-zinc-700 px-5 py-2.5 text-[13px] font-medium text-white transition-colors duration-150 hover:bg-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 motion-reduce:transition-none"
      >
        Send Message
      </button>
    </form>
  );
}
