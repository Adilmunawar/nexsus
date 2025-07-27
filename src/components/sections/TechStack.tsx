
import { AnimatedSection } from '@/components/AnimatedSection';
import { TechIcon } from '@/components/TechIcon';
import { motion } from 'framer-motion';

export const TechStack = () => {
  const technologies = [
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' 
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' 
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' 
    },
    { 
      name: 'TypeScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' 
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' 
    },
    { 
      name: 'PostgreSQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' 
    },
    { 
      name: 'AWS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' 
    },
    { 
      name: 'Docker', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' 
    },
    { 
      name: 'GraphQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' 
    },
    { 
      name: 'Next.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' 
    },
    { 
      name: 'Vue.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' 
    },
    { 
      name: 'Laravel', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' 
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Specializes <span className="text-primary">Modern Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accelerate full-stack development using modern low-code, cloud-based frameworks. 
            We excel at what we do with cutting-edge technology solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/lovable-uploads/f09fe3fc-ec6d-41c9-9b6e-9b9310b6693f.png" 
              alt="Modern Technology Infrastructure" 
              className="w-full h-auto rounded-lg shadow-professional"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent rounded-lg"></div>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <TechIcon
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.h3 
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  150+
                </motion.h3>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <motion.h3 
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  50+
                </motion.h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <motion.h3 
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  5+
                </motion.h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
