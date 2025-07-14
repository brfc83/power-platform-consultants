import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Expertise />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
