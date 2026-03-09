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
    className="min-h-screen py-20 px-4 flex flex-col items-center justify-center relative z-10 overflow-hidden"
  >
    {/* Section title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-8 md:mb-12"
    >
      <div className="text-4xl md:text-5xl mb-2">📸</div>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-pink-300 mb-2">
        Our Memories
      </h2>
      <p className="font-handwriting text-2xl md:text-3xl text-purple-300 px-2">
        because every photo with you is a treasure 🌟
      </p>
    </motion.div>

    {/* Polaroid grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full px-2 sm:px-4">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.num}
          initial={{ opacity: 0, y: 50, rotate: rotations[index] }}
          whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
          whileHover={{ scale: 1.07, rotate: 0, zIndex: 50 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.15, duration: 0.6, type: 'spring', bounce: 0.3 }}
          className="polaroid-frame w-full max-w-[280px] mx-auto sm:max-w-none"
        >
          <div className="bg-pink-100 w-full h-[320px] sm:h-[350px] overflow-hidden rounded-sm relative">
            <img
              src={`${import.meta.env.BASE_URL}photos/${photo.num}.jpg`}
              alt={`Meku ${photo.num}`}
              className="absolute inset-0 w-full h-full object-cover block"
              loading="lazy"
            />
          </div>
          <p className="font-handwriting text-center mt-4 text-gray-800 font-bold italic text-2xl md:text-3xl">
            {photo.caption}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default GallerySection;
