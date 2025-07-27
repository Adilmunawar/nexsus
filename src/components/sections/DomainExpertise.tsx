
import { AnimatedSection } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Users, 
  Building, 
  Gamepad2, 
  Landmark, 
  Home, 
  Briefcase,
  Truck,
  Monitor,
  Shield,
  Car,
  MapPin
} from 'lucide-react';

export const DomainExpertise = () => {
  const domains = [
    { name: 'eCommerce', icon: <ShoppingCart className="h-8 w-8" /> },
    { name: 'Fintech', icon: <Landmark className="h-8 w-8" /> },
    { name: 'Healthcare', icon: <Heart className="h-8 w-8" /> },
    { name: 'Education', icon: <GraduationCap className="h-8 w-8" /> },
    { name: 'Social Networking', icon: <Users className="h-8 w-8" /> },
    { name: 'Hospitality', icon: <Building className="h-8 w-8" /> },
    { name: 'Entertainment', icon: <Gamepad2 className="h-8 w-8" /> },
    { name: 'Government', icon: <Shield className="h-8 w-8" /> },
    { name: 'Real Estate', icon: <Home className="h-8 w-8" /> },
    { name: 'Business', icon: <Briefcase className="h-8 w-8" /> },
    { name: 'Logistics', icon: <Truck className="h-8 w-8" /> },
    { name: 'Tech & IT', icon: <Monitor className="h-8 w-8" /> },
    { name: 'Non-Profit', icon: <Heart className="h-8 w-8" /> },
    { name: 'Automotive', icon: <Car className="h-8 w-8" /> },
    { name: 'Travel & Tourism', icon: <MapPin className="h-8 w-8" /> }
  ];

  return (
    <section id="domains" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Domain <span className="text-primary">Diversity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help businesses across 15+ domains to research, shape, and launch an authoritative web platform.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center hover:shadow-glow group flex flex-col items-center justify-center min-h-[140px]"
            >
              <div className="text-primary mb-4 group-hover:animate-float flex items-center justify-center">
                {domain.icon}
              </div>
              <h3 className="font-semibold text-sm text-center leading-tight">{domain.name}</h3>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help bring your vision to life with our expertise
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
