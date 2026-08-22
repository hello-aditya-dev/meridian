import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { Counter } from "@/components/ui/counter";
import { Avatar } from "@/components/product-ui/widgets";
import { caseStudies } from "@/lib/stories";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.company} — Case study`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden border-b border-zinc-100">
        <div aria-hidden className="grid-bg absolute inset-x-0 top-0 h-full [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <Container className="relative py-16 md:py-24">
          <Reveal className="max-w-4xl">
            <Link
              href="/customers"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <ArrowLeft className="size-4" />
              All customers
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider">
              <span className="rounded-full bg-accent-600/10 px-3 py-1 text-accent-700">{cs.industry}</span>
              <span className="text-zinc-400">·</span>
              <span className="text-zinc-500">{cs.size}</span>
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-[3.25rem]">
              How {cs.company} {cs.headline.charAt(0).toLowerCase() + cs.headline.slice(1)}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600">{cs.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {cs.products.map((p) => (
                <span key={p} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* quote */}
      <Section className="py-14 md:py-16">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="text-balance text-xl font-medium leading-relaxed text-zinc-800 md:text-2xl">
              &ldquo;{cs.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-3">
              <Avatar name={cs.quote.author} size="lg" />
              <span className="text-left">
                <span className="block text-sm font-semibold">{cs.quote.author}</span>
                <span className="block text-xs text-zinc-500">{cs.quote.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* challenge + before */}
      <Section className="border-t border-zinc-100 pt-0 md:pt-0">
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-600">
              The challenge
            </h2>
            <div className="mt-5 space-y-5">
              {cs.challenge.map((p) => (
                <p key={p.slice(0, 24)} className="text-pretty leading-relaxed text-zinc-700">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-8">
              <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
                <X className="size-4" strokeWidth={3} />
                {cs.before.title}
              </p>
              <ul className="mt-5 space-y-3.5">
                {cs.before.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700">
                    <X className="mt-0.5 size-3.5 shrink-0 text-red-400" strokeWidth={3} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* implementation */}
      <Section id="implementation" className="border-t border-zinc-100 bg-zinc-50/50">
        <Reveal>
          <h2 className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Implementation · three phases
          </h2>
        </Reveal>
        <ol className="relative mx-auto mt-12 max-w-3xl space-y-8 before:absolute before:bottom-6 before:left-[19px] before:top-6 before:border-l-2 before:border-dashed before:border-zinc-300">
          {cs.phases.map((phase, i) => (
            <Reveal key={phase.name} delay={i * 90}>
              <li className="relative flex gap-6">
                <span className="z-10 grid size-10 shrink-0 place-items-center rounded-full bg-zinc-900 font-mono text-sm font-semibold text-white shadow-md">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-xl border border-zinc-200 bg-white p-6 shadow-card">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-zinc-900">{phase.name}</h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">{phase.duration}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{phase.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* results */}
      <Section id="results" className="border-t border-zinc-100">
        <Reveal>
          <h2 className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-600">
            Results
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {cs.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 80}>
              <div className="rounded-xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 text-center shadow-card">
                <Counter value={r.value} className="text-3xl font-semibold tracking-tight text-zinc-900" />
                <p className="mt-2 text-xs leading-snug text-zinc-500">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-5">
          {cs.outcome.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="text-pretty leading-relaxed text-zinc-700">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* more studies */}
      <Section className="border-t border-zinc-100 bg-zinc-50/50 pb-24">
        <Reveal>
          <h2 className="mb-8 text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            More customer stories
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {caseStudies
            .filter((c) => c.slug !== cs.slug)
            .map((other, i) => (
              <Reveal key={other.slug} delay={i * 90}>
                <Link
                  href={`/customers/${other.slug}`}
                  className="group flex h-full items-start justify-between gap-6 rounded-xl border border-zinc-200 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lift"
                >
                  <span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-600">
                      {other.industry}
                    </span>
                    <span className="mt-2 block text-lg font-semibold tracking-tight text-zinc-900">
                      {other.company}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-600">{other.headline}</span>
                  </span>
                  <ArrowRight className="mt-1 size-5 shrink-0 text-zinc-300 transition-all group-hover:translate-x-0.5 group-hover:text-accent-600" />
                </Link>
              </Reveal>
            ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
