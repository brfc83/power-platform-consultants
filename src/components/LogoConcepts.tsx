import logoConcept1 from "@/assets/logo-concept-1.png";
import logoConcept2 from "@/assets/logo-concept-2.png";
import logoConcept3 from "@/assets/logo-concept-3.png";

const LogoConcepts = () => {
  const concepts = [
    {
      id: 1,
      title: "Concept 1: Geometric Structure",
      description: "Hexagonal form emphasizing structure and stability, with clean geometric lines representing the 'Forma' foundation of your brand.",
      image: logoConcept1,
      approach: "Architectural & Structural"
    },
    {
      id: 2,
      title: "Concept 2: Connected Systems", 
      description: "Interconnected nodes and flowing lines representing automation, systems thinking, and seamless integration.",
      image: logoConcept2,
      approach: "Technology & Flow"
    },
    {
      id: 3,
      title: "Concept 3: Building Blocks",
      description: "Abstract geometric blocks forming structure, representing both 'form' and the building nature of your Power Platform solutions.",
      image: logoConcept3,
      approach: "Modular & Progressive"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Forma Automate Logo Concepts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three distinct approaches to represent your design-led automation consultancy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {concepts.map((concept) => (
            <div key={concept.id} className="bg-card rounded-lg p-8 shadow-lg border">
              <div className="bg-white rounded-lg p-8 mb-6 flex items-center justify-center min-h-[300px]">
                <img 
                  src={concept.image} 
                  alt={concept.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              <div className="space-y-4">
                <div className="text-sm text-primary font-medium">
                  {concept.approach}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {concept.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {concept.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Design Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Each concept reflects your core values: <strong>Forma</strong> (structure, clarity, purposeful design) 
              and <strong>Automate</strong> (seamless systems, intelligent flow, Power Platform expertise). 
              The designs use professional color palettes that complement Microsoft's ecosystem while 
              maintaining your unique identity as a design-led consultancy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoConcepts;