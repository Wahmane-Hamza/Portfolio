import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Instagram, Compass, ExternalLink, Mountain, Wind, Sun, MapPin } from 'lucide-react';

export default function PageCycling({ onSwitchTab, onOpenContact }) {
  const { socials, adventures } = portfolioData;

  const polaroids = [
    {
      img: "./trips/toubkal_summit.jpg",
      caption: "Climb Toubkal Summit (4,167 m) • Peak of North Africa",
      rotate: "-rotate-2",
      clip: "top-left"
    },
    {
      img: "./trips/cycling_167km.jpg",
      caption: "Cycled 167 km in two days • High Atlas road",
      rotate: "rotate-2",
      clip: "top-right"
    },
    {
      img: "./trips/oukaimden_mount.jpg",
      caption: "Climb Oukaïmeden Mount (3,200 m) • Above the clouds",
      rotate: "-rotate-1",
      clip: "top-left"
    },
    {
      img: "./trips/lalla_takerkoust.jpg",
      caption: "Trip in Lalla Takerkoust, Barrage Marrakech",
      rotate: "rotate-3",
      clip: "top-right"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-typewriter">
      
      {/* Header Bar matching Image 2 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1f1c19] pb-3 text-xs tracking-wider">
        <div className="text-sm sm:text-base font-bold text-[#1f1c19]">
          CASE FILE: <span className="underline decoration-1 underline-offset-4">014-EXP — FIELD DISPATCH</span>
        </div>
        <div className="text-xs text-[#5a4430] mt-1 sm:mt-0">
          ARCHIVE NO. <span className="font-bold text-[#1f1c19]">MA-87-BIKE</span>
        </div>
      </div>

      {/* Title & Stamp */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a140e] uppercase">
            SUBJECT: CYCLIST MAN & MOROCCO EXPEDITIONS
          </h2>
          <p className="text-xs text-[#72191a] font-bold tracking-widest uppercase mt-0.5">
            Solo Bikepacking • Mountain Passes • Atlantic Coastlines
          </p>
        </div>

        <div className="stamp-confidential text-xs sm:text-sm self-start sm:self-auto">
          EVIDENCE ARCHIVED
        </div>
      </div>

      {/* Polaroids Gallery with Handwritten Notes (Modeled after Image 2 Polaroid) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-xs uppercase tracking-wider text-[#72191a]">
            RECOVERED PHOTOGRAPHIC EVIDENCE (FROM INSTAGRAM @WAHMANE.HAMZA)
          </span>
          <span className="text-[10px] text-[#5a4430]">4 EXHIBITS ATTACHED</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {polaroids.map((p, idx) => (
            <div
              key={idx}
              className={`polaroid rounded-sm ${p.rotate} relative group cursor-pointer`}
              onClick={() => window.open(socials.instagram, '_blank')}
            >
              {/* Binder Clip graphic */}
              <div className={`absolute -top-3 ${p.clip === 'top-left' ? 'left-4' : 'right-4'} z-10 w-7 h-4 bg-[#1f1c19] rounded-t-sm border border-[#fffdf8] shadow-md`} />

              {/* Photo */}
              <div className="overflow-hidden bg-[#2b1c11] aspect-[4/5] rounded-[1px]">
                <img
                  src={p.img}
                  alt={p.caption}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Handwritten Caption like Image 2 */}
              <div className="font-handwriting text-base sm:text-lg text-[#2b1c11] font-bold mt-2.5 px-1 leading-snug">
                "{p.caption}"
              </div>

              <div className="text-[10px] font-typewriter text-[#72191a] text-right mt-1 opacity-80">
                [CLICK TO OPEN INSTAGRAM]
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Field Statement / Witness Statement (Typewriter style from Image 2) */}
      <div className="p-5 sm:p-6 bg-[#fffdf8] border-2 border-[#2b1c11]/40 rounded shadow-sm space-y-3 text-xs sm:text-sm text-[#2b1c11] leading-relaxed">
        <div className="font-bold text-xs uppercase text-[#72191a] tracking-wider border-b border-[#2b1c11]/20 pb-1">
          EXPEDITION LOGBOOK & STATEMENTS:
        </div>

        <p>
          "Subject operates independently on mountain ascents and long-distance cycling routes across Morocco. Documented expeditions include reaching the <strong>Mount Toubkal Summit (4,167 meters elevation — highest peak in North Africa)</strong>, crushing <strong>167 km cycling tours in two days</strong> across the Atlas mountain roads, climbing <strong>Mount Oukaïmeden (3,200 meters elevation)</strong> to rest above the sea of clouds, and wilderness trekking around <strong>Lalla Takerkoust & Barrage Marrakech</strong>."
        </p>

        <p>
          "Setup consists of self-supported bikepacking gear, alpine trekking equipment, cold-weather layers, and continuous physical endurance. Documented saddle and trail experience reflects pure discipline and perseverance."
        </p>
      </div>

      {/* 4 Route Briefs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {adventures.map((adv) => (
          <div key={adv.id} className="p-4 bg-[#fbf5e6] border border-[#2b1c11]/30 rounded space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#72191a] font-bold uppercase">{adv.type} • {adv.season}</span>
              <span className="text-[10px] font-bold text-[#8a1718] bg-[#eadbb5]/80 px-2 py-0.5 rounded border border-[#2b1c11]/20">
                {adv.distance}
              </span>
            </div>
            <h4 className="font-bold text-sm text-[#1a140e]">{adv.title}</h4>
            <div className="text-xs text-[#5a4430] italic">📍 {adv.route}</div>
            <p className="text-xs text-[#2b1c11] leading-relaxed">{adv.story}</p>
            {adv.highlights && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {adv.highlights.map((h, i) => (
                  <span key={i} className="text-[9px] px-1.5 py-0.5 bg-[#fffdf8] border border-[#2b1c11]/20 rounded text-[#2b1c11]/80">
                    • {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Evidence Tag & Instagram Dispatch Hub */}
      <div className="p-6 bg-[#2b1c11] text-[#faf2db] rounded-lg border-2 border-[#8a1718] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Evidence Tag graphic (like Image 2 bottom tag) */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#eadbb5] text-[#2b1c11] border-2 border-[#fffdf8] rounded font-typewriter text-xs shadow shrink-0">
            <div className="font-bold text-[#72191a]">Evidence Tag: 014-EXP</div>
            <div>Filed By: H. Wahmane</div>
            <div>Platform: Instagram</div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold uppercase text-[#fffdf8]">
              VIEW FULL EXPEDITIONS ON INSTAGRAM
            </h3>
            <p className="text-xs text-[#eadbb5] mt-1">
              Photos, GPS routes, reels, and stories straight from the Moroccan mountains and roads.
            </p>
          </div>
        </div>

        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 bg-[#b82728] hover:bg-[#8a1718] text-[#fffdf8] font-bold text-xs uppercase tracking-widest rounded transition-all shadow inline-flex items-center gap-2 shrink-0"
        >
          <Instagram className="w-4 h-4" />
          <span>Open Instagram (@wahmane.hamza)</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>

      {/* Bottom Footer Navigation */}
      <div className="pt-6 border-t-2 border-[#1f1c19] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onSwitchTab('projects')}
          className="text-xs font-bold text-[#5a4430] hover:text-[#1a140e] uppercase tracking-wider"
        >
          ⬅ Back to Projects (Page 2)
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSwitchTab('general')}
            className="px-4 py-2 bg-[#eadbb5] hover:bg-[#dec796] text-[#2b1c11] border border-[#2b1c11] text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            Dossier (Page 1)
          </button>
          <button
            onClick={onOpenContact}
            className="px-4 py-2 bg-[#8a1718] text-[#fffdf8] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#a3221a] transition-colors"
          >
            Send Dispatch ✉
          </button>
        </div>
      </div>

    </div>
  );
}
