import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12">
          {/* Company Info */}
          <div className="space-y-5">
            <img
              src="/fa-uploads/forma-automate-brand-logo-light.png"
              alt="Forma Automate brand identity — workflow and Power Platform consultancy"
              className="h-14 w-auto"
            />
            <p className="text-white/65 leading-relaxed max-w-sm text-pretty">
              Microsoft Power Platform specialists trusted by Dentons, TfL, Crossrail, easyJet, the Bermuda
              Monetary Authority, QinetiQ, ORR and SharkNinja. Expert Power Apps, Power Automate, SharePoint, and
              Dynamics 365 solutions for aviation, legal, financial regulation, consumer products, and public
              sector organisations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow text-white mb-5">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#services" className="text-white/65 hover:text-primary transition-colors">Power Apps</a></li>
              <li><a href="/#services" className="text-white/65 hover:text-primary transition-colors">Power Automate</a></li>
              <li><a href="/#services" className="text-white/65 hover:text-primary transition-colors">Power BI</a></li>
              <li><a href="/#services" className="text-white/65 hover:text-primary transition-colors">SharePoint & Dataverse</a></li>
              <li><a href="/#services" className="text-white/65 hover:text-primary transition-colors">Dynamics 365</a></li>
              <li><a href="/#services" className="text-white/65 hover:text-primary transition-colors">Microsoft Teams</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="eyebrow text-white mb-5">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#who-we-are" className="text-white/65 hover:text-primary transition-colors">About</a></li>
              <li><a href="/#expertise" className="text-white/65 hover:text-primary transition-colors">Expertise</a></li>
              <li><a href="/case-studies" className="text-white/65 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="/#contact" className="text-white/65 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-white mb-5">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:arif@formaautomate.com"
                  className="flex items-center gap-3 text-white/65 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  arif@formaautomate.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447970291460"
                  className="flex items-center gap-3 text-white/65 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  +44 7970 291460
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arifgulma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/65 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-primary shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            © {year} Forma Automate. Registered in England & Wales. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Microsoft, Power Platform and related marks are trademarks of Microsoft Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
