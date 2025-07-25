import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleSectionClick = (sectionId: string) => {
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
              src="/lovable-uploads/86947ffc-d1e4-4618-ba23-49394bf11bd8.png" 
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
            <Link to="/case-studies" className="text-foreground hover:text-primary transition-colors">
              Case Studies
            </Link>
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
          
          <Button 
            variant="cta" 
            size="lg" 
            className="hidden md:inline-flex"
            onClick={() => handleSectionClick('contact')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;