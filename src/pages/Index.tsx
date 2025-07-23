import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Expertise />
      <Services />
      <WhoWeAre />
      <TrustedBy />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
