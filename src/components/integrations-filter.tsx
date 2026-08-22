"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { integrationCategories, integrations } from "@/lib/data";

export function IntegrationsGrid() {
  const [active, setActive] = useState<string>("All");
  const cats = ["All", ...integrationCategories];
  const shown =
    active === "All" ? integrations : integrations.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {cats.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
              active === cat
                ? "border-zinc-900 bg-zinc-900 text-white shadow-sm"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((int) => (
          <div
            key={int.name}
            className="group flex animate-tab-in items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lift"
          >
            <span
              className="grid size-11 shrink-0 place-items-center rounded-lg text-sm font-bold text-white shadow-sm"
              style={{ backgroundColor: int.color }}
            >
              {int.monogram}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900">{int.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">{int.category}</p>
              <p className="mt-1.5 text-[13px] leading-snug text-zinc-600">{int.blurb}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center font-mono text-xs uppercase tracking-wider text-zinc-400">
        Showing {shown.length} of 120+ connectors · Don&apos;t see yours? It&apos;s one webhook away.
      </p>
    </div>
  );
}
