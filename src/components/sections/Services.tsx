import { AnimatedSection } from '@/components/AnimatedSection';
import { ServiceCard } from '@/components/ServiceCard';
import { Globe, ShoppingCart, Smartphone, BarChart3 } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Create dynamic websites with responsive design and scalable architectures.",
      icon: <Globe className="h-6 w-6" />,
      features: [
        "Custom Website Development",
        "Responsive Design",
        "Performance Optimization",
        "SEO Integration",
        "Progressive Web Apps"
      ]
    },
    {
      title: "E-Commerce Solutions",
      description: "Build mobile-first, secure e-commerce platforms with user-focused features.",
      icon: <ShoppingCart className="h-6 w-6" />,
      features: [
        "Custom E-commerce Platforms",
        "Payment Gateway Integration",
        "Inventory Management",
        "Mobile Optimization",
        "Security & Analytics"
      ]
    },
    {
      title: "Mobile Applications",
      description: "Progressive web apps for mobile-like experiences. Compatible, interactive products.",
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "Offline Functionality",
        "Push Notifications",
        "App Store Deployment"
      ]
    },
    {
      title: "Digital Analytics",
      description: "Know user perceptions, meet expectations & convert close misses.",
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        "User Behavior Analysis",
        "Performance Monitoring",
        "Conversion Optimization",
        "Real-time Dashboards",
        "Custom Reporting"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Web Development Services to Broaden
            <br />
            <span className="text-primary">Business Prospects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Experience web development prowess with a team specialized in agile project management and delivery. 
            Here are the top web development solutions, businesses trust TekRevol for.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};