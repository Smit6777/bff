import React from 'react';
import Confetti from './components/Confetti';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import ReasonsSection from './components/ReasonsSection';
import LetterSection from './components/LetterSection';

function App() {
  return (
    <div className="relative" style={{ background: 'linear-gradient(180deg, #1a0533 0%, #3b0764 25%, #1e1b4b 50%, #0f172a 75%, #1a0533 100%)' }}>
      {/* Fixed confetti background */}
      <Confetti />

      {/* 4 full-screen sections */}
      <HeroSection />
      <GallerySection />
      <ReasonsSection />
      <LetterSection />
    </div>
  );
}

export default App;
