
import { motion } from 'framer-motion';
import { Linkedin, Github, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="py-20 bg-background/80 backdrop-blur-sm border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/nexsus-uploads/79e1773d-e860-4ec7-a4e2-b55f830c7746.png" 
              alt="Nexsus Orbits" 
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground">
              Your gateway to multi-dimensional growth through innovative web solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/nexsus-orbits"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://github.com/Nexsus-Orbits"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Digital Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#management" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#management" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Lahore, Punjab, Pakistan
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +92 324 496 5220
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@nexsusorbits.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Nexsus Orbits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
