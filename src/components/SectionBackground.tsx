
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
  // Always use transparent background for global background effect
  return (
    <div className={`relative z-10 bg-transparent ${className}`}>
      {children}
    </div>
  );
};
