import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu
    if (location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  };
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/fa-uploads/86947ffc-d1e4-4618-ba23-49394bf11bd8.png"
              alt="Forma Automate" 
              className="h-20 w-auto -my-4 object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleSectionClick('services')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleSectionClick('expertise')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Expertise
            </button>
            <Link 
              to="/case-studies" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Case Studies
            </Link>
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="cta" 
              size="lg" 
              className="hidden md:inline-flex"
              onClick={() => handleSectionClick('contact')}
            >
              Get Started
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  <button 
                    onClick={() => handleSectionClick('services')} 
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => handleSectionClick('expertise')} 
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Expertise
                  </button>
                  <Link 
                    to="/case-studies" 
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Case Studies
                  </Link>
                  <button 
                    onClick={() => handleSectionClick('contact')} 
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="mt-4"
                    onClick={() => handleSectionClick('contact')}
                  >
                    Get Started
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;