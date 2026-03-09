import React from 'react';
import { motion } from 'framer-motion';

const LetterSection = () => (
  <section
    id="letter"
    className="min-h-screen py-20 px-4 flex flex-col items-center justify-center relative z-10 overflow-hidden"
  >
    {/* Section title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10"
    >
      <div className="text-4xl md:text-5xl mb-2">💌</div>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-200 mb-2">
        A Note From Smitu
      </h2>
    </motion.div>

    {/* Letter card */}
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.2, duration: 0.8, type: 'spring', bounce: 0.3 }}
      className="max-w-[680px] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_0_80px_rgba(196,181,253,0.15),0_25px_50px_rgba(0,0,0,0.3)] relative overflow-hidden mx-auto"
    >
      {/* Decorative glow */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-[radial-gradient(circle,rgba(168,85,247,0.3),transparent)] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[radial-gradient(circle,rgba(236,72,153,0.25),transparent)] rounded-full pointer-events-none" />

      {/* Letter content */}
      <p className="font-handwriting text-2xl md:text-3xl text-purple-300 mb-4">
        Dear Meku,
      </p>

      <p className="font-sans text-base md:text-lg text-purple-100 leading-relaxed mb-5">
        I'm not great with words (you know this 😅) but I really needed you to know how much you mean to me on your special day.
      </p>

      <p className="font-sans text-base md:text-lg text-purple-100 leading-relaxed mb-5">
        Having you as my best friend is one of the best things that's ever happened to me. You make ordinary days feel special, and your laugh is literally contagious. I don't know what I'd do without your chaos in my life honestly 💜
      </p>

      <p className="font-sans text-base md:text-lg text-purple-100 leading-relaxed mb-5">
        I hope today feels as magical as you are. You deserve all the good things — all the cake, all the smiles, all the happiness this world has to offer. You deserve a day that matches your energy. 🎉
      </p>

      <p className="font-sans text-base md:text-lg text-purple-100 leading-relaxed mb-8">
        Thank you for being YOU. Never change. 🌟
      </p>

      {/* Signature */}
      <div className="border-t border-purple-300/20 pt-6 text-right">
        <p className="font-handwriting text-3xl md:text-4xl text-pink-300 font-bold">
          Happy Birthday, Meku 🎂
        </p>
        <p className="font-handwriting text-2xl md:text-3xl text-purple-300 mt-1">
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
      className="mt-12 text-center font-handwriting text-xl text-gray-400"
    >
      made with 💜 just for you, Meku
    </motion.p>
  </section>
);

export default LetterSection;
