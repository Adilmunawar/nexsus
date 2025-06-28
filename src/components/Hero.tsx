
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      orbitRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
      
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          {/* Logo with orbit animation */}
          <div ref={orbitRef} className="flex justify-center mb-8 transition-transform duration-300 ease-out">
            <div className="relative">
              <img 
                src="/lovable-uploads/e04a8557-a178-4b19-a946-2d6df66877cb.png" 
                alt="Nexsus Logo" 
                className="w-32 h-32 md:w-40 md:h-40 animate-[spin_20s_linear_infinite] drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -inset-4 border border-blue-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute -inset-8 border border-purple-400/20 rounded-full animate-[spin_25s_linear_infinite]"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite]">
              Nexsus Orbits
            </span>
            <br />
            <span className="text-white/90 text-4xl md:text-6xl">Pakistan</span>
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded by <span className="text-gradient font-semibold">Zoya Ali</span> and <span className="text-gradient font-semibold">Adil Munawar</span>, 
              delivering world-class web development, cutting-edge design, and robust full-stack solutions with unparalleled precision across the globe.
            </p>
            <Sparkles className="w-6 h-6 text-yellow-400 ml-2 animate-pulse" style={{animationDelay: '1s'}} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <span>Explore Our Universe</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative px-10 py-5 border-2 border-gray-600 rounded-xl font-semibold text-lg overflow-hidden backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:shadow-2xl">
              <div className="relative flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Our Story</span>
              </div>
            </button>
          </div>
          
          {/* Enhanced stats with animations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="text-5xl font-bold text-gradient mb-3 group-hover:animate-pulse">55+</div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-gray-400 text-lg font-medium">Projects Orbited</div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
            </div>
            
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="text-5xl font-bold text-gradient mb-3 group-hover:animate-pulse">100%</div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-gray-400 text-lg font-medium">Client Satisfaction</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-2 rounded-full"></div>
            </div>
            
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="text-5xl font-bold text-gradient mb-3 group-hover:animate-pulse">24/7</div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-gray-400 text-lg font-medium">Cosmic Support</div>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
