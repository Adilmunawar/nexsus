
import { ReactNode } from 'react';

interface SectionBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: 'transparent' | 'semi-transparent' | 'solid';
}

export const SectionBackground = ({ 
  children, 
  className = '', 
  variant = 'transparent' 
}: SectionBackgroundProps) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'semi-transparent':
        return 'bg-background/80 backdrop-blur-sm';
      case 'solid':
        return 'bg-background';
      case 'transparent':
      default:
        return 'bg-transparent';
    }
  };

  return (
    <div className={`relative z-10 ${getBackgroundClass()} ${className}`}>
      {children}
    </div>
  );
};
