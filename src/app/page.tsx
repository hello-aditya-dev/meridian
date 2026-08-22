import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Braces,
  Layers,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { LogoWall } from "@/components/ui/logo-wall";
import { CtaSection } from "@/components/ui/cta-section";
import { OverviewFrame, PlatformTabs } from "@/components/home/platform-tabs";
import { Avatar, Delta, StatusPill } from "@/components/product-ui/widgets";
import { capabilities, heroMetrics, integrations, logos, securityControls, certifications } from "@/lib/data";
import { caseStudies } from "@/lib/stories";

const capabilityIcons = {
  Layers,
  Workflow,
  Activity,
  LineChart,
  ShieldCheck,
  Braces,
};

const featuredCase = caseStudies[0];

/* ------------------------------ hero ------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-x-0 top-0 h-[560px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Container className="relative pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Link
              href="/platform#optimize"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm transition-colors hover:border-accent-200"
            >
              <span className="rounded-full bg-accent-600/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-700">
                New
              </span>
              Meridian Flow — cross-system orchestration
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-[2.75rem] font-semibold leading-[1.06] tracking-tight text-zinc-900 md:text-[4rem]">
              Turn operational complexity into a competitive advantage.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 md:text-xl">
              Meridian unifies planning, monitoring, analytics and optimization into
              one system of record — so your teams move faster than your complexity grows.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Request a demo
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-zinc-500">
              14-day pilot on your data · No credit card · SOC 2 Type II
            </p>
          </Reveal>
        </div>

        {/* product visual */}
        <Reveal delay={320} className="relative mx-auto mt-16 max-w-5xl md:mt-20">
          <div aria-hidden className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-b from-accent-100/50 via-zinc-50 to-transparent blur-2xl" />

          {/* floating approval card */}
          <div className="absolute -left-8 top-16 z-10 hidden w-60 rotate-[-2deg] rounded-xl border border-zinc-200 bg-white p-3.5 shadow-lift lg:block">
            <div className="flex items-center justify-between gap-2">
              <StatusPill tone="queued">Approval · SLA 2h</StatusPill>
            </div>
            <p className="mt-2.5 text-xs leading-snug text-zinc-700">
              Rebalance 340 units DAL → MEM
            </p>
            <p className="mt-1 font-mono text-[11px] font-medium text-emerald-600 tabular">+$18.2k impact</p>
            <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2.5">
              <span className="flex items-center gap-1.5">
                <Avatar name="Dana Whitfield" size="xs" />
                <span className="text-[10px] text-zinc-500">Dana W.</span>
              </span>
              <span className="rounded-md bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white">Approve</span>
            </div>
          </div>

          {/* floating metric chip */}
          <div className="absolute -right-6 bottom-24 z-10 hidden rotate-[1.5deg] items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-lift lg:flex">
            <p className="text-lg font-semibold tracking-tight tabular">+43%</p>
            <Delta value="+9.1%" />
            <span className="text-xs text-zinc-500">throughput QoQ</span>
          </div>

          <OverviewFrame />
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------ problem ------------------------------ */

const problems = [
  {
    value: "23",
    label: "average tools sitting between an order and its delivery",
  },
  {
    value: "45 min",
    label: "spent every morning reconstructing what happened overnight",
  },
  {
    value: "$1.2T",
    label: "lost annually to operational friction across enterprises",
  },
];

