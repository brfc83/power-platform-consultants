const TrustedBy = () => {
  const clients = [
    {
      name: "Crossrail",
      logo: "/fa-uploads/crossrail-logo.png",
      alt: "Crossrail logo — Forma Automate transport automation client",
    },
    {
      name: "Dentons",
      logo: "/fa-uploads/dentons-logo.png",
      alt: "Dentons logo — legal sector transformation using Power Apps and automation",
    },
    {
      name: "easyJet",
      logo: "/fa-uploads/easyJet-logo.png",
      alt: "EasyJet logo — Forma Automate Power Platform project in airline sector",
    },
    {
      name: "Bermuda Monetary Authority",
      logo: "/fa-uploads/bma-logo.png",
      alt: "Bermuda Monetary Authority logo — regulatory sector Power Platform solutions by Forma Automate",
    },
    {
      name: "Office of Rail and Road",
      logo: "/fa-uploads/orr-logo.png",
      alt: "Office of Rail and Road logo — sector collaboration with Forma Automate",
    },
    {
      name: "QinetiQ",
      logo: "/fa-uploads/QinetiQ-logo.png",
      alt: "QinetiQ logo — Forma Automate client in advanced engineering services",
    },
    {
      name: "Transport for London",
      logo: "/fa-uploads/TfL-logo.png",
      alt: "TfL logo — Forma Automate Power Platform work in public transport",
    },
    {
      name: "SharkNinja",
      logo: "/fa-uploads/sharkninja-logo.svg",
      alt: "SharkNinja logo — consumer products Power Platform solutions by Forma Automate",
    },
    {
      name: "Cushman & Wakefield",
      logo: "/fa-uploads/cushman-wakefield-logo.png",
      alt: "Cushman & Wakefield logo — real estate sector SharePoint migration by Forma Automate",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <span className="eyebrow text-muted-foreground">Trusted by teams at</span>
          <span className="font-mono text-xs text-muted-foreground hidden sm:inline">UK · EU · GLOBAL</span>
        </div>

        <div className="relative overflow-hidden marquee-mask">
          {/* Two copies — each item has symmetric px padding so every slot is equal width; -50% loops exactly */}
          <div className="flex w-max animate-scroll will-change-transform items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 h-16 md:h-20 w-32 md:w-44 flex items-center justify-center px-5 md:px-10"
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className={
                    client.name === "Bermuda Monetary Authority"
                      ? "max-h-12 max-w-28 md:max-w-36 object-contain"
                      : "max-h-14 md:max-h-16 max-w-32 md:max-w-44 object-contain"
                  }
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-base text-muted-foreground max-w-2xl mt-12 text-pretty">
          From aviation giants like easyJet to legal leaders like Dentons and transport authorities like TfL —
          each partnership reflects Power Platform expertise delivering measurable results across diverse sectors.
        </p>
      </div>
    </section>
  );
};

export default TrustedBy;
