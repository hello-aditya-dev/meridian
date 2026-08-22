export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <rect width="32" height="32" rx="7" className="fill-zinc-950" />
      <g fill="none" strokeWidth="1.6" className="stroke-accent-300">
        <circle cx="16" cy="16" r="8.5" />
        <ellipse cx="16" cy="16" rx="3.6" ry="8.5" />
        <path d="M7.5 16h17" />
      </g>
    </svg>
  );
}

export function Wordmark({ dark }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Mark className="size-7 rounded-lg" />
      <span
        className={`text-[17px] font-semibold tracking-tight ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        Meridian
      </span>
    </span>
  );
}
