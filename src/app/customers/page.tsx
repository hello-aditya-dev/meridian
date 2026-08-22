import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { Avatar } from "@/components/product-ui/widgets";
import { LogoWall } from "@/components/ui/logo-wall";
import { logos } from "@/lib/data";
import { caseStudies, quoteWall } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Case studies and results from enterprise operations teams running on Meridian — logistics, manufacturing, healthcare and more.",
};

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="Teams that stopped reconciling and started operating."
        description="From national freight networks to regulated healthcare distribution — the pattern is the same: fewer tools, faster cycles, evidence for every decision."
      />

      {/* logo strip */}
      <section className="border-b border-zinc-100 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LogoWall names={logos} />
        </div>
      </section>

      {/* case studies */}
      <Section>
        <Reveal>
          <h2 className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Featured case studies
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 90}>
              <Link
                href={`/customers/${cs.slug}`}
                className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lift"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-600">
                  {cs.industry}
                </p>
                <h3 className="mt-3 text-balance text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                  {cs.company}: {cs.headline.toLowerCase()}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{cs.summary}</p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-5 sm:grid-cols-3">
                  {cs.results.slice(0, 3).map((r) => (
                    <div key={r.label}>
                      <p className="text-lg font-semibold tracking-tight tabular">{r.value}</p>
                      <p className="text-[11px] leading-snug text-zinc-500">{r.label}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900">
                  Read case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* quote wall */}
      <Section className="border-t border-zinc-100 bg-zinc-50/50">
        <Reveal>
          <h2 className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            In their words
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {quoteWall.map((q, i) => (
            <Reveal key={q.name} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col justify-between rounded-xl border border-zinc-200 bg-white p-7 shadow-card">
                <blockquote className="text-pretty text-[15px] leading-relaxed text-zinc-700">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                  <Avatar name={q.name} />
                  <span>
                    <span className="block text-sm font-semibold text-zinc-900">{q.name}</span>
                    <span className="block text-xs text-zinc-500">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Become the next case study."
        description="Fourteen days to a working pilot on your data. If it doesn't beat your current process, you keep the integrations and walk away."
      />
    </>
  );
}
