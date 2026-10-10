import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Instagram, Compass, ExternalLink, MapPin, ZoomIn, X } from 'lucide-react';

/* 3D Red Pushpin Component */
function RedPushPin({ className = "" }) {
  return (
    <div className={`relative z-20 w-5 h-5 flex items-center justify-center filter drop-shadow-md select-none pointer-events-none ${className}`}>
      {/* Drop Shadow */}
      <div className="absolute w-2.5 h-2.5 rounded-full bg-black/60 blur-[1px] translate-y-2 translate-x-1" />
      {/* 3D Red Pushpin Head */}
      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#ff5e5e] via-[#c91818] to-[#690707] border border-[#ffcccc]/40 shadow-inner relative flex items-center justify-center">
        {/* Specular highlight */}
        <div className="w-1.5 h-1.5 rounded-full bg-white/80 absolute top-0.5 left-0.5" />
        {/* Core pin point */}
        <div className="w-1 h-1 rounded-full bg-[#3d0000]" />
      </div>
    </div>
  );
}

/* Vintage Illustrated Morocco Map with Topography, Coordinates, Pins & Red Strings */
function MoroccoMap() {
  return (
    <div className="relative bg-[#eee2c3] border-4 border-[#3a2717] rounded shadow-2xl p-2 sm:p-3 overflow-hidden select-none">
      {/* Map Header Plate */}
      <div className="flex items-center justify-between border-b-2 border-[#3a2717] pb-1.5 mb-2 px-1">
        <div className="bg-[#1f1610] text-[#f7eed6] px-3 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-poster tracking-[0.25em] font-black uppercase rounded-sm border border-[#a8895b]">
          M O R O C C O
        </div>
        <div className="flex items-center gap-1 font-typewriter text-[9px] sm:text-[10px] text-[#5c3e23] font-bold">
          <Compass className="w-3.5 h-3.5 text-[#8a1718]" />
          <span>31°47'N 7°59'W • ATLAS EXPEDITION</span>
        </div>
      </div>

      {/* Vector Map Canvas */}
      <div className="relative aspect-[4/3] w-full">
        <svg viewBox="0 0 500 380" className="w-full h-full">
          <defs>
            <radialGradient id="parchmentWash" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#faf0d7" />
              <stop offset="80%" stopColor="#eee0bc" />
              <stop offset="100%" stopColor="#dfcb9d" />
            </radialGradient>
            
            <filter id="stringShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.6"/>
            </filter>

            <pattern id="oceanWaves" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 Q 10 5, 20 10 T 40 10" fill="none" stroke="#cfbc96" strokeWidth="0.8" opacity="0.6"/>
            </pattern>
          </defs>

          {/* Background Wash */}
          <rect width="500" height="380" fill="url(#parchmentWash)" />
          
          {/* Coordinate Grid Lines */}
          <g stroke="#cfbe99" strokeWidth="0.5" strokeDasharray="4 6">
            <line x1="80" y1="0" x2="80" y2="380" />
            <line x1="160" y1="0" x2="160" y2="380" />
            <line x1="240" y1="0" x2="240" y2="380" />
            <line x1="320" y1="0" x2="320" y2="380" />
            <line x1="400" y1="0" x2="400" y2="380" />
            
            <line x1="0" y1="80" x2="500" y2="80" />
            <line x1="0" y1="160" x2="500" y2="160" />
            <line x1="0" y1="240" x2="500" y2="240" />
            <line x1="0" y1="320" x2="500" y2="320" />
          </g>

          {/* Atlantic Ocean Wave Area */}
          <rect x="0" y="0" width="180" height="380" fill="url(#oceanWaves)" />
          <text x="45" y="140" fill="#9e8559" fontSize="11" fontFamily="'Special Elite', monospace" letterSpacing="4" transform="rotate(-70 45 140)">
            ATLANTIC OCEAN
          </text>

          {/* Mediterranean Text */}
          <text x="310" y="32" fill="#9e8559" fontSize="10" fontFamily="'Special Elite', monospace" letterSpacing="3">
            MEDITERRANEAN SEA
          </text>

          {/* Morocco Landmass Contour */}
          <path
            d="M 230,22 
               C 245,28 275,32 300,40 
               C 325,48 350,55 375,65
               C 385,85 395,120 380,165
               C 365,210 350,240 330,285
               C 305,330 270,355 220,365
               C 170,375 140,360 125,340
               C 135,310 140,280 150,250
               C 160,220 170,195 185,170
               C 195,145 205,120 215,90
               C 222,65 225,40 230,22 Z"
            fill="#faeed2"
            stroke="#5c3f25"
            strokeWidth="2"
          />

          {/* High Atlas Mountains Topographic Relief */}
          <g stroke="#2b1c11" strokeWidth="0.8">
            {/* Peak 1: Toubkal area (4,167m) */}
            <polygon points="215,225 232,192 248,225" fill="#694b2f" />
            <polygon points="232,192 236,192 248,225 232,225" fill="#362314" />
            <polygon points="228,202 232,192 236,202" fill="#ffffff" stroke="none" />

            {/* Peak 2: Oukaimeden (3,200m) */}
            <polygon points="240,215 252,185 264,215" fill="#7a5837" />
            <polygon points="252,185 256,185 264,215 252,215" fill="#3a2717" />
            <polygon points="249,193 252,185 255,193" fill="#ffffff" stroke="none" />

            {/* Peak 3: Central High Atlas */}
            <polygon points="260,200 274,172 288,200" fill="#694b2f" />
            <polygon points="274,172 278,172 288,200 274,200" fill="#362314" />
            <polygon points="271,180 274,172 277,180" fill="#ffffff" stroke="none" />

            {/* Peak 4: Tichka Pass Range */}
            <polygon points="278,205 292,178 306,205" fill="#7a5837" />
            <polygon points="289,187 292,178 295,187" fill="#ffffff" stroke="none" />

            {/* Peak 5: Anti-Atlas */}
            <polygon points="195,248 208,228 220,248" fill="#61442a" />
          </g>

          <text x="270" y="155" fill="#4d321b" fontSize="9" fontFamily="'Special Elite', monospace" fontStyle="italic" letterSpacing="1">
            HIGH ATLAS MOUNTAINS
          </text>

          {/* Major Coastal Cities */}
          <circle cx="230" cy="30" r="2.5" fill="#362314" />
          <text x="236" y="33" fill="#362314" fontSize="8" fontFamily="'Special Elite', monospace">Tangier</text>

          <circle cx="205" cy="120" r="2.5" fill="#362314" />
          <text x="145" y="123" fill="#362314" fontSize="8" fontFamily="'Special Elite', monospace">Casablanca</text>

          <circle cx="178" cy="210" r="2.5" fill="#362314" />
          <text x="130" y="213" fill="#362314" fontSize="8" fontFamily="'Special Elite', monospace">Essaouira</text>

          {/* Base Hub: Marrakech */}
          <circle cx="218" cy="180" r="4.5" fill="#8a1718" />
          <circle cx="218" cy="180" r="2" fill="#ffffff" />
          <text x="162" y="176" fill="#8a1718" fontSize="10" fontWeight="bold" fontFamily="'Special Elite', monospace">
            ★ MARRAKECH (HQ)
          </text>

          {/* RED INVESTIGATION THREAD (Connecting Pins on Map) */}
          <path
            d="M 218,180 L 198,212 L 232,228 L 254,198 L 285,188 L 218,180"
            fill="none"
            stroke="#b82728"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#stringShadow)"
          />
          <path
            d="M 218,180 L 198,212 L 232,228 L 254,198 L 285,188 L 218,180"
            fill="none"
            stroke="#ff7575"
            strokeWidth="0.8"
            strokeDasharray="3 2"
          />

          {/* PINS & LABELS */}
          {/* Toubkal Summit Pin */}
          <g transform="translate(232, 228)">
            <circle cx="0" cy="0" r="6" fill="#8a1718" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="-1.5" cy="-1.5" r="2" fill="#ffffff" />
            <rect x="8" y="-9" width="115" height="15" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="12" y="2" fill="#8a1718" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">
              TOUBKAL SUMMIT (4,167m)
            </text>
          </g>

          {/* Oukaimeden Pin */}
          <g transform="translate(254, 198)">
            <circle cx="0" cy="0" r="5.5" fill="#8a1718" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
            <rect x="8" y="-8" width="108" height="15" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="12" y="3" fill="#2b1c11" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">
              OUKAÏMEDEN (3,200m)
            </text>
          </g>

          {/* Lalla Takerkoust Pin */}
          <g transform="translate(198, 212)">
            <circle cx="0" cy="0" r="5" fill="#8a1718" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="-1.5" cy="-1.5" r="1.5" fill="#ffffff" />
            <rect x="-115" y="-8" width="108" height="15" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="-111" y="3" fill="#2b1c11" fontSize="7.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
              LALLA TAKERKOUST
            </text>
          </g>

          {/* 167km Route Pin */}
          <g transform="translate(285, 188)">
            <circle cx="0" cy="0" r="4.5" fill="#8a1718" stroke="#ffffff" strokeWidth="1" />
            <rect x="7" y="-8" width="85" height="15" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="10" y="3" fill="#72191a" fontSize="7.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
              167 KM / 2 DAYS
            </text>
          </g>

          {/* Compass Rose */}
          <g transform="translate(445, 60)">
            <circle cx="0" cy="0" r="22" fill="#faf2dc" stroke="#5a3d24" strokeWidth="1" opacity="0.8" />
            <polygon points="0,-18 4,-4 18,0 4,4 0,18 -4,4 -18,0 -4,-4" fill="#69482b" />
            <polygon points="0,-18 0,0 -4,-4" fill="#a87f54" />
            <polygon points="0,18 0,0 4,4" fill="#a87f54" />
            <polygon points="18,0 0,0 4,-4" fill="#a87f54" />
            <polygon points="-18,0 0,0 -4,4" fill="#a87f54" />
            <text x="-3.5" y="-21" fill="#362212" fontSize="9" fontWeight="bold" fontFamily="'Special Elite', monospace">N</text>
            <text x="-3.5" y="28" fill="#362212" fontSize="8" fontFamily="'Special Elite', monospace">S</text>
            <text x="21" y="3" fill="#362212" fontSize="8" fontFamily="'Special Elite', monospace">E</text>
            <text x="-28" y="3" fill="#362212" fontSize="8" fontFamily="'Special Elite', monospace">W</text>
          </g>
        </svg>
      </div>

      {/* Map Footer Bar */}
      <div className="flex items-center justify-between text-[9px] font-typewriter text-[#5c3e23] pt-1.5 px-1 border-t border-[#3a2717]/40">
        <div>EXPEDITION EVIDENCE LOG</div>
        <div className="font-bold text-[#8a1718]">5,000+ KM DOCUMENTED IN SADDLE</div>
      </div>
    </div>
  );
}

