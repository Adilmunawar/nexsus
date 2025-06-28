
import React, { useState } from 'react';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team = [
    {
      name: "Zoya Ali",
      role: "Co-Founder & Lead Designer",
      description: "Visionary designer with expertise in creating stunning user experiences and innovative digital solutions that captivate audiences worldwide.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=400&h=400&fit=crop&crop=face",
      specialties: ["UI/UX Design", "Brand Strategy", "Creative Direction"],
      experience: "8+ Years",
      projects: "200+"
    },
    {
      name: "Adil Munawar",
      role: "Co-Founder & Technical Lead",
      description: "Full-stack architect specializing in scalable solutions and cutting-edge technology implementations for enterprise-level applications.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialties: ["Full-Stack Development", "System Architecture", "DevOps"],
      experience: "10+ Years",
      projects: "150+"
    },
    {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      description: "Frontend specialist focused on creating responsive, accessible, and performance-optimized web applications with modern frameworks.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialties: ["React", "Vue.js", "Web Performance"],
      experience: "6+ Years",
      projects: "120+"
    },
    {
      name: "Michael Rodriguez",
      role: "Backend Engineer",
      description: "Backend expert with deep knowledge in database optimization, API development, and cloud infrastructure management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialties: ["Node.js", "Python", "AWS"],
      experience: "7+ Years",
      projects: "100+"
    }
  ];

  return (
    <section id="team" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our talented remote team combines creativity, technical expertise, and innovation 
            to deliver exceptional digital solutions for clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 transition-all duration-500 group-hover:bg-gray-800/60 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-purple-500/50 rounded-full transition-all duration-500"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">
                      {member.name}
                    </h3>
                    
                    <div className="text-blue-400 font-medium mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {member.role}
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {member.description}
                    </p>
                    
                    <div className="flex justify-center space-x-4 mb-4 text-xs">
                      <div className="bg-gray-800/50 rounded-full px-3 py-1">
                        <span className="text-gray-400">Experience: </span>
                        <span className="text-blue-400">{member.experience}</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-full px-3 py-1">
                        <span className="text-gray-400">Projects: </span>
                        <span className="text-purple-400">{member.projects}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <div
                          key={specialtyIndex}
                          className="text-xs bg-gray-800/30 backdrop-blur-sm rounded-full px-3 py-1 text-gray-300 inline-block mr-1 mb-1 border border-gray-700/50 group-hover:border-purple-500/30 transition-all duration-300"
                        >
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
