
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialShowcase = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      company: "SaaS Platform",
      content: "Nexsus Orbits delivered an exceptional web application that transformed our business operations. Their technical expertise and attention to detail exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=150&h=150&fit=crop&crop=face",
      project: "Custom SaaS Dashboard"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoCommerce",
      company: "E-commerce Platform", 
      content: "The e-commerce platform they built for us is incredibly robust and user-friendly. Our conversion rates increased by 40% within the first month of launch.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      project: "E-commerce Platform"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, StartupHub",
      company: "Web Application",
      content: "Working with Nexsus Orbits was a game-changer. They delivered a scalable web solution that perfectly aligned with our vision and business goals.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      project: "Corporate Web App"
    },
    {
      name: "David Park",
      role: "Product Manager, InnovateCorp",
      company: "SaaS Application",
      content: "The team's expertise in modern web technologies is outstanding. They created a sophisticated SaaS application that our users absolutely love.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      project: "SaaS Web Platform"
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

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Dark Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-800 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gray-700 opacity-5 animate-spin-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Client <span className="text-gray-300">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their digital transformation goals
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gray-950/50 backdrop-blur-xl border-2 border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-6">
                "{currentData.content}"
              </p>
              
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(currentData.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
            </div>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700">
                <img
                  src={currentData.image}
                  alt={currentData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-white">{currentData.name}</h4>
                <p className="text-gray-400">{currentData.role}</p>
                <p className="text-sm text-gray-500">{currentData.project}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center text-white hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-white' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center text-white hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialShowcase;
