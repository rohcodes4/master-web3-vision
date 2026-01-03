import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import BackgroundEffects from '@/components/BackgroundEffects';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Spline3DSection from '@/components/Spline3DSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ArtAnimationSection from '@/components/ArtAnimationSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TechStackSection from '@/components/TechStackSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      
      <div className="relative overflow-hidden">
        <BackgroundEffects />
        
        <main className="relative z-10">
          <Navigation />
          <HeroSection />
          <Spline3DSection position="above" />
          <Spline3DSection position="below" />
          <ServicesSection />
          <PortfolioSection />
          <ArtAnimationSection />
          <ProcessSection />
          <TestimonialsSection />
          <TechStackSection />
          <CTASection />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Index;
