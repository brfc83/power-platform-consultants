
const TrustedBy = () => {
  const clients = [
    {
      name: "Crossrail",
      logo: "/fa-uploads/crossrail-logo.png"
    },
    {
      name: "Dentons",
      logo: "/fa-uploads/dentons-logo.png"
    },
    {
      name: "easyJet",
      logo: "/fa-uploads/easyJet-logo.png"
    },
    {
      name: "Office of Rail and Road",
      logo: "/fa-uploads/orr-logo.png"
    },
    {
      name: "QinetiQ",
      logo: "/fa-uploads/QinetiQ-logo.png"
    },
    {
      name: "Transport for London",
      logo: "/fa-uploads/TfL-logo.png"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Aviation, Legal & Public Sector Organisations
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Power Platform solutions delivering real results for major UK organisations across transport, aviation, legal, and government sectors
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6 md:space-x-16 will-change-transform">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-20 w-28 md:w-40 flex items-center justify-center bg-transparent rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={client.logo}
                  alt={
                    client.name === "Crossrail" ? "Crossrail logo — Forma Automate transport automation client" :
                    client.name === "Dentons" ? "Dentons logo — legal sector transformation using Power Apps and automation" :
                    client.name === "easyJet" ? "EasyJet logo — Forma Automate Power Platform project in airline sector" :
                    client.name === "Office of Rail and Road" ? "Office of Rail and Road logo — sector collaboration with Forma Automate" :
                    client.name === "QinetiQ" ? "QinetiQ logo — Forma Automate client in advanced engineering services" :
                    client.name === "Transport for London" ? "TfL logo — Forma Automate Power Platform work in public transport" :
                    `${client.name} - Power Platform consulting client for Microsoft 365 and automation solutions`
                  }
                  className="max-h-12 max-w-28 md:max-w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From aviation giants like easyJet to legal leaders like Dentons and transport authorities like TfL - 
            each partnership reflects our Power Platform expertise delivering measurable results across diverse sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
