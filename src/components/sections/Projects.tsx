
import { AnimatedSection } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  Star, 
  Clock, 
  Shield, 
  TrendingUp, 
  Globe,
  Zap,
  Award,
  CheckCircle
} from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Enterprise HRMS Management System',
      description: 'Comprehensive Human Resource Management System with AI-powered analytics and automation',
      icon: <Users className="h-8 w-8 text-primary" />,
      category: 'Enterprise Software',
      status: 'Live',
      clients: '500+ employees',
      timeline: '6 months',
      features: [
        'AI-Powered Employee Analytics',
        'Automated Payroll Processing',
        'Real-time Attendance Tracking',
        'Performance Management Dashboard',
        'Document Management System',
        'Advanced Reporting & Insights',
        'Mobile App Integration',
        'Cloud-Based Infrastructure'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML', 'AWS'],
      results: {
        efficiency: '75% increase',
        costs: '40% reduction',
        satisfaction: '95% rating'
      }
    },
    {
      title: 'Smart Beauty Salon Platform',
      description: 'Next-generation salon management with IoT integration and predictive booking',
      icon: <Calendar className="h-8 w-8 text-primary" />,
      category: 'Service Business',
      status: 'Live',
      clients: '50+ salons',
      timeline: '4 months',
      features: [
        'AI-Powered Booking Optimization',
        'Integrated Payment Gateway',
        'Smart Inventory Management',
        'Customer Loyalty Program',
        'Staff Performance Analytics',
        'Automated Marketing Campaigns',
        'IoT Device Integration',
        'Multi-Location Management'
      ],
      technologies: ['Next.js', 'Stripe API', 'PostgreSQL', 'AWS', 'IoT', 'Redis'],
      results: {
        bookings: '60% increase',
        revenue: '45% growth',
        retention: '85% improvement'
      }
    },
    {
      title: 'Premium Celebrity Booking System',
      description: 'Exclusive high-security platform for celebrity consultations with blockchain verification',
      icon: <Star className="h-8 w-8 text-primary" />,
      category: 'Premium Services',
      status: 'Live',
      clients: '100+ celebrities',
      timeline: '5 months',
      features: [
        'Blockchain-Verified Appointments',
        'End-to-End Encryption',
        'Premium User Authentication',
        'Cryptocurrency Payment Support',
        'Private Video Conferencing',
        'Smart Contract Integration',
        'VIP Customer Support',
        'Advanced Security Protocols'
      ],
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Blockchain', 'WebRTC'],
      results: {
        security: '99.9% uptime',
        satisfaction: '98% rating',
        bookings: '250% increase'
      }
    },
    {
      title: 'AI-Powered Custom Solutions',
      description: 'Diverse portfolio of intelligent web applications with machine learning capabilities',
      icon: <Shield className="h-8 w-8 text-primary" />,
      category: 'Custom Development',
      status: 'Multiple Live',
      clients: '200+ projects',
      timeline: 'Ongoing',
      features: [
        'AI-Enhanced E-commerce Platforms',
        'Intelligent Content Management',
        'Predictive Real Estate Analytics',
        'Smart Educational Platforms',
        'AI Restaurant Management',
        'Healthcare Automation Systems',
        'Machine Learning Integration',
        'Voice-Activated Interfaces'
      ],
      technologies: ['Various Stacks', 'AI/ML', 'Cloud Services', 'Microservices'],
      results: {
        automation: '80% processes',
        accuracy: '95% prediction',
        efficiency: '65% improvement'
      }
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '200+', icon: <CheckCircle className="h-6 w-6 text-primary" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Award className="h-6 w-6 text-primary" /> },
    { label: 'Years Experience', value: '3+', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
    { label: 'Technologies Used', value: '50+', icon: <Zap className="h-6 w-6 text-primary" /> },
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Success Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Transforming businesses with cutting-edge technology solutions, AI integration, 
            and innovative features that drive measurable results across industries with 3+ years of experience.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/15 border border-primary/30 shadow-lg">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-green-500 text-green-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="text-center">
                      <Globe className="h-4 w-4 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Clients</div>
                      <div className="text-sm font-semibold">{project.clients}</div>
                    </div>
                    <div className="text-center">
                      <Clock className="h-4 w-4 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Timeline</div>
                      <div className="text-sm font-semibold">{project.timeline}</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-4 w-4 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Impact</div>
                      <div className="text-sm font-semibold text-green-500">High</div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Key Results Achieved
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-primary/5 rounded-lg">
                          <div className="text-sm font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Advanced Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      Advanced Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
