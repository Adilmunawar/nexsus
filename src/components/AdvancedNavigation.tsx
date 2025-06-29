
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Sparkles, Zap } from 'lucide-react';

const AdvancedNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { 
      name: 'Home', 
      id: 'home',
      icon: Sparkles
    },
    { 
      name: 'About', 
      id: 'about',
      icon: Globe,
      dropdown: [
        { name: 'Our Story', id: 'story' },
        { name: 'Mission & Vision', id: 'mission' },
        { name: 'Awards', id: 'awards' }
      ]
    },
    { 
      name: 'Services', 
      id: 'services',
      icon: Zap,
      dropdown: [
        { name: 'Web Development', id: 'web-dev' },
        { name: 'Mobile Apps', id: 'mobile' },
        { name: 'UI/UX Design', id: 'design' },
        { name: 'E-commerce', id: 'ecommerce' },
        { name: 'Digital Marketing', id: 'marketing' }
      ]
    },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Team', id: 'team' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-2xl border-b border-gray-700/50 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/e04a8557-a178-4b19-a946-2d6df66877cb.png" 
                  alt="Nexsus Orbits Logo" 
                  className="w-12 h-12 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.5))'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 border border-blue-400/30 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="hidden md:block">
                <div className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    NEXSUS
                  </span>
                </div>
                <div className="text-sm text-gray-400 font-medium -mt-1">
                  ORBITS PAKISTAN
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="relative flex items-center space-x-2 px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl group-hover:bg-gray-800/50 backdrop-blur-sm"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="font-medium">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-2xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden">
                      <div className="p-2">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <button
                            key={dropItem.name}
                            onClick={() => scrollToSection(dropItem.id)}
                            className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 group"
                            style={{
                              animationDelay: `${dropIndex * 0.05}s`
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{dropItem.name}</span>
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Start Project</span>
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ${
          isMobileOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-gray-900/98 backdrop-blur-2xl border-t border-gray-700/50">
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 group w-full text-left"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span className="font-medium text-lg">{item.name}</span>
                  </button>
                  {item.dropdown && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.dropdown.map((dropItem) => (
                        <button
                          key={dropItem.name}
                          onClick={() => scrollToSection(dropItem.id)}
                          className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {dropItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-700/50">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Overlay for Mobile Menu */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default AdvancedNavigation;
