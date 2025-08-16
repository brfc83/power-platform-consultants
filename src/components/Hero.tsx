import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-dashboard-updated.jpg";

const Hero = () => {
  const sectors = ["Real Estate", "Defence", "Infrastructure", "Public Sector", "Legal", "Regulation", "Aviation"];
  const [currentSectorIndex, setCurrentSectorIndex] = useState(0);

  const CountUpNumber = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (hasStarted) return; // Never animate again once started

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasStarted) {
            setHasStarted(true);
            
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor((end - 0) * easeOutQuart);
              
              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            animate();
            observer.disconnect(); // Stop observing once animation starts
          }
        },
        { threshold: 0.3 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, [end, duration, hasStarted]);

    return (
      <div ref={elementRef}>
        <span>{count}{suffix}</span>
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSectorIndex((prev) => (prev + 1) % sectors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [sectors.length]);

  return (
    <>
      <Helmet>
        <title>Power Platform Consulting | Forma Automate</title>
        <meta name="description" content="Forma Automate provides Power Platform consulting for Real Estate, Defence, Infrastructure, Public Sector, Legal, Regulation, and Aviation—streamlining workflows and driving digital transformation." />
      </Helmet>
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Power Platform Consulting
                </h1>
                <div className="h-16 md:h-20 flex items-center">
                  <h2 className="text-2xl md:text-4xl font-semibold text-primary-foreground flex items-center">
                    <span className="mr-2">For</span>
                    <span className="inline-block min-w-[200px] md:min-w-[300px] text-left relative">
                      <span 
                        key={currentSectorIndex}
                        className="inline-block animate-pop-in bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg shadow-glow transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
                      >
                        <span className="relative z-10">
                          {sectors[currentSectorIndex]}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </span>
                    </span>
                  </h2>
                </div>
                <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                  Forma Automate delivers Microsoft Power Platform solutions, digital transformation, and operational automation—trusted by sector leaders to streamline workflows, reduce manual effort, and build intuitive systems that teams actually want to use.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group" asChild>
                  <a href="https://calendly.com/arif-formaautomate/30min?month=2025-07" target="_blank" rel="noopener noreferrer">
                    Start Your Transformation
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    <CountUpNumber end={50} suffix="+" />
                  </div>
                  <div className="text-primary-foreground/80">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    <CountUpNumber end={20} suffix="+" />
                  </div>
                  <div className="text-primary-foreground/80">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-glow">
                <img 
                  src={heroImage} 
                  alt="Forma Automate Power Platform consulting dashboard showing digital transformation solutions for Real Estate, Defence, Infrastructure, Public Sector, Legal, Regulation, and Aviation sectors"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;