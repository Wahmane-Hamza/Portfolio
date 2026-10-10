import React, { useState, useEffect, useRef, useCallback } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Instagram, Compass, ExternalLink, X } from 'lucide-react';

/* 3D Red Pushpin Component */
function RedPushPin({ className = "", pinId = null }) {
  return (
    <div
      data-pin-id={pinId}
      className={`relative z-30 w-5 h-5 flex items-center justify-center filter drop-shadow-md select-none pointer-events-none ${className}`}
    >
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

/* Tall Vintage Illustrated Morocco Map (Matching Image 1 outline + Image 2 Alberta style + Image 3 trail) */
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
          <span>31°47'N 7°59'W • EXPEDITION MAP</span>
        </div>
      </div>

      {/* Vector Map Canvas - Portrait Aspect Ratio (3:4, matching Alberta map in Image 2) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#faf2dc]">
        
        {/* Layer 1: Background, Grids, Borders, Waves, Mountains & Labels */}
        <svg viewBox="0 0 340 450" className="absolute inset-0 w-full h-full z-0">
          <defs>
            <radialGradient id="parchmentWash" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#faf3de" />
              <stop offset="70%" stopColor="#ede3c7" />
              <stop offset="100%" stopColor="#dbceab" />
            </radialGradient>
            
            <filter id="stringShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1.5" dy="2.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.7"/>
            </filter>

            <pattern id="oceanWaves" width="28" height="14" patternUnits="userSpaceOnUse">
              <path d="M 0 7 Q 7 3.5, 14 7 T 28 7" fill="none" stroke="#cfbe99" strokeWidth="0.7" opacity="0.6"/>
            </pattern>
          </defs>

          {/* Background Wash */}
          <rect width="340" height="450" fill="url(#parchmentWash)" />

          {/* Double Frame Borders */}
          <rect x="6" y="6" width="328" height="438" stroke="#332415" strokeWidth="1.5" fill="none" />
          <rect x="10" y="10" width="320" height="430" stroke="#705537" strokeWidth="0.6" strokeDasharray="4 2" fill="none" />

          {/* Atlantic Ocean Wave Area */}
          <rect x="10" y="10" width="100" height="430" fill="url(#oceanWaves)" />
          <text x="28" y="180" fill="#917c56" fontSize="10" fontFamily="'Special Elite', monospace" letterSpacing="4" transform="rotate(-90 28 180)">
            ATLANTIC OCEAN
          </text>
          <text x="180" y="24" fill="#917c56" fontSize="9" fontFamily="'Special Elite', monospace" letterSpacing="3">
            MEDITERRANEAN SEA
          </text>

          {/* Regional Contour Labels */}
          <text x="185" y="68" fill="#544333" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1.5">
            NORTHERN RIF
          </text>
          <text x="58" y="115" fill="#544333" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1">
            ATLANTIC PLAINS
          </text>
          <text x="175" y="170" fill="#544333" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1.5">
            HIGH ATLAS REGION
          </text>
          <text x="145" y="380" fill="#544333" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1.5">
            SOUTHERN EXPEDITIONS
          </text>

          {/* Mountain chain (High Atlas Peaks in style of Alberta Rockies) */}
          <g stroke="#1d2721" strokeWidth="0.8">
            <polygon points="140,225 165,185 190,225" fill="#2d3d34" />
            <polygon points="165,185 170,185 190,225 165,225" fill="#1b2620" />
            <polygon points="158,198 165,185 172,198" fill="#ffffff" stroke="none" />

            <polygon points="172,215 195,178 218,215" fill="#394d42" />
            <polygon points="195,178 199,178 218,215 195,215" fill="#222e27" />
            <polygon points="188,190 195,178 202,190" fill="#ffffff" stroke="none" />

            <polygon points="200,210 220,172 240,210" fill="#2d3d34" />
            <polygon points="214,184 220,172 226,184" fill="#ffffff" stroke="none" />

            <polygon points="222,220 242,185 262,220" fill="#394d42" />
            <polygon points="236,197 242,185 248,197" fill="#ffffff" stroke="none" />
          </g>

          <text x="170" y="165" fill="#223028" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace" fontStyle="italic" letterSpacing="1">
            HIGH ATLAS MOUNTAINS
          </text>

          {/* Waypoints */}
          <circle cx="178" cy="48" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="184" y="51" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Tangier</text>

          <circle cx="152" cy="115" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="158" y="118" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Rabat</text>

          <circle cx="136" cy="138" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="78" y="141" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Casablanca</text>

          <circle cx="158" cy="200" r="4.5" fill="#1f1a14" stroke="#ffffff" strokeWidth="1.5" />
          <text x="86" y="203" fill="#1f1a14" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
            ★ Marrakech (HQ)
          </text>

          <circle cx="112" cy="305" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="75" y="308" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Agadir</text>

          <circle cx="230" cy="285" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="236" y="288" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">Ouarzazate</text>

          {/* Compass Rose */}
          <g transform="translate(295, 45)">
            <circle cx="0" cy="0" r="18" fill="#fcf6e6" stroke="#4a3622" strokeWidth="0.8" opacity="0.9" />
            <polygon points="0,-14 3,-3 14,0 3,3 0,14 -3,3 -14,0 -3,-3" fill="#543c25" />
            <polygon points="0,-14 0,0 -3,-3" fill="#9c754b" />
            <polygon points="0,14 0,0 3,3" fill="#9c754b" />
            <polygon points="14,0 0,0 3,-3" fill="#9c754b" />
            <polygon points="-14,0 0,0 -3,3" fill="#9c754b" />
            <text x="-3" y="-16" fill="#2b1a0d" fontSize="7.5" fontWeight="bold" fontFamily="'Special Elite', monospace">N</text>
            <text x="-3" y="22" fill="#2b1a0d" fontSize="6.5" fontWeight="bold" fontFamily="'Special Elite', monospace">S</text>
            <text x="16" y="2.5" fill="#2b1a0d" fontSize="6.5" fontWeight="bold" fontFamily="'Special Elite', monospace">E</text>
            <text x="-21" y="2.5" fill="#2b1a0d" fontSize="6.5" fontWeight="bold" fontFamily="'Special Elite', monospace">W</text>
          </g>
        </svg>

        {/* Layer 2: The Exact Morocco Regional Outline from User (Image 1 in Vintage Sepia Ink) */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-3">
          <img
            src="./trips/morocco_vintage_outline.png"
            alt="Official Morocco Regions Map"
            className="w-full h-full object-contain filter contrast-125 opacity-90"
          />
        </div>

        {/* Layer 3: THE WINDING EXPEDITION RED STRING (Image 3 style) ON TOP OF THE MAP */}
        <svg viewBox="0 0 340 450" className="absolute inset-0 w-full h-full pointer-events-none z-20" filter="url(#stringShadow)">
          {/* Smooth serpentine curve connecting the 4 key stops like Image 3! */}
          <path
            d="M 178 48 
               C 240 60, 275 100, 260 140
               C 245 180, 140 185, 165 235
               C 185 275, 155 310, 125 345"
            fill="none"
            stroke="#b81b1b"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 178 48 
               C 240 60, 275 100, 260 140
               C 245 180, 140 185, 165 235
               C 185 275, 155 310, 125 345"
            fill="none"
            stroke="#ff7a7a"
            strokeWidth="0.9"
            strokeDasharray="4 3"
          />

          {/* 3D RED PUSHPINS AT THE BEGINNING, TURNS, AND END OF THE LINE (Image 3 X marks) */}
          {/* Stop 1: Tangier (Top-North) */}
          <g transform="translate(178, 48)">
            <circle cx="1" cy="2" r="6" fill="#000000" opacity="0.45" />
            <circle cx="0" cy="0" r="5.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
          </g>

          {/* Stop 2: Middle Atlas / Tichka Pass (Right Turn) */}
          <g transform="translate(260, 140)">
            <circle cx="1" cy="2" r="6" fill="#000000" opacity="0.45" />
            <circle cx="0" cy="0" r="5.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
            <rect x="-95" y="-7" width="90" height="14" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="-91" y="3" fill="#8a1718" fontSize="7" fontWeight="bold" fontFamily="'Special Elite', monospace">
              167KM TOUR PASS
            </text>
          </g>

          {/* Stop 3: Marrakech Base & Toubkal (4,167m) (Left Turn) */}
          <g transform="translate(165, 235)">
            <circle cx="1" cy="2" r="6.5" fill="#000000" opacity="0.5" />
            <circle cx="0" cy="0" r="6" fill="#c91818" stroke="#ffe5e5" strokeWidth="1.2" />
            <circle cx="-1.8" cy="-1.8" r="2" fill="#ffffff" />
            <rect x="9" y="-7" width="105" height="14" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="13" y="3" fill="#8a1718" fontSize="7.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
              TOUBKAL SUMMIT (4,167m)
            </text>
          </g>

          {/* Stop 4: Southern Passes & Lalla Takerkoust (Bottom Stop) */}
          <g transform="translate(125, 345)">
            <circle cx="1" cy="2" r="6" fill="#000000" opacity="0.45" />
            <circle cx="0" cy="0" r="5.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
            <rect x="9" y="-7" width="92" height="14" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="13" y="3" fill="#2b1c11" fontSize="7" fontWeight="bold" fontFamily="'Special Elite', monospace">
              LALLA TAKERKOUST
            </text>
          </g>
        </svg>

        {/* DOM Pin Anchors for the External Red String Network */}
        <div
          data-pin-id="map-tangier"
          className="absolute w-2 h-2 -translate-x-1 -translate-y-1 pointer-events-none"
          style={{ left: `${(178 / 340) * 100}%`, top: `${(48 / 450) * 100}%` }}
        />
        <div
          data-pin-id="map-167km"
          className="absolute w-2 h-2 -translate-x-1 -translate-y-1 pointer-events-none"
          style={{ left: `${(260 / 340) * 100}%`, top: `${(140 / 450) * 100}%` }}
        />
        <div
          data-pin-id="map-toubkal"
          className="absolute w-2 h-2 -translate-x-1 -translate-y-1 pointer-events-none"
          style={{ left: `${(165 / 340) * 100}%`, top: `${(235 / 450) * 100}%` }}
        />
        <div
          data-pin-id="map-takerkoust"
          className="absolute w-2 h-2 -translate-x-1 -translate-y-1 pointer-events-none"
          style={{ left: `${(125 / 340) * 100}%`, top: `${(345 / 450) * 100}%` }}
        />

      </div>

      {/* Map Bottom Archive Bar */}
      <div className="flex items-center justify-between text-[9px] font-typewriter text-[#4d3621] pt-1.5 px-1 border-t border-[#2d1f14]/30">
        <div>OFFICIAL KINGDOM ARCHIVE</div>
        <div className="font-bold text-[#8a1718]">5,000+ KM DOCUMENTED IN SADDLE</div>
      </div>
    </div>
  );
}

export default function PageCycling({ onSwitchTab, onOpenContact }) {
  const { socials } = portfolioData;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const corkboardRef = useRef(null);
  const [pinCoords, setPinCoords] = useState({});

  const updatePinCoords = useCallback(() => {
    if (!corkboardRef.current) return;
    const boardRect = corkboardRef.current.getBoundingClientRect();
    const pinElements = corkboardRef.current.querySelectorAll('[data-pin-id]');
    const newCoords = {};
    pinElements.forEach((el) => {
      const id = el.getAttribute('data-pin-id');
      if (!id) return;
      const rect = el.getBoundingClientRect();
      newCoords[id] = {
        x: rect.left + rect.width / 2 - boardRect.left,
        y: rect.top + rect.height / 2 - boardRect.top
      };
    });
    setPinCoords(newCoords);
  }, []);

  useEffect(() => {
    updatePinCoords();
    const t1 = setTimeout(updatePinCoords, 100);
    const t2 = setTimeout(updatePinCoords, 350);
    const t3 = setTimeout(updatePinCoords, 800);

    window.addEventListener('resize', updatePinCoords);
    let observer;
    if (window.ResizeObserver && corkboardRef.current) {
      observer = new ResizeObserver(updatePinCoords);
      observer.observe(corkboardRef.current);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', updatePinCoords);
      if (observer) observer.disconnect();
    };
  }, [updatePinCoords]);

  const stringConnections = [
    // Toubkal & Mountain cluster
    { from: 'map-toubkal', to: 'card-toubkal' },
    { from: 'card-toubkal', to: 'card-altitude' },
    { from: 'card-altitude', to: 'card-cycling' },

    // 167km Tour & Oukaïmeden cluster
    { from: 'map-167km', to: 'card-cycling' },
    { from: 'card-cycling', to: 'card-tag' },
    { from: 'card-tag', to: 'card-oukaimden' },

    // Tangier North & Left investigation cluster
    { from: 'map-tangier', to: 'card-newspaper' },
    { from: 'card-newspaper', to: 'card-fieldnote' },
    { from: 'card-newspaper', to: 'card-sticky' },

    // South Lake Takerkoust & Case File cluster
    { from: 'card-sticky', to: 'card-envelope' },
    { from: 'card-envelope', to: 'card-takerkoust' },
    { from: 'map-takerkoust', to: 'card-takerkoust' },
  ];

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
      <div
        ref={corkboardRef}
        className="corkboard-surface rounded-2xl p-3 sm:p-5 lg:p-6 text-[#fffdf8] relative overflow-hidden shadow-2xl border-4 border-[#3d2716]"
      >
        
        {/* ======================================================== */}
        {/* SVG INVESTIGATION STRINGS CONNECTING CARDS & MAP (Image 4)*/}
        {/* Pins are at every start, corner, and end of these lines!  */}
        {/* ======================================================== */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden lg:block overflow-visible">
          <defs>
            <filter id="corkboardStringShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1.5" dy="2.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.75" />
            </filter>
          </defs>
          {stringConnections.map(({ from, to }, idx) => {
            const start = pinCoords[from];
            const end = pinCoords[to];
            if (!start || !end) return null;
            return (
              <g key={`string-${idx}`} filter="url(#corkboardStringShadow)">
                {/* String drop shadow */}
                <line
                  x1={start.x}
                  y1={start.y + 2.5}
                  x2={end.x}
                  y2={end.y + 2.5}
                  stroke="rgba(0,0,0,0.5)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Main vibrant crimson red yarn */}
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="#b81b1b"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                {/* High-tension inner fiber highlight */}
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="#ff7a7a"
                  strokeWidth="0.8"
                  strokeDasharray="5 3"
                  strokeLinecap="round"
                />
                {/* Thread eyelet loops at both ends */}
                <circle cx={start.x} cy={start.y} r="2.5" fill="#800f0f" stroke="#ffe5e5" strokeWidth="0.6" />
                <circle cx={end.x} cy={end.y} r="2.5" fill="#800f0f" stroke="#ffe5e5" strokeWidth="0.6" />
              </g>
            );
          })}
        </svg>

        {/* Dense 3-Column Grid Layout without gaping gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start relative z-10">
          
          {/* ==================================================== */}
          {/* COLUMN 1: LEFT CLUSTER (Packed & nested evidence)   */}
          {/* ==================================================== */}
          <div className="lg:col-span-3 space-y-3.5">
            
            {/* 1. Lined Field Note (Red Pin INSIDE the card paper!) */}
            <div className="relative group">
              <div className="bg-[#fff9e6] p-3 pt-4 border border-[#b8a679] rounded shadow-md font-handwriting text-base text-[#2b1c11] rotate-[-2deg] relative">
                <RedPushPin pinId="card-fieldnote" className="absolute top-2 left-6" />
                <div className="text-[10px] font-typewriter font-bold text-[#8a1718] uppercase tracking-wider pl-4">
                  COLD CASE LOG
                </div>
                <div className="font-bold leading-tight mt-1">
                  "STILL NO ANSWERS. ONLY NEXT SUMMITS."
                </div>
              </div>
            </div>

            {/* 2. Newspaper: "THE ATLAS HERALD" (Red Pin INSIDE the top border!) */}
            <div className="relative -mt-1 group">
              <div className="newsprint p-3 pt-4 rounded shadow-lg text-[#1f1c19] font-typewriter space-y-1.5 rotate-[1deg] relative">
                <RedPushPin pinId="card-newspaper" className="absolute top-2.5 right-6" />
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

            {/* 3. Yellow Sticky Note (Red Pin INSIDE the sticky note!) */}
            <div className="relative -mt-1 group">
              <div className="bg-[#feee91] p-3 pt-4 rounded shadow-md text-[#2b1c11] font-handwriting text-base font-bold rotate-[-2deg] border border-[#d9c75f] relative">
                <RedPushPin pinId="card-sticky" className="absolute top-2.5 left-5" />
                <div className="text-[10px] font-typewriter font-bold text-[#72191a] uppercase pl-4">
                  INVESTIGATION NOTE:
                </div>
                <div className="mt-1 leading-snug">
                  WHY HERE? WHO KNEW?<br />
                  <span className="underline decoration-[#72191a] text-[#72191a]">PURE ENDURANCE.</span>
                </div>
              </div>
            </div>

            {/* 4. Manila Case File Pocket (Red Pin INSIDE the envelope!) */}
            <div className="relative -mt-1 group">
              <div className="bg-[#decb9e] p-3.5 pt-4 rounded-md shadow-lg border-2 border-[#5c4028]/60 text-[#2b1c11] font-typewriter text-xs rotate-[2deg] relative">
                <RedPushPin pinId="card-envelope" className="absolute top-2.5 right-6" />
                <div className="border-b border-[#5c4028]/30 pb-1.5 flex items-center justify-between">
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

            {/* 5. Polaroid 4: Lalla Takerkoust (Red Pin INSIDE top polaroid margin!) */}
            <div className="relative -mt-1 group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[3])}>
              <div className="polaroid rounded-sm rotate-[-2deg] group-hover:rotate-0 transition-transform shadow-xl relative pt-4">
                <RedPushPin pinId="card-takerkoust" className="absolute top-2 left-6 z-30" />
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
            
            {/* The Tall Morocco Map (Exact shape from Image 1 + style of Image 2) */}
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

              {/* Bottom Pinned Tape Note (Pin INSIDE tape note!) */}
              <div className="pt-1 relative inline-block">
                <span className="inline-block px-4 py-1.5 bg-[#fff8e7] text-[#2b1c11] font-handwriting text-sm sm:text-base font-bold rounded-sm shadow border border-[#cfbe95] rotate-[1deg] relative">
                  <RedPushPin pinId="card-tape" className="absolute top-1 left-2" />
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
            
            {/* 1. Polaroid 1: Toubkal Summit (Red Pin INSIDE top polaroid margin!) */}
            <div className="relative group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[0])}>
              <div className="polaroid rounded-sm rotate-[2deg] group-hover:rotate-0 transition-transform shadow-xl relative pt-4">
                <RedPushPin pinId="card-toubkal" className="absolute top-2 right-6 z-30" />
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

            {/* 2. Sticky Altitude Note (Red Pin INSIDE note paper!) */}
            <div className="relative -mt-1 group">
              <div className="bg-[#ecdcb9] p-2.5 pt-3.5 rounded shadow border border-[#a89163] text-[#2b1c11] font-typewriter text-xs rotate-[-2deg] relative">
                <RedPushPin pinId="card-altitude" className="absolute top-2 left-5" />
                <div className="text-[9px] font-bold text-[#8a1718] uppercase pl-4">ALTITUDE REPORT</div>
                <div className="font-bold text-sm text-[#1a140e] mt-0.5">4,167 METERS</div>
                <div className="text-[9px] text-[#5a4430]">OXYGEN THIN • CADENCE HIGH</div>
              </div>
            </div>

            {/* 3. Polaroid 2: Cycling 167km (Red Pin INSIDE top polaroid margin!) */}
            <div className="relative -mt-1 group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[1])}>
              <div className="polaroid rounded-sm rotate-[1deg] group-hover:rotate-0 transition-transform shadow-xl relative pt-4">
                <RedPushPin pinId="card-cycling" className="absolute top-2 left-6 z-30" />
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

            {/* 4. Evidence Tag (Red Pin INSIDE tag paper at hole!) */}
            <div className="relative -mt-1 group">
              <div className="evidence-tag p-2.5 pt-3.5 rounded shadow text-[#2b1c11] font-typewriter text-xs rotate-[-3deg] relative">
                <RedPushPin pinId="card-tag" className="absolute top-2 right-6" />
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

            {/* 5. Sticky Note: "NO WITNESSES" (Red Pin INSIDE note paper!) */}
            <div className="relative -mt-1 group">
              <div className="bg-[#fff9e6] p-2 pt-3 rounded shadow border border-[#cfbe95] text-[#2b1c11] font-handwriting text-sm font-bold rotate-[2deg] relative">
                <RedPushPin pinId="card-nowitness" className="absolute top-1.5 left-4" />
                <div className="pl-4">
                  "NO WITNESSES. NO CONFESSION. JUST PURE CADENCE."
                </div>
              </div>
            </div>

            {/* 6. Polaroid 3: Oukaïmeden (Red Pin INSIDE top polaroid margin!) */}
            <div className="relative -mt-1 group cursor-pointer" onClick={() => setSelectedPhoto(polaroids[2])}>
              <div className="polaroid rounded-sm rotate-[-1deg] group-hover:rotate-0 transition-transform shadow-xl relative pt-4">
                <RedPushPin pinId="card-oukaimden" className="absolute top-2 right-6 z-30" />
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

