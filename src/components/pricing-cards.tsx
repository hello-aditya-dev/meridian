"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { plans } from "@/lib/data";

const annualPrices: Record<string, string> = {
  Starter: "$119",
  Growth: "$390",
};

export function PricingCards() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      {/* billing toggle */}
      <div className="flex items-center justify-center gap-3">
        <span className={cn("text-sm", !annual ? "font-medium text-zinc-900" : "text-zinc-500")}>
          Monthly
        </span>
        <button
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual(!annual)}
          className={cn(
            "relative h-6 w-11 rounded-full transition-colors duration-200",
            annual ? "bg-zinc-900" : "bg-zinc-300"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 size-5 rounded-full bg-white shadow transition-all duration-200",
              annual ? "left-[22px]" : "left-0.5"
            )}
          />
        </button>
        <span className={cn("text-sm", annual ? "font-medium text-zinc-900" : "text-zinc-500")}>
          Annual
        </span>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
          Save 20%
        </span>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const isCustom = plan.price === "Custom";
          const displayPrice = isCustom
            ? plan.price
            : annual
              ? annualPrices[plan.name] ?? plan.price
              : plan.price;
          return (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-shadow",
                plan.featured
                  ? "border-zinc-900 bg-white shadow-lift ring-1 ring-zinc-900"
                  : "border-zinc-200 bg-white shadow-card hover:shadow-lift"
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-zinc-900 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{plan.name}</h3>
              <p className="mt-1 min-h-10 text-sm leading-snug text-zinc-500">{plan.blurb}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight tabular">{displayPrice}</span>
                {plan.period ? (
                  <span className="text-sm text-zinc-500">{isCustom ? "" : plan.period}</span>
                ) : null}
              </p>
              {!isCustom && annual ? (
                <p className="mt-1 text-xs text-zinc-400">billed annually</p>
              ) : null}
              <ul className="mt-7 flex-1 space-y-3 border-t border-zinc-100 pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent-50 text-accent-600">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={cn(
                  "mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors",
                  plan.featured
                    ? "bg-accent-600 text-white shadow-sm hover:bg-accent-700"
                    : "border border-zinc-200 bg-white text-zinc-900 shadow-sm hover:bg-zinc-50"
                )}
              >
                {plan.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
