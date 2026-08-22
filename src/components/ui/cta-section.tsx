import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { Container } from "./container";
import { Reveal } from "./reveal";

export function CtaSection({
  title = "See Meridian on your own operations.",
  description = "A 30-minute working session with your data, your workflows, and a clear view of what changes in week one.",
  primaryLabel = "Request a demo",
  primaryHref = "/contact",
  secondaryLabel = "Explore the platform",
  secondaryHref = "/platform",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid-bg-dark relative overflow-hidden rounded-2xl bg-zinc-950 px-6 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-accent-600/25 blur-3xl"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h2>
              <p className="text-pretty text-base leading-relaxed text-zinc-400">
                {description}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Button href={primaryHref} variant="accent" size="lg">
                  {primaryLabel}
                  <ArrowRight className="size-4" />
                </Button>
                <Button href={secondaryHref} variant="dark-ghost" size="lg">
                  {secondaryLabel}
                </Button>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                SOC 2 Type II · 99.99% uptime SLA · Live in weeks
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
