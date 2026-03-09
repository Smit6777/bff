import React from 'react';
import { motion } from 'framer-motion';

const SuccessPhase = () => {
  const photos = [1, 2, 3, 4, 5]; // Our renamed photos
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8"
    >
      {/* Background Decor from User Photos 3 and 4 */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0 flex justify-between p-10">
        <motion.img 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.15, x: 0 }}
          src={`${import.meta.env.BASE_URL}photos/3.jpg`} 
          className="h-64 rounded-full object-cover grayscale sepia" 
        />
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.15, x: 0 }}
          src={`${import.meta.env.BASE_URL}photos/4.jpg`} 
          className="h-64 rounded-full object-cover grayscale sepia self-end" 
        />
      </div>

      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
        className="max-w-5xl text-center relative z-10"
      >
        <motion.h1 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-5xl md:text-7xl font-serif font-bold text-love-800 mb-6 drop-shadow-md"
        >
          I knew it! 🥰
        </motion.h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
           {photos.map((num, index) => (
             <motion.div 
               key={num}
               initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -3 : 3 }}
               animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
               whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
               transition={{ delay: 0.2 * index }}
               className="polaroid-frame"
             >
               <div style={{ background: '#fce7f3', padding: '0.4rem', borderRadius: '4px' }}>
                  <img 
                    src={`./photos/${num}.jpg`} 
                    alt={`Meku ${num}`} 
                    style={{ width: '100%', height: 'auto', display: 'block', minHeight: '250px', objectFit: 'cover' }}
                    loading="lazy"
                  />
               </div>
               <p className="font-handwriting text-3xl md:text-4xl font-bold mt-4 text-black italic">
                 {index === 0 ? "My favorite smile" : 
                  index === 1 ? "Absolutely stunning" :
                  index === 2 ? "Thinking of you" :
                  index === 3 ? "Pure magic" : "Love you always"}
               </p>
             </motion.div>
           ))}
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/50 max-w-2xl mx-auto"
        >
          <p className="font-sans text-xl md:text-2xl text-love-900 leading-relaxed mb-6 font-medium">
            Meku, every moment with you feels like a dream. Thank you for being my Bilu. You make my world so much brighter.
          </p>
          <div className="mt-6 flex flex-col items-end">
            <p className="font-handwriting text-4xl font-bold text-love-600">
              Made with 💖 just for you,
            </p>
            <p className="font-handwriting text-3xl text-love-500 mt-2">
              My sweet Meku 💗
            </p>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default SuccessPhase;
