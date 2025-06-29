
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Calendar, Award, TrendingUp, Heart, Crown, Sparkles } from 'lucide-react';

const TestimonialShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sophia Martinez",
      position: "CEO & Founder",
      company: "Luxe Beauty Empire",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus delivered a stunning e-commerce platform that transformed our beauty brand globally. The seamless user experience and responsive design increased our sales by 450%.",
      rating: 5,
      project: "E-commerce Platform",
      date: "February 2025",
      impact: "+450% Sales Growth",
      revenue: "€650K+ Generated",
      gradient: "from-pink-500 via-purple-600 to-cyan-500",
      category: "ecommerce",
      featured: true
    },
    {
      id: 2,
      name: "Isabella Chen",
      position: "Creative Director",
      company: "Ethereal Fashion House",
      location: "Milan, Italy",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      content: "The fashion website Nexsus created is a digital masterpiece. The portfolio showcase and booking system perfectly capture our brand essence with flawless functionality.",
      rating: 5,
      project: "Fashion Website",
      date: "January 2025",
      impact: "+600% Brand Engagement",
      revenue: "€850K+ Collections",
      gradient: "from-purple-500 via-pink-600 to-orange-500",
      category: "web",
      featured: true
    },
    {
      id: 3,
      name: "Emma Thompson",
      position: "Tech Entrepreneur",
      company: "CloudTech Solutions",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=400&h=400&fit=crop&crop=face",
      content: "The SaaS dashboard Nexsus built is revolutionary. Clean interface, real-time analytics, and seamless user management - exactly what our B2B clients needed.",
      rating: 5,
      project: "SaaS Dashboard",
      date: "January 2025",
      impact: "+320% User Adoption",
      revenue: "£750K+ ARR",
      gradient: "from-blue-500 via-cyan-600 to-teal-500",
      category: "saas",
      featured: false
    },
    {
      id: 4,
      name: "Aria Dubois",
      position: "Wellness Guru",
      company: "Zen Sanctuary International",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "The wellness platform with booking system and client portal is pure magic. Modern design and intuitive navigation - our retreats are booked 6 months ahead.",
      rating: 5,
      project: "Wellness Platform",
      date: "December 2024",
      impact: "+550% Bookings",
      revenue: "€480K+ Revenue",
      gradient: "from-green-500 via-teal-600 to-blue-500",
      category: "web",
      featured: false
    },
    {
      id: 5,
      name: "Charlotte Anderson",
      position: "Education Director",
      company: "Global Learning Academy",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      content: "The learning management system Nexsus created revolutionized our online education. Student portal, course management, and progress tracking - all perfectly integrated.",
      rating: 5,
      project: "LMS Platform",
      date: "October 2024",
      impact: "+700% Engagement",
      revenue: "AU$1.2M+ Revenue",
      gradient: "from-cyan-500 via-blue-600 to-indigo-500",
      category: "saas",
      featured: false
    },
    {
      id: 6,
      name: "Zara Al-Rashid",
      position: "Hospitality Manager",
      company: "Desert Rose Hotels",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
      content: "The hotel booking website with room showcase and reservation system is stunning. Modern design with seamless booking flow increased our direct bookings significantly.",
      rating: 5,
      project: "Hotel Website",
      date: "October 2024",
      impact: "+85% Direct Bookings",
      revenue: "AED 2.5M+ Revenue",
      gradient: "from-amber-500 via-orange-600 to-red-500",
      category: "web",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Crown },
    { id: 'web', name: 'Websites', icon: Sparkles },
    { id: 'ecommerce', name: 'E-commerce', icon: TrendingUp },
    { id: 'saas', name: 'SaaS Apps', icon: Award }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

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
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
      setIsAnimating(false);
    }, 600);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
      setIsAnimating(false);
    }, 600);
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  if (!currentTestimonial) return null;

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-conic from-purple-500/15 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-conic from-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
            <div className="mx-6 relative">
              <Quote className="w-12 h-12 text-purple-400 animate-pulse" />
              <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-yellow-400 animate-spin" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Client Success
            </span>
            <br />
            <span className="text-white/90 text-3xl md:text-4xl">Stories</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Trusted by <span className="text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">visionary leaders</span> who've transformed their businesses with our web solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Compact Testimonial Card */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/80 backdrop-blur-2xl border border-gray-700/50 rounded-2xl p-8 md:p-12 overflow-hidden shadow-xl">
            
            {/* Border Animation */}
            <div className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} rounded-2xl blur-lg opacity-20 animate-pulse`}></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-gray-900/98 to-gray-800/98 rounded-2xl"></div>
            
            {/* Featured Badge */}
            {currentTestimonial.featured && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-black font-bold text-xs flex items-center space-x-1">
                <Crown className="w-3 h-3" />
                <span>FEATURED</span>
              </div>
            )}
            
            <div className="relative z-10">
              <div className={`transition-all duration-700 ${
                isAnimating 
                  ? `opacity-0 transform ${direction === 'next' ? 'translate-x-8' : '-translate-x-8'} scale-95` 
                  : 'opacity-100 transform translate-x-0 scale-100'
              }`}>
                
                {/* Stars */}
                <div className="flex items-center justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current animate-pulse mx-1" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="w-8 h-8 text-purple-400/30 absolute -top-2 -left-2" />
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed font-light text-center italic px-6">
                    {currentTestimonial.content}
                  </blockquote>
                  <Quote className="w-8 h-8 text-purple-400/30 absolute -bottom-2 -right-2 rotate-180" />
                </div>
                
                {/* Client Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  
                  {/* Client Profile */}
                  <div className="flex items-center space-x-4 lg:justify-start justify-center">
                    <div className="relative group">
                      <div className={`absolute -inset-2 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white/20 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-lg mb-1">{currentTestimonial.name}</div>
                      <div className={`font-semibold text-sm mb-1 bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                        {currentTestimonial.position}
                      </div>
                      <div className="text-gray-400 text-sm">{currentTestimonial.company}</div>
                      <div className="flex items-center text-gray-500 text-xs mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {currentTestimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {currentTestimonial.date}
                    </div>
                    <div className={`font-bold text-lg bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                      {currentTestimonial.project}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Premium Project</span>
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="text-center lg:text-right space-y-2">
                    <div className="flex items-center justify-center lg:justify-end space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-bold text-sm">{currentTestimonial.impact}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end space-x-2">
                      <Heart className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-semibold text-sm">{currentTestimonial.revenue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          <button
            onClick={prevTestimonial}
            className="group relative w-12 h-12 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-xl border border-gray-600/50 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="text-white font-medium text-sm mb-2">
              {currentIndex + 1} of {filteredTestimonials.length}
            </div>
            <div className="flex space-x-1">
              {filteredTestimonials.slice(0, 4).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex % 4
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={nextTestimonial}
            className="group relative w-12 h-12 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-xl border border-gray-600/50 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Compact Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Happy Clients", value: "50+", icon: Heart },
              { label: "Countries", value: "15+", icon: MapPin },
              { label: "Success Rate", value: "100%", icon: Award },
              { label: "Revenue Generated", value: "$10M+", icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialShowcase;
