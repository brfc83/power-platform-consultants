import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ad6165c0-d9f7-4ddf-92dd-b6a041855b49.png" 
              alt="Forma Automate" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-foreground hover:text-primary transition-colors">
              Expertise
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="cta" size="lg" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;