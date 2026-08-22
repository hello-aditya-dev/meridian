import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/cn";

export interface Column {
  key: string;
  label: string;
  align?: "left" | "right";
  mono?: boolean;
}

export interface Row {
  [key: string]: React.ReactNode;
}

/**
 * Generic data table used across product mocks and marketing pages.
 */
export function DataTable({
  columns,
  rows,
  dense,
}: {
  columns: Column[];
  rows: Row[];
  dense?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-card">
      <table className="w-full min-w-[560px] text-left text-xs">
        <thead>
          <tr className="border-b border-zinc-100 bg-zinc-50/70">
            {columns.map((c) => (
              <th
                key={c.key}
                scope="col"
                className={cn(
                  "whitespace-nowrap px-3 py-2 font-medium uppercase tracking-wide text-zinc-500",
                  c.align === "right" && "text-right",
                  c.mono && "font-mono"
                )}
              >
                {c.label}
              </th>
            ))}
            <th className="w-8 px-2" />
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {rows.map((row, ri) => (
            <tr key={ri} className="transition-colors hover:bg-zinc-50/60">
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={cn(
                    "px-3 text-zinc-700",
                    dense ? "py-1.5" : "py-2.5",
                    c.mono && "font-mono tabular text-[11px]",
                    c.align === "right" && "text-right",
                    c.key === columns[0].key && "font-medium text-zinc-900"
                  )}
                >
                  {row[c.key]}
                </td>
              ))}
              <td className={cn("px-2 text-right", dense ? "py-1.5" : "py-2.5")}>
                <MoreHorizontal className="ml-auto size-3.5 text-zinc-300" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
