/* ---------------- solutions (by team) ---------------- */

export interface Solution {
  slug: string;
  team: string;
  headline: string;
  description: string;
  outcomes: string[];
  stat: { value: string; label: string };
}

export const solutions: Solution[] = [
  {
    slug: "operations",
    team: "Operations leaders",
    headline: "Run the network from one live picture",
    description:
      "Replace the morning reconciliation ritual with a continuously updated operating view — and spend leadership attention on decisions instead of status.",
    outcomes: [
      "Daily 45-minute war rooms become 15-minute decision reviews",
      "Exceptions routed with context, owner and SLA",
      "Capacity plans that rebalance themselves within guardrails",
    ],
    stat: { value: "-31%", label: "median cycle time across customers" },
  },
  {
    slug: "supply-chain",
    team: "Supply chain teams",
    headline: "Plan, monitor and rebalance across every lane",
    description:
      "Demand signals, supplier commitments and carrier performance unified into plans that hold up when reality shifts mid-week.",
    outcomes: [
      "Forecasts refreshed every 15 minutes with confidence intervals",
      "Auto-rebalancing across sites, modes and carriers",
      "Supplier SLA breaches detected in minutes",
    ],
    stat: { value: "+18pts", label: "forecast accuracy improvement" },
  },
  {
    slug: "revenue-ops",
    team: "Revenue operations",
    headline: "Connect the promise to the delivery",
    description:
      "Link CRM commitments to fulfillment reality so customer promises are made on live capacity — and kept with evidence.",
    outcomes: [
      "Quote-to-cash cycle visibility end to end",
      "Customer promises validated against real capacity",
      "Churn-risk signals from service-level trends",
    ],
    stat: { value: "96%", label: "OTIF achieved by top-quartile teams" },
  },
  {
    slug: "procurement",
    team: "Procurement",
    headline: "Turn spend data into negotiating leverage",
    description:
      "Every PO, receipt and exception unified — so renewal negotiations run on realized performance, not anecdote.",
    outcomes: [
      "Supplier scorecards built from live delivery data",
      "Maverick spend flagged at approval time",
      "Contract utilization tracked automatically",
    ],
    stat: { value: "$5.6M", label: "recovered margin at Vantage Foods" },
  },
  {
    slug: "it-engineering",
    team: "IT & engineering",
    headline: "An integration platform you can stand behind",
    description:
      "API-first, typed SDKs and sandbox environments. Ship integrations in sprints, own the schema, and stop babysitting brittle point-to-points.",
    outcomes: [
      "Typed REST + webhooks + TS/Python/Go SDKs",
      "Schema drift protection with alerting",
      "Sandbox environment mirroring production",
    ],
    stat: { value: "1 sprint", label: "typical first integration" },
  },
  {
    slug: "finance",
    team: "Finance",
    headline: "Close the loop on operational ROI",
    description:
      "Projected impact tracked against realized results, quarter after quarter — with exports your auditors will accept without follow-ups.",
    outcomes: [
      "Realized vs. projected savings variance tracking",
      "Immutable audit logs with SIEM export",
      "Board-ready reporting in one click",
    ],
    stat: { value: "4%", label: "projection variance, three quarters running" },
  },
];

/* ---------------- industries ---------------- */

export interface Industry {
  name: string;
  icon: string;
  painPoint: string;
  useCases: string[];
  kpis: { value: string; label: string }[];
}

