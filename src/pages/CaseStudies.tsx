import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Users, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CaseStudies = () => {
  // Placeholder case studies data - you'll replace these with real ones
  const caseStudies = [
    {
      id: 1,
      title: "Power Automate Meeting Scheduling Automation",
      client: "Portfolio Governance Team",
      sector: "Aviation",
      challenge: "Manual meeting scheduling was inefficient and inconsistent. PMO staff had to draft Teams invites, copy stakeholders, format HTML emails, and set meeting times — all manually after project reviews.",
      solution: "Built a Power Automate flow triggered from Power Apps that created Teams calendar invites, sent HTML-formatted meeting bodies, dynamically inserted project info and stakeholder emails, set fixed 10AM next-day slots, and created a consistent experience across all triage sessions.",
      results: ["Reduced meeting setup time by 90%", "Zero formatting errors across all invites", "Standardised messaging = better stakeholder engagement", "<15 seconds from trigger to scheduled invite"],
      duration: "1 week",
      teamSize: "1 person",
      image: "/fa-uploads/easyJet-casestudy-triage-meeting-logo.png",
      tags: ["Power Automate", "Microsoft Teams", "Power Apps"]
    },
    {
      id: 2,
      title: "Compliance & IT Hygiene Automation",
      client: "Internal Ops – HR & IT",
      sector: "Public Sector / Governance",
      challenge: "Disabled accounts were still showing as 'Active' in internal resource lists, creating risks for data misuse, compliance issues, and confusion across teams.",
      solution: "Built a Power Automate flow to run monthly checks on user accounts, compare SharePoint Status fields with directory-level disabled accounts, flag discrepancies automatically, and log exceptions for investigation and cleanup.",
      results: ["100% account status accuracy", "Eliminated compliance risks", "Automated monthly audits", "Streamlined exception handling"],
      duration: "2 weeks",
      teamSize: "2 people",
      image: "/fa-uploads/easyJet-workflow-optimisation.png",
      tags: ["Power Automate", "Entra ID", "SharePoint", "Compliance"]
    },
    {
      id: 3,
      title: "Cross-Region Billing Automation",
      client: "Global Finance Team",
      sector: "Legal",
      challenge: "Manual cross-region billing created inefficiencies and compliance risks. Cost allocations between offices lacked consistency, and approval chains were misaligned with jurisdictional requirements — leading to delays and discrepancies in financial reporting.",
      solution: "Designed and deployed a region-aware billing solution using Power Apps, Power Automate, and SQL Server. The platform streamlined submission, automated multi-stage approvals, applied tax logic per region, and routed charges based on jurisdictional rules and hierarchies — all from a single, auditable interface.",
      results: ["Improved billing accuracy across 20+ offices", "Cut processing delays by over 80%", "Streamlined routing and compliance logic", "Unified dashboards = better financial oversight"],
      duration: "4 months",
      teamSize: "1 person",
      image: "/lovable-uploads/dcc2000a-27b4-4ee7-bc03-8275800402d6.png",
      tags: ["Power Apps", "Power Automate", "SQL Server"]
    }
  ];

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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how we've helped organizations transform their operations with innovative Power Platform solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 order-1 md:order-none">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{study.client}</span>
                        <span>•</span>
                        <span>{study.sector}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-destructive">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-success">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="text-muted-foreground flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-success" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center gap-6 pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {study.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  
                  {/* Image */}
                  <div className="relative h-64 md:h-auto bg-muted/50 flex items-center justify-center p-4 order-2 md:order-none">
                    <img 
                      src={study.image} 
                      alt={`${study.title} case study visualization`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with custom Power Platform solutions
          </p>
          <Link to="/#contact">
            <Button variant="secondary" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;