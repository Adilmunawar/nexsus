
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  ShoppingCart, 
  Users, 
  Cpu,
  ArrowRight,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';

const InteractiveServices = React.memo(() => {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = useMemo(() => [
    {
      title: "Full-Stack Development",
      subtitle: "Next-Gen Web Solutions",
      description: "Revolutionary full-stack applications using cutting-edge technologies like React, Node.js, and cloud-native architectures that scale seamlessly.",
      icon: Code2,
      features: ["React Ecosystem", "Cloud Architecture", "Microservices", "Real-time Systems"],
      stats: { projects: "25+", satisfaction: "100%", performance: "99.9%" },
      color: "white"
    },
    {
      title: "UI/UX Design Mastery",
      subtitle: "Pixel-Perfect Experiences",
      description: "Immersive digital experiences that blend aesthetics with functionality, creating memorable user journeys that convert and engage.",
      icon: Palette,
      features: ["Design Systems", "User Psychology", "Motion Design", "Accessibility"],
      stats: { projects: "30+", satisfaction: "100%", performance: "95%" },
      color: "white"
    },
    {
      title: "Backend Engineering",
      subtitle: "Scalable Infrastructure",
      description: "Robust, high-performance backend systems with advanced security protocols and enterprise-grade scalability for mission-critical applications.",
      icon: Database,
      features: ["API Architecture", "Database Optimization", "Security Protocols", "Performance Tuning"],
      stats: { projects: "20+", satisfaction: "100%", performance: "99.8%" },
      color: "white"
    },
    {
      title: "E-commerce Platforms",
      subtitle: "Commerce Solutions", 
      description: "Advanced e-commerce ecosystems with AI-powered recommendations, real-time analytics, and conversion optimization strategies.",
      icon: ShoppingCart,
      features: ["Payment Gateways", "Inventory Systems", "Analytics Dashboard", "Mobile Commerce"],
      stats: { projects: "15+", satisfaction: "100%", performance: "98%" },
      color: "white"
    },
    {
      title: "Enterprise Solutions",
      subtitle: "Corporate Innovation",
      description: "Comprehensive enterprise systems including HRMS, CRM, and custom business applications tailored for operational excellence.",
      icon: Users,
      features: ["System Integration", "Workflow Automation", "Data Analytics", "Security Compliance"],
      stats: { projects: "12+", satisfaction: "100%", performance: "99%" },
      color: "white"
    },
    {
      title: "SaaS Development",
      subtitle: "Cloud Technologies",
      description: "Modern SaaS implementations and cloud solutions that revolutionize business processes and create competitive advantages.",
      icon: Cpu,
      features: ["Cloud Native", "Multi-tenant", "Data Science", "Predictive Analytics"],
      stats: { projects: "8+", satisfaction: "100%", performance: "97%" },
      color: "white"
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = useCallback((index: number) => {
    setActiveService(index);
  }, []);

  const activeServiceData = services[activeService];

  return (
    <section 
      ref={containerRef}
      className="py-32 px-6 relative overflow-hidden bg-black"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Simplified Moving Elements */}
        <div className="absolute top-20 right-20 w-48 h-48 border border-gray-800 rounded-full opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-gray-700 opacity-5 animate-pulse"></div>
        
        {/* Optimized Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Optimized Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gray-700 flex-1 max-w-32"></div>
            <Sparkles className="w-8 h-8 text-white mx-4" />
            <div className="h-px bg-gray-700 flex-1 max-w-32"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
            Our <span className="text-gray-300">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionary digital solutions crafted with precision, innovation, and unmatched technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Service Navigation */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeService === index 
                    ? 'transform scale-105' 
                    : 'hover:scale-102'
                }`}
                onClick={() => handleServiceClick(index)}
              >
                <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gray-900 border-gray-600 shadow-xl'
                    : 'bg-gray-950/50 border-gray-800 hover:bg-gray-900/70 hover:border-gray-700'
                }`}>
                  
                  <div className="relative flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 border-2 ${
                      activeService === index 
                        ? 'bg-white text-black border-white shadow-lg' 
                        : 'bg-gray-800 text-white border-gray-700'
                    }`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold transition-all duration-300 ${
                        activeService === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm transition-all duration-300 ${
                        activeService === index ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                      activeService === index 
                        ? 'text-white translate-x-1' 
                        : 'text-gray-500 group-hover:translate-x-1'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative bg-gray-950/80 backdrop-blur-sm border-2 border-gray-800 rounded-3xl p-8 shadow-xl">
              
              <div className="relative">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <activeServiceData.icon className="w-8 h-8" />
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-black text-white mb-4">
                  {activeServiceData.title}
                </h3>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                  {activeServiceData.description}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {activeServiceData.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-300 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-3 bg-gray-900/30 rounded-xl border border-gray-800">
                    <div className="text-lg font-bold text-white">
                      {activeServiceData.stats.projects}
                    </div>
                    <div className="text-gray-400 text-xs">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-gray-900/30 rounded-xl border border-gray-800">
                    <div className="text-lg font-bold text-white">
                      {activeServiceData.stats.satisfaction}
                    </div>
                    <div className="text-gray-400 text-xs">Satisfaction</div>
                  </div>
                  <div className="text-center p-3 bg-gray-900/30 rounded-xl border border-gray-800">
                    <div className="text-lg font-bold text-white">
                      {activeServiceData.stats.performance}
                    </div>
                    <div className="text-gray-400 text-xs">Performance</div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="w-full py-3 bg-black border-2 border-gray-700 rounded-xl font-bold text-white hover:border-gray-500 hover:bg-gray-900 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                  <span>Explore This Service</span>
                  <Zap className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

InteractiveServices.displayName = 'InteractiveServices';

export default InteractiveServices;
