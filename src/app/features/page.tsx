import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { AppFrame } from "@/components/product-ui/app-frame";
import { MockMonitor } from "@/components/product-ui/mocks";
import { CommandPalette } from "@/components/product-ui/workflow-diagram";
import { DataTable } from "@/components/product-ui/data-table";
import { Heatmap } from "@/components/product-ui/charts";
import { StatusPill } from "@/components/product-ui/widgets";
import { pillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every Meridian capability: streaming ingest, orchestration, certified metrics, forecasting, governance, open APIs — shown on real product UI.",
};

const orderColumns = [
  { key: "order", label: "Order" },
  { key: "customer", label: "Customer" },
  { key: "lane", label: "Lane" },
  { key: "eta", label: "ETA", align: "right" as const, mono: true },
  { key: "status", label: "Status", align: "right" as const },
];

const orderRows = [
  {
    order: "PO-88124",
    customer: "Novara Retail",
    lane: "DAL → CHI",
    eta: "14:20",
    status: <StatusPill tone="running">On time</StatusPill>,
  },
  {
    order: "PO-88131",
    customer: "HelioSync",
    lane: "RTM → MUC",
    eta: "16:05",
    status: <StatusPill tone="warning">At risk</StatusPill>,
  },
  {
    order: "PO-88140",
    customer: "Quantive",
    lane: "MEM → ATL",
    eta: "09:45",
    status: <StatusPill tone="running">On time</StatusPill>,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything an operating layer needs. Nothing it doesn't."
        description="Each capability below ships in the core product — no add-on SKUs, no per-seat surprises. Shown here on the real interface."
      />

      {/* bento */}
      <Section className="border-t border-zinc-100">
        <div className="grid gap-4 lg:grid-cols-6">
          {/* live monitoring */}
          <Reveal className="lg:col-span-4">
            <div className="h-full space-y-4 rounded-xl border border-zinc-200 bg-zinc-50/50 p-5">
              <div>
                <h3 className="text-base font-semibold text-zinc-900">Live operational picture</h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Streaming events from every system into dashboards your operators trust at 3 a.m.
                </p>
              </div>
              <AppFrame active="Monitoring" breadcrumb="meridian.app/monitoring">
                <MockMonitor />
              </AppFrame>
            </div>
          </Reveal>

          {/* command palette */}
          <Reveal delay={90} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-5 rounded-xl border border-zinc-200 bg-zinc-50/50 p-5">
              <div>
                <h3 className="text-base font-semibold text-zinc-900">Command everything</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  ⌘K runs multi-step workflows across systems. Type intent; Meridian executes with guardrails.
                </p>
              </div>
              <CommandPalette />
            </div>
          </Reveal>

          {/* data table */}
          <Reveal className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between gap-5 rounded-xl border border-zinc-200 bg-white p-5 shadow-card">
              <div>
                <h3 className="text-base font-semibold text-zinc-900">One schema for every record</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  Orders, shipments and inventory normalized from TMS, WMS and ERP — with field-level lineage.
                </p>
              </div>
              <DataTable columns={orderColumns} rows={orderRows} />
            </div>
          </Reveal>

          {/* heatmap */}
          <Reveal delay={90} className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between gap-5 rounded-xl border border-zinc-200 bg-white p-5 shadow-card">
              <div>
                <h3 className="text-base font-semibold text-zinc-900">Patterns at a glance</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  Demand density, dwell risk and capacity heatmaps across any two dimensions you choose.
                </p>
              </div>
              <Heatmap seed={7} rows={["NA", "EMEA", "APAC", "LATAM"]} cols={["00", "03", "06", "09", "12", "15", "18", "21"]} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* grouped feature list */}
      <Section id="all-features" className="border-t border-zinc-100 bg-zinc-50/50">
        <Reveal>
          <SectionHeading
            eyebrow="Complete list"
            title="Grouped by the job it does."
            description="The same four pillars from the platform tour — with the full surface area of each."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.id} delay={(i % 2) * 90}>
              <div id={pillar.id} className="h-full scroll-mt-28 rounded-xl border border-zinc-200 bg-white p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-600">
                    {pillar.eyebrow}
                  </h3>
                  <a href={`/platform#${pillar.id}`} className="group inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900">
                    Deep dive
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
                <ul className="mt-5 space-y-3">
                  {[...pillar.bullets, ...extraFeatures[pillar.id]].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700">
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" variant="accent" size="lg">
            Request a demo
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            Compare plans
          </Button>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}

const extraFeatures: Record<string, string[]> = {
  plan: [
    "Promotion-aware demand modeling",
    "Multi-echelon inventory targets",
    "What-if lane and mode analysis",
    "Plan-vs-actual variance tracking",
  ],
  monitor: [
    "Business-hours-aware SLA clocks",
    "Escalation chains with on-call schedules",
    "Partner portal for 3PL visibility",
    "Mobile push acknowledgment",
  ],
  analyze: [
    "Certified metric definitions with owners",
    "Cohort, funnel and variance views",
    "Anomaly detection on 40+ patterns",
    "Scheduled digests to Slack & email",
  ],
  optimize: [
    "Constraint-based scenario simulation",
    "Confidence scoring on proposals",
    "Closed-loop realized-impact ledger",
    "Rollback with full audit trail",
  ],
};
