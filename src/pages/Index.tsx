
import React from 'react';
import AdvancedNavigation from '../components/AdvancedNavigation';
import AdvancedHero from '../components/AdvancedHero';
import InteractiveServices from '../components/InteractiveServices';
import WorkflowSection from '../components/WorkflowSection';
import IndustryDiversity from '../components/IndustryDiversity';
import Portfolio from '../components/Portfolio';
import GrowthBenefits from '../components/GrowthBenefits';
import CompanyAdvantages from '../components/CompanyAdvantages';
import TestimonialShowcase from '../components/TestimonialShowcase';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = React.memo(() => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Optimized Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Simplified Particles */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Optimized Grid */}
        <div className="absolute inset-0 opacity-3">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
              backgroundSize: '120px 120px'
            }}
          />
        </div>
        
        {/* Simplified Geometric Shapes */}
        <div className="absolute top-20 left-20 w-24 h-24 border border-gray-800 rotate-45 opacity-5" style={{ animation: 'spin 30s linear infinite' }}></div>
        <div className="absolute bottom-40 right-32 w-16 h-16 border border-gray-700 rotate-12 animate-pulse opacity-5"></div>
      </div>

      <div className="relative z-10">
        <AdvancedNavigation />
        <AdvancedHero />
        <div id="services">
          <InteractiveServices />
        </div>
        <WorkflowSection />
        <IndustryDiversity />
        <div id="portfolio">
          <Portfolio />
        </div>
        <GrowthBenefits />
        <CompanyAdvantages />
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
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
