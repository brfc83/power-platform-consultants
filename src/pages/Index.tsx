import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle scrolling to section when navigating from other pages with hash
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="expertise">
        <Expertise />
      </div>
      <div id="services">
        <Services />
      </div>
      <WhoWeAre />
      <TrustedBy />
      
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
