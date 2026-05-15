import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Quote, ChevronLeft, ChevronRight, ExternalLink, Shield, ChevronDown } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";

const ClientTestimonials = () => {
  console.log("ClientTestimonials component rendering");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<number, boolean>>({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const toggleExpanded = (id: number) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getTruncatedQuote = (quote: string) => {
    const targetLength = 280;
    if (quote.length <= targetLength) {
      return { truncated: quote, needsExpansion: false };
    }
    const truncated = quote.substring(0, targetLength).trim() + "…";
    return { truncated, needsExpansion: true };
  };

  const testimonials = [
    {
      id: 1,
      quote:
        "I had the pleasure of working with Arif (Forma Automate) during his time as a consultant within our Delivery & Change Team, where he made significant contributions to the development and enhancement of our PPM tool, built using Microsoft's Power Platform. Arif played a key role in designing and deploying several enhancements, leveraging Power Automate to streamline internal processes. His automation solutions improved efficiency throughout a project lifecycle, including resourcing. He was instrumental in optimizing the app's performance by replacing legacy code with more efficient solutions, resulting in a noticeably faster and more responsive user experience. Arif also introduced the team to Application Lifecycle Management, setting up Dev > UAT > Prod environments and transitioning the team to Microsoft best practices, this marked a major step forward in our development maturity. In addition to his technical expertise, Arif delivered comprehensive documentation and configured supporting SharePoint lists to ensure long-term sustainability and clarity around the implemented solutions. His attention to detail and commitment to maintainability meant the team could easily carry forward the work after his departure. I would welcome the opportunity to work with Arif again in the future.",
      name: "Becky M. | Senior Portfolio Analyst",
      company: "easyJet",
      logo: "/fa-uploads/easyJet-logo.png",
      logoAlt: "EasyJet logo — Forma Automate Power Platform project in airline sector",
      tags: ["Power Platform", "SharePoint", "ALM", "Power Automate", "Power Apps", "PPM Solutions", "Consulting"],
      platform: "YunoJuno",
    },
    {
      id: 2,
      quote:
        "Forma Automate (Arif) played a pivotal consulting role during the development of a new corporate SharePoint platform for the Elizabeth Line. His deep knowledge of how to overcome hurdles was matched by a strong sense of values — as in 'this is the right thing to do here…'. His work ethic is outstanding, and in my experience, he did what was needed to get the job done — and done well. I have no hesitation in recommending him for mission-critical development work.",
      name: "Tim L. | Senior Programme Manager",
      company: "Crossrail (Elizabeth Line)",
      logo: "/fa-uploads/crossrail-logo.png",
      logoAlt: "Crossrail logo – client testimonial",
      tags: ["SharePoint", "Intranet Development", "Platform Development", "Consulting", "Mission-Critical Systems"],
      platform: "UpWork",
    },
    {
      id: 3,
      quote:
        "Working with Arif (Forma Automate) was always a pleasure and was instrumental in our app development and maintenance. He is highly knowledgeable and thorough in his approach to being able to apply solutions to complex issues. Highly recommended.",
      name: "Kevin K. | Portfolio Resource Manager",
      company: "easyJet",
      logo: "/fa-uploads/easyJet-logo.png",
      logoAlt: "EasyJet logo — Forma Automate Power Platform consulting testimonial",
      tags: ["Power Platform", "SharePoint", "Power Automate", "Power Apps", "Complex Problem Solving", "Consulting"],
      googleReviewUrl: "https://maps.app.goo.gl/b5xQk6vcpRJy1MF66",
    },
    {
      id: 4,
      quote:
        "I have had the immense pleasure of working with Arif (Forma Automate) in his role of Global Power Apps Specialist, at Dentons, the largest law firm in the world, on a firmwide transformation programme, spanning across various regions. Arif has proven himself to be a subject matter expert, he never misses the detail that others cannot, which makes him extremely valuable and indispensable! Arif brings creativity to solutions to solve complex problems and is extremely diligent. Arif can work both independently and very well in a team - he listens to understand to what his team has to say, and he never lets his team down. Arif has exceptional communication skills and goes out of his way to explain patiently when others have questions. What I also value about Arif is that he will research a solution for a problem until he finds one - then bringing that back to the team and Stakeholders for all to learn from, which makes him a mentor, and a leader! Arif is always committed to excellence - I would highly recommend him for any role he wishes to tackle next - his professionalism, expertise and his calm composed nature is an asset to any client!",
      name: "Charleen M.",
      company: "Dentons",
      logo: "/fa-uploads/dentons-logo.png",
      logoAlt: "Dentons logo — Global law firm Power Platform transformation testimonial",
      tags: ["Power Apps", "SQL", "Power Automate", "Global Finance Transformation Programme", "Enterprise Solutions", "Consulting"],
      googleReviewUrl: "https://maps.app.goo.gl/gU3NpmGtjkQWPnfw7",
    },
  ];

  return (
    <section className="py-24 md:py-28" style={{ backgroundColor: "hsl(var(--cream-light))" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="eyebrow text-primary">— Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mt-4 text-foreground text-balance">
              Real stories.
              <br />
              <span className="font-serif-italic font-normal">Real impact.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border-foreground/20 hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border-foreground/20 hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => {
                const { truncated, needsExpansion } = getTruncatedQuote(testimonial.quote);
                const isExpanded = expandedTestimonials[testimonial.id];
                return (
                  <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-2 md:px-3">
                    <Card className="border border-border bg-background rounded-3xl shadow-elegant">
                      <CardContent className="p-8 md:p-14">
                        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14">
                          {/* Left: company + person */}
                          <div className="flex flex-col justify-between gap-8">
                            <div>
                              <div className="mb-7">
                                <img
                                  src={testimonial.logo}
                                  alt={testimonial.logoAlt}
                                  className={
                                    testimonial.company === "Dentons"
                                      ? "h-11 w-auto object-contain"
                                      : "h-10 w-auto object-contain"
                                  }
                                />
                              </div>
                              <div className="text-xl font-bold tracking-tight">{testimonial.name}</div>
                              <div className="text-sm text-muted-foreground mt-1">{testimonial.company}</div>
                              {(testimonial.platform || testimonial.googleReviewUrl) && (
                                <div className="flex items-center gap-1.5 mt-3">
                                  <Shield className="h-3.5 w-3.5 text-primary" />
                                  <span className="text-xs text-primary font-medium font-mono">
                                    {testimonial.platform
                                      ? `Verified on ${testimonial.platform}`
                                      : "Verified on Google"}
                                  </span>
                                </div>
                              )}
                              {testimonial.googleReviewUrl && (
                                <a
                                  href={testimonial.googleReviewUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 mt-3 text-xs text-primary hover:underline"
                                >
                                  <ExternalLink className="h-3.5 w-3.5" />
                                  View on Google Reviews
                                </a>
                              )}
                            </div>
                            <Button
                              onClick={scrollToContact}
                              variant="dark"
                              size="lg"
                              className="rounded-full w-full md:w-auto md:self-start"
                            >
                              Let's talk efficiency
                            </Button>
                          </div>

                          {/* Right: quote + tags */}
                          <div className="flex flex-col justify-between gap-8">
                            <div>
                              <Quote className="h-8 w-8 text-primary/40 mb-4" />
                              <p className="text-lg md:text-xl leading-relaxed text-foreground text-pretty">
                                "{isExpanded ? testimonial.quote : truncated}"
                              </p>
                              {needsExpansion && (
                                <Collapsible>
                                  <CollapsibleTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="mt-3 p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                                      onClick={() => toggleExpanded(testimonial.id)}
                                    >
                                      <span className="mr-1">{isExpanded ? "Read less" : "Read more"}</span>
                                      <ChevronDown
                                        className={`h-4 w-4 transition-transform ${
                                          isExpanded ? "rotate-180" : ""
                                        }`}
                                      />
                                    </Button>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent />
                                </Collapsible>
                              )}
                            </div>

                            <div
                              className="flex flex-wrap gap-2 pt-6 border-t border-border"
                              aria-label={`Technologies: ${testimonial.tags.join(", ")}`}
                            >
                              {testimonial.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs border border-border px-3 py-1 rounded-full text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-foreground/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
