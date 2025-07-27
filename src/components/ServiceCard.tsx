import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  delay?: number;
}

export const ServiceCard = ({ title, description, icon, features, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};