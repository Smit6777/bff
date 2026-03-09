import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { num: 1, caption: 'My favorite smile 🌸' },
  { num: 2, caption: 'Absolutely stunning ✨' },
  { num: 3, caption: 'So beautiful 💜' },
  { num: 4, caption: 'Pure magic 🦋' },
  { num: 5, caption: 'My fav person 🌟' },
];

const rotations = [-4, 3, -2, 4, -3];

const BirthdayWish = () => {
  const [cakeClicked, setCakeClicked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 pt-12 pb-20"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="text-center mb-8"
      >
        <motion.p
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-5xl mb-3"
        >
          🎂🎉🎈
        </motion.p>

        <h1
          className="font-serif font-bold text-center leading-tight"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            background: 'linear-gradient(90deg, #f9a8d4, #fde68a, #c4b5fd, #6ee7b7, #f9a8d4)',
            backgroundSize: '200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s ease infinite',
          }}
        >
          Happy Birthday,
          <br />
          Meku! 🥳
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-handwriting text-2xl mt-4"
          style={{ color: '#e9d5ff' }}
        >
          wishing you the most magical day ever 💜
        </motion.p>
      </motion.div>

      {/* Cake button */}
      <motion.div className="mb-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCakeClicked(!cakeClicked)}
          className="text-6xl cursor-pointer select-none"
          title="Click me!"
          animate={{ rotate: cakeClicked ? [0, -10, 10, -10, 10, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          🎂
        </motion.button>
        <AnimatePresence>
          {cakeClicked && (
            <motion.p
              key="wish"
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="font-handwriting text-xl text-center mt-2"
              style={{ color: '#fde68a' }}
            >
              Make a wish! ✨🕯️
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Polaroid Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <p className="font-handwriting text-center text-2xl mb-6" style={{ color: '#c4b5fd' }}>
          A little gallery, just for you 📸
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-2">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.num}
              initial={{ opacity: 0, y: 40, rotate: rotations[index] }}
              animate={{ opacity: 1, y: 0, rotate: rotations[index] }}
              whileHover={{ scale: 1.07, rotate: 0, zIndex: 50 }}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              className="polaroid-frame"
            >
              <div style={{ background: '#fce7f3', aspectRatio: '3/4', overflow: 'hidden', borderRadius: '2px' }}>
                <img
                  src={`/photos/${photo.num}.jpg`}
                  alt={`Meku ${photo.num}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p className="font-handwriting text-center mt-3" style={{ color: '#6b7280', fontStyle: 'italic', fontSize: '1rem' }}>
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Birthday message card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-14 max-w-2xl w-full mx-auto text-center rounded-3xl p-8"
        style={{
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 0 60px rgba(196, 181, 253, 0.15)',
        }}
      >
        <p className="text-lg leading-relaxed mb-6" style={{ color: '#e9d5ff', fontFamily: 'Inter, sans-serif' }}>
          Meku, today is your day 🎉 You deserve all the happiness, all the cake, and every beautiful thing this world has to offer. Thank you for being you — you make everything brighter just by existing. 💜
        </p>
        <p className="font-handwriting text-3xl font-bold" style={{ color: '#f9a8d4' }}>
          Happy Birthday, Meku! 🌸
        </p>
        <p className="font-handwriting text-xl mt-2" style={{ color: '#c4b5fd' }}>
          — from your Smitu 💜
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BirthdayWish;
