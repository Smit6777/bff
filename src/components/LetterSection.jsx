import React from 'react';
import { motion } from 'framer-motion';

const LetterSection = () => (
  <section
    id="letter"
    style={{ minHeight: '100vh', padding: '5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}
  >
    {/* Section title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      style={{ textAlign: 'center', marginBottom: '2.5rem' }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💌</div>
      <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 700, color: '#fde68a', marginBottom: '0.5rem' }}>
        A Note From Smitu
      </h2>
    </motion.div>

    {/* Letter card */}
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.2, duration: 0.8, type: 'spring', bounce: 0.3 }}
      style={{
        maxWidth: '680px',
        width: '100%',
        background: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '2rem',
        padding: '3rem',
        boxShadow: '0 0 80px rgba(196, 181, 253, 0.15), 0 25px 50px rgba(0,0,0,0.3)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(168,85,247,0.3), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(236,72,153,0.25), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Letter content */}
      <p style={{ fontFamily: '"Caveat", cursive', fontSize: '1.4rem', color: '#c4b5fd', marginBottom: '1rem' }}>
        Dear Meku,
      </p>

      <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.05rem', color: '#e9d5ff', lineHeight: 1.85, marginBottom: '1.2rem' }}>
        I'm not great with words (you know this 😅) but I really needed you to know how much you mean to me on your special day.
      </p>

      <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.05rem', color: '#e9d5ff', lineHeight: 1.85, marginBottom: '1.2rem' }}>
        Having you as my best friend is one of the best things that's ever happened to me. You make ordinary days feel special, and your laugh is literally contagious. I don't know what I'd do without your chaos in my life honestly 💜
      </p>

      <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.05rem', color: '#e9d5ff', lineHeight: 1.85, marginBottom: '1.2rem' }}>
        I hope today feels as magical as you are. You deserve all the good things — all the cake, all the smiles, all the happiness this world has to offer. You deserve a day that matches your energy. 🎉
      </p>

      <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.05rem', color: '#e9d5ff', lineHeight: 1.85, marginBottom: '2rem' }}>
        Thank you for being YOU. Never change. 🌟
      </p>

      {/* Signature */}
      <div style={{ borderTop: '1px solid rgba(196,181,253,0.2)', paddingTop: '1.5rem', textAlign: 'right' }}>
        <p style={{ fontFamily: '"Caveat", cursive', fontSize: '2rem', color: '#f9a8d4', fontWeight: 700 }}>
          Happy Birthday, Meku 🎂
        </p>
        <p style={{ fontFamily: '"Caveat", cursive', fontSize: '1.5rem', color: '#c4b5fd', marginTop: '0.25rem' }}>
          — your Smitu 💜
        </p>
      </div>
    </motion.div>

    {/* Footer */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      style={{ marginTop: '3rem', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem', fontFamily: '"Caveat", cursive', fontSize: '1.2rem', color: '#9ca3af' }}
    >
      made with 💜 just for you, Meku
    </motion.p>
  </section>
);

export default LetterSection;
