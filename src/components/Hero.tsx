import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Power Platform Consulting
                <span className="text-primary-light block">
                  For Aviation, Legal & Public Sector
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Microsoft Power Platform specialists helping organisations like Dentons, TfL, and Crossrail 
                build scalable Power Apps, Power Automate workflows, and Power BI dashboards that transform 
                operations across aviation, legal, and public sector industries.
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
                <div className="text-3xl font-bold">50+</div>
                <div className="text-primary-foreground/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-glow">
              <div className="bg-background rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded opacity-80"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Power Platform Implementation</div>
                    <div className="text-muted-foreground">Process efficiency increased by 85%</div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[85%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;