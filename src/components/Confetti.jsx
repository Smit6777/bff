import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const COLORS = ['#f9a8d4', '#fde68a', '#a5f3fc', '#c4b5fd', '#fbcfe8', '#6ee7b7', '#fca5a5', '#fff'];
const SHAPES = ['circle', 'rect', 'star'];

const StarShape = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: Math.random() * 10 + 6,
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    duration: Math.random() * 6 + 5,
    delay: Math.random() * 4,
    rotation: Math.random() * 360,
    drift: (Math.random() - 0.5) * 20,
  }));

const Confetti = () => {
  const [particles] = useState(() => generateParticles(55));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          initial={{ y: '-10vh', x: `${p.x}vw`, rotate: 0, opacity: 1 }}
          animate={{
            y: '110vh',
            x: `calc(${p.x}vw + ${p.drift}vw)`,
            rotate: p.rotation * 3,
            opacity: [1, 1, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
          style={{ width: p.size, height: p.size }}
        >
          {p.shape === 'circle' && (
            <div style={{ width: p.size, height: p.size, borderRadius: '50%', background: p.color }} />
          )}
          {p.shape === 'rect' && (
            <div style={{ width: p.size, height: p.size * 0.6, background: p.color }} />
          )}
          {p.shape === 'star' && <StarShape color={p.color} size={p.size} />}
        </motion.div>
      ))}

      {/* Floating balloons */}
      {['🎈', '🎀', '🎊', '🎉', '🌟', '✨', '🎈', '🎀'].map((emoji, i) => (
        <motion.div
          key={`balloon-${i}`}
          className="absolute text-3xl"
          initial={{ y: '110vh', x: `${10 + i * 12}vw` }}
          animate={{
            y: '-10vh',
            x: `${10 + i * 12 + (Math.random() * 8 - 4)}vw`,
          }}
          transition={{
            duration: 12 + i * 1.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'easeInOut',
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default Confetti;
