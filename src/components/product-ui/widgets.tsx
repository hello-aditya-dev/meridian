import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";

/* ---------------- StatusPill ---------------- */

const tones = {
  running: {
    pill: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
    dot: "bg-emerald-500 animate-pulse",
  },
  queued: {
    pill: "bg-zinc-100 text-zinc-600 ring-zinc-500/15",
    dot: "bg-zinc-400",
  },
  warning: {
    pill: "bg-amber-50 text-amber-700 ring-amber-600/20",
    dot: "bg-amber-500",
  },
  blocked: {
    pill: "bg-red-50 text-red-700 ring-red-600/15",
    dot: "bg-red-500",
  },
  synced: {
    pill: "bg-sky-50 text-sky-700 ring-sky-600/15",
    dot: "bg-sky-500",
  },
} as const;

export function StatusPill({
  tone,
  children,
}: {
  tone: keyof typeof tones;
  children: React.ReactNode;
}) {
  const t = tones[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset",
        t.pill
      )}
    >
      <span className={cn("size-1.5 rounded-full", t.dot)} />
      {children}
    </span>
  );
}

/* ---------------- Delta ---------------- */

export function Delta({ value }: { value: string }) {
  const down = value.trim().startsWith("-");
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular",
        down ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"
      )}
    >
      {down ? <TrendingDown className="size-3" /> : <TrendingUp className="size-3" />}
      {value}
    </span>
  );
}

/* ---------------- Sparkline ---------------- */

export function Sparkline({
  data,
  className,
  strokeClassName = "stroke-accent-500",
  area = true,
}: {
  data: number[];
  className?: string;
  strokeClassName?: string;
  area?: boolean;
}) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * 100,
    26 - ((v - min) / range) * 22,
  ]);
  const line = pts.map((p) => p.join(",")).join(" ");

  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden className={className}>
      {area ? (
        <polygon points={`0,28 ${line} 100,28`} className="fill-accent-500/10" />
      ) : null}
      <polyline
        points={line}
        fill="none"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className={strokeClassName}
      />
    </svg>
  );
}

/* ---------------- MetricCard ---------------- */

export function MetricCard({
  label,
  value,
  delta,
  spark,
}: {
  label: string;
  value: string;
  delta?: string;
  spark?: number[];
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-3.5 shadow-card">
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-[11px] font-medium uppercase tracking-wide text-zinc-500">
          {label}
        </p>
        {delta ? <Delta value={delta} /> : null}
      </div>
      <p className="mt-1.5 text-xl font-semibold tracking-tight text-zinc-900 tabular">
        {value}
      </p>
      {spark ? <Sparkline data={spark} className="mt-2 h-6 w-full" /> : null}
    </div>
  );
}

/* ---------------- Avatar ---------------- */

const avatarPalette = [
  "from-indigo-500 to-violet-600",
  "from-sky-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
];

export function Avatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "xs" | "md" | "lg";
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const palette =
    avatarPalette[name.charCodeAt(0) % avatarPalette.length] ?? avatarPalette[0];
  const sizes = {
    xs: "size-4 text-[7px]",
    md: "size-6 text-[9px]",
    lg: "size-10 text-xs",
  };
  return (
    <span
      className={cn(
        "inline-grid shrink-0 place-items-center rounded-full bg-gradient-to-br font-semibold text-white",
        palette,
        sizes[size],
        className
      )}
    >
      {initials}
    </span>
  );
}

/* ---------------- ActivityFeed ---------------- */

export interface FeedItem {
  title: string;
  time: string;
  tone?: "emerald" | "sky" | "amber" | "red" | "zinc";
  initials?: string;
}

const feedTones = {
  emerald: "bg-emerald-50 text-emerald-600",
  sky: "bg-sky-50 text-sky-600",
  amber: "bg-amber-50 text-amber-600",
  red: "bg-red-50 text-red-600",
  zinc: "bg-zinc-100 text-zinc-600",
};

export function ActivityFeed({
  title = "Activity",
  items,
  className,
}: {
  title?: string;
  items: FeedItem[];
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-zinc-200 bg-white shadow-card", className)}>
      <div className="border-b border-zinc-100 px-3.5 py-2.5">
        <p className="text-xs font-semibold text-zinc-900">{title}</p>
      </div>
      <ul className="divide-y divide-zinc-100 px-3.5">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-2.5 py-2.5">
            <Avatar name={item.initials ?? item.title} size="md" />
            <p className="flex-1 text-xs leading-snug text-zinc-700">{item.title}</p>
            <span className="whitespace-nowrap font-mono text-[10px] text-zinc-400">
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
