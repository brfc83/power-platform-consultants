import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhoWeAre from "@/components/WhoWeAre";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import ClientTestimonials from "@/components/ClientTestimonials";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedBy />
      <div id="services">
        <Services />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <div id="who-we-are">
        <WhoWeAre />
      </div>
      <ClientTestimonials />
      <div id="contact">
        <ContactForm />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
