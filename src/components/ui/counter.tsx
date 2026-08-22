"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated number counter. Pass the final formatted value, e.g. "$2.4B",
 * "43%", "99.99%", "4.2M". Only the numeric portion animates.
 */
export function Counter({
  value,
  duration = 1400,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => formatAt(value, 1));
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();

        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / duration, 1);
          const eased = 1 - Math.pow(2, -10 * p); // outExpo
          setDisplay(formatAt(value, eased));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={`tabular ${className ?? ""}`}>
      {display}
    </span>
  );
}

function formatAt(target: string, progress: number): string {
  const match = target.match(/-?[\d.,]+/);
  if (!match || match.index === undefined) return target;
  const raw = match[0];
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const end = parseFloat(raw.replace(/,/g, ""));
  const current = end * progress;
  const formatted = current.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    target.slice(0, match.index) + formatted + target.slice(match.index + raw.length)
  );
}
