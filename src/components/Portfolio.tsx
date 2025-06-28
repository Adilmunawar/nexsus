
import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: "Luxury Spa Portal",
      category: "Web Development",
      description: "Sophisticated web portal with integrated backend for premium spa services.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Corporate HRMS",
      category: "Custom Software",
      description: "Comprehensive HR management system for streamlined employee operations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      tags: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      title: "Model Bio-Sites",
      category: "Web Design",
      description: "Impactful portfolio websites for international modeling professionals.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      tags: ["React", "Tailwind", "Animations"]
    },
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "Custom online retail solution with advanced inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["Next.js", "Stripe", "AWS"]
    },
    {
      title: "AI Analytics Dashboard",
      category: "AI Integration",
      description: "Data-driven dashboard with machine learning insights and predictions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["React", "Python", "TensorFlow"]
    },
    {
      title: "Blockchain Solution",
      category: "Blockchain",
      description: "Secure blockchain implementation for enhanced data integrity.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      tags: ["Solidity", "Web3.js", "Ethereum"]
    }
  ];

  const categories = ['All', 'Web Development', 'Custom Software', 'Web Design', 'E-commerce', 'AI Integration', 'Blockchain'];
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing 55+ successful projects across diverse industries, 
            each crafted with precision and innovative solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover-scale group transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
