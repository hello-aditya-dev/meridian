import type { Metadata } from "next";
import { Check, Cloud, Lock, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { AppFrame } from "@/components/product-ui/app-frame";
import {
  MockAnalyze,
  MockMonitor,
  MockOptimize,
  MockPlan,
} from "@/components/product-ui/mocks";
import { WorkflowDiagram, CommandPalette } from "@/components/product-ui/workflow-diagram";
import { pillars } from "@/lib/data";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Plan, monitor, analyze and optimize — Meridian's four pillars on one operating layer with streaming ingest, policy orchestration and open APIs.",
};

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

function PillarSection({ id, index }: { id: string; index: number }) {
  const pillar = pillars.find((p) => p.id === id)!;
  const flip = index % 2 === 1;
  return (
    <Section id={pillar.id} className={cn(index > 0 && "border-t border-zinc-100")}>
      <div className={cn("grid items-center gap-12 lg:grid-cols-2 lg:gap-20")}>
        <Reveal className={cn(flip && "lg:order-2")}>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-600">
            {`0${index + 1} · ${pillar.eyebrow}`}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {pillar.title}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
            {pillar.description}
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {pillar.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 rounded-lg border border-zinc-100 bg-zinc-50/60 p-3 text-sm text-zinc-700">
                <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent-600/10 text-accent-700">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className={cn(flip && "lg:order-1")}>
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-tr from-accent-100/40 via-transparent to-zinc-100 blur-xl" />
            {frames[pillar.id]}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const deployments = [
  {
    icon: Cloud,
    title: "Cloud (multi-tenant)",
    desc: "Fully managed on AWS with regional isolation. Fastest time to value; upgrades are automatic and zero-downtime.",
  },
  {
    icon: Lock,
    title: "Dedicated single-tenant",
    desc: "Your own isolated environment in US, EU or APAC. Custom maintenance windows and data-residency pinning.",
  },
  {
    icon: Boxes,
    title: "Hybrid edge agents",
    desc: "Run connectors inside your VPC for systems that can't leave the perimeter. Events stream out; data stays home.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="The operating layer, in depth."
        description="Four pillars — planning, monitoring, analytics and optimization — running on one unified data layer with policy-based orchestration and an API for everything."
      />

      {pillars.map((p, i) => (
        <PillarSection key={p.id} id={p.id} index={i} />
      ))}

      {/* architecture */}
      <Section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Architecture"
              title="Orchestration with humans exactly where you want them."
              description="Events stream in from every system, policies evaluate against live context, and approvals route to the right person with full reasoning attached. Executed decisions propagate atomically — with a complete audit trail."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {["Sub-second ingest", "240-rule policy engine", "TS / Python / Go SDKs", "99.99% SLA"].map((chip) => (
                <span key={chip} className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-600 shadow-sm">
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-6">
            <WorkflowDiagram />
            <CommandPalette />
          </Reveal>
        </div>
      </Section>

      {/* deployment */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Deployment"
            title="Run it the way your security team requires."
            description="From fully-managed multi-tenant to dedicated single-tenant and hybrid edge agents."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {deployments.map((d, i) => (
            <Reveal key={d.title} delay={i * 90}>
              <div className="h-full rounded-xl border border-zinc-200 bg-white p-6 shadow-card">
                <span className="grid size-10 place-items-center rounded-lg bg-zinc-900 text-white">
                  <d.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="See your operations on Meridian."
        description="We'll map one of your real workflows onto the platform — live, in 30 minutes."
      />
    </>
  );
}
