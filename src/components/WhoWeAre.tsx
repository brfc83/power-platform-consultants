const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/ad6165c0-d9f7-4ddf-92dd-b6a041855b49.png" 
              alt="Forma Automate" 
              className="h-16 w-auto mx-auto mb-8"
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
              Founded with a belief that technology should feel intuitive, we specialize in Power Platform solutions that combine strategic insight with thoughtful design. Whether it's streamlining workflows or crafting bespoke interfaces, our focus is always on clarity, functionality, and trust.
            </p>
            
            <p>
              We don't just implement tools — we help businesses think smarter and operate smoother. Every solution is tailored, tested, and refined to reflect your team's real-world needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;