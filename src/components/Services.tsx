
import React from 'react';
import { 
  ArrowUp, 
  User, 
  Star, 
  Bell, 
  Contact, 
  FileText 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Comprehensive full-stack development with cutting-edge technologies, responsive design, and seamless user experiences that drive business growth.",
      icon: ArrowUp,
      gradient: "from-blue-500 to-cyan-500",
      features: ["React & Vue.js", "Node.js & Python", "Cloud Integration"]
    },
    {
      title: "Web Design",
      description: "Stunning, user-centric designs that combine aesthetics with exceptional functionality, creating memorable digital experiences.",
      icon: Star,
      gradient: "from-purple-500 to-pink-500",
      features: ["UI/UX Design", "Brand Identity", "Responsive Layouts"]
    },
    {
      title: "Backend Solutions",
      description: "Robust, scalable backend systems with advanced security protocols and optimal performance for enterprise-level applications.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
      features: ["API Development", "Database Design", "Cloud Architecture"]
    },
    {
      title: "E-commerce Platforms",
      description: "Custom e-commerce solutions with advanced features, payment integration, and inventory management that boost conversions.",
      icon: Bell,
      gradient: "from-orange-500 to-red-500",
      features: ["Payment Integration", "Inventory Management", "Analytics Dashboard"]
    },
    {
      title: "HRMS Systems",
      description: "Streamlined employee management and payroll systems designed for corporate efficiency and seamless HR operations.",
      icon: User,
      gradient: "from-indigo-500 to-purple-500",
      features: ["Employee Management", "Payroll Systems", "Performance Tracking"]
    },
    {
      title: "AI Integration",
      description: "Cutting-edge artificial intelligence solutions and blockchain implementations for future-ready businesses and digital transformation.",
      icon: Contact,
      gradient: "from-cyan-500 to-blue-500",
      features: ["Machine Learning", "Blockchain", "Data Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-cyan-900/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From luxury spa portals to custom HRMS systems, we deliver tailored digital experiences 
            across diverse sectors with unmatched precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