export const industries: Industry[] = [
  {
    name: "Logistics & freight",
    icon: "Truck",
    painPoint:
      "Volume grows faster than coordinators. Exceptions hide across TMS, WMS, EDI and email until customers find them.",
    useCases: [
      "Live dock-to-door visibility across 3PL partners",
      "Carrier SLA monitoring with auto-escalation",
      "Lane-level capacity planning and rebalancing",
    ],
    kpis: [
      { value: "-31%", label: "cycle time" },
      { value: "99.98%", label: "SLA hit rate" },
    ],
  },
  {
    name: "Manufacturing",
    icon: "Factory",
    painPoint:
      "Plant schedules fight demand reality. Changeovers, material shortages and maintenance windows break plans weekly.",
    useCases: [
      "Production schedules auto-rebalanced across plants",
      "Material shortage early-warning from supplier feeds",
      "OEE and downtime analytics with certified metrics",
    ],
    kpis: [
      { value: "-47%", label: "stockouts" },
      { value: "+12%", label: "throughput" },
    ],
  },
  {
    name: "Retail & CPG",
    icon: "ShoppingCart",
    painPoint:
      "Promotions shift demand daily while planning runs weekly. Shelf placements are won or lost in that gap.",
    useCases: [
      "POS-informed replenishment with promotion lift",
      "Shelf-life-aware allocation across DCs",
      "OTIF monitoring by retailer with root cause",
    ],
    kpis: [
      { value: "+18pts", label: "forecast accuracy" },
      { value: "96%", label: "OTIF" },
    ],
  },
  {
    name: "Healthcare & life sciences",
    icon: "HeartPulse",
    painPoint:
      "Regulated distribution demands evidence for everything — while hospitals wait on approvals buried in email.",
    useCases: [
      "Approval chains with enforced segregation of duties",
      "Cold-chain excursion detection in minutes",
      "Standing audit-evidence exports",
    ],
    kpis: [
      { value: "0", label: "critical findings" },
      { value: "-80%", label: "approval latency" },
    ],
  },
  {
    name: "Financial services",
    icon: "Landmark",
    painPoint:
      "Operational risk lives in handoffs between core systems. Regulators ask who did what, and when.",
    useCases: [
      "Immutable audit trails across system boundaries",
      "Recon workflows with four-eyes controls",
      "SLA clocks tuned to market calendars",
    ],
    kpis: [
      { value: "-64%", label: "break resolution time" },
      { value: "100%", label: "action traceability" },
    ],
  },
  {
    name: "Energy & utilities",
    icon: "Zap",
    painPoint:
      "Field operations, asset data and scheduling systems rarely agree — and outage response punishes every gap.",
    useCases: [
      "Crew and asset orchestration with live constraints",
      "Outage workflow coordination across regions",
      "Vendor compliance monitoring at scale",
    ],
    kpis: [
      { value: "-23%", label: "restoration time" },
      { value: "+18%", label: "crew utilization" },
    ],
  },
];

/* ---------------- about ---------------- */

export const timeline = [
  { year: "2021", event: "Meridian founded in San Francisco by ops and infrastructure engineers." },
  { year: "2022", event: "First enterprise deployments in freight forwarding and CPG manufacturing." },
  { year: "2023", event: "SOC 2 Type II certification. Streaming ingest platform launches." },
  { year: "2024", event: "$48M Series B led by Ridgeline Ventures. EU data plane opens." },
  { year: "2026", event: "4.2M workflows executed daily across 380+ enterprise operations teams." },
];

export const values = [
  {
    title: "Systems over heroics",
    text: "We build platforms where ordinary Tuesdays outperform heroic saves. If success requires a superhero, the system is wrong.",
  },
  {
    title: "Evidence, always",
    text: "Every claim we make is measurable in-product. Projections carry owners, and realized impact is tracked in the open.",
  },
  {
    title: "Trust is engineered",
    text: "Security and compliance are architecture, not paperwork. The audit trail is the product.",
  },
  {
    title: "Boring reliability",
    text: "We celebrate uneventful quarters. Our customers run supply chains and hospitals — novelty is not a feature.",
  },
];

export const team = [
  { name: "Maya Chen", role: "Co-founder & CEO", bio: "Previously led global ops platform at a Fortune 100 logistics company." },
  { name: "Jonas Weber", role: "Co-founder & CTO", bio: "Built streaming infrastructure processing billions of events at unicorn scale." },
  { name: "Alex Rivera", role: "VP Engineering", bio: "Shipped developer platforms used by thousands of enterprise engineering teams." },
  { name: "Sofia Marino", role: "VP Product", bio: "Fifteen years designing operations software for manufacturing and retail." },
  { name: "Priya Nair", role: "Head of Trust & Compliance", bio: "Led SOC 2 and ISO programs at two enterprise SaaS companies." },
  { name: "Elena Petrova", role: "CFO", bio: "Former operations CFO who signed off on exactly the ROI models we now build." },
];

/* ---------------- resources ---------------- */

export const guides = [
  {
    title: "The operating layer buyer's guide",
    type: "Guide · PDF",
    length: "32 pages",
    description:
      "Evaluation criteria, integration checklists and the 14 questions vendors hope you don't ask.",
  },
  {
    title: "Human-in-the-loop design patterns",
    type: "Playbook",
    length: "18 pages",
    description:
      "Six proven patterns for approval workflows that satisfy policy without strangling throughput.",
  },
  {
    title: "From spreadsheets to systems",
    type: "Guide · PDF",
    length: "24 pages",
    description:
      "A phased migration path off spreadsheet planning — with change-management templates included.",
  },
];

export const webinars = [
  {
    title: "Live teardown: rebuilding a dock-to-door workflow",
    date: "Sep 12, 2026",
    host: "Sofia Marino, VP Product",
  },
  {
    title: "Passing security review without the six-week scramble",
    date: "Oct 3, 2026",
    host: "Priya Nair, Head of Trust",
  },
  {
    title: "ROI modeling workshop for operations leaders",
    date: "Oct 24, 2026",
    host: "Elena Petrova, CFO",
  },
];
