
import React, { useState, useRef, useEffect } from 'react';
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

const InteractiveServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "Full-Stack Development",
      subtitle: "Next-Gen Web Solutions",
      description: "Revolutionary full-stack applications using cutting-edge technologies like React, Node.js, and cloud-native architectures that scale seamlessly.",
      icon: Code2,
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      features: ["React Ecosystem", "Cloud Architecture", "Microservices", "Real-time Systems"],
      stats: { projects: "25+", satisfaction: "100%", performance: "99.9%" },
      color: "blue"
    },
    {
      title: "UI/UX Design Mastery",
      subtitle: "Pixel-Perfect Experiences",
      description: "Immersive digital experiences that blend aesthetics with functionality, creating memorable user journeys that convert and engage.",
      icon: Palette,
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      features: ["Design Systems", "User Psychology", "Motion Design", "Accessibility"],
      stats: { projects: "30+", satisfaction: "100%", performance: "95%" },
      color: "purple"
    },
    {
      title: "Backend Engineering",
      subtitle: "Scalable Infrastructure",
      description: "Robust, high-performance backend systems with advanced security protocols and enterprise-grade scalability for mission-critical applications.",
      icon: Database,
      gradient: "from-green-500 via-emerald-500 to-green-600",
      features: ["API Architecture", "Database Optimization", "Security Protocols", "Performance Tuning"],
      stats: { projects: "20+", satisfaction: "100%", performance: "99.8%" },
      color: "green"
    },
    {
      title: "E-commerce Platforms",
      subtitle: "Revenue-Driven Solutions",
      description: "Advanced e-commerce ecosystems with AI-powered recommendations, real-time analytics, and conversion optimization strategies.",
      icon: ShoppingCart,
      gradient: "from-orange-500 via-red-500 to-orange-600",
      features: ["Payment Gateways", "Inventory Systems", "Analytics Dashboard", "Mobile Commerce"],
      stats: { projects: "15+", satisfaction: "100%", performance: "98%" },
      color: "orange"
    },
    {
      title: "Enterprise Solutions",
      subtitle: "Corporate Innovation",
      description: "Comprehensive enterprise systems including HRMS, CRM, and custom business applications tailored for operational excellence.",
      icon: Users,
      gradient: "from-indigo-500 via-purple-500 to-indigo-600",
      features: ["System Integration", "Workflow Automation", "Data Analytics", "Security Compliance"],
      stats: { projects: "12+", satisfaction: "100%", performance: "99%" },
      color: "indigo"
    },
    {
      title: "AI & Blockchain",
      subtitle: "Future Technologies",
      description: "Cutting-edge AI implementations and blockchain solutions that revolutionize business processes and create competitive advantages.",
      icon: Cpu,
      gradient: "from-cyan-500 via-blue-500 to-cyan-600",
      features: ["Machine Learning", "Smart Contracts", "Data Science", "Predictive Analytics"],
      stats: { projects: "8+", satisfaction: "100%", performance: "97%" },
      color: "cyan"
    }
  ];

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const activeServiceData = services[activeService];

  return (
    <section 
      ref={containerRef}
      className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-conic from-purple-500/10 to-transparent rounded-full blur-2xl animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-conic from-cyan-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-32"></div>
            <Sparkles className="w-8 h-8 text-blue-400 mx-4 animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">Expertise</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionary digital solutions crafted with precision, innovation, and unmatched technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Service Navigation */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeService === index 
                    ? 'transform scale-105 z-10' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.gradient} shadow-2xl border-white/20`
                    : 'bg-gray-900/50 border-gray-800/50 hover:bg-gray-800/70 hover:border-gray-700'
                }`}>
                  
                  {activeService === index && (
                    <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm"></div>
                  )}
                  
                  <div className="relative flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeService === index 
                        ? 'bg-white/20 shadow-lg' 
                        : `bg-gradient-to-r ${service.gradient}`
                    }`}>
                      <service.icon className={`w-8 h-8 transition-all duration-500 ${
                        activeService === index ? 'text-white scale-110' : 'text-white'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold transition-all duration-300 ${
                        activeService === index ? 'text-white' : 'text-gray-200'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm transition-all duration-300 ${
                        activeService === index ? 'text-white/80' : 'text-gray-400'
                      }`}>
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <ArrowRight className={`w-5 h-5 transition-all duration-500 ${
                      activeService === index 
                        ? 'text-white translate-x-2' 
                        : 'text-gray-400 group-hover:translate-x-1'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 shadow-2xl">
              
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeServiceData.gradient} opacity-5 rounded-3xl transition-all duration-500`}></div>
              
              <div className="relative">
                {/* Service Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${activeServiceData.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  <activeServiceData.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-4xl font-black text-white mb-4">
                  {activeServiceData.title}
                </h3>
                
                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                  {activeServiceData.description}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {activeServiceData.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${activeServiceData.gradient} rounded-full`}></div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${activeServiceData.gradient} bg-clip-text text-transparent`}>
                      {activeServiceData.stats.projects}
                    </div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${activeServiceData.gradient} bg-clip-text text-transparent`}>
                      {activeServiceData.stats.satisfaction}
                    </div>
                    <div className="text-gray-400 text-sm">Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${activeServiceData.gradient} bg-clip-text text-transparent`}>
                      {activeServiceData.stats.performance}
                    </div>
                    <div className="text-gray-400 text-sm">Performance</div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className={`w-full py-4 bg-gradient-to-r ${activeServiceData.gradient} rounded-xl font-bold text-white text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}>
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
};

export default InteractiveServices;
