import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MagicButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const MagicButton: React.FC<MagicButtonProps> = ({ 
  onClick, 
  children, 
  className = '', 
  disabled = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`magic-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ boxShadow: '0 0 0 rgba(167, 139, 250, 0)' }}
      animate={{ 
        boxShadow: isHovered 
          ? '0 0 20px rgba(167, 139, 250, 0.7)' 
          : '0 0 10px rgba(167, 139, 250, 0.3)' 
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
      
      {/* Sparkle effect on hover */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute inline-block w-1 h-1 bg-white rounded-full"
              style={{
                top: `${50 + (Math.random() * 40 - 20)}%`,
                left: `${50 + (Math.random() * 80 - 40)}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
};

export default MagicButton;