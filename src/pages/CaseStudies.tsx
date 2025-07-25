import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Users, Target, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  // Placeholder case studies data - you'll replace these with real ones
  const caseStudies = [
    {
      id: 1,
      title: "Local Council Digital Transformation",
      client: "City Council",
      sector: "Public Sector",
      challenge: "Manual paper-based processes causing delays and inefficiencies",
      solution: "Implemented Power Apps and Power Automate to digitize workflows",
      results: ["70% reduction in processing time", "90% improvement in citizen satisfaction", "£50k annual savings"],
      duration: "3 months",
      teamSize: "5 people",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      tags: ["Power Apps", "Power Automate", "SharePoint"]
    },
    {
      id: 2,
      title: "Manufacturing Process Optimization",
      client: "Tech Manufacturing Ltd",
      sector: "Commercial",
      challenge: "Disconnected systems and manual reporting across production lines",
      solution: "Created integrated Power BI dashboards and automated reporting",
      results: ["40% faster decision making", "25% reduction in downtime", "Real-time visibility across operations"],
      duration: "4 months",
      teamSize: "3 people",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      tags: ["Power BI", "Power Automate", "Dataverse"]
    },
    {
      id: 3,
      title: "Healthcare Patient Management System",
      client: "Regional Health Trust",
      sector: "Healthcare",
      challenge: "Fragmented patient data across multiple systems",
      solution: "Unified patient portal using Power Platform and Microsoft 365",
      results: ["60% improvement in patient experience", "35% reduction in admin overhead", "Enhanced data security"],
      duration: "6 months",
      teamSize: "7 people",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      tags: ["Power Apps", "SharePoint", "Teams Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
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
          <Button variant="secondary" size="xl" className="group">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;