import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoveQuestion = ({ onYes }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    // Generate random coordinates within a bound avoiding the edge
    const maxX = window.innerWidth / 3;
    const maxY = window.innerHeight / 3;
    
    // Random direction (positive or negative)
    const randomX = Math.random() * maxX * (Math.random() > 0.5 ? 1 : -1);
    const randomY = Math.random() * maxY * (Math.random() > 0.5 ? 1 : -1);

    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-love-700 mb-4 drop-shadow-sm">
          Do you love me, Meku? 🥺
        </h1>
        <p className="text-love-600 font-handwriting text-2xl mb-12">
          (Be honest...)
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
        <button
          onClick={onYes}
          className="glow-btn text-xl w-32 h-14 flex items-center justify-center"
        >
          Yes! 💖
        </button>

        <motion.button
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onHoverStart={moveNoButton}
          onFocus={moveNoButton}
          className="bg-zinc-200 text-zinc-600 font-bold py-3 px-8 rounded-full shadow transition-colors hover:bg-zinc-300 text-xl w-32 h-14"
        >
          No 😢
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LoveQuestion;
