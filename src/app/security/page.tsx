import type { Metadata } from "next";
import { ArrowRight, FileCheck2, Globe2, Server, ShieldCheck, Timer } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { DataTable } from "@/components/product-ui/data-table";
import { StatusPill } from "@/components/product-ui/widgets";
import { certifications, securityControls } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security",
  description:
    "SOC 2 Type II, ISO 27001, GDPR. SSO/SAML, SCIM, granular RBAC, immutable audit logs, AES-256 encryption and 99.99% uptime SLA.",
};

const infraStats = [
  { icon: Globe2, value: "US · EU · APAC", label: "Data residency, pinned per workspace" },
  { icon: Timer, value: "RPO 5 min / RTO 30 min", label: "Disaster recovery targets, tested quarterly" },
  { icon: Server, value: "99.99%", label: "Uptime SLA across the last four years" },
];

const auditColumns = [
  { key: "time", label: "Timestamp", mono: true },
  { key: "actor", label: "Actor" },
  { key: "action", label: "Action" },
  { key: "target", label: "Target" },
  { key: "result", label: "Result", align: "right" as const },
];

const auditRows = [
  {
    time: "2026-08-21 14:32:08Z",
    actor: "dana.w@corelink.com",
    action: "workflow.run.approve",
    target: "run_9f83k2 · rebalance-inventory",
    result: <StatusPill tone="synced">Approved</StatusPill>,
  },
  {
    time: "2026-08-21 14:31:52Z",
    actor: "policy-engine",
    action: "policy.evaluate",
    target: "rule: auto_below_25k (240 rules)",
    result: <StatusPill tone="running">Escalated</StatusPill>,
  },
  {
    time: "2026-08-21 09:02:11Z",
    actor: "svc-sap-sync",
    action: "connector.sync",
    target: "sap-s4/orders · 4,120 records",
    result: <StatusPill tone="synced">OK</StatusPill>,
  },
  {
    time: "2026-08-20 22:41:03Z",
    actor: "m.okafor@atlasfreight.com",
    action: "role.update",
    target: "role: regional-ops-emea",
    result: <StatusPill tone="warning">Review</StatusPill>,
  },
  {
    time: "2026-08-20 17:15:47Z",
    actor: "sso://okta",
    action: "auth.login",
    target: "user: r.kim@quantive.com · MFA hardware key",
    result: <StatusPill tone="synced">Success</StatusPill>,
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust & security"
        title="Enterprise security, engineered end to end."
        description="Independent audits are table stakes. The difference is architecture: governance enforced by the platform itself, evidence produced continuously, and residency you control."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-sm"
            >
              <ShieldCheck className="size-3.5 text-accent-600" />
              {cert}
            </span>
          ))}
        </div>
      </PageHero>

      {/* controls */}
      <Section className="border-t border-zinc-100">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {securityControls.map((group, i) => (
            <Reveal key={group.group} delay={i * 80}>
              <div className="h-full rounded-xl border border-zinc-200 bg-white p-6 shadow-card">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
                  {group.group}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-zinc-600">
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* audit log sample */}
      <Section id="audit-log" className="border-t border-zinc-100 bg-zinc-50/50">
        <Reveal>
          <SectionHeadingInline
            eyebrow="Auditability"
            title="Every action, traceable forever."
            description="This is a live sample of the immutable log your auditors receive — exportable to Splunk or Datadog in real time."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10">
            <DataTable columns={auditColumns} rows={auditRows} />
          </div>
        </Reveal>
      </Section>

      {/* infrastructure */}
      <Section className="border-t border-zinc-100">
        <div className="grid gap-4 md:grid-cols-3">
          {infraStats.map((s, i) => (
            <Reveal key={s.value} delay={i * 90}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-card">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-zinc-900 text-white">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-zinc-900 tabular">{s.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* compliance request band */}
        <Reveal className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8 shadow-card md:flex-row md:p-10 md:text-left">
            <div className="flex items-start gap-4">
              <span className="hidden size-12 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100 sm:grid">
                <FileCheck2 className="size-6" />
              </span>
              <div className="max-w-xl">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
                  Running a security review?
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  We&apos;ll send the SOC 2 Type II report, pen test summary, DPA and completed
                  CAIQ — usually same-day.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-700"
              >
                Request documents
                <ArrowRight className="size-4" />
              </a>
              <a
                href={`mailto:${site.email.security}`}
                className="inline-flex h-10 items-center rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
              >
                {site.email.security}
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function SectionHeadingInline({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex max-w-3xl flex-col gap-3">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
        <span className="mr-2 inline-block size-1.5 rounded-full bg-accent-600 align-middle" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-[2.5rem] md:leading-[1.15]">
        {title}
      </h2>
      <p className="text-pretty leading-relaxed text-zinc-600">{description}</p>
    </div>
  );
}
