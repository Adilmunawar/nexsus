
import React from 'react';
import AdvancedNavigation from '../components/AdvancedNavigation';
import AdvancedHero from '../components/AdvancedHero';
import InteractiveServices from '../components/InteractiveServices';
import Portfolio from '../components/Portfolio';
import TestimonialShowcase from '../components/TestimonialShowcase';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AdvancedNavigation />
      <AdvancedHero />
      <InteractiveServices />
      <Portfolio />
      <TestimonialShowcase />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
