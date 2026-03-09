import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate initial hearts, fewer for better mobile rendering performance
    const isMobile = window.innerWidth < 768;
    const heartCount = isMobile ? 8 : 30;
    
    const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of screen width
      size: Math.random() * 20 + 10, // px size between 10 and 30
      delay: Math.random() * 10, // Delay animation start
      duration: Math.random() * 8 + 8, // duration between 8 and 16 seconds
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-love-300 opacity-60 flex justify-center items-center"
          initial={{ y: '110vh', x: `${heart.x}vw`, rotate: 0 }}
          animate={{ 
            y: '-20vh', 
            x: `${heart.x + (Math.random() * 10 - 5)}vw`, // slight horizontal drift
            rotate: 360 
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{ width: heart.size, height: heart.size }}
        >
          <svg viewBox="0 0 32 29.6" fill="currentColor">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
