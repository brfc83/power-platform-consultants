import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does a Power Platform consultant do?",
    a: "A Power Platform consultant designs and builds solutions using Microsoft's suite of low-code tools — Power Apps, Power Automate, Copilot Studio, and Dynamics 365. This includes custom applications, automated workflows, AI agents, and data integrations that replace manual processes and connect business systems.",
  },
  {
    q: "How much does Power Platform consulting cost in the UK?",
    a: "Day rates in the UK typically range from £500 to £900 depending on experience and project complexity. Forma Automate works on both time-and-materials and fixed-scope models. Book a free 30-minute discovery call to discuss your requirements.",
  },
  {
    q: "How long does a Power Platform project take?",
    a: "It depends on scope. A focused Power Automate flow can be delivered in days. A full Canvas App with custom connectors and ALM setup typically takes 4–12 weeks. Every project is scoped individually — book a discovery call for a realistic timeline.",
  },
  {
    q: "Do you work remotely or on-site?",
    a: "Forma Automate is remote-first, based in London, UK. Most engagements are fully remote. On-site working in London or elsewhere in the UK can be arranged where the project benefits from it.",
  },
  {
    q: "Can you build Copilot Studio agents?",
    a: "Yes. Forma Automate builds and deploys Microsoft Copilot Studio conversational agents — from internal helpdesk bots to customer-facing assistants. Agents connect to SharePoint knowledge bases, Dataverse, and Power Automate flows, and can be deployed via Microsoft Teams or embedded on websites.",
  },
  {
    q: "What sectors do you specialise in?",
    a: "Projects have been delivered across aviation (easyJet), legal (Dentons), transport (TfL, Crossrail), financial regulation (Bermuda Monetary Authority), defence (QinetiQ), public sector (ORR), and consumer products (SharkNinja). That breadth means the right pattern for your sector is already understood.",
  },
  {
    q: "What is the difference between Canvas Apps and Model-driven Apps?",
    a: "Canvas Apps give full control over layout and UI — ideal for focused, task-specific tools and mobile-first experiences. Model-driven Apps are built on Dataverse and generate the UI from your data model — better for complex business applications with relational data. Forma Automate builds both and advises which suits your use case.",
  },
  {
    q: "Do you offer support after a project is delivered?",
    a: "Yes. Every delivery includes documentation and handover. Retainer arrangements are available for organisations that need ongoing Power Platform expertise beyond the initial project.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="eyebrow text-primary">— FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mt-4 text-foreground text-balance">
              Common questions,
              <br />
              <span className="font-serif-italic font-normal">straight answers.</span>
            </h2>
          </div>

          <div className="divide-y divide-border">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-pretty">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
