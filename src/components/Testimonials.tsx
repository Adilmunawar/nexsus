
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Calendar } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const testimonials = [
    {
      name: "Emma Richardson",
      position: "CEO, TechVision Studios",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus Orbits transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations. The team's professionalism is unmatched in the industry.",
      rating: 5,
      project: "E-commerce Platform",
      date: "December 2024",
      revenue: "+300% Growth"
    },
    {
      name: "Sophie Chen",
      position: "Founder, Luxe Wellness",
      location: "Sydney, Australia", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "Working with Nexsus was a game-changer for our spa business. The web portal they created is absolutely stunning and has increased our bookings by 400%. Their Pakistani team's dedication is extraordinary.",
      rating: 5,
      project: "Luxury Spa Portal",
      date: "November 2024",
      revenue: "+400% Bookings"
    },
    {
      name: "Isabella Martinez",
      position: "Creative Director, Aria Fashion",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      content: "The bio-sites Nexsus created for our models are incredible. The animations and user experience are top-notch. Our international clients are constantly impressed with the quality.",
      rating: 5,
      project: "Model Bio-Sites",
      date: "October 2024",
      revenue: "+250% Engagement"
    },
    {
      name: "Olivia Thompson",
      position: "COO, FinanceFlow Corp",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      content: "The HRMS system Nexsus developed streamlined our entire HR process. Their technical expertise and understanding of our needs was exceptional. Pakistan's tech talent is world-class.",
      rating: 5,
      project: "Custom HRMS System",
      date: "September 2024",
      revenue: "+180% Efficiency"
    },
    {
      name: "Charlotte Dubois",
      position: "Founder, Étoile Boutique",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus created an elegant e-commerce platform that perfectly captures our brand essence. The user experience is seamless and our sales have tripled. Absolutely magnificent work.",
      rating: 5,
      project: "E-commerce Platform",
      date: "August 2024",
      revenue: "+300% Sales"
    },
    {
      name: "Anastasia Kowalski",
      position: "CTO, Digital Dynamics",
      location: "Warsaw, Poland",
      image: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=400&fit=crop&crop=face",
      content: "The blockchain integration Nexsus implemented revolutionized our data security. Their AI solutions are cutting-edge and their team's expertise in emerging technologies is phenomenal.",
      rating: 5,
      project: "Blockchain & AI Integration",
      date: "July 2024",
      revenue: "+500% Security"
    },
    {
      name: "Lucia Romano",
      position: "Director, Milano Fashion House",
      location: "Milan, Italy",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus Orbits delivered a masterpiece. The website they created for our fashion house is pure art combined with flawless functionality. Our international presence has skyrocketed.",
      rating: 5,
      project: "Fashion House Website",
      date: "June 2024",
      revenue: "+350% Traffic"
    },
    {
      name: "Katarina Petrov",
      position: "Founder, Nordic Wellness",
      location: "Stockholm, Sweden",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      content: "The comprehensive digital transformation Nexsus provided exceeded every expectation. Their attention to Scandinavian design principles while adding their unique Pakistani flair was perfect.",
      rating: 5,
      project: "Digital Transformation",
      date: "May 2024",
      revenue: "+280% Growth"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center mb-6">
            <Quote className="w-12 h-12 text-purple-400 mr-4 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold">
              Global <span className="text-gradient">Testimonials</span>
            </h2>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Trusted by visionary women leaders worldwide, we deliver exceptional results that redefine digital excellence
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main testimonial card with enhanced animations */}
          <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 to-blue-500 rounded-3xl blur-sm opacity-30 animate-[spin_8s_linear_infinite]"></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className={`transition-all duration-500 ${
                isAnimating 
                  ? `opacity-0 transform ${direction === 'next' ? 'translate-x-8' : '-translate-x-8'} scale-95` 
                  : 'opacity-100 transform translate-x-0 scale-100'
              }`}>
                {/* Stars with animation */}
                <div className="flex items-center justify-center mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-8 h-8 text-yellow-400 fill-current animate-pulse" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                
                {/* Quote with enhanced typography */}
                <blockquote className="text-3xl md:text-4xl text-white leading-relaxed mb-10 font-light text-center italic">
                  <Quote className="w-12 h-12 text-purple-400/50 inline-block mr-4 -mt-2" />
                  {testimonials[currentIndex].content}
                  <Quote className="w-12 h-12 text-purple-400/50 inline-block ml-4 -mt-2 rotate-180" />
                </blockquote>
                
                {/* Client info with enhanced layout */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                  <div className="flex items-center space-x-6">
                    <div className="relative group">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 animate-pulse"></div>
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-2xl mb-1">{testimonials[currentIndex].name}</div>
                      <div className="text-blue-400 font-semibold text-lg mb-1">{testimonials[currentIndex].position}</div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right space-y-2">
                    <div className="flex items-center justify-center md:justify-end text-sm text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {testimonials[currentIndex].date}
                    </div>
                    <div className="text-purple-400 font-bold text-lg">{testimonials[currentIndex].project}</div>
                    <div className="text-green-400 font-semibold text-xl">{testimonials[currentIndex].revenue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-700 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-2xl group"
          >
            <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-700 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-2xl group"
          >
            <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Enhanced dots navigation */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                  : 'w-4 h-4 bg-gray-600 rounded-full hover:bg-gray-500 hover:scale-125'
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Client logos section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-400 mb-8">Trusted by Leading Companies Worldwide</h3>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            {['TechVision Studios', 'Luxe Wellness', 'Aria Fashion', 'FinanceFlow Corp'].map((company, index) => (
              <div key={index} className="text-lg font-semibold text-gray-500 hover:text-gray-300 transition-colors duration-300 py-2">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
