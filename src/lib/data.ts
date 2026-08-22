/* ------------------------------------------------------------------ */
/*  Meridian — central content layer. Edit copy here, site updates.   */
/* ------------------------------------------------------------------ */

export const logos = [
  "Novara Logistics",
  "HelioSync",
  "Atlas Freight",
  "CoreLink",
  "Vanta Industries",
  "NorthPeak Medical",
  "Quantive",
  "BlueLarch Foods",
];

/* ---------------- metrics band ---------------- */

export const heroMetrics = [
  { value: "$2.4B", label: "Transactions processed annually" },
  { value: "43%", label: "Faster workflow completion" },
  { value: "99.99%", label: "Uptime SLA, four years running" },
  { value: "4.2M", label: "Workflows executed daily" },
];

/* ---------------- platform pillars (tabs) ---------------- */

export interface Pillar {
  id: string;
  tab: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

export const pillars: Pillar[] = [
  {
    id: "plan",
    tab: "Plan",
    eyebrow: "Planning",
    title: "Capacity plans that hold up under reality",
    description:
      "Build lane-level capacity plans from live demand signals, then let Meridian rebalance them as conditions change — before they become exceptions.",
    bullets: [
      "Scenario modeling with safety-constraint simulation",
      "Auto-rebalancing across lanes, sites and modes",
      "Approval routing with full audit trail",
      "Rolling forecasts refreshed every 15 minutes",
    ],
  },
  {
    id: "monitor",
    tab: "Monitor",
    eyebrow: "Monitoring",
    title: "Every shipment, dock and SLA in one pane",
    description:
      "Stream events from every connected system into a single operational picture. Detect deviations the moment they happen — not in tomorrow's report.",
    bullets: [
      "Sub-second event ingestion at 4.2M workflows/day",
      "Configurable alert policies with escalation paths",
      "SLA clocks that account for business hours and holidays",
      "Mobile-ready incident acknowledgment",
    ],
  },
  {
    id: "analyze",
    tab: "Analyze",
    eyebrow: "Analytics",
    title: "Answers your CFO will actually believe",
    description:
      "Every metric traces back to source systems. Slice cycle times, cost-to-serve and service levels by region, product, carrier or customer.",
    bullets: [
      "Warehouse-grade metrics layer with certified definitions",
      "Cohort, funnel and variance analysis out of the box",
      "Board-ready exports to Slides, Notion and PDF",
      "Anomaly detection on 40+ operational patterns",
    ],
  },
  {
    id: "optimize",
    tab: "Optimize",
    eyebrow: "Optimization",
    title: "Decisions made once, executed everywhere",
    description:
      "Meridian simulates thousands of scenarios against live data and proposes the highest-impact moves — you approve them once, they execute end-to-end.",
    bullets: [
      "Monte Carlo simulation against live constraints",
      "Projected impact and confidence on every proposal",
      "One-click apply across all downstream systems",
      "Closed-loop tracking of realized vs projected impact",
    ],
  },
];

/* ---------------- capabilities grid ---------------- */

export const capabilities = [
  {
    icon: "Layers" as const,
    title: "Unified data layer",
    description:
      "One schema for orders, shipments, inventory and events — synced bidirectionally from every system you already run.",
    points: ["Change-data-capture sync", "Schema drift protection", "Backfill in hours, not weeks"],
  },
  {
    icon: "Workflow" as const,
    title: "Workflow orchestration",
    description:
      "Compose multi-step operational processes with retries, timeouts and human approval exactly where policy demands it.",
    points: ["Visual + code-first definitions", "Human-in-the-loop steps", "Full replay & audit"],
  },
  {
    icon: "Activity" as const,
    title: "Real-time monitoring",
    description:
      "Sub-second visibility across every lane, site and partner. Alert policies that understand business context, not just thresholds.",
    points: ["Context-aware alerting", "SLA clock engine", "Incident timelines"],
  },
  {
    icon: "LineChart" as const,
    title: "Predictive analytics",
    description:
      "Forecasts trained on your history, refreshed continuously. Know demand, dwell risk and cost drift before the quarter closes.",
    points: ["Demand forecasting", "Dwell & delay prediction", "Confidence intervals"],
  },
  {
    icon: "ShieldCheck" as const,
    title: "Governance & RBAC",
    description:
      "Roles, approval chains and data boundaries enforced by the platform — not by spreadsheets and goodwill.",
    points: ["Granular role definitions", "Segregation of duties", "Immutable audit log"],
  },
  {
    icon: "Braces" as const,
    title: "Open API & SDKs",
    description:
      "Everything in the UI is available over API. TypeScript, Python and Go SDKs with typed webhooks and 99.99% uptime.",
    points: ["Typed REST + webhooks", "TS / Python / Go SDKs", "Sandbox environment"],
  },
] satisfies { icon: string; title: string; description: string; points: string[] }[];

/* ---------------- integrations ---------------- */

export type IntegrationCategory =
  | "CRM"
  | "ERP"
  | "Data warehouse"
  | "Messaging"
  | "Billing & procurement"
  | "ITSM & DevTools";

export const integrationCategories: IntegrationCategory[] = [
  "CRM",
  "ERP",
  "Data warehouse",
  "Messaging",
  "Billing & procurement",
  "ITSM & DevTools",
];

export interface Integration {
  name: string;
  category: IntegrationCategory;
  monogram: string;
  color: string;
  blurb: string;
  featured?: boolean;
}

export const integrations: Integration[] = [
  { name: "Salesforce", category: "CRM", monogram: "Sf", color: "#0d9dda", blurb: "Accounts, cases and revenue signals", featured: true },
  { name: "SAP S/4HANA", category: "ERP", monogram: "SAP", color: "#147aff", blurb: "Orders, master data and finance", featured: true },
  { name: "Snowflake", category: "Data warehouse", monogram: "❄", color: "#29b5e8", blurb: "Two-way sync with your lakehouse", featured: true },
  { name: "Slack", category: "Messaging", monogram: "#", color: "#611f69", blurb: "Alerts, approvals and digests in-channel", featured: true },
  { name: "Microsoft Teams", category: "Messaging", monogram: "T", color: "#6264a7", blurb: "Adaptive cards for incidents", featured: true },
  { name: "AWS", category: "Data warehouse", monogram: "aws", color: "#ff9900", blurb: "Event streaming via Kinesis & SQS", featured: true },
  { name: "Oracle NetSuite", category: "ERP", monogram: "N", color: "#f0821f", blurb: "PO, inventory and AR automation" },
  { name: "Microsoft Dynamics", category: "ERP", monogram: "D", color: "#0078d4", blurb: "Finance & operations sync" },
  { name: "Databricks", category: "Data warehouse", monogram: "db", color: "#ff3621", blurb: "Share curated ops tables upstream" },
  { name: "ServiceNow", category: "ITSM & DevTools", monogram: "Sn", color: "#62d84e", blurb: "Auto-open incidents from alerts" },
  { name: "Jira Software", category: "ITSM & DevTools", monogram: "J", color: "#0052cc", blurb: "Link delays to engineering work" },
  { name: "Coupa", category: "Billing & procurement", monogram: "Cp", color: "#0070e0", blurb: "Procurement triggers and spend" },
  { name: "Stripe", category: "Billing & procurement", monogram: "$", color: "#635bff", blurb: "Usage-based billing reconciliation" },
  { name: "HubSpot", category: "CRM", monogram: "Hs", color: "#ff7a59", blurb: "Customer promises to fulfillment" },
  { name: "Google Workspace", category: "Messaging", monogram: "Gw", color: "#4285f4", blurb: "Docs, sheets and calendar actions" },
  { name: "GitHub", category: "ITSM & DevTools", monogram: "Gh", color: "#24292f", blurb: "Deploy hooks for config changes" },
  { name: "Twilio", category: "Messaging", monogram: "Tw", color: "#f22f46", blurb: "SMS escalation for critical lanes" },
  { name: "Zendesk", category: "CRM", monogram: "Z", color: "#03363d", blurb: "Support tickets tied to shipments" },
];

/* ---------------- security ---------------- */

export const certifications = ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA-ready", "CCPA"];

export const securityControls = [
  {
    group: "Access control",
    items: [
      "SSO with SAML 2.0 & OIDC",
      "SCIM user provisioning",
      "Role-based access control",
      "Custom roles & segregation of duties",
      "Hardware key MFA enforcement",
    ],
  },
  {
    group: "Data protection",
    items: [
      "AES-256 encryption at rest",
      "TLS 1.3 in transit",
      "US, EU & APAC data residency",
      "Configurable retention policies",
      "Field-level tokenization",
    ],
  },
  {
    group: "Auditability",
    items: [
      "Immutable audit logs",
      "SIEM export (Splunk, Datadog)",
      "Per-record change lineage",
      "Exportable compliance reports",
    ],
  },
  {
    group: "Operations",
    items: [
      "99.99% uptime SLA",
      "Annual third-party pen tests",
      "RPO 5 min · RTO 30 min",
      "24×7 on-call security rotation",
    ],
  },
];

/* ---------------- pricing ---------------- */

export interface Plan {
  name: string;
  price: string;
  period: string;
  blurb: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$149",
    period: "/month",
    blurb: "For teams standardizing their first operations workflows.",
    cta: "Start free pilot",
    ctaHref: "/contact",
    features: [
      "10 users included",
      "5 monitored workflows",
      "Core dashboards & alerts",
      "12 integrations",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$490",
    period: "/month",
    blurb: "For scaling operations across regions and systems.",
    cta: "Start free pilot",
    ctaHref: "/contact",
    featured: true,
    features: [
      "100 users included",
      "50 monitored workflows",
      "Advanced analytics & forecasting",
      "All 120+ integrations",
      "SSO/SAML · priority support",
      "Sandbox environment",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    blurb: "For global organizations with dedicated requirements.",
    cta: "Talk to sales",
    ctaHref: "/contact",
    features: [
      "Unlimited users & workflows",
      "Custom roles & SCIM provisioning",
      "Unlimited audit retention + SIEM export",
      "Data residency US/EU/APAC",
      "99.99% uptime SLA · dedicated CSM",
      "White-glove implementation",
    ],
  },
];

export type CellValue = string | boolean;

export interface ComparisonGroup {
  group: string;
  rows: { feature: string; starter: CellValue; growth: CellValue; enterprise: CellValue }[];
}

export const comparison: ComparisonGroup[] = [
  {
    group: "Usage",
    rows: [
      { feature: "Included users", starter: "10", growth: "100", enterprise: "Unlimited" },
      { feature: "Monitored workflows", starter: "5", growth: "50", enterprise: "Unlimited" },
      { feature: "Event retention", starter: "30 days", growth: "13 months", enterprise: "Custom" },
      { feature: "Additional users", starter: "$12/user", growth: "$9/user", enterprise: "Volume pricing" },
    ],
  },
  {
    group: "Security & governance",
    rows: [
      { feature: "SSO / SAML", starter: false, growth: true, enterprise: true },
      { feature: "SCIM provisioning", starter: false, growth: false, enterprise: true },
      { feature: "Role-based access control", starter: "Basic roles", growth: "Advanced roles", enterprise: "Custom roles + SoD" },
      { feature: "Audit logs", starter: "30 days", growth: "1 year", enterprise: "Unlimited + SIEM export" },
      { feature: "Data residency", starter: false, growth: false, enterprise: "US · EU · APAC" },
    ],
  },
  {
    group: "Analytics",
    rows: [
      { feature: "Dashboards", starter: "Basic", growth: "Advanced", enterprise: "Enterprise BI suite" },
      { feature: "Forecasting", starter: false, growth: true, enterprise: true },
      { feature: "Warehouse sync", starter: false, growth: true, enterprise: "Two-way" },
      { feature: "Custom reports", starter: "Standard", growth: "Builder", enterprise: "Embedded anywhere" },
    ],
  },
  {
    group: "Platform",
    rows: [
      { feature: "Open API", starter: true, growth: true, enterprise: true },
      { feature: "Webhooks", starter: true, growth: true, enterprise: true },
      { feature: "Custom apps (SDK)", starter: false, growth: true, enterprise: true },
      { feature: "Multi-workspace", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    group: "Support & success",
    rows: [
      { feature: "Support", starter: "Email", growth: "Priority · 24×5", enterprise: "Dedicated CSM · 24×7" },
      { feature: "Onboarding", starter: "Self-serve", growth: "Guided", enterprise: "White-glove" },
      { feature: "Uptime SLA", starter: "99.5%", growth: "99.9%", enterprise: "99.99%" },
      { feature: "Security review support", starter: false, growth: true, enterprise: true },
    ],
  },
];

export const pricingFaqs: { q: string; a: string }[] = [
  {
    q: "How does the free pilot work?",
    a: "We connect two of your systems in a sandbox, replicate one real workflow, and run it side-by-side with your current process for 14 days. You keep the integration code either way.",
  },
  {
    q: "Can we switch plans later?",
    a: "Yes. Upgrades are immediate and prorated. Downgrades take effect at the end of your billing cycle. Annual contracts lock rates for the term.",
  },
  {
    q: "Do you support procurement and security review?",
    a: "Regularly. We provide SOC 2 reports, pen test summaries, DPA, sub-processor lists and completed CAIQ/Vendor assessments. Enterprise includes named security support for reviews.",
  },
  {
    q: "What happens when we exceed plan limits?",
    a: "Nothing breaks. We notify you at 80% and 100% of limits and give a 30-day grace window to upgrade or optimize usage.",
  },
  {
    q: "Is there an implementation fee?",
    a: "Starter and Growth are self-serve or guided at no extra cost. Enterprise implementations are scoped individually — most go live in 3–6 weeks.",
  },
  {
    q: "Can we pay by invoice?",
    a: "Annual plans can be invoiced with NET-30 terms. PO-backed purchasing is supported on Enterprise.",
  },
];
