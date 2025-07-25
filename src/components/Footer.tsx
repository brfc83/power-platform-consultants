import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/86947ffc-d1e4-4618-ba23-49394bf11bd8.png" 
              alt="Forma Automate" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Microsoft Power Platform specialists helping organisations build scalable 
              solutions with Power Apps, SharePoint, Dynamics 365, and automation expertise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Power Apps Development</a></li>
              <li><a href="/#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Power Automate Flows</a></li>
              <li><a href="/#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">SharePoint Integration</a></li>
              <li><a href="/#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Dynamics 365 Implementation</a></li>
              <li><a href="/#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Power BI Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/#expertise" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Our Team</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">hello@formaautomate.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">+447970291460</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Forma Automate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;