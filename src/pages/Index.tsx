
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-foreground">
      <AdvancedNavigation />
      <AdvancedHero />
      <div id="services">
        <InteractiveServices />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="testimonials">
        <TestimonialShowcase />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
