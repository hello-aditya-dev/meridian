import { ArrowUpRight, Download, Sparkles, X, Zap } from "lucide-react";
import { cn } from "@/lib/cn";
import { Bars, Donut, Heatmap, LineChart } from "./charts";
import { DataTable } from "./data-table";
import { ActivityFeed, Delta, MetricCard, StatusPill } from "./widgets";

/* ---------- shared panel ---------- */

export function Panel({
  title,
  action,
  children,
  className,
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-zinc-200 bg-white shadow-card", className)}>
      {title || action ? (
        <div className="flex items-center justify-between border-b border-zinc-100 px-3.5 py-2.5">
          <p className="text-xs font-semibold text-zinc-900">{title}</p>
          {action}
        </div>
      ) : null}
      <div className="p-3">{children}</div>
    </div>
  );
}

export function LegendDot({ className }: { className: string }) {
  return <span className={cn("inline-block size-2 rounded-full", className)} />;
}

function SectionHeader({ title, chip, button }: { title: string; chip: string; button: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2.5">
        <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
        <span className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[10px] text-zinc-500">
          {chip}
        </span>
      </div>
      <span className="inline-flex cursor-default items-center gap-1 rounded-md bg-accent-600 px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
        {button}
      </span>
    </div>
  );
}

/* ---------- Overview ---------- */

export function MockOverview() {
  return (
    <>
      <SectionHeader title="Operations overview" chip="Last 30 days" button="Export report" />
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="On-time delivery" value="96.8%" delta="+2.1%" spark={[82, 84, 83, 86, 88, 87, 90, 92, 91, 94, 95, 97]} />
        <MetricCard label="Open orders" value="1,284" delta="-3.2%" spark={[64, 62, 66, 61, 58, 60, 57, 55, 54, 52, 51, 49]} />
        <MetricCard label="Avg cycle time" value="4.2 days" delta="-11%" spark={[70, 68, 69, 65, 63, 64, 60, 58, 57, 55, 53, 50]} />
        <MetricCard label="Open exceptions" value="7" delta="-42%" spark={[90, 86, 84, 80, 74, 70, 62, 58, 50, 44, 38, 30]} />
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        <Panel
          title="Throughput"
          className="lg:col-span-2"
          action={
            <span className="flex items-center gap-3 font-mono text-[10px] text-zinc-500">
              <span className="flex items-center gap-1.5">
                <LegendDot className="bg-accent-500" /> Actual
              </span>
              <span className="flex items-center gap-1.5">
                <LegendDot className="bg-zinc-300" /> Forecast
              </span>
            </span>
          }
        >
          <LineChart
            height={170}
            labels={["W1", "", "W2", "", "W3", "", "W4"]}
            series={[
              { label: "Actual", data: [320, 360, 342, 398, 420, 452, 486] },
              { label: "Forecast", data: [300, 330, 352, 372, 400, 430, 462], className: "stroke-zinc-300" },
            ]}
          />
        </Panel>
        <ActivityFeed
          title="Live activity"
          items={[
            { title: "PO #8491 approved by policy engine", time: "12s", tone: "emerald" },
            { title: "Shipment SH-2201 departed Dallas hub", time: "41s", tone: "sky" },
            { title: "Inventory rebalance applied to MEM warehouse", time: "2m", tone: "emerald" },
            { title: "Supplier SLA breach detected — NovaParts", time: "6m", tone: "amber" },
            { title: "Forecast refreshed for EMEA region", time: "9m", tone: "zinc" },
            { title: "Customs docs auto-filed for 14 shipments", time: "12m", tone: "sky" },
          ]}
        />
      </div>
    </>
  );
}

/* ---------- Plan ---------- */

const planRows = [
  { lane: "DAL → MEM freight corridor", region: "US-Central", planned: "1,920 u", cap: "2,400 u", util: 80, status: ["running", "On plan"] },
  { lane: "Rotterdam DC replenishment", region: "EMEA", planned: "3,110 u", cap: "3,000 u", util: 104, status: ["warning", "Over plan"] },
  { lane: "West coast last-mile pool", region: "US-West", planned: "840 u", cap: "1,150 u", util: 73, status: ["running", "On plan"] },
  { lane: "APAC air freight allocation", region: "APAC", planned: "620 u", cap: "600 u", util: 103, status: ["blocked", "Rebalance"] },
  { lane: "Cold chain — Midwest routes", region: "US-East", planned: "415 u", cap: "520 u", util: 79, status: ["running", "On plan"] },
] as const;

function Utilization({ value }: { value: number }) {
  const color = value > 100 ? "bg-red-500" : value > 90 ? "bg-amber-500" : "bg-accent-500";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-zinc-100">
        <div className={cn("h-full rounded-full", color)} style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
      <span className="font-mono text-[11px] tabular text-zinc-600">{value}%</span>
    </div>
  );
}

