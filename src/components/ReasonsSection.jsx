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
    className="min-h-screen py-20 px-4 flex flex-col items-center justify-center relative z-10 overflow-hidden"
  >
    {/* Section title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10 md:mb-14"
    >
      <div className="text-4xl md:text-5xl mb-2">💜</div>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 mb-2">
        Why You're My BFF
      </h2>
      <p className="font-handwriting text-2xl md:text-3xl text-purple-200 px-2">
        (endless list, but here are some 💫)
      </p>
    </motion.div>

    {/* Reasons grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl w-full px-2 sm:px-4">
      {reasons.map((reason, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.04, y: -4 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-white/5 backdrop-blur-md border border-purple-300/20 rounded-2xl p-6 shadow-[0_4px_30px_rgba(139,92,246,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(139,92,246,0.2)]"
        >
          <div className="text-4xl mb-3">{reason.emoji}</div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-pink-300 mb-2">
            {reason.title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {reason.text}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ReasonsSection;
