import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Meridian Systems privacy policy.",
};

const sections = [
  {
    h: "1. Overview",
    p: [
      `${site.legalName} ("Meridian") provides an operations platform. This policy explains what personal data we collect, why, and the choices you have — whether you visit our website, request a demo, or use the product as part of a customer's team.`,
    ],
  },
  {
    h: "2. Data we collect",
    p: [
      "Account data: name, work email, role and authentication identifiers.",
      "Usage data: product interactions, logs, device and browser information.",
      "Customer Data: operational records our customers connect (orders, shipments, inventory). We process this strictly as their processor, on their instructions.",
    ],
  },
  {
    h: "3. How we use data",
    p: [
      "To provide and secure the Services; to communicate about your account; to improve reliability and develop features; to comply with law. We do not sell personal data, and we do not use Customer Data to train generalized machine-learning models without explicit written agreement.",
    ],
  },
  {
    h: "4. Legal bases (EEA/UK)",
    p: [
      "Contract performance for account operation; legitimate interests for security and product improvement; consent where required (e.g., optional marketing email). You may object or withdraw consent at any time.",
    ],
  },
  {
    h: "5. Sharing & subprocessors",
    p: [
      "We share data only with vetted subprocessors under written agreements (cloud infrastructure, support tooling), or when law requires. A current subprocessor list is available on request and changes are announced in advance.",
    ],
  },
  {
    h: "6. International transfers",
    p: [
      "Data is processed in regional planes (US, EU, APAC) selected by the customer workspace. Transfers outside the EEA/UK rely on Standard Contractual Clauses and supplementary measures described in our DPA.",
    ],
  },
  {
    h: "7. Retention",
    p: [
      "Account data is retained while your account is active plus 30 days. Audit-relevant records follow customer-configured retention windows. Backups age out within 35 days.",
    ],
  },
  {
    h: "8. Your rights",
    p: [
      `Depending on jurisdiction you may request access, correction, deletion, restriction, portability, or object to processing. Enterprise users should contact their administrator; others can email ${site.email.support}. We respond within 30 days.`,
    ],
  },
  {
    h: "9. Security",
    p: [
      "AES-256 encryption at rest, TLS 1.3 in transit, SSO/SCIM, granular RBAC and continuous monitoring. See our Security page and SOC 2 Type II report for details.",
    ],
  },
  {
    h: "10. Contact",
    p: [`Privacy questions or DPA requests: ${site.email.security}. Data Protection Officer appointments available for Enterprise.`],
  },
];

export default function PrivacyPage() {
  return (
    <section className="border-b border-zinc-100">
      <Container className="max-w-3xl py-16 md:py-24">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-zinc-500">Effective August 1, 2026 · Version 3.1</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{s.h}</h2>
              {s.p.map((para) => (
                <p key={para.slice(0, 32)} className="mt-3 leading-[1.85] text-zinc-600">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
