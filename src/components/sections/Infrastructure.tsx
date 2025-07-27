
import { AnimatedSection } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Server, Shield, Zap, Globe, Database, Cloud } from 'lucide-react';

export const Infrastructure = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Scalable Architecture',
      description: 'Built on cloud-native infrastructure that grows with your business'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enterprise Security',
      description: 'Multi-layered security protocols to protect your data and applications'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with global content delivery'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Reach',
      description: 'Worldwide deployment with edge computing capabilities'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Management',
      description: 'Advanced database solutions with real-time synchronization'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Integration',
      description: 'Seamless integration with major cloud platforms and services'
    }
  ];

  return (
    <section id="infrastructure" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/nexsus-uploads/e8531b72-e97a-46c9-9dae-39b12a5d4e08.png" 
                alt="Advanced Infrastructure" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-sm"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/30 rounded-full blur-sm"
            />
          </motion.div>

          {/* Right side - Content */}
          <div>
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced <span className="text-primary">Infrastructure</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our cutting-edge infrastructure ensures your applications are built on a solid foundation 
                with enterprise-grade reliability, security, and performance.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-primary mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
