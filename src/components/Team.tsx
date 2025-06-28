
import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Zoya Ali",
      role: "Co-Founder & Lead Designer",
      description: "Visionary designer with expertise in creating stunning user experiences and innovative digital solutions.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=300&h=300&fit=crop&crop=face",
      specialties: ["UI/UX Design", "Brand Strategy", "Creative Direction"]
    },
    {
      name: "Adil Munawar",
      role: "Co-Founder & Technical Lead",
      description: "Full-stack architect specializing in scalable solutions and cutting-edge technology implementations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialties: ["Full-Stack Development", "System Architecture", "DevOps"]
    },
    {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      description: "Frontend specialist focused on creating responsive, accessible, and performance-optimized web applications.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      specialties: ["React", "Vue.js", "Web Performance"]
    },
    {
      name: "Michael Rodriguez",
      role: "Backend Engineer",
      description: "Backend expert with deep knowledge in database optimization, API development, and cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      specialties: ["Node.js", "Python", "AWS"]
    }
  ];

  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our talented remote team combines creativity, technical expertise, and innovation 
            to deliver exceptional digital solutions for clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover-scale group transition-all duration-300 text-center"
            >
              <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">
                {member.name}
              </h3>
              
              <div className="text-blue-400 font-medium mb-3">
                {member.role}
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {member.description}
              </p>
              
              <div className="space-y-1">
                {member.specialties.map((specialty, specialtyIndex) => (
                  <div
                    key={specialtyIndex}
                    className="text-xs bg-gray-800 rounded-full px-3 py-1 text-gray-300 inline-block mr-1"
                  >
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
