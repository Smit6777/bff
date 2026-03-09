import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollDown = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 md:p-8 relative z-10 overflow-hidden"
    >
      {/* Sparkle emojis around */}
      {['✨', '🌟', '💫', '⭐', '✨', '🌟'].map((s, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.6 }}
          style={{
            position: 'absolute',
            fontSize: '1.5rem',
            top: `${15 + (i % 3) * 20}%`,
            left: i < 3 ? `${5 + i * 8}%` : undefined,
            right: i >= 3 ? `${5 + (i-3) * 8}%` : undefined,
          }}
        >
          {s}
        </motion.span>
      ))}

      {/* Birthday emojis */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-6xl md:text-7xl lg:text-[5rem] mb-4 md:mb-6"
      >
        🎂🎉🎈
      </motion.div>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: 'spring', bounce: 0.4 }}
        className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-tight mb-4"
        style={{
          background: 'linear-gradient(90deg, #f9a8d4, #fde68a, #c4b5fd, #6ee7b7, #fda4af)',
          backgroundSize: '200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 4s ease infinite',
        }}
      >
        Happy Birthday,
        <br />
        Meku! 🥳
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="font-handwriting text-2xl md:text-3xl text-purple-200 mb-2 md:mb-4 px-2"
      >
        Today is ALL about you 💜
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-purple-300 text-lg md:text-xl max-w-lg leading-relaxed mb-8 md:mb-12 px-4"
      >
        From your bestie Smitu, with all the love in the world 🌸
      </motion.p>

      {/* Scroll down button */}
      <motion.button
        onClick={scrollDown}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{
          background: 'linear-gradient(135deg, #a855f7, #ec4899)',
          color: 'white',
          border: 'none',
          borderRadius: '9999px',
          padding: '0.9rem 2.5rem',
          fontSize: '1.1rem',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
          letterSpacing: '0.05em',
        }}
      >
        See your surprises 🎁
      </motion.button>
    </section>
  );
};

export default HeroSection;
