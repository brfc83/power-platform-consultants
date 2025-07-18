import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      role: "IT Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e4?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The Power Apps solution transformed our field operations. Our technicians now have real-time access to work orders and can update job status instantly. Productivity increased by 60%."
    },
    {
      name: "Michael Chen",
      company: "Global Manufacturing Inc",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Their Dynamics 365 implementation was flawless. The integration with our existing SharePoint and the custom Power Automate flows eliminated manual processes entirely."
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceFirst Corp",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The Power BI dashboards provide real-time insights that drive our decision-making. The Dataverse integration ensures data accuracy across all our Power Platform solutions."
    },
    {
      name: "David Thompson",
      company: "RetailMax",
      role: "VP of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The SharePoint and Teams integration revolutionized our collaboration. Document approval workflows now happen seamlessly within Teams using Power Automate."
    },
    {
      name: "Lisa Wang",
      company: "Healthcare Plus",
      role: "Digital Transformation Lead",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Their Canvas apps for patient management are intuitive and powerful. The integration with our SQL databases through Dataverse made data access seamless for our staff."
    },
    {
      name: "Robert Kim",
      company: "LogisticsPro",
      role: "IT Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The Power Automate flows connecting our warehouse systems with Dynamics 365 eliminated 80% of manual data entry. The expert team made implementation smooth."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Power Platform <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how organisations transformed their operations with our Microsoft Power Platform, 
            SharePoint, and Dynamics 365 solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/60 mb-4" />
                </div>
                
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Ready to become our next success story? Let's discuss how we can transform your business.
            </p>
            <button className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;