import React, { useEffect, useState } from 'react';
import { useCursor } from '../context/CursorContext';
import { motion } from 'framer-motion';

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

const CustomCursor: React.FC = () => {
  const { position, isActive } = useCursor();
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Generate random sparkle color
  const getRandomColor = () => {
    const colors = [
      'rgba(236, 72, 153, 0.7)', // pink-500
      'rgba(167, 139, 250, 0.7)', // purple-400
      'rgba(236, 72, 153, 0.5)', // pink-500 lighter
      'rgba(94, 170, 116, 0.7)', // forest-400
      'rgba(167, 139, 250, 0.5)', // purple-400 lighter
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Create sparkle trail effect when cursor moves
  useEffect(() => {
    if (!isActive) return;

    const createSparkle = () => {
      const newSparkle: Sparkle = {
        id: Math.random().toString(36).substring(2, 9),
        x: position.x + (Math.random() * 20 - 10),
        y: position.y + (Math.random() * 20 - 10),
        size: Math.random() * 8 + 4,
        color: getRandomColor(),
      };

      setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles((prevSparkles) => 
          prevSparkles.filter((sparkle) => sparkle.id !== newSparkle.id)
        );
      }, 600);
    };

    // Create sparkle every 60ms when moving
    const interval = setInterval(createSparkle, 60);
    return () => clearInterval(interval);
  }, [position, isActive]);

  if (!isActive) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 shadow-glow"></div>
      </motion.div>

      {/* Sparkle trail */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed rounded-full pointer-events-none z-40"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </>
  );
};

export default CustomCursor;