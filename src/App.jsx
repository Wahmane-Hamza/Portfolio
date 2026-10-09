import React, { useState, useEffect } from 'react';
import VintageNavbar from './components/VintageNavbar';
import VintageHero from './components/VintageHero';
import CyclingExpeditions from './components/CyclingExpeditions';
import EngineeringParchment from './components/EngineeringParchment';
import VintageAbout from './components/VintageAbout';
import VintageContact from './components/VintageContact';
import VintageFooter from './components/VintageFooter';
import { ArrowUp, Compass } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5eed8] text-[#2b1c11] flex flex-col font-serif selection:bg-[#c59b27]/30 selection:text-[#1e140b]">
      {/* Antique Navigation */}
      <VintageNavbar />

      {/* Main Sections */}
      <main className="flex-1">
        <VintageHero />
        <CyclingExpeditions />
        <EngineeringParchment />
        <VintageAbout />
        <VintageContact />
      </main>

      {/* Antique Footer */}
      <VintageFooter />

      {/* Floating Scroll-to-Top Button Styled like an Antique Compass */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#8b261e] text-[#fffdfa] border-2 border-[#c59b27] shadow-xl hover:bg-[#a02f26] hover:scale-105 transition-all group"
          title="Return to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
