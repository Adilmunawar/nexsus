
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { ArrowDown, Play, Sparkles, Globe, Zap, Rocket, Star } from 'lucide-react';

const AdvancedHero = React.memo(() => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const memoizedStats = useMemo(() => [
    { number: "55+", label: "Projects Orbited", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { number: "100%", label: "Client Satisfaction", icon: Sparkles, color: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "Cosmic Support", icon: Globe, color: "from-cyan-500 to-blue-500" }
  ], []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
      
      {/* Optimized Static Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Simplified Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Optimized Logo */}
          <div className={`relative mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative inline-block group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <img 
                src="/lovable-uploads/e04a8557-a178-4b19-a946-2d6df66877cb.png" 
                alt="Nexsus Orbits Logo" 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl transform group-hover:scale-105 transition-transform duration-300 border-2 border-white/10" 
              />
            </div>
          </div>

          {/* Optimized Title */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="text-white">
                NEXSUS
              </span>
              <br />
              <span className="text-gray-300 text-3xl md:text-5xl font-light">
                ORBITS
              </span>
              <br />
              <span className="text-blue-400 text-2xl md:text-4xl font-medium">
                PAKISTAN
              </span>
            </h1>
          </div>

          {/* Optimized Subtitle */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex items-center justify-center mb-8 space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-32"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-xl text-gray-300 font-light">Digital Excellence Redefined</span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Founded by visionary leaders <span className="text-blue-400 font-semibold">Zoya Ali</span> and <span className="text-purple-400 font-semibold">Adil Munawar</span>, 
              delivering revolutionary digital solutions that transcend boundaries and redefine possibilities across the globe.
            </p>
          </div>

          {/* Optimized CTA Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/10"
              >
                <div className="flex items-center space-x-3">
                  <Rocket className="w-5 h-5" />
                  <span>Explore Our Work</span>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent border-2 border-purple-500/50 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-500/20"
              >
                <div className="flex items-center space-x-3">
                  <Play className="w-5 h-5" />
                  <span>Get In Touch</span>
                </div>
              </button>
            </div>
          </div>

          {/* Optimized Stats Section */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {memoizedStats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                      <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-black text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optimized Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex flex-col items-center space-y-2 cursor-pointer" onClick={() => scrollToSection('services')}>
              <div className="text-sm text-gray-400 font-medium">Discover More</div>
              <ArrowDown className="w-5 h-5 text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AdvancedHero.displayName = 'AdvancedHero';

export default AdvancedHero;
