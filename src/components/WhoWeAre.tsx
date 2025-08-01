const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src="/fa-uploads/forma-automate-brand-logo.png"
              alt="Forma Automate brand identity — workflow and Power Platform consultancy"
              className="h-32 w-auto mx-auto mb-8"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Who We Are
          </h2>
          
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Forma Automate is a design-led automation consultancy, built around simplicity, smart systems, and seamless user experiences.
            </p>
            
            <p>
              The name Forma comes from the Latin word for form or structure — a reflection of how we build with purpose. Every solution is shaped with clarity, simplicity, and an understanding of how teams actually work.
            </p>
            
            <p>
              Founded with a belief that technology should feel intuitive, we specialise in Power Platform solutions that combine strategic insight with thoughtful design. Whether it's streamlining workflows or crafting bespoke interfaces, our focus is always on clarity, functionality, and trust.
            </p>
            
            <p>
              We don't just implement tools — we help businesses think smarter and operate smoother. Every solution is tailored, tested, and refined to reflect your team's real-world needs.
            </p>
            
            <div className="mt-12 bg-muted/50 rounded-lg p-8 border">
              <p className="text-foreground italic text-lg mb-4">
                "The team at Forma Automate brought clarity to our complex workflows. Their attention to detail and user-focused approach made all the difference."
              </p>
              <div className="text-sm text-muted-foreground">
                — Transport Operations Director
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;