
import { useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { TechStack } from '@/components/sections/TechStack';
import { Workflow } from '@/components/sections/Workflow';
import { DomainExpertise } from '@/components/sections/DomainExpertise';
import { Infrastructure } from '@/components/sections/Infrastructure';
import { Projects } from '@/components/sections/Projects';
import { Management } from '@/components/sections/Management';
import { Footer } from '@/components/sections/Footer';
import RippleGrid from '@/components/RippleGrid';

const Index = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <div className="min-h-screen relative">
      {/* WebGL Ripple Grid Background */}
      <RippleGrid
        enableRainbow={false}
        gridColor="#3b82f6"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.25}
        glowIntensity={0.15}
        vignetteStrength={1.5}
      />

      {/* Main content with relative positioning */}
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <Services />
          <TechStack />
          <Workflow />
          <DomainExpertise />
          <Infrastructure />
          <Projects />
          <Management />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