export default function PageCycling({ onSwitchTab, onOpenContact }) {
  const { socials } = portfolioData;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const polaroids = [
    {
      id: "toubkal",
      img: "./trips/toubkal_summit.jpg",
      title: "TOUBKAL SUMMIT",
      elevation: "4,167 M",
      tag: "ROOF OF NORTH AFRICA",
      caption: "Climb Toubkal Summit (4,167m)",
      rotate: "-rotate-2",
      badge: "JAN 12, 4,167M"
    },
    {
      id: "cycling",
      img: "./trips/cycling_167km.jpg",
      title: "167 KM CYCLING",
      elevation: "2 DAYS",
      tag: "HIGH ATLAS ROAD RIDE",
      caption: "Cycled 167 km in two days",
      rotate: "rotate-2",
      badge: "NON-STOP SADDLE"
    },
    {
      id: "oukaimden",
      img: "./trips/oukaimden_mount.jpg",
      title: "MOUNT OUKAÏMEDEN",
      elevation: "3,200 M",
      tag: "ABOVE SEA OF CLOUDS",
      caption: "Climb Oukaïmeden Mount (3,200m)",
      rotate: "-rotate-1",
      badge: "RESTING IN THE CLOUDS"
    },
    {
      id: "takerkoust",
      img: "./trips/lalla_takerkoust.jpg",
      title: "LALLA TAKERKOUST",
      elevation: "BARRAGE",
      tag: "MARRAKECH RESERVOIR & TRAILS",
      caption: "Trip in Lalla Takerkoust, Barrage",
      rotate: "rotate-3",
      badge: "DESERT COUNTRYSIDE"
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1f1c19] pb-3 text-xs tracking-wider font-typewriter">
        <div className="text-sm sm:text-base font-bold text-[#1f1c19]">
          CASE FILE: <span className="underline decoration-1 underline-offset-4">014-EXP — FIELD INVESTIGATION BOARD</span>
        </div>
        <div className="text-xs text-[#5a4430] mt-1 sm:mt-0">
          ARCHIVE REF: <span className="font-bold text-[#1f1c19]">MA-87-EVIDENCE</span>
        </div>
      </div>

      {/* THE CORKBOARD PINBOARD (Matching Alberta Murder Mystery Poster!) */}
      <div className="corkboard-surface rounded-2xl p-4 sm:p-6 lg:p-8 text-[#fffdf8] relative overflow-hidden shadow-2xl border-4 border-[#3d2716]">
        
        {/* Decorative SVG Red Investigation Strings crisscrossing the pinboard */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block">
          {/* String from map to Toubkal */}
          <path d="M 460 220 Q 560 140 680 180" fill="none" stroke="#b82728" strokeWidth="2" filter="url(#stringShadow)" className="red-string-line" />
          {/* String from map to 167km */}
          <path d="M 500 240 Q 640 280 720 380" fill="none" stroke="#b82728" strokeWidth="2" filter="url(#stringShadow)" className="red-string-line" />
          {/* String from map to newspaper */}
          <path d="M 320 180 Q 240 160 180 200" fill="none" stroke="#b82728" strokeWidth="2" filter="url(#stringShadow)" className="red-string-line" />
          {/* String from map to Lalla Takerkoust */}
          <path d="M 340 250 Q 260 360 220 460" fill="none" stroke="#b82728" strokeWidth="2" filter="url(#stringShadow)" className="red-string-line" />
        </svg>

        {/* Top Board Section: Flanked by Newspaper clipping and Toubkal Polaroid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-20">
          
          {/* LEFT COLUMN: Newspaper Clipping & Sticky Note (Like Prairie Herald in Alberta poster) */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Pinned Note */}
            <div className="relative inline-block w-full">
              <RedPushPin className="absolute -top-2 left-6" />
              <div className="bg-[#fff9e6] p-3 border border-[#b8a679] rounded shadow-md font-handwriting text-base text-[#2b1c11] rotate-[-2deg]">
                <div className="text-[11px] font-typewriter font-bold text-[#8a1718] uppercase tracking-wider">
                  FIELD NOTE
                </div>
                <div className="font-bold leading-tight mt-1">
                  "STILL NO LIMITS. ONLY NEXT SUMMITS."
                </div>
              </div>
            </div>

            {/* Newspaper Clipping: "THE ATLAS HERALD" */}
            <div className="relative">
              <RedPushPin className="absolute -top-2 left-10" />
              <div className="newsprint p-3.5 rounded shadow-lg text-[#1f1c19] font-typewriter space-y-2 rotate-[-1deg]">
                <div className="border-b border-[#1f1c19]/30 pb-1 flex justify-between items-baseline text-[9px] text-[#5c4028]">
                  <span className="font-bold tracking-widest">THE ATLAS HERALD</span>
                  <span>OCT 2026</span>
                </div>
                
                <h3 className="font-black text-sm sm:text-base leading-tight uppercase font-poster tracking-wide text-[#1a140e]">
                  CYCLIST REACHES 4,167M TOUBKAL SUMMIT
                </h3>

                <div className="p-1 bg-[#2b1c11]/10 rounded border border-[#2b1c11]/20">
                  <div className="text-[10px] text-[#5c4028] italic leading-tight">
                    "Solo cyclist covers 167 km in two days before ascending the highest peak in North Africa."
                  </div>
                </div>

                <div className="text-[9px] text-[#72191a] font-bold uppercase tracking-wider">
                  DISPATCH CONFIRMED: 5,000+ KM
                </div>
              </div>
            </div>

            {/* Yellow Sticky Note (Like "WHY HERE? WHO KNEW?" in poster) */}
            <div className="relative">
              <RedPushPin className="absolute -top-2 right-6" />
              <div className="bg-[#feee91] p-3.5 rounded shadow-md text-[#2b1c11] font-handwriting text-lg font-bold rotate-[3deg] border border-[#d9c75f]">
                <div className="text-[10px] font-typewriter font-bold text-[#72191a] uppercase">
                  INVESTIGATION NOTE:
                </div>
                <div className="mt-1 leading-snug">
                  WHY THE PEAKS?<br />
                  WHAT DRIVES HIM?<br />
                  <span className="underline decoration-[#72191a] text-[#72191a]">PURE ENDURANCE.</span>
                </div>
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: THE MOROCCO MAP */}
          <div className="lg:col-span-6 relative">
            {/* Pushpins on Map Corners */}
            <RedPushPin className="absolute -top-2 left-4 z-30" />
            <RedPushPin className="absolute -top-2 right-4 z-30" />
            <MoroccoMap />
          </div>

          {/* RIGHT COLUMN: Polaroid 1 (Toubkal) & Sticky Tag */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Polaroid 1: Toubkal Summit */}
            <div className="relative group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[0])}>
              <RedPushPin className="absolute -top-2 right-8 z-30" />
              <div className="polaroid rounded-sm rotate-[2deg] group-hover:rotate-0 transition-transform shadow-xl">
                <div className="relative aspect-[4/5] bg-[#2b1c11] overflow-hidden rounded-[1px]">
                  <img
                    src={polaroids[0].img}
                    alt={polaroids[0].caption}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-[#f7eed6] text-[9px] font-typewriter font-bold px-1.5 py-0.5 rounded">
                    {polaroids[0].badge}
                  </div>
                </div>
                <div className="font-handwriting text-base font-bold text-[#2b1c11] mt-2 px-1 leading-snug">
                  "{polaroids[0].caption}"
                </div>
              </div>
            </div>

            {/* Pinned Note: "LAST SEEN NEAR CLOUD LINE" */}
            <div className="relative">
              <RedPushPin className="absolute -top-2 left-6" />
              <div className="bg-[#ecdcb9] p-2.5 rounded shadow border border-[#a89163] text-[#2b1c11] font-typewriter text-xs rotate-[-2deg]">
                <div className="text-[10px] font-bold text-[#8a1718] uppercase">ALTITUDE REPORT</div>
                <div className="font-bold text-sm text-[#1a140e] mt-0.5">4,167 METERS</div>
                <div className="text-[10px] text-[#5a4430]">OXYGEN THIN • CADENCE HIGH</div>
              </div>
            </div>

          </div>

        </div>

        {/* MIDDLE / BOTTOM SECTION: POLAROIDS GRID & POSTER HEADLINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-6 relative z-20">
          
          {/* Left Artifacts: Case Envelope & Polaroid 4 (Lalla Takerkoust) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Detective Dossier Tag (Like RCMP Case File in poster) */}
            <div className="relative">
              <RedPushPin className="absolute -top-2 left-6" />
              <div className="bg-[#decb9e] p-4 rounded-md shadow-lg border-2 border-[#5c4028]/60 text-[#2b1c11] font-typewriter text-xs rotate-[-1deg]">
                <div className="border-b border-[#5c4028]/30 pb-1.5 flex items-center justify-between">
                  <span className="font-black text-[#1a140e]">EXPEDITION UNIT</span>
                  <span className="stamp-confidential text-[10px] py-0 px-1 border-2">CONFIDENTIAL</span>
                </div>
                <div className="mt-2 space-y-1 text-[11px]">
                  <div>CASE FILE: <strong className="text-[#1a140e]">014-EXP</strong></div>
                  <div>SUBJECT: <strong className="text-[#1a140e]">HAMZA WAHMANE</strong></div>
                  <div>BASE: <strong className="text-[#1a140e]">MARRAKECH, MOROCCO</strong></div>
                  <div>STATUS: <strong className="text-[#8a1718]">100% UNSTOPPABLE</strong></div>
                </div>
              </div>
            </div>

            {/* Polaroid 4: Lalla Takerkoust */}
            <div className="relative group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[3])}>
              <RedPushPin className="absolute -top-2 right-6 z-30" />
              <div className="polaroid rounded-sm rotate-[-2deg] group-hover:rotate-0 transition-transform shadow-xl">
                <div className="relative aspect-[4/5] bg-[#2b1c11] overflow-hidden rounded-[1px]">
                  <img
                    src={polaroids[3].img}
                    alt={polaroids[3].caption}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-[#f7eed6] text-[9px] font-typewriter font-bold px-1.5 py-0.5 rounded">
                    {polaroids[3].badge}
                  </div>
                </div>
                <div className="font-handwriting text-base font-bold text-[#2b1c11] mt-2 px-1 leading-snug">
                  "{polaroids[3].caption}"
                </div>
              </div>
            </div>

          </div>

          {/* CENTER: THE HUGE POSTER HEADLINE (Exact Alberta Murder Mystery Poster Style!) */}
          <div className="lg:col-span-4 text-center space-y-2 py-4">
            
            <div className="font-poster text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#fffdf8] tracking-wider leading-[0.9] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              MOROCCO<br />
              EXPEDITION<br />
              FILES
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-typewriter text-[#c2b083] font-bold tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-[#c2b083]" />
              <span>WHERE THE ROAD ENDS</span>
              <span className="w-8 h-[1px] bg-[#c2b083]" />
            </div>

            {/* Distressed Red Block Headline */}
            <div className="inline-block bg-[#b82728] text-white px-5 py-2 font-poster text-2xl sm:text-3xl font-black uppercase tracking-widest shadow-2xl border-2 border-[#fffdf8]/30 rotate-[-1deg]">
              PURE ENDURANCE
            </div>

            {/* Bottom Pinned Tape Note */}
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#fff8e7] text-[#2b1c11] font-handwriting text-base font-bold rounded-sm shadow border border-[#cfbe95] rotate-[1deg]">
                "SOME ROADS DON'T FADE. THEY TEST YOU."
              </span>
            </div>

          </div>

          {/* Right Artifacts: Polaroids 2 & 3 and Evidence Tag */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Polaroid 2: Cycling 167km */}
            <div className="relative group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[1])}>
              <RedPushPin className="absolute -top-2 left-8 z-30" />
              <div className="polaroid rounded-sm rotate-[2deg] group-hover:rotate-0 transition-transform shadow-xl">
                <div className="relative aspect-[4/5] bg-[#2b1c11] overflow-hidden rounded-[1px]">
                  <img
                    src={polaroids[1].img}
                    alt={polaroids[1].caption}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-[#f7eed6] text-[9px] font-typewriter font-bold px-1.5 py-0.5 rounded">
                    {polaroids[1].badge}
                  </div>
                </div>
                <div className="font-handwriting text-base font-bold text-[#2b1c11] mt-2 px-1 leading-snug">
                  "{polaroids[1].caption}"
                </div>
              </div>
            </div>

            {/* Pinned Evidence Tag (Like 27B-7 in poster) */}
            <div className="relative">
              <RedPushPin className="absolute -top-2 right-8" />
              <div className="evidence-tag p-3 rounded shadow text-[#2b1c11] font-typewriter text-xs rotate-[-2deg]">
                <div className="flex justify-between items-center text-[10px] font-bold text-[#72191a]">
                  <span>EVIDENCE TAG</span>
                  <span className="px-1 bg-[#2b1c11] text-white rounded">ITEM # 27B-7</span>
                </div>
                <div className="mt-1 text-[11px] font-bold">
                  HIGH ATLAS MOUNTAIN PASSES
                </div>
                <div className="text-[10px] text-[#5a4430]">
                  NO SHORTCUTS • 100% SELF-SUPPORTED
                </div>
              </div>
            </div>

            {/* Polaroid 3: Oukaimeden */}
            <div className="relative group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[2])}>
              <RedPushPin className="absolute -top-2 right-6 z-30" />
              <div className="polaroid rounded-sm rotate-[-1deg] group-hover:rotate-0 transition-transform shadow-xl">
                <div className="relative aspect-[4/5] bg-[#2b1c11] overflow-hidden rounded-[1px]">
                  <img
                    src={polaroids[2].img}
                    alt={polaroids[2].caption}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-[#f7eed6] text-[9px] font-typewriter font-bold px-1.5 py-0.5 rounded">
                    {polaroids[2].badge}
                  </div>
                </div>
                <div className="font-handwriting text-base font-bold text-[#2b1c11] mt-2 px-1 leading-snug">
                  "{polaroids[2].caption}"
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM ACCENT: POLICE CAUTION TAPE (Exact replica of poster bottom tape!) */}
        <div className="mt-8 -mx-4 sm:-mx-6 lg:-mx-8 pt-2">
          <div className="caution-tape py-2 px-4 text-center font-poster tracking-widest text-sm sm:text-base font-black text-black select-none shadow-xl transform -rotate-1">
            • POLICE LINE DO NOT CROSS • ATHLETE IN THE SADDLE • 1337 EXPEDITION LOG • DO NOT CROSS •
          </div>
        </div>

        {/* Central Instagram Dispatch Button */}
        <div className="mt-8 text-center">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#b82728] hover:bg-[#8a1718] text-[#fffdf8] font-poster text-lg uppercase tracking-widest rounded-lg shadow-2xl transition-all border border-[#fffdf8]/30 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span>OPEN INSTAGRAM DISPATCH (@WAHMANE.HAMZA)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* LIGHTBOX MODAL for Enlargeable Polaroid Preview */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#fffdf8] p-4 sm:p-6 rounded shadow-2xl space-y-3 font-typewriter text-[#2b1c11]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-1.5 bg-[#2b1c11] text-white rounded-full hover:bg-[#8a1718] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[4/5] bg-black overflow-hidden rounded">
              <img
                src={selectedPhoto.img}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-2">
              <div className="text-xs text-[#8a1718] font-bold uppercase">{selectedPhoto.tag}</div>
              <h3 className="font-bold text-xl text-[#1a140e]">{selectedPhoto.title} ({selectedPhoto.elevation})</h3>
              <p className="font-handwriting text-xl text-[#2b1c11] mt-1 font-bold">"{selectedPhoto.caption}"</p>
            </div>

            <div className="pt-3 border-t border-[#2b1c11]/20 flex items-center justify-between">
              <span className="text-xs text-[#5a4430]">[CLICK TO VIEW ON INSTAGRAM]</span>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#8a1718] hover:bg-[#a3221a] text-white font-bold text-xs uppercase tracking-wider rounded inline-flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Open Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Buttons */}
      <div className="pt-6 border-t-2 border-[#1f1c19] flex flex-col sm:flex-row items-center justify-between gap-4 font-typewriter">
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