function Problem() {
  return (
    <Section id="problem" className="border-b border-zinc-100">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="The problem"
            title="Operations outgrew their tooling years ago."
            description="Every team added another system to close a gap. Now the gaps are between systems — and your best people reconcile them by hand."
          />
          <p className="mt-6 border-l-2 border-accent-300 pl-5 text-sm italic leading-relaxed text-zinc-500">
            The tools didn&apos;t fail. They were never designed to work together.
          </p>
        </Reveal>
        <div className="space-y-4">
          {problems.map((p, i) => (
            <Reveal key={p.value} delay={i * 90}>
              <div className="flex items-center gap-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-card transition-shadow hover:shadow-lift">
                <span className="min-w-[7rem] text-3xl font-semibold tracking-tight text-zinc-900 tabular">
                  {p.value}
                </span>
                <span className="text-sm leading-relaxed text-zinc-600">{p.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ metrics band ------------------------------ */

function MetricsBand() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50/60">
      <Container>
        <div className="grid grid-cols-2 divide-zinc-200 md:grid-cols-4 md:divide-x">
          {heroMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col items-center gap-1 py-10 text-center ${
                i >= 2 ? "border-t border-zinc-200 md:border-t-0" : ""
              } ${i % 2 === 1 ? "border-l border-zinc-200 md:border-l-0" : ""}`}
            >
              <Counter value={m.value} className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl" />
              <p className="max-w-[12rem] text-xs leading-relaxed text-zinc-500">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ capabilities ------------------------------ */

function Capabilities() {
  return (
    <Section id="capabilities">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="Built for the way enterprises actually run."
          description="Not a dashboard bolted onto your data — an operating layer with governance, orchestration and open APIs at its core."
        />
      </Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, i) => {
          const Icon = capabilityIcons[cap.icon as keyof typeof capabilityIcons];
          return (
            <Reveal key={cap.title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-xl border border-zinc-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lift">
                <span className="grid size-10 place-items-center rounded-lg bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{cap.description}</p>
                <ul className="mt-4 space-y-2 border-t border-zinc-100 pt-4">
                  {cap.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[13px] text-zinc-500">
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ------------------------------ integrations preview ------------------------------ */

function IntegrationsPreview() {
  return (
    <Section id="integrations" className="border-y border-zinc-100 bg-zinc-50/50">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Integrations"
            title="Works with your stack on day one."
            description="Prebuilt connectors sync bidirectionally with the systems you already run — plus typed APIs and webhooks for everything else."
          />
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button href="/integrations" variant="secondary">
              Browse all integrations
              <ArrowRight className="size-4" />
            </Button>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              120+ connectors · API-first
            </span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {integrations.slice(0, 8).map((int) => (
              <div
                key={int.name}
                className="flex aspect-square flex-col justify-between rounded-xl border border-zinc-200 bg-white p-3.5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span
                  className="grid size-8 place-items-center rounded-md text-[11px] font-bold text-white"
                  style={{ backgroundColor: int.color }}
                >
                  {int.monogram}
                </span>
                <span>
                  <span className="block truncate text-xs font-medium text-zinc-900">{int.name}</span>
                  <span className="block text-[10px] text-zinc-400">{int.category}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ security band ------------------------------ */

function SecurityBand() {
  return (
    <section id="security" className="grid-bg-dark relative overflow-hidden bg-zinc-950 py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-700/20 blur-3xl" />
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              dark
              eyebrow="Enterprise-ready"
              title="Security that clears procurement."
              description="SOC 2 Type II, ISO 27001 and GDPR compliance — with SSO, SCIM, granular RBAC and immutable audit logs standard on every enterprise deployment."
            />
            <div className="mt-7 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-zinc-300"
                >
                  {cert}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/security" variant="accent">
                Review the security program
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {securityControls.map((group, i) => (
              <Reveal key={group.group} delay={i * 90}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <p className="text-sm font-medium text-white">{group.group}</p>
                  <ul className="mt-3 space-y-2">
                    {group.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-zinc-400">
                        <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ case study teaser ------------------------------ */

function CaseTeaser() {
  const results = featuredCase.results.slice(0, 3);
  return (
    <Section className="border-b border-zinc-100">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Customer story"
            title={`${featuredCase.company}: ${featuredCase.headline.toLowerCase()}.`}
            description={featuredCase.summary}
          />
          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-zinc-100 py-6">
            {results.map((r) => (
              <div key={r.label}>
                <p className="text-2xl font-semibold tracking-tight text-zinc-900 tabular">{r.value}</p>
                <p className="mt-1 text-xs leading-snug text-zinc-500">{r.label}</p>
              </div>
            ))}
          </div>
          <Button href={`/customers/${featuredCase.slug}`} variant="secondary" className="mt-8">
            Read the case study
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
        <Reveal delay={140}>
          <figure className="relative rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8 shadow-card md:p-10">
            <span aria-hidden className="absolute right-8 top-6 select-none font-serif text-7xl leading-none text-accent-200">
              &ldquo;
            </span>
            <blockquote className="text-pretty text-lg font-medium leading-relaxed text-zinc-800 md:text-xl">
              {featuredCase.quote.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Avatar name={featuredCase.quote.author} size="lg" />
              <span>
                <span className="block text-sm font-semibold text-zinc-900">{featuredCase.quote.author}</span>
                <span className="block text-xs text-zinc-500">{featuredCase.quote.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ page ------------------------------ */

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* trusted-by */}
      <section className="py-14">
        <Container>
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Trusted by operations teams at
          </p>
          <LogoWall names={logos} />
        </Container>
      </section>

      <Problem />

      {/* platform tabs */}
      <Section id="platform">
        <Reveal>
          <SectionHeading
            eyebrow="Platform"
            title="One system of record. Four jobs done well."
            description="Plan against live constraints, monitor everything in motion, analyze with certified metrics, and optimize with closed-loop impact tracking."
          />
        </Reveal>
        <div className="mt-14">
          <PlatformTabs />
        </div>
      </Section>

      <MetricsBand />
      <Capabilities />
      <IntegrationsPreview />
      <SecurityBand />
      <CaseTeaser />
      <CtaSection />
    </>
  );
}
