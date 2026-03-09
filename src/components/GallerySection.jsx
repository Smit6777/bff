import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  { num: 1, caption: 'My favourite smile 🌸' },
  { num: 2, caption: 'Cute as always 😍' },
  { num: 3, caption: 'So effortlessly stunning ✨' },
  { num: 4, caption: 'Pure magic, always 🦋' },
  { num: 5, caption: 'My fav person ever 💜' },
  { num: 6, caption: 'Pretty in pink 🩷' },
];

const rotations = [-4, 3, -2, 4, -3, 2];

const GallerySection = () => (
  <section
    id="gallery"
    style={{ minHeight: '100vh', padding: '5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}
  >
    {/* Section title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      style={{ textAlign: 'center', marginBottom: '3rem' }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📸</div>
      <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 700, color: '#f9a8d4', marginBottom: '0.5rem' }}>
        Our Memories
      </h2>
      <p style={{ fontFamily: '"Caveat", cursive', fontSize: '1.4rem', color: '#c4b5fd' }}>
        because every photo with you is a treasure 🌟
      </p>
    </motion.div>

    {/* Polaroid grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '1000px', width: '100%', padding: '0 1rem' }}>
      {photos.map((photo, index) => (
        <motion.div
          key={photo.num}
          initial={{ opacity: 0, y: 50, rotate: rotations[index] }}
          whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
          whileHover={{ scale: 1.07, rotate: 0, zIndex: 50 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.15, duration: 0.6, type: 'spring', bounce: 0.3 }}
          className="polaroid-frame"
        >
          <div style={{ background: '#fce7f3', aspectRatio: '3/4', overflow: 'hidden', borderRadius: '2px' }}>
            <img
              src={`/photos/${photo.num}.jpg`}
              alt={`Meku ${photo.num}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <p style={{ fontFamily: '"Caveat", cursive', textAlign: 'center', marginTop: '0.75rem', color: '#6b7280', fontStyle: 'italic', fontSize: '1rem' }}>
            {photo.caption}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default GallerySection;
