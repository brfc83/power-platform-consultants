import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/86947ffc-d1e4-4618-ba23-49394bf11bd8.png" 
              alt="Forma Automate" 
              className="h-20 w-auto -my-4 object-contain"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-foreground hover:text-primary transition-colors">
              Expertise
            </a>
            <a href="/case-studies" className="text-foreground hover:text-primary transition-colors">
              Case Studies
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