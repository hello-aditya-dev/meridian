/* ---------------- case studies ---------------- */

export interface Phase {
  name: string;
  duration: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  size: string;
  products: string[];
  headline: string;
  summary: string;
  quote: { text: string; author: string; role: string };
  challenge: string[];
  before: { title: string; points: string[] };
  phases: Phase[];
  results: { value: string; label: string }[];
  outcome: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "corelink-logistics",
    company: "CoreLink Logistics",
    industry: "Logistics & freight forwarding",
    size: "2,100 employees · 14 hubs · 3 regions",
    products: ["Monitoring", "Optimization", "Integrations"],
    headline: "Cutting fulfillment cycle time 31% while absorbing 40% volume growth",
    summary:
      "How a national freight forwarder replaced 23 disconnected tools with one operating layer — and scaled through its biggest peak without adding coordinators.",
    quote: {
      text: "Meridian replaced our morning war room. Exceptions surface themselves, plans rebalance automatically, and my team spends its time on decisions instead of data entry.",
      author: "Dana Whitfield",
      role: "VP Operations, CoreLink Logistics",
    },
    challenge: [
      "CoreLink moves freight across 14 hubs and three regions, coordinating carriers, customs and last-mile partners for enterprise shippers. Growth had been strong — 40% year over year — but the operational model hadn't changed since the company was a tenth of its size.",
      "Twenty-three tools sat between an order and a delivered shipment. Every morning began with a war room: managers reconciling spreadsheets from TMS, WMS and ERP exports to reconstruct what happened overnight. Exceptions were usually discovered by customers first.",
    ],
    before: {
      title: "Before Meridian",
      points: [
        "23 disconnected systems between order and delivery",
        "Daily 45-minute status meetings built on stale exports",
        "Exceptions discovered by customers, not operations",
        "No capacity plan that survived contact with Monday",
      ],
    },
    phases: [
      {
        name: "Connect",
        duration: "Weeks 1–3",
        description:
          "Prebuilt connectors synced TMS, WMS and ERP bidirectionally. Twenty-four months of history backfilled in four days, establishing the certified metrics layer.",
      },
      {
        name: "Orchestrate",
        duration: "Weeks 4–8",
        description:
          "Dock-to-door workflow rebuilt in Meridian with the policy engine enforcing carrier rules, customs checks and approval chains. Alert policies replaced the morning meeting.",
      },
      {
        name: "Optimize",
        duration: "Weeks 9–12",
        description:
          "Simulation engine ran against live lane data, proposing rebalances ranked by projected impact. Closed-loop tracking compared realized savings against every projection.",
      },
    ],
    results: [
      { value: "31%", label: "Faster fulfillment cycle time" },
      { value: "$8.4M", label: "Annualized savings identified" },
      { value: "99.98%", label: "SLA hit rate at peak" },
      { value: "14", label: "Systems unified into one layer" },
    ],
    outcome: [
      "Peak season arrived with 40% more volume and zero additional coordinators hired. Cycle time fell from 9.7 to 6.7 days while SLA hit rate improved to 99.98%. The optimization engine's realized savings landed within 4% of projections for three consecutive quarters.",
      "The morning war room still exists — it's fifteen minutes, everyone has the same live picture, and it ends with approved decisions rather than a hunt for data.",
    ],
  },
  {
    slug: "vantage-foods",
    company: "Vantage Foods",
    industry: "Food & CPG manufacturing",
    size: "3,400 employees · 6 plants · 4 distribution centers",
    products: ["Planning", "Analytics", "Integrations"],
    headline: "Reducing stockouts 47% across six plants in one quarter",
    summary:
      "A national food manufacturer moved from weekly spreadsheet planning to continuously refreshed forecasts and automated replenishment.",
    quote: {
      text: "Forecast accuracy jumped eighteen points in a single quarter. Our board asked what changed, and the answer was one platform and eleven weeks.",
      author: "Elena Marsh",
      role: "SVP Supply Chain, Vantage Foods",
    },
    challenge: [
      "Vantage produces 480 SKUs across six plants with strict shelf-life constraints. Demand planning lived in spreadsheets refreshed weekly by a five-person team — always lagging the promotion calendar and retailer POS signals by days.",
      "Stockouts on top SKUs were costing shelf placements with two national retailers, while expedited freight to cover misses consumed margin. Planners spent their week firefighting instead of improving the network.",
    ],
    before: {
      title: "Before Meridian",
      points: [
        "Weekly planning cadence against daily demand shifts",
        "Promotion lift estimated by hand from last year",
        "Expedited freight routinely covering forecast misses",
        "Planner time consumed by data assembly, not analysis",
      ],
    },
    phases: [
      {
        name: "Connect",
        duration: "Weeks 1–2",
        description:
          "ERP, MES and retailer POS feeds unified into Meridian's demand schema. Promotion calendars imported and joined to historical lift automatically.",
      },
      {
        name: "Orchestrate",
        duration: "Weeks 3–7",
        description:
          "Forecasts refreshed every 15 minutes with confidence intervals. Replenishment workflows generated orders within policy guardrails, routing exceptions to planners with context attached.",
      },
      {
        name: "Optimize",
        duration: "Weeks 8–11",
        description:
          "Production schedules auto-rebalanced across plants when demand shifted. Simulation validated each change against line capacity and shelf-life constraints before execution.",
      },
    ],
    results: [
      { value: "-47%", label: "Stockouts on top-100 SKUs" },
      { value: "+18pts", label: "Forecast accuracy (MAPE)" },
      { value: "$5.6M", label: "Recovered margin, annualized" },
      { value: "96%", label: "OTIF to retail partners" },
    ],
    outcome: [
      "Within one quarter, stockouts on top SKUs fell 47% and OTIF reached 96%, securing the shelf-placement renewals at stake. Expedited freight spend dropped 38% as coverage shifted from reaction to prevention.",
      "The planning team didn't shrink — they stopped assembling spreadsheets and started managing exceptions by strategy: promotions, capacity investments and supplier negotiations.",
    ],
  },
  {
    slug: "northpeak-medical",
    company: "NorthPeak Medical",
    industry: "Healthcare distribution",
    size: "900 employees · FDA-regulated distribution network",
    products: ["Governance & RBAC", "Monitoring", "Audit"],
    headline: "Passing the first audit cycle in years with zero critical findings",
    summary:
      "A regulated medical distributor turned audit prep from a six-week scramble into a two-day export — while cutting approval latency 80%.",
    quote: {
      text: "Our auditors asked how long the evidence export took. When we said two days, they assumed we'd hired a consultancy. We hadn't — we'd built governance into the workflow itself.",
      author: "Priya Raman",
      role: "Chief Compliance Officer, NorthPeak Medical",
    },
    challenge: [
      "Every approval at NorthPeak — lot releases, temperature excursions, supplier changes — traveled by email chain. Evidence for auditors was reconstructed manually, and each audit cycle consumed six weeks of preparation across three departments.",
      "Leadership wanted modern automation but couldn't accept black-box tooling in a regulated environment. Approval latency was also a patient-care issue: delayed lot releases meant delayed deliveries to hospitals.",
    ],
    before: {
      title: "Before Meridian",
      points: [
        "Six-week audit preparation across three departments",
        "Approvals buried in email chains with no lineage",
        "Temperature excursions detected hours after the fact",
        "Segregation of duties documented, not enforced",
      ],
    },
    phases: [
      {
        name: "Connect",
        duration: "Weeks 1–3",
        description:
          "ERP, WMS and quality systems connected with field-level lineage. Every record change captured immutably from day one.",
      },
      {
        name: "Orchestrate",
        duration: "Weeks 4–8",
        description:
          "Approval workflows rebuilt with enforced segregation of duties, hardware-key MFA and role boundaries configured in Meridian rather than policy documents.",
      },
      {
        name: "Optimize",
        duration: "Weeks 9–10",
        description:
          "IoT cold-chain monitoring wired into alert policies with 5-minute detection. Audit evidence pack became a standing, exportable artifact.",
      },
    ],
    results: [
      { value: "0", label: "Critical findings, first cycle" },
      { value: "6w → 2d", label: "Audit evidence preparation" },
      { value: "-80%", label: "Approval latency" },
      { value: "5 min", label: "Cold-chain excursion detection" },
    ],
    outcome: [
      "NorthPeak completed its first audit cycle on the new platform with zero critical findings. Evidence requests that once took weeks are answered from the immutable log in hours, and compliance now reviews live dashboards instead of sampling documents.",
      "Approval latency fell 80% — hospital deliveries no longer wait on email chains — while segregation of duties is enforced by the system, not by memoranda.",
    ],
  },
];

/* ---------------- short quotes (wall) ---------------- */

export const quoteWall = [
  {
    quote: "We went from weekly reports to live operations. The argument about whose numbers were right simply ended.",
    name: "Marcus Bell",
    role: "COO, Novara Logistics",
  },
  {
    quote: "API-first meant our platform team shipped the integration in one sprint. Adoption followed on its own.",
    name: "Sara Lindqvist",
    role: "VP Engineering, HelioSync",
  },
  {
    quote: "Exception handling used to be overtime. Now it's just Tuesday.",
    name: "Tom Okafor",
    role: "Director of Operations, Atlas Freight",
  },
  {
    quote: "Realized savings matched projections within four percent. The ROI model sold itself to our CFO.",
    name: "Rachel Kim",
    role: "CFO, Quantive",
  },
  {
    quote: "Procurement cleared security review without a single follow-up question. That has never happened here.",
    name: "James Whitaker",
    role: "CISO, Vanta Industries",
  },
  {
    quote: "Eleven weeks from kickoff to board-level results. I've bought bigger tools that delivered less in two years.",
    name: "Elena Marsh",
    role: "SVP Supply Chain, BlueLarch Foods",
  },
];
