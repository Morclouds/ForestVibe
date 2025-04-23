import React from 'react';
import { motion } from 'framer-motion';

const ForestBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-pink-800 to-purple-950"></div>

      {/* Floating forest elements */}
      <div className="absolute inset-0 z-0">
        {/* Trees silhouette at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 bg-purple-950/60"
          style={{
            maskImage: 'url("https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            maskSize: 'cover',
            maskPosition: 'bottom',
            WebkitMaskImage: 'url("https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            WebkitMaskSize: 'cover',
            WebkitMaskPosition: 'bottom',
          }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
          animate={{ y: [-20, 20, -20], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-[35%] right-[15%] w-40 h-40 rounded-full bg-pink-400/10 blur-xl"
          animate={{ y: [-25, 25, -25], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <motion.div
          className="absolute bottom-[25%] left-[25%] w-36 h-36 rounded-full bg-purple-400/10 blur-xl"
          animate={{ y: [-15, 15, -15], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Stars/fireflies effect */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{ 
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Fog overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/7235277/pexels-photo-7235277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default ForestBackground;