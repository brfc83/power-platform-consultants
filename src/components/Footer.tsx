import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/ad6165c0-d9f7-4ddf-92dd-b6a041855b49.png" 
              alt="Forma Automate" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Transform your business with expert consulting and automation solutions. 
              We help organizations streamline operations and drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Process Automation</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Organizational Consulting</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Risk Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">hello@formautomate.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-secondary-foreground/80">
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </span>
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