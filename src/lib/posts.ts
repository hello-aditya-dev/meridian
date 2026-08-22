/* ---------------- blog ---------------- */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; author?: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: "Platform" | "Engineering" | "Operations" | "Trust";
  date: string;
  readingTime: string;
  author: { name: string; role: string };
  featured?: boolean;
  blocks: Block[];
}

export const posts: Post[] = [
  {
    slug: "operating-layer-beats-dashboards",
    title: "Why the operating layer beats the dashboard",
    excerpt:
      "Dashboards describe the past. An operating layer closes the loop — it watches, decides and executes inside the systems where work actually happens.",
    category: "Platform",
    date: "2026-06-18",
    readingTime: "6 min",
    author: { name: "Maya Chen", role: "CEO, Meridian" },
    featured: true,
    blocks: [
      {
        type: "p",
        text: "Most operations software answers a question you already regret asking: what happened? By the time a dashboard renders an answer, the exception has compounded, the customer has noticed, and your team is reconstructing history instead of changing outcomes.",
      },
      {
        type: "p",
        text: "We built Meridian on a different premise. Operations don't need another place to look — they need a system that acts. We call it the operating layer: a single layer that connects every system of record, evaluates live conditions against policy, and executes approved decisions end-to-end.",
      },
      { type: "h2", text: "The three jobs of an operating layer" },
      {
        type: "ul",
        items: [
          "See everything once — every order, shipment and inventory position from every connected system, unified into one schema with certified definitions.",
          "Decide with context — policies encode how your business runs, so routine deviations resolve automatically and genuine exceptions reach a human with full context attached.",
          "Execute everywhere — an approved decision propagates through TMS, WMS, ERP and partner systems atomically, with an audit trail for every action taken.",
        ],
      },
      {
        type: "p",
        text: "Dashboards can be bolted onto any of these stages. What they cannot do is complete the loop. The value compounds only when seeing leads to deciding and deciding leads to executing — without a human copying values between tabs at each hop.",
      },
      { type: "h2", text: "What changes for the team" },
      {
        type: "p",
        text: "In customer deployments, the pattern is consistent: the daily status meeting shrinks from 45 minutes to 15, because there is nothing to reconstruct. Analysts stop assembling spreadsheets and start tuning policies. Coordinators handle three times the volume without overtime, because routine decisions never reach their queue.",
      },
      {
        type: "quote",
        text: "Exception handling used to be overtime. Now it's just Tuesday.",
        author: "Tom Okafor, Director of Operations, Atlas Freight",
      },
      {
        type: "p",
        text: "That is the test we hold ourselves to: not more charts, but fewer meetings, shorter queues and decisions that execute themselves. If your BI tool went down tomorrow, would anyone's work stop? With an operating layer, the honest answer should be no — because the system isn't reporting on the operation. It is the operation.",
      },
    ],
  },
  {
    slug: "human-in-the-loop-approvals-that-scale",
    title: "Human-in-the-loop automation: approvals that scale",
    excerpt:
      "Full automation fails in enterprises for boring reasons: policy, liability, trust. The answer isn't less automation — it's approval design.",
    category: "Operations",
    date: "2026-05-27",
    readingTime: "7 min",
    author: { name: "Sofia Marino", role: "VP Product, Meridian" },
    featured: false,
    blocks: [
      {
        type: "p",
        text: "Every enterprise automation project eventually hits the same wall. The technology works; the organization doesn't fully trust it. Finance wants sign-off above a threshold. Compliance needs evidence that a human reviewed the edge cases. Legal asks who is liable when the robot is wrong.",
      },
      {
        type: "p",
        text: "Teams respond in one of two bad ways: they automate anyway and erode trust with every unreviewed mistake, or they wrap the workflow in manual gates until the automation is theater. Both fail because they treat approval as an afterthought rather than a designed interface.",
      },
      { type: "h2", text: "Design approvals like a product" },
      {
        type: "ul",
        items: [
          "Route by risk, not by org chart — thresholds and confidence scores decide who sees what. A $4k rebalance at 97% confidence may need nobody; a $40k one at 61% needs a director with context.",
          "Attach the why — every request carries projected impact, constraints evaluated, and the alternatives considered. Approvers decide in seconds because reasoning is visible.",
          "Enforce segregation of duties in the platform — the requester can never be the approver, configured as a rule, not a memo.",
          "Make the clock visible — approvals carry SLAs with escalation. Latency becomes measurable, then improvable.",
        ],
      },
      { type: "h2", text: "Measure the loop, not the tool" },
      {
        type: "p",
        text: "Once approvals are instrumented, something interesting happens: they get faster. NorthPeak Medical cut approval latency 80% in eight weeks — not by removing humans, but by showing them exactly enough context to be confident. Trust follows track record, and track record requires measurement.",
      },
      {
        type: "quote",
        text: "Our auditors asked how long the evidence export took. When we said two days, they assumed we'd hired a consultancy.",
        author: "Priya Raman, Chief Compliance Officer, NorthPeak Medical",
      },
      {
        type: "p",
        text: "Human-in-the-loop isn't a compromise between automation and control. Done well, it's the thing that makes ambitious automation politically possible — which makes it the most important interface your operations platform owns.",
      },
    ],
  },
  {
    slug: "streaming-ingest-four-million-workflows",
    title: "From batch to streaming: rebuilding ingest for 4.2M workflows a day",
    excerpt:
      "How we replaced nightly batch loads with change-data-capture streaming — and cut median event latency from four hours to 900 milliseconds.",
    category: "Engineering",
    date: "2026-04-30",
    readingTime: "9 min",
    author: { name: "Jonas Weber", role: "CTO, Meridian" },
    blocks: [
      {
        type: "p",
        text: "Two years ago, Meridian ingested customer data the way everyone did in 2015: nightly batch loads. At 8 a.m., dashboards refreshed, and our customers' operations teams began reconciling what had changed overnight. Our own metrics told the story — median event latency was four hours. For a monitoring product, that's disqualifying.",
      },
      { type: "h2", text: "Constraints first" },
      {
        type: "p",
        text: "Enterprise source systems dictated the design. SAP doesn't emit events for everything you'd want. Custom WMS implementations expose APIs with brutal rate limits. Some legacy EDI partners still deliver flat files on their own schedule. Any architecture that assumed clean, high-volume event streams would work beautifully in demos and fail in production.",
      },
      {
        type: "ul",
        items: [
          "Change-data-capture for databases wherever log access exists — sub-second, zero application changes.",
          "Webhook receivers with idempotent replay for SaaS sources.",
          "Scheduled polling with watermark tracking for rate-limited APIs.",
          "File-drop connectors with schema inference for EDI partners.",
        ],
      },
      {
        type: "p",
        text: "All four paths converge on one normalized event envelope with a monotonic sequence per source, so downstream ordering is guaranteed even when upstream delivery isn't.",
      },
      { type: "h2", text: "Exactly-once is a lie you tell auditors" },
      {
        type: "p",
        text: "We implemented effectively-once processing: deduplication at the partition level with transactional offsets, plus end-to-end reconciliation jobs that compare source-system counts against our ledger every hour. The reconciliation matters more than the guarantee — when drift occurs, and over months it will, we know within the hour and repair deterministically.",
      },
      { type: "h2", text: "Results" },
      {
        type: "ul",
        items: [
          "Median end-to-end latency: 900ms (from 4 hours)",
          "Peak sustained throughput: 68,000 events/second across tenants",
          "Backfill of 24 months of history: hours, not weeks",
          "Schema-drift incidents requiring human intervention: down 94%",
        ],
      },
      {
        type: "p",
        text: "The deeper lesson: enterprise data integration is not a plumbing problem, it's a contract problem. Every connector encodes promises about ordering, completeness and freshness — and your customers' operations run on whether those promises hold at 3 a.m.",
      },
    ],
  },
  {
    slug: "roi-math-cfos-believe",
    title: "The ROI math CFOs actually believe",
    excerpt:
      "Most automation business cases collapse under scrutiny. Here's the model that survives finance review — and the one metric that matters most.",
    category: "Operations",
    date: "2026-03-12",
    readingTime: "5 min",
    author: { name: "Elena Petrova", role: "CFO, Meridian" },
    blocks: [
      {
        type: "p",
        text: "I've sat on both sides of the table: approving operations budgets as a CFO, and now defending them as a vendor. I can tell you exactly where most automation business cases die. It's rarely the headline number — it's the assumptions underneath it that don't survive the second question.",
      },
      { type: "h2", text: "The three questions that kill weak cases" },
      {
        type: "ul",
        items: [
          "\"Where did that labor saving go?\" Headcount avoidance is real but must name the team, the timing and the attrition assumption.",
          "\"What's the baseline?\" Savings against a broken process differ from savings against your best quarter. Pick the baseline before picking the vendor.",
          "\"Who tracks realization?\" If nobody owns comparing projected to realized impact quarterly, the program is a press release.",
        ],
      },
      { type: "h2", text: "Start with cycle time, not cost" },
      {
        type: "p",
        text: "Cost projections invite line-item debate. Cycle-time improvements are observable, operational and hard to argue with. When CoreLink's fulfillment cycle dropped from 9.7 to 6.7 days, the working-capital effect alone paid for the platform — before counting the $8.4M in identified annual savings.",
      },
      { type: "h2", text: "The metric that matters: projected vs. realized" },
      {
        type: "p",
        text: "This is why we built closed-loop impact tracking into the product. Every optimization proposal carries a projection; every quarter, finance can see realized variance. Across our enterprise base, projections have landed within 4% of realized savings for three consecutive quarters. That number — not the demo — is what renews budgets.",
      },
      {
        type: "quote",
        text: "Realized savings matched projections within four percent. The ROI model sold itself.",
        author: "Rachel Kim, CFO, Quantive",
      },
      {
        type: "p",
        text: "Build your case around a metric someone will actually measure, assign an owner for realization, and let the cycle-time story lead. The cost savings will follow — with numbers nobody has to squint at.",
      },
    ],
  },
  {
    slug: "soc2-is-not-a-checkbox",
    title: "SOC 2 isn't a checkbox: notes from our audit",
    excerpt:
      "What our Type II audit actually examined, the controls that took real work, and why continuous compliance beats annual panic.",
    category: "Trust",
    date: "2026-02-08",
    readingTime: "6 min",
    author: { name: "Priya Nair", role: "Head of Trust & Compliance, Meridian" },
    blocks: [
      {
        type: "p",
        text: "SOC 2 reports get treated like concert merchandise — displayed, rarely read. But if you're entrusting an operations platform with the nervous system of your business, the details of that report are the product. Here's what ours actually covers, and what it took to earn.",
      },
      { type: "h2", text: "Type II means behavior over time" },
      {
        type: "p",
        text: "A Type I report says controls existed on a given day. Type II says they operated consistently across the entire observation window — in our case, twelve months. Auditors sampled access reviews, incident responses and change-management records from random weeks. You cannot cram for that; you can only operate that way.",
      },
      { type: "h2", text: "Controls that took real engineering" },
      {
        type: "ul",
        items: [
          "Immutable audit logs — append-only storage with hash chaining, exportable to customer SIEMs. Built once, exercised by every feature since.",
          "Segregation of duties enforced in-product — approver identity checked at execution time, not documentation time.",
          "Continuous access reviews — quarterly attestations generated from live directory state, not screenshots.",
          "Customer-controlled residency — US, EU and APAC data planes with per-workspace pinning, verified in the audit scope.",
        ],
      },
      { type: "h2", text: "Continuous compliance, annual calm" },
      {
        type: "p",
        text: "Evidence collection used to consume six engineer-weeks per audit. Today, standing queries produce the evidence pack in two days — because compliance telemetry was designed into the platform rather than reconstructed for the auditor. The same artifacts our customers' auditors receive are the ones our own monitoring alerts on.",
      },
      {
        type: "p",
        text: "When you evaluate any operations vendor, read the report. Ask what the auditors tested, how exceptions were handled, and how quickly the vendor detects its own control failures. The answers tell you everything about how they'll behave as your infrastructure.",
      },
    ],
  },
];
