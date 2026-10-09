import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Terminal, Cpu, Globe, ExternalLink, Code2, ShieldCheck } from 'lucide-react';

export default function EngineeringParchment() {
  const { engineering, socials } = portfolioData;

  return (
    <section id="engineering" className="py-20 relative bg-[#f7eed6]/70 border-t-2 border-[#b8860b]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8b261e] text-sm">
            <span>~ ⚜ ~</span>
            <span className="font-cinzel text-xs uppercase tracking-[0.2em] font-bold text-[#5e432b]">
              The Code Workshop
            </span>
            <span>~ ⚜ ~</span>
          </div>
          <h2 className="font-script text-4xl sm:text-6xl text-[#2b1c11]">
            Engineering & Software Craft
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#5e432b] max-w-2xl mx-auto">
            Rigorous problem-solving forged at 1337 Coding School (42 Network) and modern web architectures.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mt-2" />
        </div>

        {/* 2 Core Engineering Pillars (Scrolls) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {engineering.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="parchment-sheet rounded-2xl p-7 border border-[#c59b27]/40 shadow-lg relative group hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#8b261e]/10 border border-[#8b261e]/30 flex items-center justify-center text-[#8b261e]">
                  {idx === 0 ? <Cpu className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-lg text-[#2b1c11]">
                    {pillar.title}
                  </h3>
                  <span className="font-typewriter text-[11px] text-[#7c5737]">
                    {idx === 0 ? "1337 (42 Network) Pedigree" : "Distributed & Interactive Web"}
                  </span>
                </div>
              </div>

              <p className="font-serif text-sm text-[#3d2817] leading-relaxed mb-6">
                {pillar.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#b8860b]/20">
                {pillar.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-typewriter text-[11px] px-2.5 py-1 rounded bg-[#f6ebd0] text-[#382414] border border-[#b8860b]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* The GitHub Repository Ledger — as requested: clean single hub linking to GitHub! */}
        <div className="parchment-sheet rounded-2xl p-8 sm:p-10 border-2 border-[#b8860b]/60 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          {/* Decorative antique stamps in corner */}
          <div className="absolute top-4 right-4 opacity-15 pointer-events-none">
            <Terminal className="w-28 h-28 text-[#8b261e]" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#2b1c11] border-2 border-[#c59b27] flex items-center justify-center text-[#fdf8ee] shadow-lg shrink-0 mx-auto md:mx-0">
                <Github className="w-8 h-8 text-[#fdf8ee]" />
              </div>
              <div>
                <span className="font-cinzel text-xs tracking-widest text-[#8b261e] uppercase font-bold">
                  Open Source Code Archives
                </span>
                <h3 className="font-script text-3xl sm:text-4xl text-[#2b1c11]">
                  GitHub Repository Ledger
                </h3>
                <p className="font-serif italic text-sm text-[#5e432b] mt-1">
                  Browse 25+ repositories across C/C++ Unix systems, concurrent multithreading, and full-stack web applications.
                </p>
              </div>
            </div>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-cinzel text-xs font-bold tracking-widest text-[#fffcf4] bg-gradient-to-r from-[#2b1c11] to-[#4a3320] hover:from-[#8b261e] hover:to-[#701a14] transition-all shadow-lg shadow-[#2b1c11]/25 uppercase shrink-0"
            >
              <span>Explore GitHub (@Wahmane-Hamza)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
