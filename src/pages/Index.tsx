
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
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Dark Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
            {[...Array(400)].map((_, i) => (
              <div key={i} className="border-r border-b border-gray-800" />
            ))}
          </div>
        </div>
        
        {/* Moving Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-gray-800 rotate-45 animate-spin-slow opacity-10"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-gray-700 rotate-12 animate-pulse opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gray-800 opacity-5 animate-bounce"></div>
      </div>

      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
