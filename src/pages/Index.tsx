import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatementOfWorkSection from "@/components/StatementOfWorkSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VisualGridComparison from "@/components/VisualGridComparison";
import ImpactMetricsSection from "@/components/ImpactMetricsSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ClientMarquee from "@/components/ClientMarquee";
import WorkShowcaseCarousel from "@/components/WorkShowcaseCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StatementOfWorkSection />
      <WorkShowcaseCarousel />
      <ClientMarquee />
      <ServicesSection />
      <WhyChooseUsSection />
      <VisualGridComparison />
      <ImpactMetricsSection />
      <ProcessSection />
      <Testimonials />
      <Footer />
      
    </div>
  );
};

export default Index;
