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
      description: "Custom Canvas and Model-driven apps for enterprise needs, built on Dataverse with responsive design.",
      features: ["Canvas App Development", "Model-driven Apps", "Custom Connectors", "Mobile-first Design"],
      price: "Starting at $8,000"
    },
    {
      icon: Workflow,
      title: "Power Automate Solutions",
      description: "Sophisticated business process automation connecting SharePoint, Dynamics, and third-party systems.",
      features: ["Process Automation", "System Integration", "Approval Workflows", "Document Management"],
      price: "Starting at $5,000"
    },
    {
      icon: BarChart3,
      title: "Power BI Analytics",
      description: "Enterprise dashboards and reporting solutions with real-time data from multiple sources.",
      features: ["Custom Dashboards", "Real-time Analytics", "Data Modeling", "Report Automation"],
      price: "Starting at $6,000"
    },
    {
      icon: Database,
      title: "SharePoint & Dataverse",
      description: "Design and implement robust data architectures with SharePoint lists, libraries, and Dataverse.",
      features: ["Data Architecture", "SharePoint Solutions", "Dataverse Design", "SQL Integration"],
      price: "Starting at $10,000"
    },
    {
      icon: Users,
      title: "Dynamics 365 Implementation",
      description: "Full-service Dynamics 365 implementation with our certified expert teams and custom integrations.",
      features: ["D365 Implementation", "Custom Integrations", "User Training", "Ongoing Support"],
      price: "Starting at $25,000"
    },
    {
      icon: Settings,
      title: "Microsoft Teams Integration",
      description: "Enhance collaboration with custom Teams apps, bots, and SharePoint integration solutions.",
      features: ["Teams App Development", "Bot Integration", "SharePoint Sync", "Workflow Automation"],
      price: "Starting at $7,000"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Microsoft Power Platform <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Power Platform solutions including Power Apps, Power Automate, 
            SharePoint integration, and Dynamics 365 implementations with expert teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-primary/10">
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
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {service.price}
                    </span>
                    <Button variant="outline" size="sm" className="group/btn">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;