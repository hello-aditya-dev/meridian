import type { Metadata } from "next";
import {
  Check,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Truck,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/ui/cta-section";
import { industries } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Meridian for logistics, manufacturing, retail & CPG, healthcare, financial services and energy — with proof points per vertical.",
};

const icons = { Truck, Factory, ShoppingCart, HeartPulse, Landmark, Zap };

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Proof in your vertical, not just your demo."
        description="Operations differ by industry; the operating layer doesn't. Here's how Meridian maps to six demanding verticals — with results from each."
      />

      <Section className="border-t border-zinc-100">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = icons[ind.icon as keyof typeof icons];
            return (
              <Reveal key={ind.name} delay={(i % 3) * 90}>
                <article className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lift">
                  <span className="grid size-10 place-items-center rounded-lg bg-zinc-900 text-white">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">{ind.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{ind.painPoint}</p>
                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-zinc-100 pt-5">
                    {ind.useCases.map((u) => (
                      <li key={u} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-zinc-600">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-accent-600" strokeWidth={2.5} />
                        {u}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid grid-cols-2 gap-3 rounded-lg bg-zinc-50 p-4">
                    {ind.kpis.map((kpi) => (
                      <div key={kpi.label}>
                        <p className="text-xl font-semibold tracking-tight text-zinc-900 tabular">{kpi.value}</p>
                        <p className="text-[11px] uppercase tracking-wide text-zinc-500">{kpi.label}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaSection
        title="Don't see your industry?"
        description="The operating layer is vertical-agnostic — the connectors and policies are yours to define. Bring us your hardest workflow."
      />
    </>
  );
}