export function MockPlan() {
  return (
    <>
      <SectionHeader title="Capacity planning" chip="Q3 · FY26" button="Auto-balance" />
      <DataTable
        columns={[
          { key: "lane", label: "Lane" },
          { key: "region", label: "Region" },
          { key: "planned", label: "Planned", align: "right", mono: true },
          { key: "cap", label: "Capacity", align: "right", mono: true },
          { key: "util", label: "Utilization" },
          { key: "status", label: "Status" },
        ]}
        rows={planRows.map((r) => ({
          lane: r.lane,
          region: r.region,
          planned: r.planned,
          cap: r.cap,
          util: <Utilization value={r.util} />,
          status: <StatusPill tone={r.status[0] as "running"}>{r.status[1]}</StatusPill>,
        }))}
      />
      <div className="grid grid-cols-3 gap-3">
        <MetricCard label="Planned spend" value="$4.28M" delta="-6.4%" />
        <MetricCard label="Slack capacity" value="+18%" />
        <MetricCard label="Rebalance actions" value="12 queued" delta="+4" />
      </div>
    </>
  );
}

/* ---------- Monitor ---------- */

const uptime = Array.from({ length: 30 }, (_, i) => (i === 9 || i === 22 ? "warn" : "ok"));

export function MockMonitor() {
  return (
    <>
      <SectionHeader title="Live monitoring" chip="Streaming · 68k events/min" button="Acknowledge all" />
      <div className="grid grid-cols-3 gap-3">
        <MetricCard label="Network SLA" value="99.98%" delta="+0.02%" />
        <MetricCard label="Active alerts" value="3" delta="-5" />
        <MetricCard label="Tracked shipments" value="12,408" delta="+318" />
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <Panel title="Alert stream">
          <ul className="divide-y divide-zinc-100 text-xs">
            {[
              ["warning", "Late departure · ORD → ATL · +47 min", "09:41"],
              ["running", "SH-3392 customs cleared · Rotterdam", "09:38"],
              ["blocked", "Dock conflict · MEM bay 12 double-booked", "09:31"],
              ["synced", "SAP sync completed · 4,120 records", "09:27"],
              ["running", "Temperature nominal · cold chain route 7", "09:24"],
              ["queued", "Rebalance plan awaiting approval · APAC", "09:19"],
            ].map(([tone, text, time]) => (
              <li key={text} className="flex items-center justify-between gap-3 py-2.5">
                <div className="flex min-w-0 items-center gap-2.5">
                  <StatusPill tone={tone as "running"}>{tone === "running" ? "OK" : tone === "queued" ? "Hold" : tone === "synced" ? "Sync" : tone === "warning" ? "Warn" : "Action"}</StatusPill>
                  <p className="truncate text-zinc-700">{text}</p>
                </div>
                <span className="font-mono text-[10px] tabular text-zinc-400">{time}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <div className="space-y-3">
          <Panel title="Fleet uptime — 30 days" action={<Delta value="99.98%" />}>
            <div className="flex h-14 items-end gap-[3px]">
              {uptime.map((u, i) => (
                <div
                  key={i}
                  className={cn("flex-1 rounded-t-[2px]", u === "warn" ? "bg-amber-400" : "bg-emerald-400/80")}
                  style={{ height: u === "warn" ? "62%" : "100%" }}
                  title={`Day ${i + 1}`}
                />
              ))}
            </div>
            <p className="mt-2 font-mono text-[10px] text-zinc-400">2 incidents · MTTR 23 min · zero SLA breaches</p>
          </Panel>
          <Panel title="Exception burn-down">
            <LineChart
              height={110}
              labels={["Mon", "Tue", "Wed", "Thu", "Fri"]}
              series={[{ label: "Open exceptions", data: [48, 41, 36, 25, 17] }]}
            />
          </Panel>
        </div>
      </div>
    </>
  );
}

/* ---------- Analyze ---------- */

export function MockAnalyze() {
  return (
    <>
      <SectionHeader title="Operational analytics" chip="Baseline vs Meridian" button="Share insight" />
      <div className="grid gap-3 lg:grid-cols-2">
        <Panel
          title="Cycle time by week"
          action={
            <span className="flex items-center gap-3 font-mono text-[10px] text-zinc-500">
              <span className="flex items-center gap-1.5"><LegendDot className="bg-accent-500" /> With Meridian</span>
              <span className="flex items-center gap-1.5"><LegendDot className="bg-zinc-200" /> Baseline</span>
            </span>
          }
        >
          <Bars
            groups={[
              { label: "W1", a: 5.1, b: 6.4 },
              { label: "W2", a: 4.8, b: 6.3 },
              { label: "W3", a: 4.4, b: 6.1 },
              { label: "W4", a: 4.5, b: 5.9 },
              { label: "W5", a: 4.0, b: 5.8 },
              { label: "W6", a: 3.6, b: 5.7 },
            ]}
          />
        </Panel>
        <Panel title="Demand density · region × hour">
          <Heatmap
            seed={5}
            rows={["NA", "EMEA", "APAC", "LATAM"]}
            cols={["00", "03", "06", "09", "12", "15", "18", "21"]}
          />
        </Panel>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        <Panel title="Order outcomes">
          <div className="flex items-center gap-5">
            <Donut
              centerLabel="96.8%"
              centerSub="on time"
              segments={[
                { value: 78, className: "text-accent-500" },
                { value: 14, className: "text-sky-400" },
                { value: 8, className: "text-zinc-300" },
              ]}
            />
            <ul className="space-y-1.5 text-[11px] text-zinc-600">
              <li className="flex items-center gap-1.5"><LegendDot className="bg-accent-500" /> On time</li>
              <li className="flex items-center gap-1.5"><LegendDot className="bg-sky-400" /> Delayed, recovered</li>
              <li className="flex items-center gap-1.5"><LegendDot className="bg-zinc-300" /> Cancelled</li>
            </ul>
          </div>
        </Panel>
        <Panel title="Cost per order">
          <p className="text-2xl font-semibold tracking-tight tabular">$18.42</p>
          <Delta value="-23% QoQ" />
          <SparklineMini />
        </Panel>
        <ActivityFeed
          title="Insight digests"
          items={[
            { title: "EMEA cycle time down 18% after rebalance", time: "1h" },
            { title: "Carrier mix shift saves $41k/mo modeled", time: "3h" },
            { title: "Anomaly flagged: APAC dwell +12%", time: "5h" },
            { title: "Weekly board metrics exported to Notion", time: "1d" },
          ]}
        />
      </div>
    </>
  );
}

function SparklineMini() {
  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="mt-2 h-6 w-full" aria-hidden>
      <polyline
        points="0,6 16,9 32,8 48,13 64,15 80,20 100,24"
        fill="none"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        className="stroke-accent-500"
      />
    </svg>
  );
}

/* ---------- Optimize ---------- */

const recs = [
  { title: "Rebalance 340 units DAL → MEM", meta: "$18.2k savings · 94% confidence", impact: "+$18.2k" },
  { title: "Switch 12 lanes to rail-first routing", meta: "$9.8k savings · 89% confidence", impact: "+$9.8k" },
  { title: "Consolidate LTL shipments in EMEA", meta: "$6.1k savings · 97% confidence", impact: "+$6.1k" },
  { title: "Renegotiate carrier SLA window", meta: "$4.4k savings · needs legal review", impact: "+$4.4k" },
];

export function MockOptimize() {
  return (
    <>
      <SectionHeader title="Optimization engine" chip="Simulated against live data" button="Apply selected" />
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="space-y-2.5 lg:col-span-2">
          {recs.map((r, i) => (
            <div key={r.title} className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-3 shadow-card">
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-amber-50 text-amber-600">
                <Zap className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-zinc-900">{r.title}</p>
                <p className="font-mono text-[10px] text-zinc-500">{r.meta}</p>
              </div>
              <span className="hidden font-mono text-xs font-medium text-emerald-600 tabular sm:block">{r.impact}</span>
              <span className={cn(
                "cursor-default rounded-md px-2.5 py-1 text-[11px] font-medium",
                i === 0 ? "bg-accent-600 text-white shadow-sm" : "border border-zinc-200 bg-white text-zinc-700"
              )}>
                {i === 0 ? "Applied" : "Apply"}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <Panel title="Projected monthly impact">
            <p className="text-2xl font-semibold tracking-tight tabular">$126k</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">across 4 accepted scenarios</p>
            <div className="mt-3 space-y-2">
              {[["Freight", 62], ["Inventory", 24], ["Labor", 14]].map(([label, pct]) => (
                <div key={label as string}>
                  <div className="mb-1 flex justify-between text-[10px] text-zinc-500">
                    <span>{label}</span>
                    <span className="font-mono tabular">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-100">
                    <div className="h-full rounded-full bg-accent-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
          <ActivityFeed
            title="Simulation log"
            items={[
              { title: "Scenario S-118 passed safety constraints", time: "now", tone: "emerald" },
              { title: "Monte Carlo run 10k iterations complete", time: "1m", tone: "zinc" },
              { title: "Approval routed to Dana Whitfield", time: "4m", tone: "sky" },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export const mockIcons = { ArrowUpRight, Download, Sparkles, X };
