import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Database,
  Users,
  Bot,
  Workflow,
  Settings,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Power Apps Development",
      description:
        "Custom Canvas and Model-driven Power Apps for aviation, legal, and public sector enterprises. Trusted by organisations like Dentons and TfL for mission-critical applications.",
      features: ["Canvas App Development", "Model-driven Apps", "Custom Connectors", "Mobile-first Design"],
    },
    {
      icon: Workflow,
      title: "Power Automate Solutions",
      description:
        "Business process automation for aviation, transport, and legal sectors. Streamline workflows connecting SharePoint, Dynamics, and third-party systems seamlessly.",
      features: ["Process Automation", "System Integration", "Approval Workflows", "Document Management"],
    },
    {
      icon: Bot,
      title: "Copilot Studio Agents",
      description:
        "Conversational AI agents built on Microsoft Copilot Studio — deployed across Teams, websites, and internal tools. From knowledge-base bots to multi-turn agents connected to your Power Platform data and flows.",
      features: ["Conversational AI Agents", "Teams & Web Deployment", "Knowledge Source Integration", "Power Automate Actions"],
    },
    {
      icon: Database,
      title: "SharePoint & Dataverse",
      description:
        "Robust SharePoint and Dataverse architectures for large organisations. Proven expertise with public sector and aviation clients requiring secure data solutions.",
      features: ["Data Architecture", "SharePoint Solutions", "Dataverse Design", "SQL Integration"],
    },
    {
      icon: Users,
      title: "Dynamics 365 Implementation",
      description:
        "Full-service Dynamics 365 implementation for legal, aviation, and transport sectors. Expert teams delivering certified solutions with seamless integrations.",
      features: ["D365 Implementation", "Custom Integrations", "User Training", "Ongoing Support"],
    },
    {
      icon: Settings,
      title: "Microsoft Teams Integration",
      description:
        "Microsoft Teams collaboration solutions for enterprise organisations. Custom Teams apps, bots, and SharePoint integration trusted by aviation and public sector clients.",
      features: ["Teams App Development", "Bot Integration", "SharePoint Sync", "Workflow Automation"],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-28" style={{ backgroundColor: "hsl(var(--cream-light))" }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-end">
          <div>
            <span className="eyebrow text-primary">— Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mt-4 text-foreground text-balance">
              The full Power Platform,
              <br />
              under one roof.
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
            Most agencies pick a lane. I work across the entire Microsoft Power Platform so you get a single
            accountable consultant from discovery to handover — and a stack that holds together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 border border-border bg-border gap-px overflow-hidden rounded-2xl">
          {services.map((service, index) => (
            <article
              key={index}
              id={service.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}
              className="relative p-8 md:p-12 group"
              style={{ backgroundColor: "hsl(var(--cream-light))" }}
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-6">{service.description}</p>

              <ul className="space-y-1.5 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="link" className="text-primary p-0 h-auto font-semibold group/btn" asChild>
                <a href="#contact">
                  Discuss this service
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
