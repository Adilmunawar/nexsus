import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Play, Sparkles, Globe, Zap } from 'lucide-react';
const AdvancedHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: ['#60a5fa', '#a855f7', '#06b6d4', '#f59e0b'][Math.floor(Math.random() * 4)]
      });
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Attraction to mouse
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          particle.vx += dx * 0.00005;
          particle.vy += dy * 0.00005;
        }

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16);
        ctx.fill();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dist = Math.sqrt((particle.x - otherParticle.x) ** 2 + (particle.y - otherParticle.y) ** 2);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(96, 165, 250, ${(100 - dist) / 200})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mousePosition]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />
      
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-conic from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-conic from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 to-transparent rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Floating Logo with 3D Effect */}
          <div className={`relative mb-12 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative inline-block group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
              <img src="/lovable-uploads/e04a8557-a178-4b19-a946-2d6df66877cb.png" alt="Nexsus Orbits Logo" className="relative w-32 h-32 md:w-48 md:h-48 rounded-full shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border-4 border-white/20 backdrop-blur-sm" style={{
              animation: 'float 6s ease-in-out infinite',
              filter: 'drop-shadow(0 0 30px rgba(96, 165, 250, 0.5))'
            }} />
              <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-6 border border-purple-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main Title with Typewriter Effect */}
          <div className={`transition-all duration-2000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-300% font-futuristic" style={{
              backgroundSize: '300% 300%',
              animation: 'gradient-x 3s ease infinite, glow 2s ease-in-out infinite alternate'
            }}>
                NEXSUS
              </span>
              <br />
              <span className="text-white/90 text-4xl md:text-6xl font-light">
                ORBITS
              </span>
              <br />
              <span className="text-blue-400 text-3xl md:text-5xl font-medium">
                PAKISTAN
              </span>
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className={`transition-all duration-2000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex items-center justify-center mb-8 space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-32"></div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-xl text-gray-300 font-light">Digital Excellence Redefined</span>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" style={{
                animationDelay: '0.5s'
              }} />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Founded by visionary leaders <span className="text-gradient font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Zoya Ali</span> and <span className="text-gradient font-semibold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">Adil Munawar</span>, 
              delivering revolutionary digital solutions that transcend boundaries and redefine possibilities across the globe.
            </p>
          </div>

          {/* Advanced CTA Buttons */}
          <div className={`transition-all duration-2000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
          </div>

          {/* Enhanced Stats with Animation */}
          <div className={`transition-all duration-2000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[{
              number: "55+",
              label: "Projects Orbited",
              icon: Zap,
              color: "from-blue-500 to-cyan-500"
            }, {
              number: "100%",
              label: "Client Satisfaction",
              icon: Sparkles,
              color: "from-purple-500 to-pink-500"
            }, {
              number: "24/7",
              label: "Cosmic Support",
              icon: Globe,
              color: "from-cyan-500 to-blue-500"
            }].map((stat, index) => <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-5xl font-black text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text mb-3 group-hover:animate-pulse">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
                      <div className={`w-24 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-3 rounded-full group-hover:w-32 transition-all duration-500`}></div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              
              
              <ArrowDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AdvancedHero;