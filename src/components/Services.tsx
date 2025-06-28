
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Comprehensive full-stack development with cutting-edge technologies and responsive design.",
      icon: "🚀"
    },
    {
      title: "Web Design",
      description: "Stunning, user-centric designs that combine aesthetics with exceptional user experience.",
      icon: "🎨"
    },
    {
      title: "Backend Solutions",
      description: "Robust, scalable backend systems with advanced security and optimal performance.",
      icon: "⚡"
    },
    {
      title: "E-commerce Platforms",
      description: "Custom e-commerce solutions that drive sales and enhance customer experience.",
      icon: "🛒"
    },
    {
      title: "HRMS Systems",
      description: "Streamlined employee management and payroll systems for corporate efficiency.",
      icon: "👥"
    },
    {
      title: "AI Integration",
      description: "Cutting-edge AI solutions and blockchain implementations for future-ready businesses.",
      icon: "🤖"
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From luxury spa portals to custom HRMS systems, we deliver tailored digital experiences 
            across diverse sectors with unmatched precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover-scale group transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
