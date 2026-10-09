import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { MapPin, Mail, ExternalLink, ShieldCheck, Award } from 'lucide-react';

export default function PageGeneral({ onSwitchTab, onOpenContact }) {
  const { personal, socials } = portfolioData;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header bar: CASE FILE No. 7A-1337-HW */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1f1c19] pb-3 text-xs tracking-wider">
        <div className="font-typewriter text-sm sm:text-base font-bold text-[#1f1c19]">
          CASE FILE: <span className="underline decoration-1 underline-offset-4">DOSSIER HW-1337-MA</span>
        </div>
        <div className="font-typewriter text-xs text-[#5a4430] mt-1 sm:mt-0">
          ARCHIVE REF: <span className="font-bold text-[#1f1c19]">No. 7A-1337-88</span>
        </div>
      </div>

      {/* Main Subject Header */}
      <div>
        <h1 className="font-typewriter text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a140e] tracking-tight uppercase">
          HAMZA WAHMANE
        </h1>
        <p className="font-typewriter text-xs sm:text-sm text-[#72191a] font-bold tracking-widest uppercase mt-0.5">
          aka "The Cyclist Coder" • 1337 Systems Specialist
        </p>
      </div>

      {/* Grid: Mugshot ID Photo on left, Classified attributes on right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: ID Photo with Height Marks & Paperclip */}
        <div className="md:col-span-5 relative flex flex-col items-center">
          
          {/* Metal Paperclip at top-left */}
          <div className="paperclip -top-4 left-6 z-20 pointer-events-none" />

          {/* Mugshot frame */}
          <div className="relative p-2 bg-[#fffdf8] border-2 border-[#2b1c11] shadow-lg max-w-[260px] w-full">
            {/* Height chart lines background */}
            <div className="relative overflow-hidden border border-[#5a4430]/40 bg-[#f7eed6]">
              {/* Subtle height scale lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-2 pl-1.5 opacity-20 pointer-events-none font-typewriter text-[9px] select-none text-[#1f1c19]">
                <div>190 ─────</div>
                <div>180 ─────</div>
                <div>170 ─────</div>
                <div>160 ─────</div>
                <div>150 ─────</div>
                <div>140 ─────</div>
              </div>

              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-64 object-cover filter contrast-110 grayscale-[30%] sepia-[15%]"
              />
            </div>

            {/* Red Rubber Stamp: CONFIDENTIAL */}
            <div className="absolute -bottom-4 -right-2 z-10 stamp-confidential text-sm sm:text-base pointer-events-none">
              CONFIDENTIAL
            </div>
          </div>

          <div className="font-handwriting text-sm text-[#5a4430] mt-4 font-bold">
            Subject ID: H. Wahmane • Marrakech, MA
          </div>
        </div>

        {/* Right Column: Typed Form Fields (like image 1) */}
        <div className="md:col-span-7 space-y-4 font-typewriter text-xs sm:text-sm text-[#2b1c11]">
          
          <div className="border-b border-[#2b1c11]/40 pb-1.5">
            <span className="text-[11px] text-[#72191a] uppercase font-bold block">PRIMARY ROLE</span>
            <span className="font-bold text-base text-[#1a140e]">{personal.title}</span>
          </div>

          <div className="border-b border-[#2b1c11]/40 pb-1.5">
            <span className="text-[11px] text-[#72191a] uppercase font-bold block">FACTION / ACADEMY</span>
            <span className="font-bold text-[#1a140e]">1337 Coding School (UM6P / 42 Network)</span>
          </div>

          <div className="border-b border-[#2b1c11]/40 pb-1.5">
            <span className="text-[11px] text-[#72191a] uppercase font-bold block">OPERATIONAL BASE</span>
            <span className="font-bold text-[#1a140e]">Marrakech & Casablanca, Kingdom of Morocco</span>
          </div>

          <div className="border-b border-[#2b1c11]/40 pb-1.5">
            <span className="text-[11px] text-[#72191a] uppercase font-bold block">ENDURANCE RATING</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[#8a1718] font-black tracking-widest">● ● ● ● ● ●</span>
              <span className="text-xs text-[#5a4430]">(5,000+ km in saddle)</span>
            </div>
          </div>

          <div className="border-b border-[#2b1c11]/40 pb-1.5">
            <span className="text-[11px] text-[#72191a] uppercase font-bold block">STATUS</span>
            <span className="inline-block px-2 py-0.5 bg-[#8a1718]/10 text-[#8a1718] border border-[#8a1718]/30 font-bold rounded text-xs mt-0.5">
              ACTIVE • READY FOR ENGAGEMENT
            </span>
          </div>

        </div>

      </div>

      {/* Case Details / Investigation Report */}
      <div className="pt-4 border-t-2 border-[#1f1c19] space-y-3 font-typewriter">
        <div className="flex items-center justify-between">
          <span className="font-bold text-xs uppercase tracking-wider text-[#72191a]">
            DOSSIER SUMMARY & BACKGROUND
          </span>
          <span className="text-[10px] text-[#5a4430]">SECURITY CLEARANCE: LEVEL 4</span>
        </div>

        <p className="text-xs sm:text-sm text-[#2b1c11] leading-relaxed">
          The subject operates at the unique nexus of <strong>systems-level software engineering</strong> and <strong>high-endurance solo bikepacking</strong>. Educated in the strict, teacher-free, peer-reviewed ecosystem of <strong>1337 (42 Network)</strong>, he has proven mastery in memory allocation, concurrency, Unix system calls, and full-stack web applications.
        </p>

        <p className="text-xs sm:text-sm text-[#2b1c11] leading-relaxed">
          When not in front of a terminal, the subject embarks on multi-hundred kilometer cycling expeditions across Morocco—including high-altitude crossings of the <strong>High Atlas (Tizi n'Tichka, 2,260m)</strong>, long Atlantic coastal brevets, and desert gravel routes.
        </p>

        {/* Humorous Redacted Classified Lines */}
        <div className="text-xs text-[#5a4430] space-y-1 pt-2">
          <div>KNOWN HABITS: <span className="redacted">DRINKS 4 CUPS OF MOROCCAN MINT TEA DAILY</span> REPAIRS BIKES WITH HEX KEYS.</div>
          <div>SECRET WEAPON: <span className="redacted">SOLVES MEMORY LEAKS AND VALGRIND ERRORS WITHOUT SLEEP</span> RELENTLESS CADENCE.</div>
        </div>
      </div>

      {/* Bottom Footer: Official Seal & Next Tab Navigation Buttons */}
      <div className="pt-6 border-t-2 border-[#1f1c19] flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Circular Seal Stamp */}
        <div className="flex items-center gap-3">
          <div className="stamp-seal shrink-0">
            <span className="text-[8px] font-bold tracking-tighter">OFFICIAL</span>
            <span className="text-[11px] font-black">1337</span>
            <span className="text-[7px] tracking-tighter">ARCHIVE</span>
          </div>
          <div className="font-typewriter text-[11px] text-[#5a4430]">
            <div>FILED: 2026 / 10</div>
            <div>VERIFIED OPERATIVE: H. WAHMANE</div>
          </div>
        </div>

        {/* Buttons to navigate to Page 2 or Page 3 */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onSwitchTab('projects')}
            className="px-4 py-2 bg-[#2b1c11] text-[#faf2db] hover:bg-[#8a1718] font-typewriter text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
          >
            Inspect Projects (Page 2) ➔
          </button>
          <button
            onClick={() => onSwitchTab('cycling')}
            className="px-4 py-2 bg-[#eadbb5] hover:bg-[#dec796] text-[#2b1c11] border border-[#2b1c11] font-typewriter text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            Cycling Expeditions (Page 3) ➔
          </button>
          <button
            onClick={onOpenContact}
            className="px-3 py-2 bg-[#8a1718] text-[#fffdf8] font-typewriter text-xs font-bold uppercase tracking-wider rounded hover:bg-[#a3221a] transition-colors"
          >
            Send Dispatch ✉
          </button>
        </div>

      </div>

    </div>
  );
}
