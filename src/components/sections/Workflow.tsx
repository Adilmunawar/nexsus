
import { AnimatedSection } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Search, Code, Palette, Rocket, TestTube, CheckCircle } from 'lucide-react';

export const Workflow = () => {
  const phases = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We dive deep into your vision, understanding requirements and creating a strategic roadmap.",
      icon: <Search className="h-8 w-8" />,
      duration: "1-2 weeks"
    },
    {
      id: 2,
      title: "Technology Selection",
      description: "Choose the perfect tech stack tailored to your project's scalability and performance needs.",
      icon: <Code className="h-8 w-8" />,
      duration: "3-5 days"
    },
    {
      id: 3,
      title: "Design & Prototyping",
      description: "Create stunning UI/UX designs with user-centered approach and modern aesthetics.",
      icon: <Palette className="h-8 w-8" />,
      duration: "2-3 weeks"
    },
    {
      id: 4,
      title: "Development",
      description: "Build robust, scalable solutions with clean code and industry best practices.",
      icon: <Rocket className="h-8 w-8" />,
      duration: "4-8 weeks"
    },
    {
      id: 5,
      title: "Testing & QA",
      description: "Comprehensive testing ensures reliability, performance, and user satisfaction.",
      icon: <TestTube className="h-8 w-8" />,
      duration: "1-2 weeks"
    },
    {
      id: 6,
      title: "Launch & Support",
      description: "Seamless deployment with ongoing maintenance and continuous improvement.",
      icon: <CheckCircle className="h-8 w-8" />,
      duration: "Ongoing"
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(var(--primary)) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-primary">Development Process</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From concept to launch, we follow a proven methodology refined over 3+ years that delivers exceptional results
          </motion.p>
        </AnimatedSection>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}

                {/* Card */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow relative z-10">
                  {/* Phase Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/30">
                      <span className="text-primary font-bold text-lg">
                        {phase.id}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      {phase.duration}
                    </div>
                  </div>

                  {/* Icon with Primary Color */}
                  <div className="w-16 h-16 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    {phase.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Process */}
        <AnimatedSection className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Why Our Process Works</h3>
              <p className="text-muted-foreground text-lg">
                Proven methodology refined over 3+ years that ensures project success and client satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Transparent Communication",
                  description: "Regular updates and clear milestones keep you informed throughout the journey"
                },
                {
                  title: "Agile Methodology",
                  description: "Flexible approach that adapts to changes and delivers value incrementally"
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous testing and code review ensure exceptional quality and performance"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-primary rounded-full" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
