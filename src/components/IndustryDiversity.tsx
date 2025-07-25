import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  DollarSign, 
  Heart, 
  GraduationCap, 
  Users, 
  Home, 
  Music, 
  Building, 
  MapPin, 
  Car, 
  Truck, 
  Monitor,
  Shield,
  Globe,
  Plane
} from 'lucide-react';

const IndustryDiversity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const industries = [
    {
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Custom online stores with advanced features",
      projectCount: "15+",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      name: "Fintech", 
      icon: DollarSign,
      description: "Secure financial applications & platforms",
      projectCount: "8+",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      name: "Healthcare",
      icon: Heart,
      description: "Medical management & patient systems",
      projectCount: "6+", 
      color: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10"
    },
    {
      name: "Education",
      icon: GraduationCap,
      description: "Learning management & educational tools",
      projectCount: "10+",
      color: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10"
    },
    {
      name: "Social Media",
      icon: Users,
      description: "Community platforms & networking apps",
      projectCount: "5+",
      color: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      name: "Real Estate",
      icon: Home,
      description: "Property management & listing platforms",
      projectCount: "7+",
      color: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-500/10 to-yellow-500/10"
    },
    {
      name: "Entertainment",
      icon: Music,
      description: "Streaming & media content platforms",
      projectCount: "4+",
      color: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/10 to-purple-500/10"
    },
    {
      name: "Corporate",
      icon: Building,
      description: "Enterprise solutions & business tools",
      projectCount: "12+",
      color: "from-slate-500 to-gray-500",
      bgGradient: "from-slate-500/10 to-gray-500/10"
    },
    {
      name: "Travel & Tourism",
      icon: Plane,
      description: "Booking systems & travel platforms",
      projectCount: "6+",
      color: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      name: "Automotive",
      icon: Car,
      description: "Vehicle management & automotive tools",
      projectCount: "3+",
      color: "from-red-600 to-orange-500",
      bgGradient: "from-red-600/10 to-orange-500/10"
    },
    {
      name: "Logistics",
      icon: Truck,
      description: "Supply chain & delivery management",
      projectCount: "5+",
      color: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-500/10 to-orange-600/10"
    },
    {
      name: "Technology",
      icon: Monitor,
      description: "SaaS platforms & tech solutions",
      projectCount: "18+",
      color: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-500/10 to-blue-600/10"
    },
    {
      name: "Government",
      icon: Shield,
      description: "Public sector & administrative systems",
      projectCount: "4+",
      color: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-600/10 to-teal-600/10"
    },
    {
      name: "Non-Profit",
      icon: Globe,
      description: "Charity & community organization platforms",
      projectCount: "8+",
      color: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-500/10 to-cyan-600/10"
    },
    {
      name: "Hospitality",
      icon: MapPin,
      description: "Hotel management & booking systems",
      projectCount: "6+",
      color: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-500/10 to-pink-600/10"
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

    const section = document.getElementById('industries');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-conic from-purple-500/10 via-pink-500/5 to-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-conic from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="border-r border-b border-gray-800" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-40"></div>
            <div className="mx-8 relative">
              <div className="relative">
                <Globe className="w-16 h-16 text-purple-400 animate-pulse" />
                <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-1 max-w-40"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="text-gray-400 text-4xl md:text-6xl">Industry</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Expertise
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            We deliver <span className="text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">specialized solutions</span> across diverse industries, understanding unique challenges and requirements
          </p>
        </div>

        {/* Industries Grid */}
        <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-slate-900/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 transition-all duration-700 hover:scale-110 hover:shadow-2xl ${
                  hoveredIndustry === index ? 'border-purple-500/50 shadow-purple-500/20' : ''
                }`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Industry Name */}
                    <h3 className="text-lg font-bold text-center mb-2 text-white group-hover:text-gradient transition-all duration-300">
                      {industry.name}
                    </h3>
                    
                    {/* Project Count Badge */}
                    <div className={`inline-block px-3 py-1 mx-auto bg-gradient-to-r ${industry.color} rounded-full text-white text-xs font-bold mb-3 transition-all duration-300 group-hover:scale-110`}>
                      {industry.projectCount} Projects
                    </div>
                    
                    {/* Description */}
                    <p className={`text-sm text-gray-400 text-center leading-relaxed transition-all duration-500 ${
                      hoveredIndustry === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'
                    }`}>
                      {industry.description}
                    </p>
                    
                    {/* Hover Indicator */}
                    <div className={`w-12 h-1 bg-gradient-to-r ${industry.color} mx-auto mt-4 rounded-full transition-all duration-500 ${
                      hoveredIndustry === index ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-20 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                number: "15+", 
                label: "Industries Served", 
                description: "Diverse sector expertise",
                color: "from-purple-500 to-pink-500"
              },
              { 
                number: "100+", 
                label: "Unique Solutions", 
                description: "Tailored industry approaches",
                color: "from-cyan-500 to-blue-500"
              },
              { 
                number: "95%", 
                label: "Client Retention", 
                description: "Long-term partnerships",
                color: "from-green-500 to-emerald-500"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-slate-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:scale-110 transition-all duration-500 group">
                <div className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-pulse`}>
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
                <div className={`w-16 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDiversity;