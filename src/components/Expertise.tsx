import { CheckCircle, TrendingUp, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: TrendingUp,
      title: "Business Process Optimization",
      description: "Streamline workflows and eliminate inefficiencies to maximize productivity and reduce operational costs.",
      metrics: "Average 40% efficiency gain"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology solutions and digital strategies.",
      metrics: "Digital readiness improved by 60%"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop comprehensive strategies aligned with your business goals and market opportunities.",
      metrics: "ROI increased by 150%"
    },
    {
      icon: CheckCircle,
      title: "Change Management",
      description: "Guide your organization through seamless transitions with minimal disruption.",
      metrics: "95% successful implementation rate"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Business Transformation
            <span className="text-primary block">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in transforming businesses through strategic consulting, 
            process optimization, and innovative automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {area.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="text-sm font-semibold text-primary">
                  {area.metrics}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have revolutionized their operations with our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;