export type Accent = "teal" | "cream" | "navy";

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  client: string;
  sector: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  duration: string;
  teamSize: string;
  logo: string;
  logoAlt: string;
  tags: string[];
  accent: Accent;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "meeting-scheduling-automation-easyjet",
    title: "Power Automate Meeting Scheduling Automation",
    client: "Portfolio Governance Team",
    sector: "Aviation",
    challenge:
      "Manual meeting scheduling was inefficient and inconsistent. PMO staff had to draft Teams invites, copy stakeholders, format HTML emails, and set meeting times — all manually after project reviews.",
    solution:
      "Built a Power Automate flow triggered from Power Apps that created Teams calendar invites, sent HTML-formatted meeting bodies, dynamically inserted project info and stakeholder emails, set fixed 10AM next-day slots, and created a consistent experience across all triage sessions.",
    results: [
      { value: "90%", label: "reduction in meeting setup time" },
      { value: "0", label: "formatting errors" },
      { value: "<15s", label: "trigger to scheduled invite" },
      { value: "100%", label: "standardised messaging" },
    ],
    duration: "1 week",
    teamSize: "1 person",
    logo: "/fa-uploads/easyJet-logo.png",
    logoAlt: "easyJet logo",
    tags: ["Power Automate", "Microsoft Teams", "Power Apps"],
    accent: "teal",
  },
  {
    id: 2,
    slug: "compliance-it-hygiene-automation-easyjet",
    title: "Compliance & IT Hygiene Automation",
    client: "Internal Ops – HR & IT",
    sector: "Aviation",
    challenge:
      "Disabled accounts were still showing as 'Active' in internal resource lists, creating risks for data misuse, compliance issues, and confusion across teams.",
    solution:
      "Built a Power Automate flow to run monthly checks on user accounts, compare SharePoint Status fields with directory-level disabled accounts, flag discrepancies automatically, and log exceptions for investigation and cleanup.",
    results: [
      { value: "100%", label: "account status accuracy" },
      { value: "0", label: "compliance risks" },
      { value: "Monthly", label: "automated audits" },
      { value: "Auto", label: "exception handling" },
    ],
    duration: "2 weeks",
    teamSize: "2 people",
    logo: "/fa-uploads/easyJet-logo.png",
    logoAlt: "easyJet logo",
    tags: ["Power Automate", "Entra ID", "SharePoint", "Compliance"],
    accent: "navy",
  },
  {
    id: 3,
    slug: "cross-region-billing-automation-dentons",
    title: "Cross-Region Billing Automation",
    client: "Global Finance Team",
    sector: "Legal",
    challenge:
      "Manual cross-region billing created inefficiencies and compliance risks. Cost allocations between offices lacked consistency, and approval chains were misaligned with jurisdictional requirements — leading to delays and discrepancies in financial reporting.",
    solution:
      "Designed and deployed a region-aware billing solution using Power Apps, Power Automate, and SQL Server. The platform streamlined submission, automated multi-stage approvals, applied tax logic per region, and routed charges based on jurisdictional rules and hierarchies — all from a single, auditable interface.",
    results: [
      { value: "20+", label: "offices unified" },
      { value: "80%", label: "fewer processing delays" },
      { value: "1", label: "auditable interface" },
      { value: "Unified", label: "finance dashboards" },
    ],
    duration: "4 months",
    teamSize: "1 person",
    logo: "/fa-uploads/dentons-logo.png",
    logoAlt: "Dentons logo",
    tags: ["Power Apps", "Power Automate", "SQL Server"],
    accent: "cream",
  },
  {
    id: 4,
    slug: "sharepoint-migration-cushman-wakefield",
    title: "SharePoint 2007 to 2010 On-Premise Migration",
    client: "DTZ (now Cushman & Wakefield)",
    sector: "Real Estate",
    challenge:
      "The client operated over 300 site collections on SharePoint 2007, many relying on undocumented custom code with no active site owners. Microsoft had marked the platform as out of support, and the client was incurring significant costs to maintain legacy licensing. Migration to SharePoint 2010 was essential to reduce risk, cut costs, and avoid further infrastructure expansion.",
    solution:
      "Led the migration as SharePoint Engineer, overseeing planning, remediation, and execution. Navigated broken custom solutions, missing documentation, and orphaned sites with no active stakeholders. Optimised existing on-premise resources to avoid additional server provisioning whilst ensuring business continuity.",
    results: [
      { value: "300+", label: "site collections migrated" },
      { value: "0", label: "business disruption" },
      { value: "Avoided", label: "new server provisioning" },
      { value: "Saved", label: "legacy licensing costs" },
    ],
    duration: "6 months",
    teamSize: "1 person",
    logo: "/fa-uploads/cushman-wakefield-logo.png",
    logoAlt: "Cushman & Wakefield (formerly DTZ) logo",
    tags: ["SharePoint", "Legacy Migration", "Cost Avoidance", "Infrastructure Optimisation"],
    accent: "navy",
  },
];
