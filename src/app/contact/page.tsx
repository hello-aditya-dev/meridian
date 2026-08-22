import type { Metadata } from "next";
import { Clock, Mail, MapPin, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a demo, start a pilot, or talk security review with the Meridian team. One engineer, one email, real answers.",
};

const expect = [
  "A 30-minute working session — not a slideware tour",
  "Your workflow rebuilt live on your data",
  "Straight answers on pricing, security and rollout",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to an engineer, not a sequence."
        description="Tell us the workflow that hurts most. We'll come prepared with a plan to rebuild it in front of you."
      />

      <Section className="border-t border-zinc-100">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
              What to expect
            </h2>
            <ul className="mt-5 space-y-3.5">
              {expect.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent-500" />
                  {e}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4 border-t border-zinc-100 pt-8">
              <a href={`mailto:${site.email.sales}`} className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-zinc-900">
                <span className="grid size-9 place-items-center rounded-lg border border-zinc-200 bg-white text-accent-600 shadow-sm">
                  <Mail className="size-4" />
                </span>
                {site.email.sales}
              </a>
              <p className="flex items-center gap-3 text-sm text-zinc-700">
                <span className="grid size-9 place-items-center rounded-lg border border-zinc-200 bg-white text-accent-600 shadow-sm">
                  <Clock className="size-4" />
                </span>
                Response within one business day
              </p>
              <p className="flex items-center gap-3 text-sm text-zinc-700">
                <span className="grid size-9 place-items-center rounded-lg border border-zinc-200 bg-white text-accent-600 shadow-sm">
                  <MapPin className="size-4" />
                </span>
                San Francisco · New York · Berlin
              </p>
              <a href="/security" className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-zinc-900">
                <span className="grid size-9 place-items-center rounded-lg border border-zinc-200 bg-white text-accent-600 shadow-sm">
                  <ShieldCheck className="size-4" />
                </span>
                Security review? Start here
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
