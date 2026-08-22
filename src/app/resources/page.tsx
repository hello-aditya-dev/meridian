import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Download, MessagesSquare } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { guides, webinars } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Buyer's guides, playbooks and live webinars for operations leaders evaluating an operating layer platform.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Do the evaluation properly."
        description="Guides, playbooks and live sessions built for the people who have to defend this purchase internally."
      />

      {/* guides */}
      <Section className="border-t border-zinc-100">
        <Reveal>
          <h2 className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            <BookOpen className="size-4 text-accent-600" />
            Guides & playbooks
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lift">
                <span className="inline-flex w-max items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                  {g.type} · {g.length}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                  {g.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{g.description}</p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors group-hover:text-accent-700"
                >
                  <Download className="size-4" />
                  Get the download
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* webinars */}
      <Section id="webinars" className="scroll-mt-20 border-t border-zinc-100 bg-zinc-50/50">
        <Reveal>
          <h2 className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            <CalendarDays className="size-4 text-accent-600" />
            Live sessions
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {webinars.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <Link
                href="/contact"
                className="group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-card transition-all duration-200 hover:border-accent-200 hover:shadow-lift"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-600">{w.date}</p>
                  <h3 className="mt-1.5 text-base font-semibold tracking-tight text-zinc-900">{w.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                    <MessagesSquare className="size-3.5" />
                    {w.host}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-colors group-hover:bg-zinc-50">
                  Save my seat
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Prefer a working session?"
        description="Skip the collateral. Bring your hardest workflow to a live 30-minute teardown."
        primaryLabel="Book a teardown"
        secondaryLabel="Read the blog"
        secondaryHref="/blog"
      />
    </>
  );
}
