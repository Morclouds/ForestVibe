import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, SendHorizonal, Heart } from 'lucide-react';
import MagicButton from '../components/MagicButton';
import { getRandomEncouragement } from '../utils/encouragement';

const ScreamPage: React.FC = () => {
  const [scream, setScream] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [encouragement, setEncouragement] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scream.trim()) return;

    setIsSubmitting(true);

    // Simulate the scream flying away
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show encouragement
    const message = getRandomEncouragement();
    setEncouragement(message);
    setScream('');
    setIsSubmitting(false);

    // Focus textarea again
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleStartOver = () => {
    setEncouragement(null);
    setScream('');
    // Focus textarea
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}>
      <div className="mb-6">
        <Link to="/" className="flex items-center text-purple-300 hover:text-pink-300 transition-duration-300">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to the entrance</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {!encouragement ? (
            <motion.div 
              key="scream-form"
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-purple-200">
                Release Your Thoughts
              </h1>
              
              <div className="glass-card mb-8 backdrop-blur-md">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="scream" className="block text-pink-200 text-lg mb-2">
                      What's weighing on your mind today?
                    </label>
                    <textarea
                      ref={textareaRef}
                      id="scream"
                      value={scream}
                      onChange={(e) => setScream(e.target.value)}
                      placeholder="Type your thoughts here... they will disappear into the forest."
                      className="forest-textarea"
                      disabled={isSubmitting}
                      autoFocus
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <MagicButton 
                      type="submit" 
                      disabled={!scream.trim() || isSubmitting}
                      className="flex items-center gap-2"
                    >
                      {isSubmitting ? 'Releasing...' : 'Release to the Forest'}
                      <SendHorizonal className="w-5 h-5" />
                    </MagicButton>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="encouragement"
              className="w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card text-center backdrop-blur-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  
                  <h2 className="text-2xl font-medium mb-6 text-purple-200">
                    From the Forest
                  </h2>
                  
                  <div className="max-w-xl mx-auto">
                    <p className="text-xl mb-8 text-pink-100 italic font-light">
                      "{encouragement}"
                    </p>
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <MagicButton 
                      onClick={handleStartOver}
                      className="min-w-32"
                    >
                      Release More
                    </MagicButton>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScreamPage;