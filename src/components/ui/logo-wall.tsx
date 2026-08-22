import { cn } from "@/lib/cn";

const styles = [
  "font-semibold tracking-[0.22em]",
  "font-bold tracking-tight lowercase text-[1.1rem]",
  "font-medium tracking-[0.3em] uppercase",
  "font-extrabold italic",
  "font-semibold tracking-widest",
];

export function LogoWall({
  names,
  className,
}: {
  names: string[];
  className?: string;
}) {
  const row = [...names, ...names];
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div className="flex w-max animate-marquee items-center gap-16 pr-16">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            aria-hidden={i >= names.length}
            className={cn(
              "whitespace-nowrap text-sm uppercase text-zinc-400 transition-colors hover:text-zinc-600",
              styles[i % styles.length]
            )}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
