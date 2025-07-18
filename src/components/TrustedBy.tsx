const TrustedBy = () => {
  const clients = [
    {
      name: "Crossrail",
      logo: "/lovable-uploads/18f154c3-8fe1-45f2-9da1-3d3053ae17d2.png"
    },
    {
      name: "Dentons",
      logo: "/lovable-uploads/dde2f0e4-7b08-4669-8bfd-8a1fe0c05c2a.png"
    },
    {
      name: "easyJet",
      logo: "/lovable-uploads/5db575a2-f7a1-43e2-a46c-d5bb8d9720ab.png"
    },
    {
      name: "Office of Rail and Road",
      logo: "/lovable-uploads/ab33787b-fdac-4b9a-ba6a-45b2187efeb8.png"
    },
    {
      name: "QinetiQ",
      logo: "/lovable-uploads/314e024c-888e-4755-9227-ec2793b88f4a.png"
    },
    {
      name: "Transport for London",
      logo: "/lovable-uploads/74bb5967-f658-4fb9-ab8f-2ae8f50ff475.png"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Organisations
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-20 w-40 flex items-center justify-center bg-transparent rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each partnership reflects our commitment to clarity, reliability, and results — regardless of sector or scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;