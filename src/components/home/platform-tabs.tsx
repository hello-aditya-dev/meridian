"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { pillars } from "@/lib/data";
import { AppFrame } from "@/components/product-ui/app-frame";
import {
  MockAnalyze,
  MockMonitor,
  MockOptimize,
  MockOverview,
  MockPlan,
} from "@/components/product-ui/mocks";

const frames: Record<string, React.ReactNode> = {
  plan: (
    <AppFrame active="Planning" breadcrumb="meridian.app/planning">
      <MockPlan />
    </AppFrame>
  ),
  monitor: (
    <AppFrame active="Monitoring" breadcrumb="meridian.app/monitoring">
      <MockMonitor />
    </AppFrame>
  ),
  analyze: (
    <AppFrame active="Analytics" breadcrumb="meridian.app/analytics">
      <MockAnalyze />
    </AppFrame>
  ),
  optimize: (
    <AppFrame active="Automation" breadcrumb="meridian.app/optimize">
      <MockOptimize />
    </AppFrame>
  ),
};

export function PlatformTabs() {
  const items = pillars;
  const [active, setActive] = useState(items[0].id);
  const pillar = items.find((p) => p.id === active) ?? items[0];

  return (
    <div>
      {/* tab bar */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Platform capabilities"
          className="inline-flex flex-wrap justify-center gap-1 rounded-xl border border-zinc-200 bg-zinc-50/80 p-1 shadow-card"
        >
          {items.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={active === p.id}
              onClick={() => setActive(p.id)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-150",
                active === p.id
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "text-zinc-600 hover:bg-white hover:text-zinc-900 hover:shadow-sm"
              )}
            >
              {p.tab}
            </button>
          ))}
        </div>
      </div>

      {/* panel */}
      <div
        key={pillar.id}
        className="mt-12 grid animate-tab-in items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14"
      >
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-600">
            {pillar.eyebrow}
          </p>
          <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            {pillar.title}
          </h3>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600">
            {pillar.description}
          </p>
          <ul className="mt-6 space-y-3">
            {pillar.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-700">
                <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent-50 text-accent-600">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Link
            href={`/platform#${pillar.id}`}
            className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900"
          >
            Explore {pillar.eyebrow.toLowerCase()}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-tr from-accent-100/50 via-transparent to-zinc-100 blur-xl"
          />
          {frames[pillar.id]}
        </div>
      </div>
    </div>
  );
}

export function OverviewFrame() {
  return (
    <AppFrame breadcrumb="meridian.app/operations">
      <MockOverview />
    </AppFrame>
  );
}
