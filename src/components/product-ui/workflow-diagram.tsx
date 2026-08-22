import {
  ArrowRight,
  CheckCircle2,
  Database,
  Rocket,
  Webhook,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar, StatusPill } from "./widgets";

const steps = [
  { icon: Webhook, label: "Event trigger", sub: "SAP · WMS · EDI" },
  { icon: Database, label: "Enrich context", sub: "12 connected sources" },
  { icon: CheckCircle2, label: "Evaluate policy", sub: "240 business rules" },
  { icon: Rocket, label: "Execute actions", sub: "6 downstream systems" },
];

/**
 * Orchestration diagram: event → enrich → policy → execute,
 * with a human-approval branch under the policy step.
 */
export function WorkflowDiagram() {
  return (
    <div className="grid-bg rounded-xl border border-zinc-200 bg-white p-5 shadow-card md:p-8">
      <div className="flex flex-col items-stretch gap-3 lg:flex-row">
        {steps.map((step, i) => (
          <div key={step.label} className="contents lg:flex lg:flex-1 lg:items-center">
            <Node {...step} highlight={i === 2} />
            {i < steps.length - 1 ? (
              <div className="flex justify-center py-1 lg:px-2 lg:py-0">
                <ArrowRight className="size-4 rotate-90 text-zinc-300 lg:rotate-0" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* human-in-the-loop branch */}
      <div className="mt-1 flex justify-center lg:justify-start lg:pl-[38%]">
        <div className="flex flex-col items-center">
          <div className="h-7 border-l-2 border-dashed border-zinc-300" />
          <div className="flex w-full max-w-xs items-center gap-3 rounded-lg border border-dashed border-accent-300 bg-accent-50/60 p-3">
            <Avatar name="Dana Whitfield" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-zinc-900">Approval required</p>
              <p className="text-[11px] text-zinc-500">Dana Whitfield · Ops Director</p>
            </div>
            <StatusPill tone="queued">SLA 2h</StatusPill>
          </div>
        </div>
      </div>
    </div>
  );
}

function Node({
  icon: Icon,
  label,
  sub,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-1 items-center gap-3 rounded-lg border bg-white p-3 shadow-card",
        highlight ? "border-accent-200 ring-2 ring-accent-100" : "border-zinc-200"
      )}
    >
      <span
        className={cn(
          "grid size-8 shrink-0 place-items-center rounded-md",
          highlight ? "bg-accent-600 text-white" : "bg-zinc-100 text-zinc-600"
        )}
      >
        <Icon className="size-4" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-zinc-900">{label}</p>
        <p className="truncate font-mono text-[10px] text-zinc-400">{sub}</p>
      </div>
    </div>
  );
}

/* ---------- command palette (decorative) ---------- */

export function CommandPalette() {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white text-left shadow-lift">
      <div className="flex items-center gap-2.5 border-b border-zinc-100 px-3.5 py-3">
        <svg viewBox="0 0 24 24" className="size-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <p className="flex-1 text-sm text-zinc-900">
          Rebalance inventory
          <span className="ml-0.5 inline-block h-4 w-px translate-y-[3px] animate-blink bg-accent-600" />
        </p>
        <kbd className="rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">⌘K</kbd>
      </div>
      <ul className="p-1.5 text-sm">
        {[
          ["→ MEM warehouse · 340 units", true],
          ["→ DAL surplus pool · source", false],
          ["→ Schedule freight · tonight 22:00", false],
          ["→ Notify regional ops · #logistics", false],
        ].map(([label, active]) => (
          <li
            key={label as string}
            className={cn(
              "flex cursor-default items-center justify-between rounded-md px-2.5 py-2",
              active ? "bg-accent-50 text-accent-900" : "text-zinc-700"
            )}
          >
            <span className="font-mono text-xs">{label}</span>
            {active ? (
              <kbd className="rounded border border-accent-200 bg-white px-1 font-mono text-[10px] text-accent-700">↵</kbd>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="border-t border-zinc-100 px-3.5 py-2 font-mono text-[10px] text-zinc-400">
        ↑↓ navigate · ↵ run · esc dismiss
      </div>
    </div>
  );
}
