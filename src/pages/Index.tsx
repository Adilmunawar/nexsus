
import React from 'react';
import Navigation from '../components/Navigation';
import AdvancedHero from '../components/AdvancedHero';
import InteractiveServices from '../components/InteractiveServices';
import Portfolio from '../components/Portfolio';
import AdvancedTestimonials from '../components/AdvancedTestimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AdvancedHero />
      <InteractiveServices />
      <Portfolio />
      <AdvancedTestimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
