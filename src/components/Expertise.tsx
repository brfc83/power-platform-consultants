import { CheckCircle, Database, Zap, Users, Settings, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Zap,
      title: "Power Platform Development",
      description: "Build scalable Power Apps (Canvas & Model-driven), Power Automate flows, and Power BI dashboards for enterprise solutions.",
      metrics: "500+ apps deployed"
    },
    {
      icon: Database,
      title: "SharePoint & Dataverse",
      description: "Design robust data architectures using SharePoint, Dataverse, and SQL Server integrations for seamless data flow.",
      metrics: "Enterprise data solutions"
    },
    {
      icon: Users,
      title: "Dynamics 365 Integration",
      description: "Leverage our expert teams to implement and customise Dynamics 365 solutions that align with your business processes.",
      metrics: "Complete D365 ecosystems"
    },
    {
      icon: Settings,
      title: "Business Process Automation",
      description: "Create sophisticated Power Automate flows that connect systems, eliminate manual tasks, and ensure compliance.",
      metrics: "95% process automation success"
    },
    {
      icon: BarChart3,
      title: "Enterprise Analytics",
      description: "Transform business data into actionable insights with Power BI, custom dashboards, and real-time reporting solutions.",
      metrics: "Data-driven decision making"
    },
    {
      icon: CheckCircle,
      title: "Microsoft Teams Integration",
      description: "Enhance collaboration with custom Teams apps, SharePoint integration, and workflow automation within Teams.",
      metrics: "Seamless collaboration tools"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Microsoft Power Platform
            <span className="text-primary block">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored automation and design solutions that help teams work smarter, faster, and with clarity — powered by Power Platform and built with the end-user in mind.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            While our focus is rooted in Power Platform, we collaborate with trusted Dynamics specialists to offer scalable solutions across Microsoft's ecosystem when needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {area.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="text-sm font-semibold text-primary">
                  {area.metrics}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have revolutionized their operations with our expertise.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://calendly.com/arif-formaautomate/30min?month=2025-07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors inline-block"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;