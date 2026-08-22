import { cn } from "@/lib/cn";

/* ---------------- LineChart (SVG) ---------------- */

export function LineChart({
  series,
  labels,
  height = 190,
}: {
  series: { data: number[]; className?: string; label: string }[];
  labels?: string[];
  height?: number;
}) {
  const W = 620;
  const H = height;
  const pad = { l: 34, r: 10, t: 12, b: 24 };
  const all = series.flatMap((s) => s.data);
  const max = Math.max(...all) * 1.08;
  const min = 0;
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;

  const toPath = (data: number[]) =>
    data
      .map((v, i) => {
        const x = pad.l + (i / (data.length - 1)) * iw;
        const y = pad.t + ih - ((v - min) / (max - min || 1)) * ih;
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

  const gridVals = [0, 0.25, 0.5, 0.75, 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden>
      {gridVals.map((g) => {
        const y = pad.t + ih - g * ih;
        return (
          <g key={g}>
            <line
              x1={pad.l}
              x2={W - pad.r}
              y1={y}
              y2={y}
              stroke="currentColor"
              className="text-zinc-100"
              strokeDasharray="3 4"
            />
            <text
              x={pad.l - 6}
              y={y + 3}
              textAnchor="end"
              className="fill-zinc-400 font-mono text-[9px]"
            >
              {Math.round(max * g) >= 1000
                ? `${Math.round((max * g) / 1000)}k`
                : Math.round(max * g)}
            </text>
          </g>
        );
      })}
      {series.map((s, si) => (
        <path
          key={si}
          d={toPath(s.data)}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={s.className ?? "stroke-accent-500"}
        />
      ))}
      {series.map((s, si) => {
        const lastX = pad.l + iw;
        const lastY =
          pad.t + ih - ((s.data[s.data.length - 1] - min) / (max - min || 1)) * ih;
        return (
          <circle key={`dot-${si}`} cx={lastX} cy={lastY} r="3" className={cn("fill-white", s.className ?? "stroke-accent-500")} strokeWidth="2" />
        );
      })}
      {labels?.map((l, i) => {
        if (labels.length > 8 && i % 2 !== 0) return null;
        return (
          <text
            key={l}
            x={pad.l + (i / (labels.length - 1)) * iw}
            y={H - 6}
            textAnchor="middle"
            className="fill-zinc-400 font-mono text-[9px]"
          >
            {l}
          </text>
        );
      })}
    </svg>
  );
}

/* ---------------- Bars ---------------- */

export function Bars({
  groups,
  height = 150,
}: {
  groups: { label: string; a: number; b: number }[];
  height?: number;
}) {
  const max = Math.max(...groups.flatMap((g) => [g.a, g.b])) * 1.05;
  return (
    <div>
      <div className="flex items-end gap-3" style={{ height }}>
        {groups.map((g) => (
          <div key={g.label} className="flex h-full flex-1 items-end gap-1">
            <div
              className="flex-1 rounded-t-[3px] bg-accent-500/85"
              style={{ height: `${(g.a / max) * 100}%` }}
            />
            <div
              className="flex-1 rounded-t-[3px] bg-zinc-200"
              style={{ height: `${(g.b / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-3">
        {groups.map((g) => (
          <p key={g.label} className="flex-1 text-center font-mono text-[10px] text-zinc-400">
            {g.label}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Heatmap ---------------- */

const heatLevels = [
  "bg-zinc-100",
  "bg-accent-200",
  "bg-accent-300",
  "bg-accent-400",
  "bg-accent-600",
];

export function Heatmap({
  rows,
  cols,
  seed = 3,
}: {
  rows: string[];
  cols: string[];
  seed?: number;
}) {
  // deterministic pseudo-random so SSR/client markup always match
  const levelAt = (r: number, c: number) => {
    const v = Math.abs(Math.sin((r + 1) * seed * 12.9898 + (c + 1) * 78.233)) % 1;
    return heatLevels[Math.floor(v * heatLevels.length)];
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-[3px]">
        <tbody>
          {rows.map((r, ri) => (
            <tr key={r}>
              <td className="whitespace-nowrap pr-2 text-right font-mono text-[10px] text-zinc-400">
                {r}
              </td>
              {cols.map((_, ci) => (
                <td key={ci}>
                  <div className={cn("size-full min-w-4 rounded-[3px]", levelAt(ri, ci))}>
                    <span className="sr-only">{`${r} ${cols[ci]}`}</span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td />
            {cols.map((c, i) =>
              i % 3 === 0 ? (
                <td key={c} className="pt-1 text-center font-mono text-[9px] text-zinc-400">
                  {c}
                </td>
              ) : (
                <td key={c} />
              )
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- Donut ---------------- */

export function Donut({
  segments,
  size = 120,
  centerLabel,
  centerSub,
}: {
  segments: { value: number; className: string }[];
  size?: number;
  centerLabel: string;
  centerSub?: string;
}) {
  const total = segments.reduce((a, s) => a + s.value, 0);
  const R = 15.9155; // circumference = 100
  let offset = 25;
  return (
    <div className="relative inline-grid place-items-center">
      <svg viewBox="0 0 42 42" width={size} height={size} aria-hidden>
        <circle cx="21" cy="21" r={R} fill="none" stroke="currentColor" className="text-zinc-100" strokeWidth="4" />
        {segments.map((s, i) => {
          const dash = (s.value / total) * 100;
          const el = (
            <circle
              key={i}
              cx="21"
              cy="21"
              r={R}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray={`${dash} ${100 - dash}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
              className={s.className}
            />
          );
          offset -= dash;
          return el;
        })}
      </svg>
      <div className="absolute text-center">
        <p className="text-lg font-semibold tracking-tight tabular">{centerLabel}</p>
        {centerSub ? (
          <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">{centerSub}</p>
        ) : null}
      </div>
    </div>
  );
}
