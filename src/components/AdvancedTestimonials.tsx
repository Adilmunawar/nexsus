
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Calendar, Award, TrendingUp, Heart } from 'lucide-react';

const AdvancedTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Isabella Rodriguez",
      position: "Creative Director",
      company: "Ethereal Design Studio",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus Orbits didn't just build our website—they crafted a digital masterpiece that perfectly embodies our brand vision. The attention to detail and innovative animations are absolutely breathtaking. Our client engagement has skyrocketed by 450%.",
      rating: 5,
      project: "Creative Portfolio Platform",
      date: "January 2025",
      impact: "+450% Engagement",
      revenue: "€180K+ Generated",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      name: "Sophia Chen",
      position: "Founder & CEO",
      company: "Luxe Wellness Sanctuary",
      location: "Sydney, Australia", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "The spa portal Nexsus created transformed our entire business model. The seamless booking system with real-time availability and stunning visual design has elevated our brand to international standards. We're now booked solid for months ahead.",
      rating: 5,
      project: "Luxury Spa Portal",
      date: "December 2024",
      impact: "+600% Bookings",
      revenue: "AU$320K+ Generated",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "Aria Delacroix",
      position: "International Model",
      company: "Elite Fashion Agency",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      content: "My bio-site created by Nexsus is pure artistry. The animations, transitions, and user experience are phenomenal. It's not just a website—it's a digital extension of my brand that has secured me contracts worth over €500K.",
      rating: 5,
      project: "Model Bio-Site",
      date: "November 2024",
      impact: "+850% Portfolio Views",
      revenue: "€500K+ Contracts",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Luna Nakamura",
      position: "Tech Entrepreneur",
      company: "NeoTech Innovations",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus delivered a revolutionary e-commerce platform that combines cutting-edge technology with stunning design. The AI-powered recommendations and seamless UX have tripled our conversion rate. Exceptional Pakistani talent!",
      rating: 5,
      project: "AI-Powered E-commerce",
      date: "October 2024",
      impact: "+320% Conversions",
      revenue: "¥45M+ Generated",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "Valentina Rossi",
      position: "Creative Director",
      company: "Milano Fashion House",
      location: "Milan, Italy",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      content: "The fashion house website Nexsus created is a work of art. Every pixel is perfectly placed, every animation tells our story. Our international visibility has exploded, and we're now featured in major fashion magazines worldwide.",
      rating: 5,
      project: "Fashion House Website",
      date: "September 2024",
      impact: "+900% International Reach",
      revenue: "€750K+ Generated",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Anastasia Volkov",
      position: "Blockchain Consultant",
      company: "CryptoElite Solutions",
      location: "Zurich, Switzerland",
      image: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus implemented our blockchain platform with unparalleled expertise. The security features, user interface, and technical architecture are world-class. They've revolutionized how we approach decentralized finance solutions.",
      rating: 5,
      project: "Blockchain DeFi Platform",
      date: "August 2024",
      impact: "+1200% User Adoption",
      revenue: "CHF 2.8M+ Volume",
      gradient: "from-green-500 to-emerald-600"
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 600);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 600);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-purple-500/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-gradient-conic from-cyan-500/10 to-transparent rounded-full blur-3xl animate-ping"></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
            <div className="mx-6 relative">
              <Quote className="w-16 h-16 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-ping"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            Global <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">Testimonials</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            Trusted by visionary leaders worldwide, we transform businesses through revolutionary digital experiences
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Testimonial Card */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
              
              {/* Animated Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} rounded-3xl blur-sm opacity-20 animate-pulse`}></div>
              <div className="absolute inset-0.5 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className={`transition-all duration-700 ${
                  isAnimating 
                    ? `opacity-0 transform ${direction === 'next' ? 'translate-x-12' : '-translate-x-12'} scale-95` 
                    : 'opacity-100 transform translate-x-0 scale-100'
                }`}>
                  
                  {/* Stars with Advanced Animation */}
                  <div className="flex items-center justify-center mb-8">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <div key={i} className="relative">
                        <Star 
                          className="w-10 h-10 text-yellow-400 fill-current animate-pulse mx-1" 
                          style={{animationDelay: `${i * 0.1}s`}}
                        />
                        <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-sm animate-ping"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced Quote */}
                  <div className="relative mb-12">
                    <Quote className="w-16 h-16 text-purple-400/30 absolute -top-4 -left-4" />
                    <blockquote className="text-3xl md:text-4xl text-white leading-relaxed font-light text-center italic px-8">
                      {currentTestimonial.content}
                    </blockquote>
                    <Quote className="w-16 h-16 text-purple-400/30 absolute -bottom-4 -right-4 rotate-180" />
                  </div>
                  
                  {/* Enhanced Client Info */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    
                    {/* Client Profile */}
                    <div className="flex items-center space-x-6 lg:justify-start justify-center">
                      <div className="relative group">
                        <div className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="relative w-24 h-24 rounded-full object-cover border-4 border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-2xl"
                        />
                      </div>
                      <div className="text-left">
                        <div className="text-white font-bold text-2xl mb-1">{currentTestimonial.name}</div>
                        <div className={`font-semibold text-lg mb-1 bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                          {currentTestimonial.position}
                        </div>
                        <div className="text-gray-400 font-medium">{currentTestimonial.company}</div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {currentTestimonial.location}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Details */}
                    <div className="text-center space-y-3">
                      <div className="flex items-center justify-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {currentTestimonial.date}
                      </div>
                      <div className={`font-bold text-xl bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                        {currentTestimonial.project}
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-300 font-medium">Premium Project</span>
                      </div>
                    </div>
                    
                    {/* Impact Metrics */}
                    <div className="text-center lg:text-right space-y-3">
                      <div className="flex items-center justify-center lg:justify-end space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-bold text-xl">{currentTestimonial.impact}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-end space-x-2">
                        <Heart className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-400 font-semibold text-lg">{currentTestimonial.revenue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-xl border border-gray-600/50 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-500 hover:scale-125 shadow-2xl group z-20"
          >
            <ChevronLeft className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-xl border border-gray-600/50 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-500 hover:scale-125 shadow-2xl group z-20"
          >
            <ChevronRight className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
        
        {/* Enhanced Dots Navigation */}
        <div className="flex justify-center mt-16 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-500 ${
                index === currentIndex
                  ? 'w-16 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg'
                  : 'w-6 h-6 bg-gray-600 rounded-full hover:bg-gray-500 hover:scale-125'
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Floating Stats */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Happy Clients", value: "55+", icon: Heart },
              { label: "Countries Served", value: "15+", icon: MapPin },
              { label: "Success Rate", value: "100%", icon: Award },
              { label: "Revenue Generated", value: "$5M+", icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTestimonials;
