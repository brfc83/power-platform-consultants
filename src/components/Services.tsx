import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Database, 
  Users, 
  BarChart3, 
  Workflow,
  Settings,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Power Apps Development",
      description: "Custom Canvas and Model-driven Power Apps for aviation, legal, and public sector enterprises. Trusted by organisations like Dentons and TfL for mission-critical applications.",
      features: ["Canvas App Development", "Model-driven Apps", "Custom Connectors", "Mobile-first Design"],
    },
    {
      icon: Workflow,
      title: "Power Automate Solutions",
      description: "Business process automation for aviation, transport, and legal sectors. Streamline workflows connecting SharePoint, Dynamics, and third-party systems seamlessly.",
      features: ["Process Automation", "System Integration", "Approval Workflows", "Document Management"]
    },
    {
      icon: BarChart3,
      title: "Power BI Analytics",
      description: "Enterprise Power BI dashboards and reporting solutions for aviation, transport, and public sector organisations with real-time data insights.",
      features: ["Custom Dashboards", "Real-time Analytics", "Data Modeling", "Report Automation"]
    },
    {
      icon: Database,
      title: "SharePoint & Dataverse",
      description: "Robust SharePoint and Dataverse architectures for large organisations. Proven expertise with public sector and aviation clients requiring secure data solutions.",
      features: ["Data Architecture", "SharePoint Solutions", "Dataverse Design", "SQL Integration"]
    },
    {
      icon: Users,
      title: "Dynamics 365 Implementation",
      description: "Full-service Dynamics 365 implementation for legal, aviation, and transport sectors. Expert teams delivering certified solutions with seamless integrations.",
      features: ["D365 Implementation", "Custom Integrations", "User Training", "Ongoing Support"]
    },
    {
      icon: Settings,
      title: "Microsoft Teams Integration",
      description: "Microsoft Teams collaboration solutions for enterprise organisations. Custom Teams apps, bots, and SharePoint integration trusted by aviation and public sector clients.",
      features: ["Teams App Development", "Bot Integration", "SharePoint Sync", "Workflow Automation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Microsoft Power Platform <span className="text-primary">Consulting Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Power Platform solutions trusted by leading organisations including Dentons, 
            Transport for London, and Crossrail. Expert Power Apps development, Power Automate workflows, 
            SharePoint integration, and Dynamics 365 implementations for aviation, legal, and public sector clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-primary/10">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" size="sm" className="group/btn" asChild>
                    <a href="#contact">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;