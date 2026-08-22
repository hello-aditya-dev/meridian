import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { Avatar } from "@/components/product-ui/widgets";
import { solutions } from "@/lib/pages";
import { quoteWall } from "@/lib/stories";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How operations, supply chain, revenue ops, procurement, IT and finance teams run on Meridian's operating layer.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for every team that runs operations."
        description="Six teams, one system of record. Each solution below maps Meridian's platform to the outcomes your function is measured on."
      />

      {solutions.map((s, i) => {
        const flip = i % 2 === 1;
        const proof = quoteWall[i % quoteWall.length];
        return (
          <Section key={s.slug} id={s.slug} className={cn("scroll-mt-20", i > 0 && "border-t border-zinc-100")}>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <Reveal className={cn(flip && "lg:order-2")}>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-600">
                  {s.team}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-[2.25rem]">
                  {s.headline}
                </h2>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-zinc-600">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-zinc-700">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent-50 text-accent-600">
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120} className={cn(flip && "lg:order-1")}>
                <div className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8 shadow-card md:p-10">
                  <p className="text-5xl font-semibold tracking-tight text-zinc-900 tabular md:text-6xl">
                    {s.stat.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">{s.stat.label}</p>
                  <div className="my-7 border-t border-dashed border-zinc-200" />
                  <blockquote className="text-sm leading-relaxed text-zinc-700">
                    &ldquo;{proof.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-2.5">
                    <Avatar name={proof.name} />
                    <span>
                      <span className="block text-xs font-semibold text-zinc-900">{proof.name}</span>
                      <span className="block text-[11px] text-zinc-500">{proof.role}</span>
                    </span>
                  </figcaption>
                  <Link
                    href="/customers"
                    className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900"
                  >
                    More customer results
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <CtaSection
        title="See your team's workflows live."
        description="Bring one real workflow to a 30-minute session — we'll rebuild it in front of you."
      />
    </>
  );
}
