
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ExternalLink, Github, Zap, Sparkles, Star, TrendingUp, Eye, Code, Globe, Heart } from 'lucide-react';

const Portfolio = React.memo(() => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Luxury E-commerce Platform",
      category: "E-commerce",
      description: "Premium online store with advanced product showcase, seamless checkout, and inventory management system.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      metrics: { clients: "5K+", satisfaction: "100%", performance: "99.9%" },
      gradient: "from-purple-600 via-pink-600 to-red-500",
      featured: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "SaaS Dashboard Suite",
      category: "SaaS Application",
      description: "Comprehensive business analytics dashboard with real-time data visualization and team collaboration tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      metrics: { clients: "12K+", satisfaction: "100%", performance: "98%" },
      gradient: "from-blue-600 via-cyan-600 to-teal-500",
      featured: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Fashion Portfolio Website",
      category: "Web Development",
      description: "Stunning portfolio website for fashion models with interactive galleries and booking system.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind", "Framer Motion", "Sanity"],
      metrics: { clients: "2K+", satisfaction: "100%", performance: "97%" },
      gradient: "from-pink-600 via-purple-600 to-indigo-500",
      featured: false,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      category: "Web Application",
      description: "Complete restaurant solution with online ordering, table reservations, and kitchen management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["Next.js", "Express", "MySQL", "Socket.io"],
      metrics: { clients: "300+", satisfaction: "100%", performance: "96%" },
      gradient: "from-orange-600 via-red-600 to-pink-500",
      featured: false,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Learning Management Platform",
      category: "SaaS Application",
      description: "Advanced LMS with course creation, student tracking, and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["React", "Django", "Redis", "AWS"],
      metrics: { clients: "8K+", satisfaction: "100%", performance: "99%" },
      gradient: "from-green-600 via-emerald-600 to-cyan-500",
      featured: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Real Estate Portal",
      category: "Web Development",
      description: "Modern property listing website with virtual tours, mortgage calculator, and agent portal.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tags: ["React", "Laravel", "MySQL", "Maps API"],
      metrics: { clients: "1.5K+", satisfaction: "100%", performance: "98%" },
      gradient: "from-indigo-600 via-purple-600 to-pink-500",
      featured: false,
      liveUrl: "#",
      githubUrl: "#"
    }
  ], []);

  const categories = useMemo(() => [
    { name: 'All', icon: Globe, count: projects.length },
    { name: 'E-commerce', icon: TrendingUp, count: projects.filter(p => p.category === 'E-commerce').length },
    { name: 'SaaS Application', icon: Zap, count: projects.filter(p => p.category === 'SaaS Application').length },
    { name: 'Web Development', icon: Code, count: projects.filter(p => p.category === 'Web Development').length },
    { name: 'Web Application', icon: Sparkles, count: projects.filter(p => p.category === 'Web Application').length }
  ], [projects]);
  
  const filteredProjects = useMemo(() => 
    filter === 'All' ? projects : projects.filter(project => project.category === filter),
    [filter, projects]
  );

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

  const handleFilterChange = useCallback((categoryName: string) => {
    setFilter(categoryName);
  }, []);

  const handleMouseEnter = useCallback((projectId: number) => {
    setHoveredProject(projectId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  const stats = useMemo(() => [
    { label: "Projects Completed", value: "50+", icon: Code, gradient: "from-blue-500 to-cyan-500" },
    { label: "Happy Clients", value: "25+", icon: Heart, gradient: "from-pink-500 to-red-500" },
    { label: "Success Rate", value: "100%", icon: TrendingUp, gradient: "from-green-500 to-emerald-500" },
    { label: "Average Rating", value: "4.9/5", icon: Star, gradient: "from-yellow-500 to-orange-500" }
  ], []);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-blue-900/5 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Optimized Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex justify-center items-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-40"></div>
            <div className="mx-8 relative">
              <Code className="w-12 h-12 text-purple-400" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-1 max-w-40"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-none">
            <span className="text-purple-400">Our</span>
            <br />
            <span className="text-white text-3xl md:text-5xl">Portfolio</span>
          </h2>    
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Showcasing <span className="text-purple-400 font-semibold">cutting-edge web solutions</span> that drive business growth and user engagement
          </p>
          
          {/* Optimized Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => handleFilterChange(category.name)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  filter === category.name
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border border-gray-600/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                    filter === category.name ? 'bg-white/20' : 'bg-gray-700'
                  }`}>
                    {category.count}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Optimized Project Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-black font-bold text-xs flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>FEATURED</span>
                </div>
              )}
              
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className={`absolute top-4 left-4 flex space-x-2 transform transition-all duration-300 ${
                  hoveredProject === project.id ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}>
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="text-sm text-gray-400 mb-2 flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                  <span>{project.category}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-800/30 rounded-xl">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{project.metrics.clients}</div>
                    <div className="text-gray-400 text-xs">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{project.metrics.satisfaction}</div>
                    <div className="text-gray-400 text-xs">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-sm flex items-center justify-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{project.metrics.performance}</span>
                    </div>
                    <div className="text-gray-400 text-xs">Performance</div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex space-x-3">
                  <button className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold text-sm hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2`}>
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live</span>
                  </button>
                  <button className="px-4 py-2 bg-gray-800 rounded-xl text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optimized Stats */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl hover:scale-105 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;
