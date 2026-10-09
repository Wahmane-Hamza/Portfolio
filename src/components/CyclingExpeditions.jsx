import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, Mountain, Wind, Sun, Clock, Instagram, ExternalLink, Check } from 'lucide-react';

export default function CyclingExpeditions() {
  const { adventures, socials } = portfolioData;

  const icons = [Mountain, Wind, Sun, Clock];

  return (
    <section id="expeditions" className="py-20 relative bg-map-pattern border-t-2 border-[#b8860b]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Calligraphy Heading inspired by the reference picture */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8b261e] text-sm">
            <span>~ ⚜ ~</span>
            <span className="font-cinzel text-xs uppercase tracking-[0.2em] font-bold text-[#5e432b]">
              Field Journal & Expeditions
            </span>
            <span>~ ⚜ ~</span>
          </div>
          <h2 className="font-script text-4xl sm:text-6xl text-[#2b1c11]">
            Les Expéditions à Vélo
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#5e432b] max-w-2xl mx-auto">
            Journeys across high mountain passes, Atlantic coastlines, and desert frontiers on two wheels.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mt-2" />
        </div>

        {/* 4 Parchment Cards — directly styled like the 4 cards in the user's reference picture! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adventures.map((trip, idx) => {
            const Icon = icons[idx] || Compass;
            return (
              <div
                key={trip.id}
                className="parchment-sheet rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group shadow-lg border border-[#c59b27]/40 relative"
              >
                {/* Top Antique Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#8b261e]/10 border border-[#8b261e]/30 flex items-center justify-center text-[#8b261e] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-typewriter text-[10px] text-[#7c5737] px-2 py-0.5 rounded bg-[#f6ebd0] border border-[#b8860b]/20">
                      {trip.season}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel font-bold text-base text-[#2b1c11] group-hover:text-[#8b261e] transition-colors leading-snug mb-1">
                    {trip.title}
                  </h3>

                  {/* Route & Distance */}
                  <div className="font-typewriter text-[11px] text-[#8b261e] font-semibold mb-3">
                    {trip.distance}
                  </div>

                  <div className="text-xs font-serif italic text-[#7c5737] mb-3 pb-2 border-b border-[#b8860b]/20">
                    📍 {trip.route}
                  </div>

                  {/* Field story */}
                  <p className="font-serif text-xs text-[#382414] leading-relaxed mb-4">
                    {trip.story}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1 mb-5">
                    {trip.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-[#4a3320] font-serif">
                        <span className="text-[#8b261e] text-xs">✦</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Gear & Instagram Action */}
                <div className="pt-3 border-t border-[#b8860b]/30">
                  <div className="text-[10px] font-typewriter text-[#7c5737] mb-2 truncate">
                    🚲 {trip.gear}
                  </div>
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-cinzel font-semibold bg-[#8b261e]/10 hover:bg-[#8b261e] text-[#8b261e] hover:text-[#fffdfa] border border-[#8b261e]/30 transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>View on Instagram</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wide Banner linking to Instagram */}
        <div className="mt-12 parchment-sheet rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto border-2 border-[#b8860b]/50 shadow-md">
          <div className="w-12 h-12 rounded-full bg-[#8b261e] border-2 border-[#c59b27] flex items-center justify-center text-[#fffdfa] mx-auto mb-3 shadow-md">
            <Instagram className="w-6 h-6" />
          </div>
          <h3 className="font-script text-3xl sm:text-4xl text-[#2b1c11] mb-1">
            Follow the Journey on Instagram
          </h3>
          <p className="font-serif italic text-sm text-[#5e432b] max-w-lg mx-auto mb-4">
            Photos, route snapshots, gravel passes, and daily stories from the Moroccan roads.
          </p>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-widest text-[#fffcf4] bg-[#8b261e] hover:bg-[#a02f26] shadow-md transition-all uppercase"
          >
            <span>Visit @wahmane.hamza</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
