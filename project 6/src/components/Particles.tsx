import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const Particles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: 30 }).map(() => createParticle());
    setParticles(initialParticles);

    // Add new particle every 2 seconds
    const interval = setInterval(() => {
      setParticles(prevParticles => {
        // Remove the oldest particle if we have too many
        const updatedParticles = prevParticles.length >= 40 
          ? [...prevParticles.slice(1), createParticle()]
          : [...prevParticles, createParticle()];
        return updatedParticles;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const createParticle = (): Particle => {
    return {
      id: Math.random().toString(36).substring(2, 9),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    };
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [0, -100],
            x: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;