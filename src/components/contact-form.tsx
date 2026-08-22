"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

const interests = ["Product demo", "Pricing & pilot", "Security review", "Partnership"];
const sizes = ["1–50", "51–200", "201–1,000", "1,001–5,000", "5,000+"];

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-100";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-10 text-center">
        <span className="grid size-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900">Request received.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
          A solutions engineer will reach out within one business day — usually with two or
          three time slots and a short agenda.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-medium text-accent-700 hover:text-accent-800"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-card md:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
            Full name
          </span>
          <input required placeholder="Dana Whitfield" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
            Work email
          </span>
          <input required type="email" placeholder="dana@company.com" className={inputClass} />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
          Company size
        </span>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size, i) => (
            <label key={size} className="cursor-pointer">
              <input type="radio" name="size" defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-lg border border-zinc-200 px-3 py-1.5 text-[13px] font-medium text-zinc-600 transition-all peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white">
                {size}
              </span>
            </label>
          ))}
        </div>
      </label>

      <div className="mt-5">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
          I&apos;m interested in
        </span>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, i) => (
            <label key={interest} className="cursor-pointer">
              <input type="radio" name="interest" defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-full border border-zinc-200 px-3.5 py-1.5 text-[13px] font-medium text-zinc-600 transition-all peer-checked:border-accent-400 peer-checked:bg-accent-50 peer-checked:text-accent-800">
                {interest}
              </span>
            </label>
          ))}
        </div>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
          What should we prepare?
        </span>
        <textarea
          rows={4}
          placeholder="Tell us about the workflow you'd like to see rebuilt on Meridian…"
          className={cn(inputClass, "resize-none")}
        />
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent-600 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-accent-700"
      >
        Request a demo
        <ArrowRight className="size-4" />
      </button>
      <p className="mt-3 text-center text-xs text-zinc-400">
        No spam, no sequences. One engineer, one email, real answers.
      </p>
    </form>
  );
}
