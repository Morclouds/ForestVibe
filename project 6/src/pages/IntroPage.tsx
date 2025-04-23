import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TreesIcon, Wind } from 'lucide-react';
import MagicButton from '../components/MagicButton';

const IntroPage: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <motion.div
        className="max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <TreesIcon className="w-16 h-16 text-purple-300" />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-forest-300 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Welcome to the Enchanted Forest
        </motion.h1>

        <motion.div 
          className="glass-card mb-8 text-center"
          variants={itemVariants}
        >
          <h2 className="text-xl md:text-2xl font-medium mb-4 text-pink-200">A safe place to release your thoughts</h2>
          
          <p className="mb-4 text-purple-100">
            In the depths of this magical forest, your worries dissolve into the mist, 
            and your frustrations fade into the air like whispers among the trees.
          </p>
          
          <div className={`${showMore ? 'block' : 'hidden'} space-y-4 mb-4`}>
            <p className="text-purple-100">
              We all need a place to release our thoughts, the things that weigh on our minds 
              and hearts. Here, in this enchanted forest, you can scream into the void.
            </p>
            
            <p className="text-purple-100">
              Type out your frustrations, fears, or anything that's bothering you. 
              Send them into the forest, and watch as they transform into something lighter.
              No one will read your thoughts, they will dissolve into the digital void.
            </p>

            <div className="flex items-center justify-center gap-2 pt-2">
              <Wind className="text-forest-300 w-5 h-5" />
              <span className="text-forest-300 font-medium">Every release brings relief</span>
            </div>
          </div>
          
          <button 
            onClick={() => setShowMore(!showMore)} 
            className="text-purple-300 hover:text-pink-300 transition-colors duration-300 text-sm font-medium focus:outline-none"
          >
            {showMore ? 'Show less' : 'Read more...'}
          </button>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <Link to="/scream">
            <MagicButton className="text-lg">
              Enter the Forest
            </MagicButton>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroPage;