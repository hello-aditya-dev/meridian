import { cn } from "@/lib/cn";
import { Container } from "./container";

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em]",
        dark ? "text-zinc-400" : "text-zinc-500"
      )}
    >
      <span className="inline-block size-1.5 rounded-full bg-accent-600" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-[2.5rem] md:leading-[1.15]",
          dark ? "text-white" : "text-zinc-900"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed md:text-lg",
            dark ? "text-zinc-400" : "text-zinc-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
