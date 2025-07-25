import React, { useState, useEffect } from 'react';
import { Search, Settings, Palette, Rocket, CheckCircle, Target } from 'lucide-react';

const WorkflowSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      number: "01",
      title: "Project Discovery",
      subtitle: "Understanding Your Vision",
      description: "We start by diving deep into your business goals, target audience, and project requirements to create a comprehensive roadmap for success.",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      details: ["Requirement Analysis", "Market Research", "Competitor Analysis", "Goal Definition"]
    },
    {
      number: "02",
      title: "Strategic Planning",
      subtitle: "Blueprint for Excellence",
      description: "Our team develops a detailed strategy, choosing the perfect tech stack and creating wireframes that align with your business objectives.",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      details: ["Technology Selection", "Architecture Design", "Timeline Planning", "Resource Allocation"]
    },
    {
      number: "03",
      title: "Design & Prototype",
      subtitle: "Bringing Ideas to Life",
      description: "We craft intuitive, visually stunning designs and interactive prototypes that provide a preview of your final product.",
      icon: Palette,
      color: "from-green-500 to-emerald-500",
      details: ["UI/UX Design", "Interactive Prototypes", "Design System", "User Testing"]
    },
    {
      number: "04",
      title: "Development",
      subtitle: "Code Excellence",
      description: "Our expert developers bring designs to life using cutting-edge technologies, ensuring scalability and performance.",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      details: ["Frontend Development", "Backend Architecture", "Database Design", "API Integration"]
    },
    {
      number: "05",
      title: "Testing & QA",
      subtitle: "Quality Assurance",
      description: "Rigorous testing across all devices and platforms ensures your product works flawlessly before launch.",
      icon: CheckCircle,
      color: "from-cyan-500 to-blue-500",
      details: ["Cross-browser Testing", "Performance Testing", "Security Audits", "User Acceptance Testing"]
    },
    {
      number: "06",
      title: "Launch & Support",
      subtitle: "Go Live & Beyond",
      description: "We handle the deployment and provide ongoing support to ensure your digital solution continues to excel.",
      icon: Rocket,
      color: "from-pink-500 to-purple-500",
      details: ["Deployment", "Performance Monitoring", "Ongoing Maintenance", "Feature Updates"]
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

    const section = document.getElementById('workflow');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [workflowSteps.length]);

  return (
    <section id="workflow" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-blue-500/10 via-purple-500/5 to-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-conic from-purple-500/10 via-pink-500/5 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-gray-700 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 max-w-40"></div>
            <div className="mx-8 relative">
              <div className="relative">
                <Rocket className="w-16 h-16 text-orange-400 animate-pulse" />
                <div className="absolute inset-0 bg-orange-400/30 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 max-w-40"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="text-gray-400 text-4xl md:text-6xl">Our</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Development
            </span>
            <br />
            <span className="text-white/90 text-4xl md:text-6xl">Workflow</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Our proven <span className="text-gradient bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-semibold">6-step process</span> ensures seamless project delivery from concept to launch
          </p>
        </div>

        {/* Interactive Workflow */}
        <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setActiveStep(index)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`bg-slate-900/60 backdrop-blur-xl border-2 rounded-3xl p-8 transition-all duration-700 ${
                  activeStep === index 
                    ? 'border-orange-500/60 shadow-2xl shadow-orange-500/20' 
                    : 'border-gray-800/50 hover:border-gray-700/50'
                }`}>
                  
                  {/* Step Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`text-6xl font-black transition-all duration-500 ${
                      activeStep === index 
                        ? `bg-gradient-to-r ${step.color} bg-clip-text text-transparent` 
                        : 'text-gray-600'
                    }`}>
                      {step.number}
                    </div>
                    
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === index 
                        ? `bg-gradient-to-r ${step.color} scale-110 rotate-12` 
                        : 'bg-gray-800 group-hover:bg-gray-700'
                    }`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                      activeStep === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`text-sm font-medium mb-4 transition-all duration-500 ${
                      activeStep === index 
                        ? `bg-gradient-to-r ${step.color} bg-clip-text text-transparent` 
                        : 'text-gray-500'
                    }`}>
                      {step.subtitle}
                    </p>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className={`flex items-center space-x-3 transition-all duration-500 ${
                          activeStep === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-70'
                        }`}
                        style={{ transitionDelay: `${detailIndex * 0.1}s` }}
                      >
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          activeStep === index ? `bg-gradient-to-r ${step.color}` : 'bg-gray-600'
                        }`}></div>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Active Indicator */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} transition-all duration-500 ${
                    activeStep === index ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className={`mt-16 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center space-x-4">
            <div className="text-gray-400 text-sm font-medium">Step</div>
            <div className="flex space-x-2">
              {workflowSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep 
                      ? `bg-gradient-to-r ${workflowSteps[activeStep].color} scale-125` 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            <div className="text-gray-400 text-sm font-medium">
              {activeStep + 1} of {workflowSteps.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;