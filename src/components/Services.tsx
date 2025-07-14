import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cog, 
  BarChart3, 
  Users, 
  Laptop, 
  Shield, 
  Workflow,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
      features: ["Workflow Design", "System Integration", "Task Automation", "Performance Monitoring"],
      price: "Starting at $5,000"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and reporting.",
      features: ["Data Visualization", "Predictive Analytics", "Custom Dashboards", "Real-time Reporting"],
      price: "Starting at $8,000"
    },
    {
      icon: Users,
      title: "Organizational Consulting",
      description: "Optimize your team structure and processes for maximum productivity and growth.",
      features: ["Team Optimization", "Process Mapping", "Change Management", "Training Programs"],
      price: "Starting at $10,000"
    },
    {
      icon: Laptop,
      title: "Digital Transformation",
      description: "Modernize your business with digital solutions and cloud-based technologies.",
      features: ["Cloud Migration", "System Modernization", "Digital Strategy", "Technology Roadmap"],
      price: "Starting at $15,000"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify, assess, and mitigate business risks to protect your operations.",
      features: ["Risk Assessment", "Compliance Audits", "Security Reviews", "Risk Mitigation Plans"],
      price: "Starting at $7,000"
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored consulting solutions designed specifically for your unique business needs.",
      features: ["Custom Development", "Bespoke Strategies", "Dedicated Support", "Ongoing Optimization"],
      price: "Contact for pricing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consulting services designed to transform your business 
            operations and drive sustainable growth.
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