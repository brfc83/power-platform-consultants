import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { caseStudies } from "@/data/caseStudies";
import type { Accent } from "@/data/caseStudies";

interface AccentStyle {
  card: string;
  resBg: string;
  resBgColor?: string;
  resFg: string;
  chip: string;
  metaBorder: string;
}

const CaseStudies = () => {

  const accentClasses: Record<Accent, AccentStyle> = {
    teal: {
      card: "bg-background text-foreground",
      resBg: "text-white",
      resBgColor: "hsl(var(--navy-deep))",
      resFg: "text-white",
      chip: "border border-border text-muted-foreground",
      metaBorder: "border-border",
    },
    cream: {
      card: "text-foreground",
      resBg: "text-white",
      resBgColor: "hsl(var(--navy-deep))",
      resFg: "text-white",
      chip: "border border-foreground/10 text-foreground/60",
      metaBorder: "border-foreground/10",
    },
    navy: {
      card: "text-white",
      resBg: "bg-white/10 text-white",
      resBgColor: undefined,
      resFg: "text-white",
      chip: "border border-white/20 text-white/70",
      metaBorder: "border-white/15",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Power Platform Case Studies UK | Forma Automate</title>
        <meta name="description" content="Real Power Platform projects delivered for easyJet, Dentons, Crossrail and Cushman & Wakefield. See how Forma Automate solves real problems with Power Apps, Power Automate and SharePoint." />
        <meta property="og:title" content="Power Platform Case Studies UK | Forma Automate" />
        <meta property="og:description" content="Real Power Platform projects delivered for easyJet, Dentons, Crossrail and Cushman & Wakefield. See how Forma Automate solves real problems with Power Apps, Power Automate and SharePoint." />
        <meta name="twitter:title" content="Power Platform Case Studies UK | Forma Automate" />
        <meta name="twitter:description" content="Real Power Platform projects delivered for easyJet, Dentons, Crossrail and Cushman & Wakefield. See how Forma Automate solves real problems with Power Apps, Power Automate and SharePoint." />
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
                        {study.accent === "navy" ? (
                          <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center">
                            <img
                              src={study.logo}
                              alt={study.logoAlt}
                              className="h-10 w-auto max-w-[120px] object-contain"
                            />
                          </div>
                        ) : (
                          <img
                            src={study.logo}
                            alt={study.logoAlt}
                            className="h-14 w-auto max-w-[140px] object-contain"
                          />
                        )}
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
                    <div
                      className={`rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between gap-8 min-h-[420px] ${acc.resBg}`}
                      style={acc.resBgColor ? { backgroundColor: acc.resBgColor } : undefined}
                    >
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
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={`/case-studies/${study.slug}`}
                          className="inline-flex items-center gap-2 font-semibold text-sm hover:opacity-80 transition-opacity"
                        >
                          Read full case study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                          href={`mailto:arif@formaautomate.com?subject=${encodeURIComponent(
                            "Tell me more about: " + study.title
                          )}`}
                          className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                        >
                          Ask about this project
                        </a>
                      </div>
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
              <Button variant="dark" size="xl" className="rounded-full group">
                Start your project
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
