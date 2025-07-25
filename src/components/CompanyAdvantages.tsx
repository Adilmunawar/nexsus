import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Workflow, 
  Users, 
  Clock,
  CheckCircle,
  Zap,
  Shield,
  Award
} from 'lucide-react';

const CompanyAdvantages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  const advantages = [
    {
      title: "Modern Tech Stack",
      subtitle: "Cutting-Edge Technologies",
      description: "We leverage the latest frameworks and tools to build fast, secure, and scalable applications that stand the test of time.",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      features: [
        "React, Vue.js, Next.js",
        "Node.js, Python, PHP", 
        "AWS, Docker, Kubernetes",
        "Progressive Web Apps"
      ],
      stats: { metric: "99.9%", label: "Uptime" }
    },
    {
      title: "Agile Development",
      subtitle: "Efficient Project Delivery",
      description: "Our streamlined agile methodology ensures faster delivery times while maintaining the highest quality standards.",
      icon: Workflow,
      color: "from-green-500 to-emerald-500",
      features: [
        "Scrum Methodology",
        "Sprint-based Delivery",
        "Continuous Integration",
        "Regular Client Updates"
      ],
      stats: { metric: "40%", label: "Faster Delivery" }
    },
    {
      title: "Expert Team",
      subtitle: "Industry Specialists",
      description: "Our team of seasoned professionals brings decades of combined experience across various technologies and industries.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      features: [
        "10+ Years Experience",
        "Cross-Industry Expertise",
        "Continuous Learning",
        "Certified Professionals"
      ],
      stats: { metric: "50+", label: "Projects Delivered" }
    },
    {
      title: "Rapid Turnaround",
      subtitle: "Time-to-Market Excellence",
      description: "We understand the importance of speed in today's competitive landscape and deliver projects with exceptional efficiency.",
      icon: Clock,
      color: "from-orange-500 to-red-500",
      features: [
        "Quick Prototyping",
        "Parallel Development",
        "Optimized Workflows",
        "24/7 Development Cycle"
      ],
      stats: { metric: "2-4", label: "Weeks to MVP" }
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

    const section = document.getElementById('advantages');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvantage((prev) => (prev + 1) % advantages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [advantages.length]);

  return (
    <section id="advantages" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950/50 to-slate-950"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-conic from-blue-500/10 via-purple-500/5 to-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-conic from-green-500/10 via-blue-500/5 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Tech Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gray-700 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-gray-600 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-800 rotate-12 animate-bounce"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-40"></div>
            <div className="mx-8 relative">
              <div className="relative">
                <Award className="w-16 h-16 text-blue-400 animate-pulse" />
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-40"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="text-gray-400 text-4xl md:text-6xl">Why Choose</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Nexsus
            </span>
            <br />
            <span className="text-white/90 text-4xl md:text-6xl">Orbits</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the difference with our <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">proven advantages</span> that set us apart in the industry
          </p>
        </div>

        {/* Advantages Grid */}
        <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  activeAdvantage === index ? 'scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setActiveAdvantage(index)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`bg-slate-900/60 backdrop-blur-xl border-2 rounded-3xl p-8 transition-all duration-700 ${
                  activeAdvantage === index 
                    ? 'border-blue-500/60 shadow-2xl shadow-blue-500/20' 
                    : 'border-gray-800/50 hover:border-gray-700/50'
                }`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                          activeAdvantage === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {advantage.title}
                        </h3>
                        <p className={`text-sm font-medium transition-all duration-500 ${
                          activeAdvantage === index 
                            ? `bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent` 
                            : 'text-gray-500'
                        }`}>
                          {advantage.subtitle}
                        </p>
                      </div>
                      
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ml-4 ${
                        activeAdvantage === index 
                          ? `bg-gradient-to-r ${advantage.color} scale-110 rotate-12` 
                          : 'bg-gray-800 group-hover:bg-gray-700'
                      }`}>
                        <advantage.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {advantage.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {advantage.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center space-x-3 transition-all duration-500 ${
                            activeAdvantage === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-70'
                          }`}
                          style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                        >
                          <CheckCircle className={`w-4 h-4 transition-all duration-500 ${
                            activeAdvantage === index ? `text-gradient bg-gradient-to-r ${advantage.color}` : 'text-gray-600'
                          }`} />
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className={`bg-gray-800/50 rounded-2xl p-4 transition-all duration-500 ${
                      activeAdvantage === index ? 'border border-blue-500/30' : 'border border-transparent'
                    }`}>
                      <div className="text-center">
                        <div className={`text-3xl font-black mb-1 transition-all duration-500 ${
                          activeAdvantage === index 
                            ? `bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent` 
                            : 'text-gray-300'
                        }`}>
                          {advantage.stats.metric}
                        </div>
                        <div className="text-sm text-gray-400">{advantage.stats.label}</div>
                      </div>
                    </div>
                    
                    {/* Active Indicator */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${advantage.color} transition-all duration-500 ${
                      activeAdvantage === index ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "100%", label: "Client Satisfaction", icon: CheckCircle, color: "from-green-500 to-emerald-500" },
                { number: "24/7", label: "Support Available", icon: Clock, color: "from-blue-500 to-cyan-500" },
                { number: "5⭐", label: "Average Rating", icon: Award, color: "from-yellow-500 to-orange-500" },
                { number: "0", label: "Failed Projects", icon: Shield, color: "from-purple-500 to-pink-500" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2 group-hover:animate-pulse">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantages;