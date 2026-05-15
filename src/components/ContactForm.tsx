import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { z } from "zod";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    setFormData({ ...formData, [name]: value });
  };

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const validatedData = contactFormSchema.parse(formData);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...validatedData }),
      });

      toast({
        title: "Message sent.",
        description: "Thanks for reaching out. I'll be in touch within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            const field = err.path[0] as keyof ContactFormData;
            fieldErrors[field] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Check the form",
          description: "A few fields need attention before sending.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or email arif@formaautomate.com directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi Arif, I'm interested in learning more about Forma Automate's consulting services.`;
    window.open(`https://wa.me/447970291460?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="mb-14 md:mb-20">
          <span className="eyebrow text-primary">— Contact</span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mt-4 text-foreground">
            Let's talk.
            <br />
            <span className="font-serif-italic font-normal">No obligation.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 items-start">

          {/* Left: contact options */}
          <div className="space-y-10">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Whether you have a specific project in mind or just want to explore what's possible with Power Platform — get in touch. I respond within one business day.
            </p>

            <div className="space-y-6">
              <a
                href="https://calendly.com/arif-formaautomate/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group p-5 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/40 transition-all duration-200"
              >
                <div>
                  <div className="font-semibold text-foreground text-sm">Book a free discovery call</div>
                  <div className="text-xs text-muted-foreground mt-0.5">30 minutes via Calendly</div>
                </div>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:arif@formaautomate.com"
                className="flex items-center justify-between group p-5 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/40 transition-all duration-200"
              >
                <div>
                  <div className="font-semibold text-foreground text-sm">Send an email</div>
                  <div className="text-xs text-muted-foreground mt-0.5">arif@formaautomate.com</div>
                </div>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+447970291460"
                className="flex items-center justify-between group p-5 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/40 transition-all duration-200"
              >
                <div>
                  <div className="font-semibold text-foreground text-sm">Call directly</div>
                  <div className="text-xs text-muted-foreground mt-0.5">+44 7970 291 460</div>
                </div>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-between w-full group p-5 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/40 transition-all duration-200 text-left"
              >
                <div>
                  <div className="font-semibold text-foreground text-sm">WhatsApp</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Chat instantly</div>
                </div>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground font-mono">
              UK-based · remote-first · available now
            </p>
          </div>

          {/* Right: form */}
          <div className="bg-muted/30 rounded-3xl p-8 md:p-10 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-7">Send a message</h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className={`bg-background rounded-xl ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@company.com"
                    className={`bg-background rounded-xl ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your organisation"
                    className={`bg-background rounded-xl ${errors.company ? "border-destructive" : ""}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+44 ..."
                    className={`bg-background rounded-xl ${errors.phone ? "border-destructive" : ""}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                  Message <span className="text-primary">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project — what problem are you trying to solve?"
                  className={`resize-none bg-background rounded-xl ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                variant="dark"
                size="lg"
                className="w-full rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
