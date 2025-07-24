import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ClientMarquee from "@/components/ClientMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ClientMarquee />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
