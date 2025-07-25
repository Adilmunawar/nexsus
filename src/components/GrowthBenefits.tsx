import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Globe, 
  Users, 
  ShoppingBag, 
  BarChart3, 
  Trophy,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react';

const GrowthBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      title: "Enhanced Brand Credibility",
      description: "Establish trust and authority in your market with professional web presence",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      metrics: ["85% Trust Increase", "Professional Image", "Market Authority"],
      gradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Global Reach & Accessibility", 
      description: "Expand your market reach beyond geographical boundaries with optimized platforms",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      metrics: ["Worldwide Access", "24/7 Availability", "Multi-language Support"],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Customer Growth & Retention",
      description: "Build lasting relationships with intuitive user experiences and engagement tools",
      icon: Users,
      color: "from-purple-500 to-pink-500", 
      metrics: ["40% User Growth", "Higher Engagement", "Loyal Community"],
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Revenue Optimization",
      description: "Maximize conversions with data-driven design and optimized sales funnels",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      metrics: ["50% Revenue Boost", "Better Conversions", "Sales Growth"],
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Streamlined Operations",
      description: "Automate processes and improve efficiency with custom business solutions",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      metrics: ["60% Time Saved", "Process Automation", "Efficiency Gains"],
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and reporting tools",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      metrics: ["Real-time Analytics", "Smart Reporting", "Data Intelligence"],
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with cutting-edge technology and innovative features",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
      metrics: ["Market Leadership", "Innovation Edge", "Tech Advantage"],
      gradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      title: "Secure & Scalable Platform",
      description: "Future-proof your business with robust security and unlimited growth potential",
      icon: Shield,
      color: "from-teal-500 to-cyan-500",
      metrics: ["Enterprise Security", "Unlimited Scale", "Future-Ready"],
      gradient: "from-teal-500/10 to-cyan-500/10"
    },
    {
      title: "Enhanced Customer Experience",
      description: "Deliver exceptional user journeys that drive satisfaction and loyalty",
      icon: ShoppingBag,
      color: "from-violet-500 to-purple-500",
      metrics: ["User Satisfaction", "Seamless Journey", "Brand Loyalty"],
      gradient: "from-violet-500/10 to-purple-500/10"
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

    const section = document.getElementById('growth-benefits');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="growth-benefits" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-green-500/10 via-blue-500/5 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-purple-500/10 via-pink-500/5 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 max-w-40"></div>
            <div className="mx-8 relative">
              <div className="relative">
                <TrendingUp className="w-16 h-16 text-green-400 animate-pulse" />
                <div className="absolute inset-0 bg-green-400/30 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-40"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="text-gray-400 text-4xl md:text-6xl">Your Gateway to</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Business
            </span>
            <br />
            <span className="text-white/90 text-4xl md:text-6xl">Growth</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Unlock your business potential with our <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">comprehensive digital solutions</span> that drive measurable results
          </p>
        </div>

        {/* Benefits Grid */}
        <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-slate-900/60 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  hoveredBenefit === index ? 'border-blue-500/50 shadow-blue-500/20' : ''
                }`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {benefit.description}
                    </p>
                    
                    {/* Metrics */}
                    <div className="space-y-2">
                      {benefit.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className={`flex items-center space-x-3 transition-all duration-500 ${
                            hoveredBenefit === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-70'
                          }`}
                          style={{ transitionDelay: `${metricIndex * 0.1}s` }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${benefit.color} transition-all duration-500`}></div>
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Hover Indicator */}
                    <div className={`w-16 h-1 bg-gradient-to-r ${benefit.color} mt-6 rounded-full transition-all duration-500 ${
                      hoveredBenefit === index ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-20 text-center transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of successful businesses that have accelerated their growth with our solutions
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl font-bold text-white text-lg hover:scale-110 transition-all duration-500 shadow-2xl shadow-blue-500/25">
              Start Your Growth Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthBenefits;