import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Meridian Systems terms of service.",
};

const sections = [
  {
    h: "1. Agreement",
    p: [
      `These Terms of Service ("Terms") govern your access to and use of the Meridian platform, websites and related services (collectively, the "Services") provided by ${site.legalName} ("Meridian", "we", "us"). By creating an account or accessing the Services, you agree to these Terms on behalf of your organization.`,
    ],
  },
  {
    h: "2. Accounts & eligibility",
    p: [
      "You must be at least 18 years old and authorized to bind your organization. You are responsible for the accuracy of registration information, for safeguarding credentials, and for all activity under your accounts.",
    ],
  },
  {
    h: "3. Use of the Services",
    p: [
      "You may use the Services only in compliance with applicable laws and our documentation. You will not: reverse engineer the Services except as permitted by law; interfere with their operation; circumvent usage limits; or use them to infringe others' rights.",
    ],
  },
  {
    h: "4. Customer data",
    p: [
      "You retain all right, title and interest in data you submit to the Services ('Customer Data'). You grant Meridian a limited license to process Customer Data solely to provide the Services. We never sell Customer Data. Data handling is further described in the Privacy Policy and Data Processing Addendum.",
    ],
  },
  {
    h: "5. Intellectual property",
    p: [
      "Meridian retains all rights in the Services, including software, models of operation and documentation. Except for the limited rights expressly granted, no license is transferred.",
    ],
  },
  {
    h: "6. Confidentiality",
    p: [
      "Each party agrees to protect the other's non-public information with at least the care it uses for its own confidential information, and to use it only to fulfill obligations under these Terms.",
    ],
  },
  {
    h: "7. Warranties & disclaimers",
    p: [
      "We warrant that the Services will materially conform to the documentation. EXCEPT AS STATED, THE SERVICES ARE PROVIDED 'AS IS' WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.",
    ],
  },
  {
    h: "8. Limitation of liability",
    p: [
      "To the maximum extent permitted by law, neither party is liable for indirect, incidental or consequential damages. Each party's aggregate liability is capped at the amounts paid by you in the twelve months preceding the claim, except for breaches of confidentiality, IP infringement or liability that cannot be limited by law.",
    ],
  },
  {
    h: "9. Term & termination",
    p: [
      "Either party may terminate for material breach if uncured within 30 days of notice. Upon termination we will make Customer Data available for export for 30 days, after which it is deleted per our retention schedule.",
    ],
  },
  {
    h: "10. General",
    p: [
      "These Terms are governed by the laws of the State of California, excluding conflict-of-laws rules. If any provision is unenforceable, the remainder stays in effect. These Terms, together with an order form, are the entire agreement regarding the Services.",
    ],
  },
  {
    h: "11. Contact",
    p: [`Questions about these Terms: ${site.email.support}.`],
  },
];

export default function TermsPage() {
  return (
    <section className="border-b border-zinc-100">
      <Container className="max-w-3xl py-16 md:py-24">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-zinc-500">Effective August 1, 2026 · Version 3.2</p>

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
