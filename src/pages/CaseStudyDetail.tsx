import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Case study not found.</p>
          <Link to="/case-studies" className="text-primary underline">Back to case studies</Link>
        </div>
      </div>
    );
  }

  const isNavy = study.accent === "navy";
  const isCream = study.accent === "cream";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{study.title} | Forma Automate Case Study</title>
        <meta
          name="description"
          content={`Power Platform case study: ${study.title}. Client: ${study.client} (${study.sector}). Delivered by Forma Automate, independent Power Platform consultant UK.`}
        />
        <meta property="og:title" content={`${study.title} | Forma Automate`} />
        <meta
          property="og:description"
          content={`Power Platform case study: ${study.title}. Client: ${study.client} (${study.sector} sector).`}
        />
        <link rel="canonical" href={`https://www.formaautomate.com/case-studies/${study.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": study.title,
          "description": study.challenge,
          "author": { "@type": "Person", "name": "Arif Gulma" },
          "publisher": {
            "@type": "Organization",
            "name": "Forma Automate",
            "logo": "https://www.formaautomate.com/fa-uploads/forma-automate-brand-logo.png"
          },
          "about": study.tags.map((tag) => ({ "@type": "Thing", "name": tag }))
        })}</script>
      </Helmet>
      <Header />

      {/* Breadcrumb */}
      <div className="pt-32 md:pt-36 pb-4 bg-background">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground font-mono" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{study.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section
        className="py-14 md:py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: "hsl(var(--navy-deep))" }}
      >
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center">
                <img src={study.logo} alt={study.logoAlt} className="h-8 w-auto max-w-[100px] object-contain" />
              </div>
              <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
                {study.sector} · {study.duration}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.0] text-balance">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-6">
              {study.tags.map((tag) => (
                <span key={tag} className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">

            {/* Left: challenge + solution */}
            <div className="space-y-10">
              <div>
                <div className="font-mono text-[11px] font-bold tracking-[0.1em] text-primary mb-3">CHALLENGE</div>
                <p className="text-lg leading-relaxed text-foreground text-pretty">{study.challenge}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] font-bold tracking-[0.1em] text-primary mb-3">SOLUTION</div>
                <p className="text-lg leading-relaxed text-foreground text-pretty">{study.solution}</p>
              </div>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-border font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {study.client}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {study.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Team · {study.teamSize}</span>
              </div>
            </div>

            {/* Right: results */}
            <div
              className="rounded-2xl p-8 md:p-10 text-white"
              style={{ backgroundColor: "hsl(var(--navy-deep))" }}
            >
              <div className="font-mono text-[11px] font-bold tracking-[0.12em] opacity-70 mb-8">RESULTS</div>
              <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-white/20">
                {study.results.map((r, ri) => (
                  <div
                    key={ri}
                    className={`p-3 md:p-5 ${ri % 2 === 0 ? "border-r border-white/20" : ""} ${ri < 2 ? "border-b border-white/20" : ""}`}
                  >
                    <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none">{r.value}</div>
                    <div className="text-xs opacity-75 mt-2 leading-snug">{r.label}</div>
                  </div>
                ))}
              </div>
              <a
                href={`mailto:arif@formaautomate.com?subject=${encodeURIComponent("Tell me more about: " + study.title)}`}
                className="inline-flex items-center gap-2 font-semibold text-sm hover:opacity-80 transition-opacity mt-8"
              >
                Ask about this project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back + CTA */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>
          <Button variant="dark" size="lg" className="rounded-full" asChild>
            <a href="https://calendly.com/arif-formaautomate/30min" target="_blank" rel="noopener noreferrer">
              Discuss your project
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
