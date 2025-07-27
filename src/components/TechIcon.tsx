
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TechIconProps {
  name: string;
  icon: string;
  delay?: number;
}

export const TechIcon = ({ name, icon, delay = 0 }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.15, 
        y: -8,
        rotateY: 10,
        rotateX: 5,
        z: 50
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect background */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-lg"
        animate={{
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main card */}
      <motion.div
        className="relative flex flex-col items-center p-6 rounded-2xl backdrop-blur-md border border-border/30 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        }}
        animate={{
          borderColor: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--border) / 0.3)',
          boxShadow: isHovered 
            ? '0 20px 40px -10px hsl(var(--primary) / 0.3), 0 0 30px hsl(var(--primary) / 0.2)' 
            : '0 4px 20px -5px hsl(var(--background) / 0.3)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
              animate={isHovered ? {
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Icon container with enhanced effects */}
        <motion.div 
          className="relative w-16 h-16 mb-4 flex items-center justify-center"
          animate={{
            rotateZ: isHovered ? 360 : 0,
          }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          {/* Icon glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/0"
            animate={{
              borderColor: isHovered ? 'hsl(var(--primary) / 0.6)' : 'hsl(var(--primary) / 0)',
              scale: isHovered ? 1.3 : 1,
              rotate: isHovered ? 180 : 0,
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Icon background */}
          <motion.div
            className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm"
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Icon image with enhanced effects */}
          <motion.img 
            src={icon} 
            alt={`${name} logo`} 
            className="relative w-10 h-10 object-contain filter drop-shadow-lg z-10"
            style={{
              filter: isHovered 
                ? 'drop-shadow(0 0 8px hsl(var(--primary) / 0.6)) brightness(1.2) saturate(1.3)' 
                : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) brightness(1) saturate(1)'
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating light particles around icon */}
          {isHovered && [...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 30],
                y: [0, Math.sin(i * Math.PI / 2) * 30],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Technology name with enhanced typography */}
        <motion.span 
          className="text-sm font-medium text-center relative z-10"
          animate={{
            color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {name}
          
          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/50"
            animate={{
              width: isHovered ? '100%' : '0%',
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>

        {/* Pulse ring effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl border border-primary/50"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ 
              scale: [1, 1.5, 2], 
              opacity: [0.5, 0.2, 0] 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};
