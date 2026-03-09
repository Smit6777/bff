import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { emoji: '😂', title: 'You make me laugh', text: 'Nobody in this world can make me laugh the way you do. My stomach hurts every single time.' },
  { emoji: '🤝', title: 'Always there for me', text: 'No matter what time, no matter what mood — you\'re always just one text away. That means everything.' },
  { emoji: '💯', title: 'Brutally honest', text: 'You never tell me what I want to hear — you tell me what I NEED to hear. That\'s rare and I love you for it.' },
  { emoji: '🌙', title: '3am energy', text: 'The way we can talk for hours about literally nothing and everything at the same time? That\'s our thing.' },
  { emoji: '🫂', title: 'My comfort person', text: 'Whenever I\'m anxious, sad, or lost — your presence (even over text) makes everything quieter and better.' },
  { emoji: '✨', title: 'Just... you', text: 'The way you laugh, your energy, your vibe — you are genuinely one of a kind. The world is luckier with you in it.' },
];

const ReasonsSection = () => (
  <section
    id="reasons"
    style={{ minHeight: '100vh', padding: '5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}
  >
    {/* Section title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      style={{ textAlign: 'center', marginBottom: '3.5rem' }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💜</div>
      <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 700, color: '#c4b5fd', marginBottom: '0.5rem' }}>
        Why You're My BFF
      </h2>
      <p style={{ fontFamily: '"Caveat", cursive', fontSize: '1.4rem', color: '#e9d5ff' }}>
        (endless list, but here are some 💫)
      </p>
    </motion.div>

    {/* Reasons grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '960px', width: '100%' }}>
      {reasons.map((reason, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.04, y: -4 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(196, 181, 253, 0.2)',
            borderRadius: '1.25rem',
            padding: '1.75rem',
            cursor: 'default',
            transition: 'box-shadow 0.3s',
            boxShadow: '0 4px 30px rgba(139,92,246,0.1)',
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{reason.emoji}</div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', fontWeight: 700, color: '#f9a8d4', marginBottom: '0.5rem' }}>
            {reason.title}
          </h3>
          <p style={{ color: '#d1d5db', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {reason.text}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ReasonsSection;
