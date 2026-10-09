import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, Feather, Award, Heart } from 'lucide-react';

export default function VintageAbout() {
  const { personal } = portfolioData;

  const tenets = [
    {
      title: "Self-Reliance & Autonomy",
      desc: "Whether solo-climbing a 2,000m pass in the High Atlas or debugging low-level memory allocation at 1337, you learn to trust your instincts, prepare meticulously, and solve problems independently."
    },
    {
      title: "Endurance & Discipline",
      desc: "Cycling a hundred kilometers against Atlantic headwinds mirrors tracing complex concurrency race conditions: both demand relentless patience, rhythm, and unwavering focus."
    },
    {
      title: "Curiosity & The Unknown",
      desc: "Code and roads are both invitations to explore. Every new architecture is a new mountain pass; every new journey broadens the soul."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-map-pattern border-t-2 border-[#b8860b]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 space-y-2">
          <span className="font-cinzel text-xs uppercase tracking-[0.2em] font-bold text-[#8b261e]">
            The Journey & Philosophy
          </span>
          <h2 className="font-script text-4xl sm:text-6xl text-[#2b1c11]">
            Two Wheels, One Compass
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mt-2" />
        </div>

        {/* Parchment Letter */}
        <div className="parchment-sheet rounded-3xl p-8 sm:p-12 border-2 border-[#c59b27]/50 shadow-xl relative">
          
          {/* Top Decorative Wax Emblem */}
          <div className="flex justify-center -mt-16 mb-6">
            <div className="wax-seal w-16 h-16 rounded-full flex items-center justify-center text-[#fffdfa] shadow-xl">
              <Compass className="w-8 h-8 text-[#fffdfa]" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="font-serif text-lg sm:text-xl text-[#2b1c11] leading-relaxed italic">
              "I believe that the best engineers are travelers at heart. Cycling across Morocco has taught me more about software engineering than any textbook: resilience when the weather turns, calm when navigating uncharted roads, and the quiet satisfaction of reaching a summit through sheer human effort."
            </p>

            <div className="font-script text-3xl text-[#8b261e]">
              Hamza Wahmane
            </div>
          </div>

          {/* 3 Tenets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#b8860b]/30">
            {tenets.map((item, idx) => (
              <div key={idx} className="bg-[#fbf5e6]/70 p-5 rounded-xl border border-[#b8860b]/20">
                <h4 className="font-cinzel font-bold text-sm text-[#8b261e] mb-2 uppercase">
                  {item.title}
                </h4>
                <p className="font-serif text-xs text-[#382414] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
