import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { Avatar } from "@/components/product-ui/widgets";
import { team, timeline, values } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meridian Systems builds the operating layer for modern enterprise. Founded 2021 in San Francisco — backed by Ridgeline Ventures.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Operations deserve infrastructure-grade software."
        description="Meridian was founded on a simple observation: companies run their most critical processes through tools that were never designed to work together. We're fixing that."
      />

      {/* timeline */}
      <Section className="border-t border-zinc-100">
        <Reveal>
          <h2 className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            The road so far
          </h2>
        </Reveal>
        <ol className="relative mx-auto mt-12 max-w-2xl space-y-8 before:absolute before:bottom-6 before:left-[7px] before:top-6 before:border-l-2 before:border-dashed before:border-zinc-200">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 70}>
              <li className="relative flex gap-6">
                <span className="z-10 mt-1.5 size-[15px] shrink-0 rounded-full border-[3px] border-white bg-accent-600 shadow ring-1 ring-accent-200" />
                <div>
                  <p className="font-mono text-sm font-semibold text-accent-700 tabular">{t.year}</p>
                  <p className="mt-1 leading-relaxed text-zinc-700">{t.event}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* values */}
      <Section id="values" className="scroll-mt-20 border-t border-zinc-100 bg-zinc-50/50">
        <Reveal>
          <SectionHeading
            eyebrow="Values"
            title="What we optimize for."
            description="Four principles that decide every roadmap fight we've ever had."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 90}>
              <div className="h-full rounded-xl border border-zinc-200 bg-white p-7 shadow-card">
                <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                  <span className="mr-2 font-mono text-sm text-accent-600">0{i + 1}</span>
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* team */}
      <Section id="team" className="scroll-mt-20 border-t border-zinc-100">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Built by operators and infrastructure engineers."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 80}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-card transition-shadow hover:shadow-lift">
                <Avatar name={member.name} size="lg" />
                <div>
                  <p className="font-semibold tracking-tight text-zinc-900">{member.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-accent-600">{member.role}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-zinc-600">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* investors + hq */}
        <Reveal className="mt-14">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8 shadow-card md:flex-row md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Backed by</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-800">
                Ridgeline Ventures · Founders&apos; Coop · Meridian employee pool
              </p>
            </div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-500">
              <MapPin className="size-4 text-accent-600" />
              HQ San Francisco · Team across 9 time zones
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
