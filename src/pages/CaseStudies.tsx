import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type Accent = "teal" | "cream" | "navy";

interface CaseStudy {
  id: number;
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

const CaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
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

  const accentClasses: Record<Accent, { card: string; resBg: string; resFg: string; chip: string; metaBorder: string }> = {
    teal: {
      card: "bg-background text-foreground",
      resBg: "bg-primary text-white",
      resFg: "text-white",
      chip: "border border-border text-muted-foreground",
      metaBorder: "border-border",
    },
    cream: {
      card: "text-foreground",
      resBg: "text-white",
      resFg: "text-white",
      chip: "border border-foreground/10 text-foreground/60",
      metaBorder: "border-foreground/10",
    },
    navy: {
      card: "text-white",
      resBg: "bg-primary text-foreground",
      resFg: "text-foreground",
      chip: "border border-white/20 text-white/70",
      metaBorder: "border-white/15",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Case Studies | Forma Automate - Power Platform Success Stories</title>
        <meta name="description" content="Real-world automation wins with Dentons, TfL, and more — see how Forma Automate delivers results through Power Platform and digital transformation." />
        <meta property="og:title" content="Case Studies | Forma Automate - Power Platform Success Stories" />
        <meta property="og:description" content="Real-world automation wins with Dentons, TfL, and more — see how Forma Automate delivers results through Power Platform and digital transformation." />
        <meta name="twitter:title" content="Case Studies | Forma Automate - Power Platform Success Stories" />
        <meta name="twitter:description" content="Real-world automation wins with Dentons, TfL, and more — see how Forma Automate delivers results through Power Platform and digital transformation." />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="eyebrow text-primary">— Selected work</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mt-4 text-foreground">
              Quietly useful
              <br />
              <span className="font-serif-italic font-normal">systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl text-pretty">
              Discover how we've helped organisations transform their operations with innovative Power Platform
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {caseStudies.map((study, i) => {
              const acc = accentClasses[study.accent];
              const flip = i % 2 === 1;
              const cardStyle =
                study.accent === "cream"
                  ? { backgroundColor: "hsl(var(--cream))" }
                  : study.accent === "navy"
                  ? { backgroundColor: "hsl(var(--navy-deep))" }
                  : undefined;
              return (
                <article
                  key={study.id}
                  className={`rounded-3xl p-8 md:p-14 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 ${acc.card}`}
                  style={cardStyle}
                >
                  {/* Meta side */}
                  <div className={`flex flex-col justify-between gap-8 ${flip ? "lg:order-2" : ""}`}>
                    <div>
                      <div className="flex items-center gap-4 mb-7">
                        <img
                          src={study.logo}
                          alt={study.logoAlt}
                          className={
                            study.accent === "navy"
                              ? "h-10 w-auto object-contain brightness-0 invert"
                              : "h-10 w-auto object-contain"
                          }
                        />
                        <span
                          className={`font-mono text-xs uppercase tracking-wider ${
                            study.accent === "navy" ? "text-white/60" : "text-muted-foreground"
                          }`}
                        >
                          {study.sector} · {study.duration}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
                        {study.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-7">
                        {study.tags.map((tag) => (
                          <span key={tag} className={`text-xs px-3 py-1 rounded-full ${acc.chip}`}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-5">
                        <div>
                          <div className="font-mono text-[11px] font-bold tracking-[0.1em] text-primary mb-1.5">
                            CHALLENGE
                          </div>
                          <p
                            className={`text-sm leading-relaxed text-pretty ${
                              study.accent === "navy" ? "text-white/80" : "text-muted-foreground"
                            }`}
                          >
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <div className="font-mono text-[11px] font-bold tracking-[0.1em] text-primary mb-1.5">
                            SOLUTION
                          </div>
                          <p
                            className={`text-sm leading-relaxed text-pretty ${
                              study.accent === "navy" ? "text-white/80" : "text-muted-foreground"
                            }`}
                          >
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex flex-wrap gap-6 pt-6 border-t font-mono text-[11px] uppercase tracking-wider ${
                        acc.metaBorder
                      } ${study.accent === "navy" ? "text-white/55" : "text-muted-foreground"}`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> {study.client}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> Team · {study.teamSize}
                      </span>
                    </div>
                  </div>

                  {/* Results panel */}
                  <div className={flip ? "lg:order-1" : ""}>
                    <div className={`rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between gap-8 min-h-[420px] ${acc.resBg}`}>
                      <div className="font-mono text-[11px] font-bold tracking-[0.12em] opacity-70">
                        RESULTS — 0{i + 1}
                      </div>
                      <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-current/20">
                        {study.results.map((r, ri) => (
                          <div
                            key={ri}
                            className={`p-5 ${
                              ri % 2 === 0 ? "border-r border-current/20" : ""
                            } ${ri < 2 ? "border-b border-current/20" : ""}`}
                          >
                            <div className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                              {r.value}
                            </div>
                            <div className="text-xs opacity-75 mt-2 leading-snug">{r.label}</div>
                          </div>
                        ))}
                      </div>
                      <a
                        href={`mailto:arif@formaautomate.com?subject=${encodeURIComponent(
                          "Tell me more about: " + study.title
                        )}`}
                        className="inline-flex items-center gap-2 font-semibold text-sm hover:opacity-80 transition-opacity"
                      >
                        Ask about this project
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95] text-balance">
            Ready to transform
            <br />
            your organisation?
          </h2>
          <p className="text-lg md:text-xl text-white/85 mt-6 text-pretty">
            Let's discuss how we can help you achieve similar results with custom Power Platform solutions.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/#contact">
              <Button variant="secondary" size="xl" className="rounded-full group bg-white text-foreground hover:bg-white/90">
                Start Your Project
                <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="xl"
              className="rounded-full border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="mailto:arif@formaautomate.com">arif@formaautomate.com</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
