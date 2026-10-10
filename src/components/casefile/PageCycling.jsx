import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Instagram, Compass, ExternalLink, X } from 'lucide-react';

/* 3D Red Pushpin Component */
function RedPushPin({ className = "" }) {
  return (
    <div className={`relative z-30 w-5 h-5 flex items-center justify-center filter drop-shadow-md select-none pointer-events-none ${className}`}>
      {/* Drop Shadow */}
      <div className="absolute w-2.5 h-2.5 rounded-full bg-black/60 blur-[1px] translate-y-2 translate-x-1" />
      {/* 3D Red Pushpin Head */}
      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#ff5e5e] via-[#c91818] to-[#690707] border border-[#ffcccc]/50 shadow-inner relative flex items-center justify-center">
        {/* Specular highlight */}
        <div className="w-1.5 h-1.5 rounded-full bg-white/80 absolute top-0.5 left-0.5" />
        {/* Core pin point */}
        <div className="w-1 h-1 rounded-full bg-[#3d0000]" />
      </div>
    </div>
  );
}

/* Tall Vintage Illustrated Morocco Map (Exact style of Alberta poster in reference image) */
function MoroccoMap() {
  return (
    <div className="relative bg-[#eee5ce] border-4 border-[#2d1f14] rounded shadow-2xl p-2.5 sm:p-3 overflow-hidden select-none">
      {/* Map Header Plate (Deep navy banner matching Image 2 ALBERTA header) */}
      <div className="flex items-center justify-between border-b-2 border-[#2d1f14] pb-2 mb-2 px-1">
        <div className="bg-[#182329] text-[#f7eed6] px-4 py-1 text-sm sm:text-base font-poster tracking-[0.3em] font-black uppercase rounded-sm border border-[#ede1c7]">
          M O R O C C O
        </div>
        <div className="flex items-center gap-1.5 font-typewriter text-[9px] sm:text-[10px] text-[#4d3621] font-bold">
          <Compass className="w-3.5 h-3.5 text-[#8a1718]" />
          <span>31°47'N 7°59'W • ATLAS EXPEDITION</span>
        </div>
      </div>

      {/* Vector Map Canvas - Portrait Aspect Ratio (3:4, matching Alberta map in Image 2) */}
      <div className="relative aspect-[3/4] w-full">
        <svg viewBox="0 0 340 450" className="w-full h-full">
          <defs>
            <radialGradient id="parchmentWash" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#faf2dc" />
              <stop offset="70%" stopColor="#ede3c7" />
              <stop offset="100%" stopColor="#dbceab" />
            </radialGradient>
            
            <filter id="stringShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1.5" dy="2.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.7"/>
            </filter>

            <pattern id="oceanWaves" width="30" height="15" patternUnits="userSpaceOnUse">
              <path d="M 0 7.5 Q 7.5 3.5, 15 7.5 T 30 7.5" fill="none" stroke="#cfbe99" strokeWidth="0.7" opacity="0.6"/>
            </pattern>
          </defs>

          {/* Background Wash */}
          <rect width="340" height="450" fill="url(#parchmentWash)" />

          {/* Double Frame Borders */}
          <rect x="6" y="6" width="328" height="438" stroke="#332415" strokeWidth="1.5" fill="none" />
          <rect x="10" y="10" width="320" height="430" stroke="#705537" strokeWidth="0.6" strokeDasharray="4 2" fill="none" />

          {/* Atlantic Ocean Wave Area */}
          <rect x="10" y="10" width="105" height="430" fill="url(#oceanWaves)" />
          <text x="30" y="170" fill="#917c56" fontSize="10" fontFamily="'Special Elite', monospace" letterSpacing="4" transform="rotate(-90 30 170)">
            ATLANTIC OCEAN
          </text>

          {/* Mediterranean Text in the North */}
          <text x="180" y="24" fill="#917c56" fontSize="9" fontFamily="'Special Elite', monospace" letterSpacing="3">
            MEDITERRANEAN SEA
          </text>

          {/* Morocco Landmass Outline */}
          <path
            d="M 160,28
               C 185,34 220,38 255,48
               C 275,55 305,68 315,95
               C 325,130 310,185 295,240
               C 280,290 260,345 220,390
               C 180,430 145,435 125,410
               C 115,370 110,320 100,270
               C 92,225 105,180 115,150
               C 125,115 138,75 145,50
               C 152,38 156,30 160,28 Z"
            fill="#f9f1db"
            stroke="#4d351e"
            strokeWidth="1.8"
          />

          {/* Topographic Rivers (like blue drainage veins in Image 2) */}
          <g fill="none" stroke="#688a89" strokeWidth="0.8" opacity="0.65">
            {/* Oum Er-Rbia River */}
            <path d="M 185,190 Q 155,175 120,165" />
            {/* Sebou River in the North */}
            <path d="M 210,95 Q 175,85 145,75" />
            {/* Tensift River flowing from Toubkal past Marrakech */}
            <path d="M 175,275 Q 155,230 108,215" />
            {/* Souss River */}
            <path d="M 160,330 Q 130,340 105,335" />
            {/* Draa River in desert */}
            <path d="M 235,310 Q 255,340 270,390" />
          </g>

          {/* Regional Contour Divisions (Dotted boundaries like Alberta map) */}
          <path d="M 145,75 Q 210,110 280,120" fill="none" stroke="#998361" strokeWidth="0.8" strokeDasharray="2 3" />
          <path d="M 120,165 Q 190,200 270,215" fill="none" stroke="#998361" strokeWidth="0.8" strokeDasharray="2 3" />
          <path d="M 100,270 Q 170,290 260,320" fill="none" stroke="#998361" strokeWidth="0.8" strokeDasharray="2 3" />

          {/* REGION LABELS (All-caps clean typography matching Image 2) */}
          <text x="200" y="70" fill="#544333" fontSize="9" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1.5">
            NORTHERN RIF
          </text>
          <text x="65" y="115" fill="#544333" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1">
            ATLANTIC PLAINS
          </text>
          <text x="175" y="165" fill="#544333" fontSize="9" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1.5">
            MARRAKECH REGION
          </text>
          <text x="165" y="360" fill="#544333" fontSize="9" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1.5">
            SOUTHERN EXPEDITIONS
          </text>

          {/* ILLUSTRATED ATLAS MOUNTAIN RANGE (Exact visual style of Canadian Rockies in Image 2!) */}
          <g stroke="#1d2721" strokeWidth="0.9">
            {/* Mountain 1: Jbel Toubkal (4,167m) */}
            <polygon points="140,295 168,245 196,295" fill="#2d3d34" />
            <polygon points="168,245 174,245 196,295 168,295" fill="#1b2620" />
            <polygon points="160,260 168,245 176,260" fill="#ffffff" stroke="none" />
            <polygon points="168,245 176,260 172,260" fill="#cbe2e8" stroke="none" />

            {/* Mountain 2: Oukaïmeden (3,200m) */}
            <polygon points="175,285 198,242 221,285" fill="#394d42" />
            <polygon points="198,242 203,242 221,285 198,285" fill="#222e27" />
            <polygon points="191,255 198,242 205,255" fill="#ffffff" stroke="none" />

            {/* Mountain 3: High Atlas Ridge Peak */}
            <polygon points="205,275 228,235 251,275" fill="#2d3d34" />
            <polygon points="228,235 233,235 251,275 228,275" fill="#1b2620" />
            <polygon points="221,248 228,235 235,248" fill="#ffffff" stroke="none" />

            {/* Mountain 4: Tizi n'Tichka Pass Area */}
            <polygon points="230,290 252,250 274,290" fill="#394d42" />
            <polygon points="252,250 256,250 274,290 252,290" fill="#222e27" />
            <polygon points="246,263 252,250 258,263" fill="#ffffff" stroke="none" />

            {/* Mountain 5: Anti-Atlas foothills */}
            <polygon points="115,335 136,300 157,335" fill="#394d42" />
            <polygon points="136,300 140,300 157,335 136,335" fill="#222e27" />

            {/* Mountain 6: Eastern Atlas Peak */}
            <polygon points="255,270 275,235 295,270" fill="#2d3d34" />
            <polygon points="271,246 275,235 279,246" fill="#ffffff" stroke="none" />
          </g>

          <text x="175" y="228" fill="#223028" fontSize="9" fontWeight="bold" fontFamily="'Special Elite', monospace" fontStyle="italic" letterSpacing="1">
            HIGH ATLAS MOUNTAINS
          </text>

          {/* WAYPOINT CITIES (Clean black dots with white centers matching Image 2) */}
          {/* Tangier */}
          <circle cx="165" cy="45" r="3.5" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="172" y="48" fill="#1f1a14" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace">Tangier</text>

          {/* Rabat */}
          <circle cx="140" cy="115" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="146" y="118" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Rabat</text>

          {/* Casablanca */}
          <circle cx="125" cy="142" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="70" y="145" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Casablanca</text>

          {/* Marrakech Base Hub */}
          <circle cx="150" cy="210" r="4.5" fill="#1f1a14" stroke="#ffffff" strokeWidth="1.5" />
          <text x="82" y="213" fill="#1f1a14" fontSize="9" fontWeight="bold" fontFamily="'Special Elite', monospace">
            ★ Marrakech (HQ)
          </text>

          {/* Agadir */}
          <circle cx="105" cy="330" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="68" y="333" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Agadir</text>

          {/* Ouarzazate */}
          <circle cx="230" cy="315" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="236" y="318" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Ouarzazate</text>

          {/* Compass Rose (Top right, matching Alberta map in Image 2) */}
          <g transform="translate(295, 45)">
            <circle cx="0" cy="0" r="20" fill="#fcf6e6" stroke="#4a3622" strokeWidth="0.8" opacity="0.9" />
            <polygon points="0,-16 3.5,-3.5 16,0 3.5,3.5 0,16 -3.5,3.5 -16,0 -3.5,-3.5" fill="#543c25" />
            <polygon points="0,-16 0,0 -3.5,-3.5" fill="#9c754b" />
            <polygon points="0,16 0,0 3.5,3.5" fill="#9c754b" />
            <polygon points="16,0 0,0 3.5,-3.5" fill="#9c754b" />
            <polygon points="-16,0 0,0 -3.5,3.5" fill="#9c754b" />
            <text x="-3.5" y="-18" fill="#2b1a0d" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">N</text>
            <text x="-3.5" y="25" fill="#2b1a0d" fontSize="7" fontWeight="bold" fontFamily="'Special Elite', monospace">S</text>
            <text x="18" y="3" fill="#2b1a0d" fontSize="7" fontWeight="bold" fontFamily="'Special Elite', monospace">E</text>
            <text x="-24" y="3" fill="#2b1a0d" fontSize="7" fontWeight="bold" fontFamily="'Special Elite', monospace">W</text>
          </g>

          {/* ======================================================== */}
          {/* RED INVESTIGATION STRINGS ON TOP OF THE MAP              */}
          {/* (Drawn on top of mountains, terrain, and labels!)        */}
          {/* ======================================================== */}
          <g className="red-strings-on-map" filter="url(#stringShadow)">
            {/* Core spine: Tangier -> Marrakech */}
            <line x1="165" y1="45" x2="150" y2="210" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="165" y1="45" x2="150" y2="210" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* Marrakech -> Toubkal Summit */}
            <line x1="150" y1="210" x2="168" y2="280" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="150" y1="210" x2="168" y2="280" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* Toubkal -> Oukaïmeden */}
            <line x1="168" y1="280" x2="198" y2="260" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="168" y1="280" x2="198" y2="260" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* Toubkal -> Lalla Takerkoust */}
            <line x1="168" y1="280" x2="130" y2="245" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="168" y1="280" x2="130" y2="245" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* Oukaïmeden -> Tizi n'Tichka */}
            <line x1="198" y1="260" x2="240" y2="275" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="198" y1="260" x2="240" y2="275" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* BRANCHING RED STRINGS EXITING THE MAP TO SURROUNDING CARDS: */}
            {/* 1. From Tangier out to the top-right towards Polaroid 1 */}
            <line x1="165" y1="45" x2="340" y2="90" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="165" y1="45" x2="340" y2="90" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* 2. From Marrakech out to the left towards Newspaper & Field note */}
            <line x1="150" y1="210" x2="0" y2="165" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="150" y1="210" x2="0" y2="165" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* 3. From Lalla Takerkoust out to the lower-left towards Case File */}
            <line x1="130" y1="245" x2="0" y2="310" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="130" y1="245" x2="0" y2="310" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* 4. From Oukaïmeden out to the right towards Polaroid 2 (167km) */}
            <line x1="198" y1="260" x2="340" y2="240" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="198" y1="260" x2="340" y2="240" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* 5. From Tizi n'Tichka out to the right towards Evidence Tag & Polaroid 3 */}
            <line x1="240" y1="275" x2="340" y2="345" stroke="#b81b1b" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="240" y1="275" x2="340" y2="345" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3 2" />
          </g>

          {/* ======================================================== */}
          {/* 3D RED PUSHPINS PLACED DIRECTLY ON STRING TURNS/VERTICES */}
          {/* ======================================================== */}
          {/* Pin 1: Tangier Turn */}
          <g transform="translate(165, 45)">
            <circle cx="1" cy="2" r="6" fill="#000000" opacity="0.4" />
            <circle cx="0" cy="0" r="5.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
          </g>

          {/* Pin 2: Marrakech HQ Turn */}
          <g transform="translate(150, 210)">
            <circle cx="1" cy="2" r="6.5" fill="#000000" opacity="0.45" />
            <circle cx="0" cy="0" r="6" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.8" cy="-1.8" r="2" fill="#ffffff" />
          </g>

          {/* Pin 3: Toubkal Summit Turn */}
          <g transform="translate(168, 280)">
            <circle cx="1" cy="2" r="7" fill="#000000" opacity="0.5" />
            <circle cx="0" cy="0" r="6.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1.2" />
            <circle cx="-2" cy="-2" r="2.2" fill="#ffffff" />
            {/* Label box */}
            <rect x="10" y="-8" width="105" height="15" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="14" y="3" fill="#8a1718" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">
              TOUBKAL (4,167m)
            </text>
          </g>

          {/* Pin 4: Oukaïmeden Turn */}
          <g transform="translate(198, 260)">
            <circle cx="1" cy="2" r="6" fill="#000000" opacity="0.4" />
            <circle cx="0" cy="0" r="5.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
            {/* Label box */}
            <rect x="8" y="-7" width="95" height="14" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="12" y="3" fill="#2b1c11" fontSize="7.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
              OUKAÏMEDEN (3,200m)
            </text>
          </g>

          {/* Pin 5: Lalla Takerkoust Turn */}
          <g transform="translate(130, 245)">
            <circle cx="1" cy="2" r="5.5" fill="#000000" opacity="0.4" />
            <circle cx="0" cy="0" r="5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.5" fill="#ffffff" />
            {/* Label box */}
            <rect x="-105" y="-7" width="98" height="14" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="-101" y="3" fill="#2b1c11" fontSize="7.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
              LALLA TAKERKOUST
            </text>
          </g>

          {/* Pin 6: Tizi n'Tichka Turn */}
          <g transform="translate(240, 275)">
            <circle cx="1" cy="2" r="5.5" fill="#000000" opacity="0.4" />
            <circle cx="0" cy="0" r="5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.5" fill="#ffffff" />
            {/* Label box */}
            <rect x="7" y="-7" width="85" height="14" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="10" y="3" fill="#72191a" fontSize="7.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
              167 KM ROAD PASS
            </text>
          </g>
        </svg>
      </div>

      {/* Map Bottom Archive Bar */}
      <div className="flex items-center justify-between text-[9px] font-typewriter text-[#4d3621] pt-1.5 px-1 border-t border-[#2d1f14]/30">
        <div>EXPEDITION MAPPING</div>
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
      badge: "JAN 12, 4,167M"
    },
    {
      id: "cycling",
      img: "./trips/cycling_167km.jpg",
      title: "167 KM CYCLING",
      elevation: "2 DAYS",
      tag: "HIGH ATLAS ROAD RIDE",
      caption: "Cycled 167 km in two days",
      badge: "NON-STOP SADDLE"
    },
    {
      id: "oukaimden",
      img: "./trips/oukaimden_mount.jpg",
      title: "MOUNT OUKAÏMEDEN",
      elevation: "3,200 M",
      tag: "ABOVE SEA OF CLOUDS",
      caption: "Climb Oukaïmeden Mount (3,200m)",
      badge: "RESTING IN THE CLOUDS"
    },
    {
      id: "takerkoust",
      img: "./trips/lalla_takerkoust.jpg",
      title: "LALLA TAKERKOUST",
      elevation: "BARRAGE",
      tag: "MARRAKECH RESERVOIR & TRAILS",
      caption: "Trip in Lalla Takerkoust, Barrage",
      badge: "DESERT COUNTRYSIDE"
    }
  ];

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1f1c19] pb-2 text-xs tracking-wider font-typewriter">
        <div className="text-sm sm:text-base font-bold text-[#1f1c19]">
          CASE FILE: <span className="underline decoration-1 underline-offset-4">014-EXP — FIELD INVESTIGATION BOARD</span>
        </div>
        <div className="text-xs text-[#5a4430] mt-1 sm:mt-0">
          ARCHIVE REF: <span className="font-bold text-[#1f1c19]">MA-87-EVIDENCE</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* THE CORKBOARD COLLAGE (Tightly packed, zero empty voids) */}
      {/* ======================================================== */}
      <div className="corkboard-surface rounded-2xl p-3 sm:p-5 lg:p-6 text-[#fffdf8] relative overflow-hidden shadow-2xl border-4 border-[#3d2716]">
        
        {/* SVG Investigation Strings linking Map Edge to Surrounding Card Pins */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden lg:block">
          {/* Top-right string from map towards Polaroid 1 */}
          <path d="M 640 90 L 730 65" fill="none" stroke="#b81b1b" strokeWidth="2.5" className="red-string-line" />
          {/* Left string from map towards Newspaper Clipping */}
          <path d="M 360 210 L 290 230" fill="none" stroke="#b81b1b" strokeWidth="2.5" className="red-string-line" />
          {/* Lower-left string from map towards Case File */}
          <path d="M 360 300 L 290 410" fill="none" stroke="#b81b1b" strokeWidth="2.5" className="red-string-line" />
          {/* Right string from map towards Polaroid 2 */}
          <path d="M 640 270 L 730 260" fill="none" stroke="#b81b1b" strokeWidth="2.5" className="red-string-line" />
          {/* Lower-right string from map towards Polaroid 3 */}
          <path d="M 640 370 L 730 520" fill="none" stroke="#b81b1b" strokeWidth="2.5" className="red-string-line" />
        </svg>

        {/* Dense 3-Column Grid Layout without gaping gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start relative z-10">
          
          {/* ==================================================== */}
          {/* COLUMN 1: LEFT CLUSTER (Packed & nested evidence)   */}
          {/* ==================================================== */}
          <div className="lg:col-span-3 space-y-3.5">
            
            {/* 1. Lined Field Note (Pin strictly on top edge) */}
            <div className="relative group">
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2" />
              <div className="bg-[#fff9e6] p-3 border border-[#b8a679] rounded shadow-md font-handwriting text-base text-[#2b1c11] rotate-[-2deg]">
                <div className="text-[10px] font-typewriter font-bold text-[#8a1718] uppercase tracking-wider">
                  COLD CASE LOG
                </div>
                <div className="font-bold leading-tight mt-0.5">
                  "STILL NO ANSWERS. ONLY NEXT SUMMITS."
                </div>
              </div>
            </div>

            {/* 2. Newspaper Clipping: "THE ATLAS HERALD" (Pin strictly on top edge) */}
            <div className="relative -mt-1 group">
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2" />
              <div className="newsprint p-3 rounded shadow-lg text-[#1f1c19] font-typewriter space-y-1.5 rotate-[1deg]">
                <div className="border-b border-[#1f1c19]/30 pb-1 flex justify-between items-baseline text-[9px] text-[#5c4028]">
                  <span className="font-bold tracking-widest uppercase">THE ATLAS HERALD</span>
                  <span>OCT 2026</span>
                </div>
                
                <h3 className="font-black text-sm leading-tight uppercase font-poster tracking-wide text-[#1a140e]">
                  CYCLIST REACHES 4,167M TOUBKAL SUMMIT
                </h3>

                <div className="p-1 bg-[#2b1c11]/10 rounded border border-[#2b1c11]/20">
                  <div className="text-[10px] text-[#5c4028] italic leading-tight">
                    "Solo cyclist covers 167 km in two days before ascending the highest peak in North Africa."
                  </div>
                </div>

                <div className="text-[9px] text-[#72191a] font-bold uppercase tracking-wider">
                  RCMP CONTINUES LOGGING DISPATCH
                </div>
              </div>
            </div>

            {/* 3. Yellow Sticky Note (Pin strictly on top edge) */}
            <div className="relative -mt-1 group">
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2" />
              <div className="bg-[#feee91] p-3 rounded shadow-md text-[#2b1c11] font-handwriting text-base font-bold rotate-[-2deg] border border-[#d9c75f]">
                <div className="text-[10px] font-typewriter font-bold text-[#72191a] uppercase">
                  INVESTIGATION NOTE:
                </div>
                <div className="mt-0.5 leading-snug">
                  WHY HERE? WHO KNEW?<br />
                  <span className="underline decoration-[#72191a] text-[#72191a]">PURE ENDURANCE.</span>
                </div>
              </div>
            </div>

            {/* 4. Manila Case File Pocket (Pin strictly on top edge) */}
            <div className="relative -mt-1 group">
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2" />
              <div className="bg-[#decb9e] p-3.5 rounded-md shadow-lg border-2 border-[#5c4028]/60 text-[#2b1c11] font-typewriter text-xs rotate-[2deg]">
                <div className="border-b border-[#5c4028]/30 pb-1 flex items-center justify-between">
                  <span className="font-black text-[11px] text-[#1a140e]">EXPEDITION UNIT</span>
                  <span className="stamp-confidential text-[9px] py-0 px-1 border-2">CONFIDENTIAL</span>
                </div>
                <div className="mt-1.5 space-y-0.5 text-[10px]">
                  <div>CASE FILE: <strong className="text-[#1a140e]">014-EXP</strong></div>
                  <div>SUBJECT: <strong className="text-[#1a140e]">HAMZA WAHMANE</strong></div>
                  <div>LOCATION: <strong className="text-[#1a140e]">HIGH ATLAS, MOROCCO</strong></div>
                  <div>STATUS: <strong className="text-[#8a1718]">100% UNSTOPPABLE</strong></div>
                </div>
              </div>
            </div>

            {/* 5. Polaroid 4: Lalla Takerkoust (Pin strictly on top edge) */}
            <div className="relative -mt-1 group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[3])}>
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30" />
              <div className="polaroid rounded-sm rotate-[-2deg] group-hover:rotate-0 transition-transform shadow-xl">
                <div className="relative aspect-[4/3] bg-[#2b1c11] overflow-hidden rounded-[1px]">
                  <img
                    src={polaroids[3].img}
                    alt={polaroids[3].caption}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-black/75 text-[#f7eed6] text-[8.5px] font-typewriter font-bold px-1 py-0.5 rounded">
                    {polaroids[3].badge}
                  </div>
                </div>
                <div className="font-handwriting text-sm font-bold text-[#2b1c11] mt-1.5 px-0.5 leading-snug">
                  "{polaroids[3].caption}"
                </div>
              </div>
            </div>

          </div>

          {/* ==================================================== */}
          {/* COLUMN 2: CENTER (Tall Map + Headline + Caution Tape) */}
          {/* ==================================================== */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* The Tall Morocco Map (Styled after Alberta map in Image 2) */}
            <div className="relative">
              <MoroccoMap />
            </div>

            {/* Huge Poster Typography Block (Tightly below map, zero gap!) */}
            <div className="text-center space-y-1.5 pt-1">
              
              <div className="font-poster text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#fffdf8] tracking-wider leading-[0.9] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                MOROCCO<br />
                EXPEDITION<br />
                FILES
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-typewriter text-[#c2b083] font-bold tracking-widest uppercase">
                <span className="w-6 h-[1px] bg-[#c2b083]" />
                <span>THAT FEEL</span>
                <span className="w-6 h-[1px] bg-[#c2b083]" />
              </div>

              {/* Bold Distressed Red Block Stamp */}
              <div className="inline-block bg-[#b82728] text-white px-5 py-1.5 font-poster text-2xl sm:text-3xl font-black uppercase tracking-widest shadow-2xl border-2 border-[#fffdf8]/30 rotate-[-1deg]">
                TOO REAL TO HANDLE
              </div>

              {/* Bottom Pinned Tape Note */}
              <div className="pt-1">
                <span className="inline-block px-3 py-1 bg-[#fff8e7] text-[#2b1c11] font-handwriting text-sm sm:text-base font-bold rounded-sm shadow border border-[#cfbe95] rotate-[1deg]">
                  "SOME ROADS DON'T FADE. THEY TEST YOU."
                </span>
              </div>

            </div>

            {/* Yellow Police Caution Tape across the center bottom */}
            <div className="caution-tape py-2 px-3 text-center font-poster tracking-widest text-xs sm:text-sm font-black text-black select-none shadow-xl transform -rotate-1">
              • POLICE LINE DO NOT CROSS • ATHLETE IN THE SADDLE • 1337 EXPEDITION LOG • DO NOT CROSS •
            </div>

            {/* Central Instagram Button */}
            <div className="text-center pt-1">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#b82728] hover:bg-[#8a1718] text-[#fffdf8] font-poster text-base uppercase tracking-widest rounded-lg shadow-xl transition-all border border-[#fffdf8]/30 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>OPEN INSTAGRAM DISPATCH (@WAHMANE.HAMZA)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* ==================================================== */}
          {/* COLUMN 3: RIGHT CLUSTER (Packed & nested evidence)  */}
          {/* ==================================================== */}
          <div className="lg:col-span-3 space-y-3.5">
            
            {/* 1. Polaroid 1: Toubkal Summit (Pin strictly on top edge) */}
            <div className="relative group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[0])}>
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30" />
              <div className="polaroid rounded-sm rotate-[2deg] group-hover:rotate-0 transition-transform shadow-xl">
                <div className="relative aspect-[4/3] bg-[#2b1c11] overflow-hidden rounded-[1px]">
                  <img
                    src={polaroids[0].img}
                    alt={polaroids[0].caption}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-black/75 text-[#f7eed6] text-[8.5px] font-typewriter font-bold px-1 py-0.5 rounded">
                    {polaroids[0].badge}
                  </div>
                </div>
                <div className="font-handwriting text-sm font-bold text-[#2b1c11] mt-1.5 px-0.5 leading-snug">
                  "{polaroids[0].caption}"
                </div>
              </div>
            </div>

            {/* 2. Sticky Altitude Note (Pin strictly on top edge) */}
            <div className="relative -mt-1 group">
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2" />
              <div className="bg-[#ecdcb9] p-2.5 rounded shadow border border-[#a89163] text-[#2b1c11] font-typewriter text-xs rotate-[-2deg]">
                <div className="text-[9px] font-bold text-[#8a1718] uppercase">ALTITUDE REPORT</div>
                <div className="font-bold text-sm text-[#1a140e] mt-0.5">4,167 METERS</div>
                <div className="text-[9px] text-[#5a4430]">OXYGEN THIN • CADENCE HIGH</div>
              </div>
            </div>

            {/* 3. Polaroid 2: Cycling 167km (Pin strictly on top edge) */}
            <div className="relative -mt-1 group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[1])}>
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30" />
              <div className="polaroid rounded-sm rotate-[1deg] group-hover:rotate-0 transition-transform shadow-xl">
                <div className="relative aspect-[4/3] bg-[#2b1c11] overflow-hidden rounded-[1px]">
                  <img
                    src={polaroids[1].img}
                    alt={polaroids[1].caption}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-black/75 text-[#f7eed6] text-[8.5px] font-typewriter font-bold px-1 py-0.5 rounded">
                    {polaroids[1].badge}
                  </div>
                </div>
                <div className="font-handwriting text-sm font-bold text-[#2b1c11] mt-1.5 px-0.5 leading-snug">
                  "{polaroids[1].caption}"
                </div>
              </div>
            </div>

            {/* 4. Evidence Tag (Pin strictly on top edge hole) */}
            <div className="relative -mt-1 group">
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2" />
              <div className="evidence-tag p-2.5 rounded shadow text-[#2b1c11] font-typewriter text-xs rotate-[-3deg]">
                <div className="flex justify-between items-center text-[9px] font-bold text-[#72191a]">
                  <span>EVIDENCE TAG</span>
                  <span className="px-1 bg-[#2b1c11] text-white rounded">27B-7</span>
                </div>
                <div className="mt-0.5 text-[10px] font-bold">
                  HIGH ATLAS MOUNTAIN PASSES
                </div>
                <div className="text-[9px] text-[#5a4430]">
                  NO SHORTCUTS • 100% SELF-SUPPORTED
                </div>
              </div>
            </div>

            {/* 5. Sticky Note: "NO WITNESSES" (Pin strictly on top edge) */}
            <div className="relative -mt-1 group">
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2" />
              <div className="bg-[#fff9e6] p-2 rounded shadow border border-[#cfbe95] text-[#2b1c11] font-handwriting text-sm font-bold rotate-[2deg]">
                "NO WITNESSES. NO CONFESSION. JUST PURE CADENCE."
              </div>
            </div>

            {/* 6. Polaroid 3: Oukaïmeden (Pin strictly on top edge) */}
            <div className="relative -mt-1 group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[2])}>
              <RedPushPin className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30" />
              <div className="polaroid rounded-sm rotate-[-1deg] group-hover:rotate-0 transition-transform shadow-xl">
                <div className="relative aspect-[4/3] bg-[#2b1c11] overflow-hidden rounded-[1px]">
                  <img
                    src={polaroids[2].img}
                    alt={polaroids[2].caption}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-black/75 text-[#f7eed6] text-[8.5px] font-typewriter font-bold px-1 py-0.5 rounded">
                    {polaroids[2].badge}
                  </div>
                </div>
                <div className="font-handwriting text-sm font-bold text-[#2b1c11] mt-1.5 px-0.5 leading-snug">
                  "{polaroids[2].caption}"
                </div>
              </div>
            </div>

          </div>

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

            <div className="aspect-[4/3] bg-black overflow-hidden rounded">
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
      <div className="pt-4 border-t-2 border-[#1f1c19] flex flex-col sm:flex-row items-center justify-between gap-4 font-typewriter">
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

