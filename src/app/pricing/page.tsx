import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { PricingCards } from "@/components/pricing-cards";
import { ComparisonTable } from "@/components/comparison-table";
import { pricingFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starter $149/mo · Growth $490/mo · Enterprise custom. Full feature comparison, security inclusions and pricing FAQs.",
};

const included = [
  "Open REST API",
  "Signed webhooks",
  "SOC 2 Type II infrastructure",
  "Unlimited viewers & dashboards",
  "Data export anytime",
  "14-day free pilot on your data",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans that scale with your operations — not your headcount."
        description="Start with a 14-day pilot on your real data. Upgrade when the numbers convince you; we'll show them to you every quarter."
      />

      <Section className="border-t border-zinc-100 pt-16">
        <Reveal>
          <PricingCards />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {included.map((item) => (
              <span key={item} className="flex items-center gap-2 text-[13px] text-zinc-500">
                <span className="size-1 rounded-full bg-accent-500" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* comparison table */}
      <Section id="compare" className="scroll-mt-20 border-t border-zinc-100 bg-zinc-50/50 pt-16">
        <Reveal>
          <SectionHeading
            eyebrow="Compare"
            title="Every detail, side by side."
            description="The full matrix procurement will ask for anyway."
          />
        </Reveal>
        <Reveal delay={120} className="mt-12">
          <ComparisonTable />
        </Reveal>
      </Section>

      {/* faq */}
      <Section className="border-t border-zinc-100">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions buyers actually ask." />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <Accordion items={pricingFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaSection
        title="Still comparing? Pilot both."
        description="Run Meridian alongside your incumbent for 14 days on identical data. Keep whichever performs — most teams keep both eyes open until week two."
      />
    </>
  );
}
