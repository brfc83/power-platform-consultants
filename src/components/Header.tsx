import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/#expertise" className="text-foreground hover:text-primary transition-colors">
              Expertise
            </Link>
            <Link to="/case-studies" className="text-foreground hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link to="/#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <Link to="/#contact">
            <Button variant="cta" size="lg" className="hidden md:inline-flex">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;