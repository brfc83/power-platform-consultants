import { CheckCircle, Database, Zap, Users, Settings, Bot } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Zap,
      title: "Power Platform Development",
      description:
        "Build scalable Power Apps (Canvas & Model-driven), Power Automate flows, and Power BI dashboards for enterprise solutions.",
      metrics: "40+ tailored apps shipped",
    },
    {
      icon: Database,
      title: "SharePoint & Dataverse",
      description:
        "Design robust data architectures using SharePoint, Dataverse, and SQL Server integrations for seamless data flow.",
      metrics: "Enterprise data solutions",
    },
    {
      icon: Users,
      title: "Dynamics 365 Integration",
      description:
        "Leverage expert teams to implement and customise Dynamics 365 solutions that align with your business processes.",
      metrics: "Complete D365 ecosystems",
    },
    {
      icon: Settings,
      title: "Business Process Automation",
      description:
        "Create sophisticated Power Automate flows that connect systems, eliminate manual tasks, and ensure compliance.",
      metrics: "95% process automation success",
    },
    {
      icon: Bot,
      title: "Copilot Studio",
      description:
        "Build and deploy intelligent conversational agents using Microsoft Copilot Studio. Whether it's an internal helpdesk bot or a customer-facing assistant, agents connect directly to your Dataverse, SharePoint, and Power Automate flows.",
      metrics: "AI agents built and deployed",
    },
    {
      icon: CheckCircle,
      title: "Microsoft Teams Integration",
      description:
        "Enhance collaboration with custom Teams apps, SharePoint integration, and workflow automation within Teams.",
      metrics: "Seamless collaboration tools",
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="eyebrow text-primary">— Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mt-4 text-foreground max-w-4xl text-balance">
            Tailored solutions that help teams work smarter,
            <span className="font-serif-italic font-normal"> faster,</span> and with clarity.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mt-6 leading-relaxed">
            While our focus is rooted in Power Platform, we collaborate with trusted Dynamics specialists to offer
            scalable solutions across Microsoft's ecosystem when needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {expertiseAreas.map((area, index) => (
            <article
              key={index}
              className="bg-background p-8 md:p-10 group hover:bg-muted/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-pretty">{area.description}</p>
              <div className="text-sm font-mono text-primary border-t border-border pt-4">
                {area.metrics}
              </div>
            </article>
          ))}
        </div>

        {/* Big CTA card */}
        <div
          className="mt-16 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden"
          style={{ backgroundColor: "hsl(var(--navy-deep))" }}
        >
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="eyebrow text-primary">— Next step</span>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mt-4">
                Ready to transform
                <br />
                your business?
              </h3>
              <p className="text-lg md:text-xl text-white/75 mt-6 max-w-xl text-pretty">
                Automation shouldn't be confusing. We design systems that actually make life easier — for teams,
                clients, and leadership.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="https://calendly.com/arif-formaautomate/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-foreground px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Book Your Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
