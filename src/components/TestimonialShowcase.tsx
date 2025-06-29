
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
      content: "Nexsus Orbits transformed our beauty brand into a global phenomenon. Their e-commerce platform is not just stunning—it's a revenue-generating machine. We've seen a 650% increase in international sales, and the user experience is absolutely flawless.",
      rating: 5,
      project: "Global E-commerce Platform",
      date: "February 2025",
      impact: "+650% International Sales",
      revenue: "€850K+ Generated",
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
      content: "Working with Nexsus was like collaborating with digital artists. They didn't just build our fashion portal—they crafted a digital masterpiece that perfectly captures our brand's essence. Our runway shows now have a digital twin that's equally breathtaking.",
      rating: 5,
      project: "Fashion Runway Portal",
      date: "January 2025",
      impact: "+900% Brand Engagement",
      revenue: "€1.2M+ Collections Sold",
      gradient: "from-purple-500 via-pink-600 to-orange-500",
      category: "fashion",
      featured: true
    },
    {
      id: 3,
      name: "Emma Thompson",
      position: "Tech Entrepreneur",
      company: "QuantumTech Solutions",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=400&h=400&fit=crop&crop=face",
      content: "The AI-powered platform Nexsus developed for us is revolutionary. It's not just software—it's intelligence incarnate. Our clients are amazed by the predictive analytics and seamless automation. Pakistan's tech talent is absolutely world-class.",
      rating: 5,
      project: "AI Analytics Platform",
      date: "January 2025",
      impact: "+400% Processing Speed",
      revenue: "£950K+ ARR Generated",
      gradient: "from-blue-500 via-cyan-600 to-teal-500",
      category: "tech",
      featured: false
    },
    {
      id: 4,
      name: "Aria Dubois",
      position: "Wellness Guru",
      company: "Zen Sanctuary International",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus created a wellness ecosystem that's pure magic. The meditation app, booking system, and client portal work in perfect harmony. Our mindfulness retreats are now booked 8 months in advance, and the digital experience mirrors our physical sanctuary.",
      rating: 5,
      project: "Wellness Ecosystem",
      date: "December 2024",
      impact: "+750% Retreat Bookings",
      revenue: "€680K+ Wellness Revenue",
      gradient: "from-green-500 via-teal-600 to-blue-500",
      category: "wellness",
      featured: false
    },
    {
      id: 5,
      name: "Luna Nakamura",
      position: "Gaming Executive",
      company: "Neon Gaming Studios",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      content: "The gaming platform Nexsus built is next-level incredible. The real-time multiplayer capabilities, stunning UI animations, and seamless cross-platform integration have made us the fastest-growing gaming studio in Asia. Pure technological artistry!",
      rating: 5,
      project: "Gaming Platform",
      date: "December 2024",
      impact: "+1200% Player Growth",
      revenue: "¥85M+ Gaming Revenue",
      gradient: "from-purple-500 via-magenta-600 to-pink-500",
      category: "gaming",
      featured: true
    },
    {
      id: 6,
      name: "Valentina Rossi",
      position: "Luxury Consultant",
      company: "Prestige Lifestyle Group",
      location: "Monaco",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus crafted a luxury concierge platform that's simply extraordinary. Every detail screams sophistication, from the diamond-tier UI to the AI-powered personal shopping assistant. Our ultra-high-net-worth clients are absolutely mesmerized.",
      rating: 5,
      project: "Luxury Concierge Platform",
      date: "November 2024",
      impact: "+500% Luxury Sales",
      revenue: "€2.3M+ Luxury Services",
      gradient: "from-yellow-500 via-orange-600 to-red-500",
      category: "luxury",
      featured: true
    },
    {
      id: 7,
      name: "Anastasia Petrov",
      position: "FinTech Pioneer",
      company: "CryptoQueen Finance",
      location: "Zurich, Switzerland",
      image: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=400&fit=crop&crop=face",
      content: "The blockchain trading platform Nexsus developed is a financial revolution. Advanced security, lightning-fast transactions, and an intuitive interface that makes crypto trading feel like an art form. We're processing $50M+ monthly volume now.",
      rating: 5,
      project: "Blockchain Trading Platform",
      date: "November 2024",
      impact: "+2000% Trading Volume",
      revenue: "CHF 12M+ Monthly Volume",
      gradient: "from-indigo-500 via-purple-600 to-pink-500",
      category: "fintech",
      featured: false
    },
    {
      id: 8,
      name: "Charlotte Anderson",
      position: "Education Innovator",
      company: "Global Learning Academy",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus built an educational metaverse that's transforming how students learn. Virtual classrooms, AI tutors, and gamified learning experiences—it's the future of education. Our student engagement rates have increased by 800%, and learning outcomes are phenomenal.",
      rating: 5,
      project: "Educational Metaverse",
      date: "October 2024",
      impact: "+800% Student Engagement",
      revenue: "AU$1.8M+ Ed-Tech Revenue",
      gradient: "from-cyan-500 via-blue-600 to-indigo-500",
      category: "education",
      featured: false
    },
    {
      id: 9,
      name: "Zara Al-Rashid",
      position: "Hospitality Mogul",
      company: "Desert Rose Hotels",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
      content: "The hotel management system Nexsus created is pure luxury in digital form. From AI-powered room service to virtual concierge experiences, every guest feels like royalty. Our occupancy rates hit 98%, and guest satisfaction scores are through the roof.",
      rating: 5,
      project: "Luxury Hotel Management System",
      date: "October 2024",
      impact: "+98% Occupancy Rate",
      revenue: "AED 15M+ Hotel Revenue",
      gradient: "from-amber-500 via-orange-600 to-red-500",
      category: "hospitality",
      featured: true
    },
    {
      id: 10,
      name: "Olivia Sterling",
      position: "Real Estate Tycoon",
      company: "Platinum Properties International",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
      content: "Nexsus revolutionized our property showcase with virtual reality tours and AI-powered property matching. Clients can now walk through penthouses from anywhere in the world. Our premium property sales have skyrocketed by 450% in just 6 months.",
      rating: 5,
      project: "VR Property Platform",
      date: "September 2024",
      impact: "+450% Premium Sales",
      revenue: "$3.2M+ Property Commissions",
      gradient: "from-emerald-500 via-teal-600 to-cyan-500",
      category: "realestate",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Testimonials', icon: Crown },
    { id: 'ecommerce', name: 'E-commerce', icon: TrendingUp },
    { id: 'fashion', name: 'Fashion', icon: Sparkles },
    { id: 'tech', name: 'Technology', icon: Award },
    { id: 'luxury', name: 'Luxury', icon: Crown },
    { id: 'fintech', name: 'FinTech', icon: TrendingUp }
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
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
      setIsAnimating(false);
    }, 800);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
      setIsAnimating(false);
    }, 800);
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  if (!currentTestimonial) return null;

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      {/* Ultra Advanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-blue-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-purple-500/20 via-pink-500/15 to-cyan-500/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-3/4 w-80 h-80 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-2xl animate-ping"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
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
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Premium Header */}
        <div className={`text-center mb-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-40"></div>
            <div className="mx-8 relative">
              <div className="relative">
                <Quote className="w-20 h-20 text-purple-400 animate-pulse" />
                <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-2xl animate-ping"></div>
                <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-spin" />
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent flex-1 max-w-40"></div>
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-300% animate-gradient-x">
              Elite
            </span>
            <br />
            <span className="text-white/90 text-5xl md:text-7xl">Testimonials</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 max-w-6xl mx-auto leading-relaxed font-light mb-12">
            Trusted by <span className="text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">visionary women leaders</span> across the globe who've transformed their businesses with our digital excellence
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 hover:scale-110 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
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

        {/* Premium Testimonial Card */}
        <div className={`relative max-w-8xl mx-auto transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/80 backdrop-blur-3xl border border-gray-700/50 rounded-3xl p-16 md:p-20 overflow-hidden shadow-2xl">
            
            {/* Dynamic Border Animation */}
            <div className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} rounded-3xl blur-xl opacity-30 animate-pulse`}></div>
            <div className="absolute inset-1 bg-gradient-to-br from-gray-900/98 to-gray-800/98 rounded-3xl"></div>
            
            {/* Featured Badge */}
            {currentTestimonial.featured && (
              <div className="absolute top-8 right-8 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-full text-black font-bold text-sm flex items-center space-x-1">
                <Crown className="w-4 h-4" />
                <span>FEATURED</span>
              </div>
            )}
            
            <div className="relative z-10">
              <div className={`transition-all duration-1000 ${
                isAnimating 
                  ? `opacity-0 transform ${direction === 'next' ? 'translate-x-16 rotate-3' : '-translate-x-16 -rotate-3'} scale-90` 
                  : 'opacity-100 transform translate-x-0 rotate-0 scale-100'
              }`}>
                
                {/* Premium Stars */}
                <div className="flex items-center justify-center mb-12">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <div key={i} className="relative mx-2">
                      <Star 
                        className="w-12 h-12 text-yellow-400 fill-current animate-pulse" 
                        style={{animationDelay: `${i * 0.2}s`}}
                      />
                      <div className="absolute inset-0 bg-yellow-400/40 rounded-full blur-lg animate-ping" style={{animationDelay: `${i * 0.2}s`}}></div>
                    </div>
                  ))}
                </div>
                
                {/* Premium Quote */}
                <div className="relative mb-16">
                  <Quote className="w-20 h-20 text-purple-400/20 absolute -top-8 -left-8" />
                  <blockquote className="text-4xl md:text-5xl text-white leading-relaxed font-light text-center italic px-12 relative z-10">
                    {currentTestimonial.content}
                  </blockquote>
                  <Quote className="w-20 h-20 text-purple-400/20 absolute -bottom-8 -right-8 rotate-180" />
                </div>
                
                {/* Premium Client Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                  
                  {/* Client Profile Enhanced */}
                  <div className="flex flex-col items-center lg:items-start space-y-4">
                    <div className="relative group">
                      <div className={`absolute -inset-3 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700`}></div>
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-white/30 group-hover:scale-110 transition-transform duration-700 shadow-2xl"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-white font-bold text-3xl mb-2">{currentTestimonial.name}</div>
                      <div className={`font-bold text-xl mb-2 bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                        {currentTestimonial.position}
                      </div>
                      <div className="text-gray-300 font-semibold text-lg">{currentTestimonial.company}</div>
                      <div className="flex items-center justify-center lg:justify-start text-gray-400 text-base mt-2">
                        <MapPin className="w-5 h-5 mr-2" />
                        {currentTestimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details Enhanced */}
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="text-lg">{currentTestimonial.date}</span>
                    </div>
                    <div className={`font-black text-2xl bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                      {currentTestimonial.project}
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <span className="text-gray-300 font-bold text-lg">Premium Partnership</span>
                    </div>
                  </div>
                  
                  {/* Impact Metrics Enhanced */}
                  <div className="text-center lg:text-right space-y-6">
                    <div className="flex flex-col items-center lg:items-end space-y-3">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-6 h-6 text-green-400" />
                        <span className="text-green-400 font-bold text-2xl">{currentTestimonial.impact}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="w-6 h-6 text-purple-400" />
                        <span className="text-purple-400 font-bold text-xl">{currentTestimonial.revenue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Navigation */}
        <div className="flex justify-center items-center mt-16 space-x-8">
          <button
            onClick={prevTestimonial}
            className="group relative w-24 h-24 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-2xl border border-gray-600/50 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-700 hover:scale-125 shadow-2xl z-20"
          >
            <ChevronLeft className="w-12 h-12 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
          </button>
          
          <div className="text-center">
            <div className="text-white font-bold text-xl mb-2">
              {currentIndex + 1} of {filteredTestimonials.length}
            </div>
            <div className="flex space-x-2">
              {filteredTestimonials.slice(0, 5).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex % 5
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={nextTestimonial}
            className="group relative w-24 h-24 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-2xl border border-gray-600/50 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-700 hover:scale-125 shadow-2xl z-20"
          >
            <ChevronRight className="w-12 h-12 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
          </button>
        </div>

        {/* Global Success Stats */}
        <div className={`mt-24 transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { label: "Elite Clients", value: "100+", icon: Crown, color: "from-yellow-500 to-orange-500" },
              { label: "Countries", value: "25+", icon: MapPin, color: "from-blue-500 to-cyan-500" },
              { label: "Success Rate", value: "100%", icon: Award, color: "from-green-500 to-emerald-500" },
              { label: "Revenue Generated", value: "$50M+", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
              { label: "5-Star Reviews", value: "98%", icon: Star, color: "from-pink-500 to-red-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:scale-110 transition-all duration-500 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2 group-hover:animate-pulse">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialShowcase;
