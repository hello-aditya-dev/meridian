import type { Metadata } from "next";
import { ArrowRight, Webhook, Braces, Gauge } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { IntegrationsGrid } from "@/components/integrations-filter";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "120+ prebuilt connectors: Salesforce, SAP, Snowflake, Slack, Microsoft, AWS and more — plus typed SDKs and webhooks for everything else.",
};

const apiStats = [
  { icon: Braces, label: "120+ connectors" },
  { icon: Gauge, label: "<100ms p95 API latency" },
  { icon: Webhook, label: "Typed webhooks, at-least-once delivery" },
];

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-lift">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#f87171]/70" />
        <span className="size-2.5 rounded-full bg-[#fbbf24]/70" />
        <span className="size-2.5 rounded-full bg-[#34d399]/70" />
        <span className="ml-3 font-mono text-[11px] text-zinc-500">rebalance.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-300">
        <code>
          <span className="text-accent-400">import</span> {"{ Meridian }"} <span className="text-accent-400">from</span>{" "}
          <span className="text-emerald-400">&quot;@meridian/sdk&quot;</span>;{"\n\n"}
          <span className="text-accent-400">const</span> meridian = <span className="text-accent-400">new</span>{" "}
          Meridian(process.env.<span className="text-sky-300">MERIDIAN_API_KEY</span>);{"\n\n"}
          <span className="text-zinc-500">{"// executes across TMS + WMS with guardrails"}</span>{"\n"}
          <span className="text-accent-400">const</span> run = <span className="text-accent-400">await</span>{" "}
          meridian.workflows.<span className="text-sky-300">run</span>(<span className="text-emerald-400">&quot;rebalance-inventory&quot;</span>, {"{"}
          {"\n  "}params: {"{ "}source: <span className="text-emerald-400">&quot;DAL&quot;</span>, target:{" "}
          <span className="text-emerald-400">&quot;MEM&quot;</span>, units: <span className="text-amber-300">340</span>{" },"}
          {"\n  "}approval: {"{ "}policy: <span className="text-emerald-400">&quot;auto_below_25k&quot;</span>{" },"}
          {"\n"}{"}"});{"\n"}
        </code>
      </pre>
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Your stack, unified in days."
        description="Prebuilt connectors sync bidirectionally with the systems you already run — ERP, CRM, WMS, data warehouses, messaging and more. Everything else is a typed webhook away."
      />

      <Section className="border-t border-zinc-100">
        <Reveal>
          <IntegrationsGrid />
        </Reveal>
      </Section>

      {/* api */}
      <Section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-600">
              Open platform
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              If the UI can do it, the API can do it.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-zinc-600">
              Typed REST endpoints, idempotent writes, cursor pagination and signed
              webhooks. TypeScript, Python and Go SDKs are generated from the same OpenAPI
              spec we serve — so they never drift.
            </p>
            <div className="mt-7 space-y-3">
              {apiStats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 text-sm text-zinc-700">
                  <span className="grid size-8 place-items-center rounded-md border border-zinc-200 bg-white text-accent-600 shadow-sm">
                    <s.icon className="size-4" />
                  </span>
                  {s.label}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <CodeCard />
          </Reveal>
        </div>
      </Section>

      {/* partner */}
      <Section>
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-10 text-center shadow-card md:flex-row md:text-left">
            <div className="max-w-xl">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
                Build a connector, reach every customer.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Our partner program gives you sandbox access, co-marketing and placement in
                this directory. Most partners ship their connector in under two weeks.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-zinc-900 px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-700"
            >
              Become a partner
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
