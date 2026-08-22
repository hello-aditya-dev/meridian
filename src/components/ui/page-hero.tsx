import { Container } from "./container";
import { Eyebrow } from "./section";
import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100">
      <div
        aria-hidden
        className="grid-bg absolute inset-x-0 top-0 h-full [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <Container className="relative py-16 md:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-900 md:text-[3.25rem] md:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
            {description}
          </p>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
