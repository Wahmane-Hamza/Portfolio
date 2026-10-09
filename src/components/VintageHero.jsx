import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, MapPin, Instagram, Github, ArrowDown, Sparkles } from 'lucide-react';

export default function VintageHero() {
  const { personal, socials, stats } = portfolioData;

  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      {/* Background radial antique glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#fffaf0] via-[#f7ecd3] to-transparent rounded-full blur-2xl pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Ribbon Flourish */}
        <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-[#fbf5e6] border border-[#c59b27]/60 shadow-sm mb-6">
          <span className="text-[#8b261e] text-xs">❦</span>
          <span className="font-cinzel text-xs tracking-widest text-[#5e432b] uppercase font-semibold">
            Field Notes • Volume I • Kingdom of Morocco
          </span>
          <span className="text-[#8b261e] text-xs">❦</span>
        </div>

        {/* Big Calligraphic Header inspired by the reference picture */}
        <div className="space-y-2 mb-6">
          <h2 className="font-script text-5xl sm:text-7xl lg:text-8xl text-[#2b1c11] tracking-wide drop-shadow-sm">
            Hamza Wahmane
          </h2>
          <p className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-[#8b261e] uppercase font-bold">
            Cyclist & Bikepacker • Software Engineer (1337 / 42)
          </p>
        </div>

        {/* Vintage Medallion Avatar with Wax Seal */}
        <div className="relative inline-block mb-8 group">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-b from-[#e3caa2] via-[#b8860b] to-[#7c5737] shadow-xl shadow-[#4a3320]/25 mx-auto">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="w-full h-full rounded-full object-cover filter contrast-[1.05] sepia-[0.15] border-2 border-[#fffdfa]"
            />
          </div>

          {/* Wax Seal Stamp on Medallion */}
          <div className="absolute -bottom-2 -right-2 wax-seal w-12 h-12 rounded-full flex items-center justify-center text-[#fffdfa] shadow-lg">
            <span className="font-cinzel text-[11px] font-black tracking-tighter">1337</span>
          </div>

          {/* Location Tag */}
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fffcf4] border border-[#b8860b]/40 text-xs font-serif text-[#5e432b] shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#8b261e]" />
            <span>Marrakech & Casablanca, Morocco</span>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="max-w-2xl mx-auto font-serif text-lg sm:text-xl text-[#3d2817] leading-relaxed italic mb-10">
          "Between the grueling climbs of High Atlas switchbacks and low-level computer architecture. 
          Endurance in the saddle; precision in code."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#expeditions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-cinzel text-xs font-bold tracking-widest text-[#fffcf4] bg-gradient-to-r from-[#8b261e] to-[#701a14] hover:from-[#a02f26] hover:to-[#851e17] transition-all shadow-md shadow-[#8b261e]/30 uppercase"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Cycling Expeditions</span>
          </a>

          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-cinzel text-xs font-bold tracking-widest text-[#4a3320] bg-[#fffcf4] hover:bg-[#f6ebd0] border-2 border-[#b8860b]/60 transition-all shadow-sm uppercase"
          >
            <Instagram className="w-4 h-4 text-[#8b261e]" />
            <span>Follow on Instagram (@wahmane.hamza)</span>
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-cinzel text-xs font-bold tracking-widest text-[#4a3320] hover:text-[#8b261e] bg-transparent hover:bg-[#b8860b]/15 border border-[#b8860b]/40 transition-all uppercase"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Ledger</span>
          </a>
        </div>

        {/* Stats Styled as Antique Ledger / Postcards (Similar to reference image cards!) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="parchment-sheet p-5 rounded-xl border border-[#c59b27]/40 hover:-translate-y-1 transition-transform group"
            >
              <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#8b261e] tracking-tight">
                {stat.value}
              </div>
              <div className="font-serif font-bold text-sm text-[#2b1c11] mt-1">
                {stat.label}
              </div>
              <div className="font-typewriter text-[11px] text-[#7c5737] mt-1 border-t border-[#b8860b]/20 pt-1.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
