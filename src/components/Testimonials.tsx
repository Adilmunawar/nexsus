
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Emma Richardson",
      position: "CEO, TechVision Studios",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations. The team's professionalism is unmatched.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Sophie Chen",
      position: "Founder, Luxe Wellness",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "Working with Nexsus was a game-changer for our spa business. The web portal they created is absolutely stunning and has increased our bookings by 300%.",
      rating: 5,
      project: "Luxury Spa Portal"
    },
    {
      name: "Isabella Martinez",
      position: "Creative Director, Aria Fashion",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      content: "The bio-site Nexsus created for our models is incredible. The animations and user experience are top-notch. Our international clients are constantly impressed.",
      rating: 5,
      project: "Model Bio-Sites"
    },
    {
      name: "Olivia Thompson",
      position: "COO, FinanceFlow Corp",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      content: "The HRMS system Nexsus developed streamlined our entire HR process. Their technical expertise and understanding of our needs was exceptional.",
      rating: 5,
      project: "Custom HRMS System"
    },
    {
      name: "Charlotte Dubois",
      position: "Founder, Étoile Boutique",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      content: "Nexsus created an elegant e-commerce platform that perfectly captures our brand essence. The user experience is seamless and our sales have doubled.",
      rating: 5,
      project: "E-commerce Platform"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses worldwide, we deliver exceptional results that exceed expectations
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
            
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gradient-to-r from-blue-500 to-purple-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-blue-400 font-medium">{testimonials[currentIndex].position}</div>
                    <div className="text-gray-400 text-sm">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Project:</div>
                  <div className="text-purple-400 font-medium">{testimonials[currentIndex].project}</div>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
