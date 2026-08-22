import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import { comparison } from "@/lib/data";
import { cn } from "@/lib/cn";

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  return (
    <td
      className={cn(
        "px-4 py-3 text-center text-[13px]",
        highlight && "border-l border-accent-100 bg-accent-600/[0.03]"
      )}
    >
      {value === true ? (
        <Check className="mx-auto size-4 text-accent-600" strokeWidth={2.5} />
      ) : value === false ? (
        <Minus className="mx-auto size-4 text-zinc-300" />
      ) : (
        <span className="font-medium text-zinc-800 tabular">{value}</span>
      )}
    </td>
  );
}

export function ComparisonTable() {
  const cols = ["Starter", "Growth", "Enterprise"];
  const keys = ["starter", "growth", "enterprise"] as const;

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-card">
      <table className="w-full min-w-[760px] border-collapse">
        <thead>
          <tr className="border-b border-zinc-200">
            <th scope="col" className="w-[34%] px-6 py-5 text-left">
              <span className="text-sm font-semibold text-zinc-900">Compare plans</span>
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                Full feature matrix
              </span>
            </th>
            {cols.map((name) => (
              <th
                key={name}
                scope="col"
                className={cn(
                  "px-4 py-5 text-center",
                  name === "Enterprise" && "border-l border-accent-100 bg-accent-600/[0.04]"
                )}
              >
                <span className="block text-sm font-semibold text-zinc-900">{name}</span>
                <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                  {name === "Starter"
                    ? "$149/mo"
                    : name === "Growth"
                      ? "$490/mo"
                      : "Custom"}
                </span>
                {name === "Enterprise" ? (
                  <span className="mt-1.5 inline-block rounded-full bg-accent-600/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-700">
                    Most advanced
                  </span>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.map((group) => (
            <Fragment key={group.group}>
              <tr>
                <td colSpan={4} className="bg-zinc-50 px-6 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                  {group.group}
                </td>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.feature} className="transition-colors hover:bg-zinc-50/60">
                  <td className="border-t border-zinc-100 px-6 py-3 text-left text-[13px] text-zinc-700">
                    {row.feature}
                  </td>
                  {keys.map((k) => (
                    <Cell key={k} value={row[k]} highlight={k === "enterprise"} />
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
          <tr className="border-t border-zinc-200 bg-zinc-50/60">
            <td className="px-6 py-5 text-xs text-zinc-500">14-day free pilot on every plan</td>
            <td className="px-4 py-5 text-center">
              <a href="/contact" className="inline-flex h-9 w-full max-w-[9rem] items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-900 shadow-sm transition-colors hover:bg-white hover:bg-zinc-50">
                Start pilot
              </a>
            </td>
            <td className="px-4 py-5 text-center">
              <a href="/contact" className="inline-flex h-9 w-full max-w-[9rem] items-center justify-center rounded-lg bg-accent-600 px-3 text-xs font-medium text-white shadow-sm transition-colors hover:bg-accent-700">
                Start pilot
              </a>
            </td>
            <td className="border-l border-accent-100 bg-accent-600/[0.03] px-4 py-5 text-center">
              <a href="/contact" className="inline-flex h-9 w-full max-w-[9rem] items-center justify-center rounded-lg bg-zinc-900 px-3 text-xs font-medium text-white shadow-sm transition-colors hover:bg-zinc-700">
                Talk to sales
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
