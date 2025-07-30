import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const ClientTestimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      id: 1,
      quote: "I had the pleasure of working with Arif (Forma Automate) during his time as a consultant within our Delivery & Change Team, where he made significant contributions to the development and enhancement of our PPM tool, built using Microsoft's Power Platform. Arif played a key role in designing and deploying several enhancements, leveraging Power Automate to streamline internal processes. His automation solutions improved efficiency throughout a project lifecycle, including resourcing. He was instrumental in optimizing the app's performance by replacing legacy code with more efficient solutions, resulting in a noticeably faster and more responsive user experience. Arif also introduced the team to Application Lifecycle Management, setting up Dev > UAT > Prod environments and transitioning the team to Microsoft best practices, this marked a major step forward in our development maturity. In addition to his technical expertise, Arif delivered comprehensive documentation and configured supporting SharePoint lists to ensure long-term sustainability and clarity around the implemented solutions. His attention to detail and commitment to maintainability meant the team could easily carry forward the work after his departure. I would welcome the opportunity to work with Arif again in the future.",
      name: "Becky M. | Senior Portfolio Analyst",
      company: "easyJet",
      logo: "/fa-uploads/easyJet-logo.png",
      logoAlt: "EasyJet logo — Forma Automate Power Platform project in airline sector",
      tags: ["Power Platform", "SharePoint", "ALM", "Power Automate", "Power Apps"]
    },
    {
      id: 2,
      quote: "Forma Automate (Arif) played a pivotal consulting role during the development of a new corporate SharePoint platform for the Elizabeth Line. His deep knowledge of how to overcome hurdles was matched by a strong sense of values — as in 'this is the right thing to do here...'. His work ethic is outstanding, and in my experience, he did what was needed to get the job done — and done well. I have no hesitation in recommending him for mission-critical development work.",
      name: "Tim L. | Senior Programme Manager",
      company: "Crossrail (Elizabeth Line)",
      logo: "/fa-uploads/crossrail-logo.png",
      logoAlt: "Crossrail logo – client testimonial",
      tags: ["SharePoint", "Automation", "User Training"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Real Stories. Real Impact Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Stories. <span className="text-primary">Real Impact.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our Power Platform expertise transforms operations across aviation, 
            transport, and enterprise sectors.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0">
                  <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-primary/10 mx-4">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex items-start mb-6">
                        <Quote className="h-12 w-12 text-primary/60 flex-shrink-0 mr-4" />
                        <div className="flex-1">
                          <p className="text-lg text-foreground leading-relaxed mb-8">
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={testimonial.logo}
                            alt={testimonial.logoAlt}
                            className="h-8 w-auto"
                          />
                          <div>
                            <div className="font-semibold text-foreground">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          onClick={scrollToContact}
                          variant="cta" 
                          size="lg"
                          className="w-full md:w-auto"
                        >
                          Let's talk about driving real efficiency
                        </Button>
                      </div>
                      
                      {/* SEO Tags */}
                      <div className="mt-6 flex flex-wrap gap-2" aria-label={`Technologies: ${testimonial.tags.join(', ')}`}>
                        {testimonial.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;