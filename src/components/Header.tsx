import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Auto-updating availability — always reads "current month"
  const availability = useMemo(() => {
    return new Date().toLocaleString("en-GB", { month: "long" });
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Promo strip */}
      <div style={{ backgroundColor: "hsl(var(--navy-deep))" }} className="text-white text-center py-2 px-4 text-xs md:text-sm font-medium">
        Free 30-minute Power Platform discovery call — book this week and we&apos;ll scope your first automation, no commitment.
      </div>
    <header className="w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/fa-uploads/forma-automate-brand-logo-tagline.svg"
              alt="Forma Automate brand identity — workflow and Power Platform consultancy"
              className="h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleSectionClick("services")}
              className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleSectionClick("expertise")}
              className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
            >
              Process
            </button>
            <Link
              to="/case-studies"
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
            <button
              onClick={() => handleSectionClick("who-we-are")}
              className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              UK · Available {availability}
            </span>
            <Button
              variant="cta"
              size="lg"
              className="hidden md:inline-flex rounded-full"
              onClick={() => handleSectionClick("contact")}
            >
              Book a call
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px]">
                <nav className="flex flex-col gap-1 mt-12">
                  {[
                    { label: "Services", action: () => handleSectionClick("services") },
                    { label: "Process", action: () => handleSectionClick("expertise") },
                    { label: "Case Studies", action: () => { setIsOpen(false); navigate("/case-studies"); window.scrollTo(0, 0); } },
                    { label: "About", action: () => handleSectionClick("who-we-are") },
                    { label: "Contact", action: () => handleSectionClick("contact") },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="text-left text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors py-3 border-b border-border last:border-b-0"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    variant="cta"
                    size="lg"
                    className="mt-6 w-full rounded-full"
                    onClick={() => handleSectionClick("contact")}
                  >
                    Book a call
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    UK · Available {availability}
                  </p>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
