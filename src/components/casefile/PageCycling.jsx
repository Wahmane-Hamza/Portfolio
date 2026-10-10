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

/* Authentic Torn / Cut Deckled Paper Edge Overlay (Image 4 antique burned paper) */
function TornPaperBorderOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden rounded-xl">
      {/* Burnt/charred perimeter shadow & vignetting */}
      <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_90px_rgba(30,12,3,0.85),inset_0_0_30px_rgba(15,5,1,0.95)]" />

      {/* Top charred edge gradient */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#1a0a02] via-[#4d2208]/60 to-transparent" />
      {/* Bottom charred edge gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-7 bg-gradient-to-t from-[#150701] via-[#4d2208]/70 to-transparent" />
      {/* Left charred edge gradient */}
      <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-[#1a0a02] via-[#4d2208]/50 to-transparent" />
      {/* Right charred edge gradient */}
      <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-[#1a0a02] via-[#4d2208]/50 to-transparent" />

      {/* Jagged, crumbling, torn paper cuts along all four margins (Image 4 style) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="charredFringe">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Top torn crumbling edge */}
        <path
          d="M 0,0 L 45,6 L 90,2 L 150,8 L 220,1 L 310,9 L 380,3 L 460,7 L 540,2 L 620,8 L 710,1 L 790,9 L 870,3 L 940,7 L 1000,0 L 1000,12 L 930,8 L 860,14 L 780,6 L 700,13 L 610,6 L 530,12 L 450,5 L 370,13 L 290,5 L 210,12 L 140,5 L 80,11 L 0,6 Z"
          fill="#140702"
          opacity="0.9"
        />

        {/* Bottom torn crumbling edge */}
        <path
          d="M 0,1000 L 55,992 L 120,997 L 195,990 L 280,996 L 360,989 L 450,997 L 530,990 L 620,996 L 705,988 L 795,997 L 880,991 L 950,996 L 1000,1000 L 1000,985 L 940,990 L 870,982 L 785,991 L 695,983 L 610,990 L 520,983 L 440,990 L 350,982 L 270,990 L 185,983 L 110,989 L 45,984 L 0,988 Z"
          fill="#120601"
          opacity="0.95"
        />

        {/* Left jagged torn cut */}
        <path
          d="M 0,0 L 8,50 L 2,120 L 9,210 L 3,310 L 10,420 L 2,520 L 9,630 L 3,740 L 10,850 L 2,940 L 0,1000 L 12,940 L 6,840 L 14,730 L 6,620 L 13,510 L 6,400 L 14,290 L 7,180 L 13,80 L 0,0 Z"
          fill="#190902"
          opacity="0.88"
        />

        {/* Right jagged torn cut */}
        <path
          d="M 1000,0 L 992,60 L 998,140 L 991,240 L 997,350 L 990,460 L 998,570 L 991,680 L 997,790 L 990,890 L 998,960 L 1000,1000 L 986,950 L 993,870 L 986,770 L 993,660 L 985,550 L 993,440 L 986,330 L 993,220 L 986,110 L 993,30 L 1000,0 Z"
          fill="#190902"
          opacity="0.88"
        />

        {/* Scorched burned holes and aged paper singe marks (Image 4 details) */}
        {/* Top left burn notch */}
        <ellipse cx="28" cy="22" rx="14" ry="9" fill="#0d0401" opacity="0.85" />
        <ellipse cx="28" cy="22" rx="20" ry="14" fill="none" stroke="#5a270b" strokeWidth="3" opacity="0.6" />
        
        {/* Bottom right burn notch */}
        <ellipse cx="972" cy="975" rx="16" ry="11" fill="#0d0401" opacity="0.85" />
        <ellipse cx="972" cy="975" rx="22" ry="16" fill="none" stroke="#5a270b" strokeWidth="3" opacity="0.6" />

        {/* Top right singe mark */}
        <ellipse cx="965" cy="35" rx="10" ry="6" fill="#170802" opacity="0.75" />
        
        {/* Mid left tear notch */}
        <path d="M 0,480 Q 22,488 12,498 Q 0,505 0,505 Z" fill="#0f0501" opacity="0.9" />

        {/* Mid right tear notch */}
        <path d="M 1000,320 Q 980,326 988,338 Q 1000,344 1000,344 Z" fill="#0f0501" opacity="0.9" />
      </svg>
    </div>
  );
}


/* Tall Vintage Illustrated Morocco Map (Matching Image 1 outline + Image 2 Alberta style + Image 3 trail) */
function MoroccoMap() {
  return (
    <div className="relative bg-[#eee5ce] border-4 border-[#2d1f14] rounded shadow-2xl p-2 sm:p-2.5 overflow-hidden select-none">
      {/* Map Header Plate (Deep navy banner matching Image 2 ALBERTA header) */}
      <div className="flex items-center justify-between gap-2 border-b-2 border-[#2d1f14] pb-2 mb-2 px-1">
        <div className="bg-[#182329] text-[#f7eed6] px-3 sm:px-4 py-1 text-sm sm:text-base font-poster tracking-[0.22em] font-black uppercase rounded-sm border border-[#ede1c7] whitespace-nowrap shrink-0">
          MOROCCO
        </div>
        <div className="flex items-center gap-1.5 font-typewriter text-[9px] sm:text-[10px] text-[#4d3621] font-bold whitespace-nowrap shrink-0">
          <Compass className="w-3.5 h-3.5 text-[#8a1718]" />
          <span>31°47'N 7°59'W • EXPEDITION MAP</span>
        </div>
      </div>

      {/* Vector Map Canvas - Aspect ratio matches morocco_vintage_outline.png (560 x 585) */}
      <div className="relative aspect-[560/585] w-full overflow-hidden rounded bg-[#faf2dc] border border-[#2d1f14]/30 shadow-inner">
        
        <svg viewBox="0 0 560 585" className="absolute inset-0 w-full h-full z-0">
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
          <rect width="560" height="585" fill="url(#parchmentWash)" />

          {/* Double Frame Borders */}
          <rect x="6" y="6" width="548" height="573" stroke="#332415" strokeWidth="1.5" fill="none" />
          <rect x="10" y="10" width="540" height="565" stroke="#705537" strokeWidth="0.6" strokeDasharray="5 3" fill="none" />

          {/* Atlantic Ocean Wave Area */}
          <path d="M 10 10 L 375 10 L 335 105 L 250 215 L 220 300 L 10 575 Z" fill="url(#oceanWaves)" />
          
          {/* Compass Rose (Positioned in Atlantic Ocean, clear of land) */}
          <g transform="translate(90, 85)">
            <circle cx="0" cy="0" r="22" fill="#fcf6e6" stroke="#4a3622" strokeWidth="1" opacity="0.95" />
            <polygon points="0,-18 4,-4 18,0 4,4 0,18 -4,4 -18,0 -4,-4" fill="#543c25" />
            <polygon points="0,-18 0,0 -4,-4" fill="#9c754b" />
            <polygon points="0,18 0,0 4,4" fill="#9c754b" />
            <polygon points="18,0 0,0 4,-4" fill="#9c754b" />
            <polygon points="-18,0 0,0 -4,4" fill="#9c754b" />
            <text x="-4" y="-21" fill="#2b1a0d" fontSize="9" fontWeight="bold" fontFamily="'Special Elite', monospace">N</text>
            <text x="-3.5" y="28" fill="#2b1a0d" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">S</text>
            <text x="21" y="3" fill="#2b1a0d" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">E</text>
            <text x="-27" y="3" fill="#2b1a0d" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">W</text>
          </g>

          {/* Sea Labels */}
          <text x="120" y="240" fill="#917c56" fontSize="11" fontFamily="'Special Elite', monospace" letterSpacing="4" transform="rotate(-55 120 240)">
            ATLANTIC OCEAN
          </text>
          <text x="440" y="25" fill="#917c56" fontSize="9" fontFamily="'Special Elite', monospace" letterSpacing="2.5">
            MEDITERRANEAN SEA
          </text>

          {/* Regional Contour Labels */}
          <text x="435" y="60" fill="#544333" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1">
            RIF MOUNTAINS
          </text>
          <text x="100" y="440" fill="#544333" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace" letterSpacing="1.5">
            SOUTHERN PROVINCES
          </text>

          {/* Layer 2: The Exact Morocco Regional Outline from User (Image 1 in Vintage Sepia Ink) */}
          <image
            href="./trips/morocco_vintage_outline.png"
            x="0"
            y="0"
            width="560"
            height="585"
            preserveAspectRatio="none"
            opacity="0.92"
          />

          {/* High Atlas Mountains Chain (Positioned precisely along the real High Atlas ridge) */}
          <g stroke="#1d2721" strokeWidth="0.8">
            {/* Peak 1 (Toubkal Massive) */}
            <polygon points="305,200 318,180 331,200" fill="#2d3d34" />
            <polygon points="318,180 322,180 331,200 318,200" fill="#1b2620" />
            <polygon points="313,188 318,180 323,188" fill="#ffffff" stroke="none" />

            {/* Peak 2 (Oukaimeden) */}
            <polygon points="320,195 329,177 338,195" fill="#394d42" />
            <polygon points="325,184 329,177 333,184" fill="#ffffff" stroke="none" />

            {/* Peak 3 (Tichka Pass / Central High Atlas) */}
            <polygon points="335,198 350,178 365,198" fill="#2d3d34" />
            <polygon points="350,178 354,178 365,198 350,198" fill="#1b2620" />
            <polygon points="345,185 350,178 355,185" fill="#ffffff" stroke="none" />

            {/* Peak 4 (Eastern Atlas / Mgoun) */}
            <polygon points="362,192 376,172 390,192" fill="#394d42" />
            <polygon points="372,180 376,172 380,180" fill="#ffffff" stroke="none" />

            {/* Peak 5 (Middle Atlas Ridge) */}
            <polygon points="385,160 400,140 415,160" fill="#2d3d34" />
            <polygon points="395,148 400,140 405,148" fill="#ffffff" stroke="none" />
          </g>

          <text x="320" y="166" fill="#223028" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace" fontStyle="italic" letterSpacing="0.8">
            HIGH ATLAS MOUNTAINS
          </text>

          {/* Geographically Accurate City Waypoints */}
          {/* 1. Tangier (Strait of Gibraltar tip) */}
          <circle cx="400" cy="18" r="3.2" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="408" y="21" fill="#1f1a14" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
            Tangier
          </text>

          {/* 2. Rabat (Capital on Atlantic Coast) */}
          <circle cx="360" cy="80" r="3.2" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="368" y="83" fill="#1f1a14" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
            Rabat
          </text>

          {/* 3. Casablanca (Coast south of Rabat) */}
          <circle cx="342" cy="98" r="3.2" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="272" y="101" fill="#1f1a14" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
            Casablanca
          </text>

          {/* 4. Fès (Inland north) */}
          <circle cx="415" cy="82" r="3" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="423" y="85" fill="#1f1a14" fontSize="8" fontWeight="bold" fontFamily="'Special Elite', monospace">
            Fès
          </text>

          {/* 5. Marrakech (Inland Haouz Plain, HQ) */}
          <circle cx="315" cy="170" r="4.5" fill="#1f1a14" stroke="#ffffff" strokeWidth="1.5" />
          <text x="220" y="173" fill="#1f1a14" fontSize="9" fontWeight="bold" fontFamily="'Special Elite', monospace">
            ★ Marrakech (HQ)
          </text>

          {/* 6. Ouarzazate (Draa Valley, across Atlas, firmly inside Morocco) */}
          <circle cx="375" cy="195" r="3.2" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="383" y="198" fill="#1f1a14" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
            Ouarzazate
          </text>

          {/* 7. Agadir (Souss Coast) */}
          <circle cx="252" cy="210" r="3.2" fill="#1f1a14" stroke="#ffffff" strokeWidth="1" />
          <text x="208" y="213" fill="#1f1a14" fontSize="8.5" fontWeight="bold" fontFamily="'Special Elite', monospace">
            Agadir
          </text>

          {/* Layer 3: THE WINDING EXPEDITION RED STRING (Image 3 style) ON TOP OF THE MAP */}
          {/* Smooth serpentine curve connecting the 4 key stops following the real geography */}
          <path
            d="M 400 18 
               C 385 45, 365 60, 360 80
               C 355 90, 345 92, 342 98
               C 330 125, 320 145, 315 170
               C 335 178, 350 185, 355 192
               C 345 200, 325 202, 318 190
               C 310 182, 305 180, 302 178"
            fill="none"
            stroke="#b81b1b"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#stringShadow)"
          />
          <path
            d="M 400 18 
               C 385 45, 365 60, 360 80
               C 355 90, 345 92, 342 98
               C 330 125, 320 145, 315 170
               C 335 178, 350 185, 355 192
               C 345 200, 325 202, 318 190
               C 310 182, 305 180, 302 178"
            fill="none"
            stroke="#ff7a7a"
            strokeWidth="0.9"
            strokeDasharray="4 3"
          />

          {/* 3D RED PUSHPINS AT THE BEGINNING, TURNS, AND END OF THE EXPEDITION TRAIL */}
          {/* Stop 1: Tangier (Top-North) */}
          <g transform="translate(400, 18)">
            <circle cx="1" cy="2" r="6" fill="#000000" opacity="0.45" />
            <circle cx="0" cy="0" r="5.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
          </g>

          {/* Stop 2: High Atlas Tour / Tichka Pass to Ouarzazate (167km Tour Pass) */}
          <g transform="translate(355, 192)">
            <circle cx="1" cy="2" r="6" fill="#000000" opacity="0.45" />
            <circle cx="0" cy="0" r="5.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
            <rect x="8" y="-6" width="88" height="13" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="12" y="3.5" fill="#8a1718" fontSize="7" fontWeight="bold" fontFamily="'Special Elite', monospace">
              167KM TOUR PASS
            </text>
          </g>

          {/* Stop 3: Toubkal Summit (4,167m) & Oukaimeden */}
          <g transform="translate(318, 190)">
            <circle cx="1" cy="2" r="6.5" fill="#000000" opacity="0.5" />
            <circle cx="0" cy="0" r="6" fill="#c91818" stroke="#ffe5e5" strokeWidth="1.2" />
            <circle cx="-1.8" cy="-1.8" r="2" fill="#ffffff" />
            <rect x="-115" y="6" width="110" height="13" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="-111" y="15.5" fill="#8a1718" fontSize="7" fontWeight="bold" fontFamily="'Special Elite', monospace">
              TOUBKAL SUMMIT (4,167m)
            </text>
          </g>

          {/* Stop 4: Lalla Takerkoust Lake & Barrage */}
          <g transform="translate(302, 178)">
            <circle cx="1" cy="2" r="6" fill="#000000" opacity="0.45" />
            <circle cx="0" cy="0" r="5.5" fill="#c91818" stroke="#ffe5e5" strokeWidth="1" />
            <circle cx="-1.5" cy="-1.5" r="1.8" fill="#ffffff" />
            <rect x="-105" y="-14" width="98" height="13" fill="#fffdf8" stroke="#2b1c11" strokeWidth="0.8" rx="2" />
            <text x="-101" y="-4.5" fill="#2b1c11" fontSize="6.8" fontWeight="bold" fontFamily="'Special Elite', monospace">
              LALLA TAKERKOUST
            </text>
          </g>
        </svg>

        {/* DOM Pin Anchors for the External Red String Network */}
        <div
          data-pin-id="map-tangier"
          className="absolute w-2 h-2 -translate-x-1 -translate-y-1 pointer-events-none"
          style={{ left: `${(400 / 560) * 100}%`, top: `${(18 / 585) * 100}%` }}
        />
        <div
          data-pin-id="map-167km"
          className="absolute w-2 h-2 -translate-x-1 -translate-y-1 pointer-events-none"
          style={{ left: `${(355 / 560) * 100}%`, top: `${(192 / 585) * 100}%` }}
        />
        <div
          data-pin-id="map-toubkal"
          className="absolute w-2 h-2 -translate-x-1 -translate-y-1 pointer-events-none"
          style={{ left: `${(318 / 560) * 100}%`, top: `${(190 / 585) * 100}%` }}
        />
        <div
          data-pin-id="map-takerkoust"
          className="absolute w-2 h-2 -translate-x-1 -translate-y-1 pointer-events-none"
          style={{ left: `${(302 / 560) * 100}%`, top: `${(178 / 585) * 100}%` }}
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
  const [selectedEvidence, setSelectedEvidence] = useState(null);

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

    // Central Reconnaissance Rig Artifact
    { from: 'map-toubkal', to: 'card-rig' },
    { from: 'card-rig', to: 'card-envelope' },
    { from: 'card-rig', to: 'card-tag' },
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
      {/* THE ANCIENT TORN DOCUMENT (Image 4 antique aged parchment) */}
      {/* ======================================================== */}
      <div
        ref={corkboardRef}
        className="ancient-parchment-doc rounded-xl p-3 sm:p-5 lg:p-6 text-[#2b1c11] relative overflow-hidden shadow-2xl border-2 border-[#4d260f]"
      >
        <TornPaperBorderOverlay />
        
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
            
            {/* 1. Lined Field Note (Clickable -> Opens Modal!) */}
            <div
              className="relative group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'fieldnote',
                id: 'card-fieldnote',
                title: 'COLD CASE INVESTIGATION LOG',
                tag: 'RESTRICTED ARCHIVE // NOTE 01',
                badge: 'CONFIDENTIAL',
                quote: '"STILL NO ANSWERS. ONLY NEXT SUMMITS."',
                notes: 'Field reconnaissance conducted across High Atlas elevations. Route conditions: intense wind chill, gravel hairpins, relentless ascending gradient. Total solo endurance.'
              })}
            >
              <div className="bg-[#fff9e6] p-3 pt-4 border border-[#b8a679] rounded shadow-md font-handwriting text-base text-[#2b1c11] rotate-[-2deg] relative group-hover:shadow-xl">
                <RedPushPin pinId="card-fieldnote" className="absolute top-2 left-6" />
                <div className="text-[10px] font-typewriter font-bold text-[#8a1718] uppercase tracking-wider pl-4">
                  COLD CASE LOG
                </div>
                <div className="font-bold leading-tight mt-1">
                  "STILL NO ANSWERS. ONLY NEXT SUMMITS."
                </div>
                <div className="text-[9px] font-typewriter text-[#8a6e45] text-right mt-1 opacity-70 group-hover:opacity-100">
                  [CLICK TO ENLARGE]
                </div>
              </div>
            </div>

            {/* 2. Newspaper: "THE ATLAS HERALD" (Clickable -> Opens Modal!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'newspaper',
                id: 'card-newspaper',
                title: 'THE ATLAS HERALD • SPECIAL EDITION',
                tag: 'PRESS DISPATCH • OCT 2026',
                header: 'THE ATLAS HERALD • ARCHIVAL PRESS CLIPPING',
                headline: 'CYCLIST REACHES 4,167M TOUBKAL SUMMIT',
                subhead: '167 KM COMPLETED OVER 2 DAYS OF UNRELENTING ATLAS ROADS',
                article: 'In an extraordinary display of stamina and mental grit, Moroccan endurance cyclist Hamza Wahmane conquered the demanding High Atlas corridor, logging 167 kilometers across two punishing days before pressing upward to Mount Toubkal (4,167m) and Mount Oukaïmeden (3,200m). Navigating steep mountain passes, biting high-altitude winds, and isolated gravel tracks, the self-supported expedition stands as a testament to pure resilience and raw athleticism.'
              })}
            >
              <div className="newsprint p-3 pt-4 rounded shadow-lg text-[#1f1c19] font-typewriter space-y-1.5 rotate-[1deg] relative group-hover:shadow-xl">
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

                <div className="flex items-center justify-between text-[9px]">
                  <span className="text-[#72191a] font-bold uppercase tracking-wider">RCMP DISPATCH LOG</span>
                  <span className="text-[#8a6e45] opacity-75 group-hover:opacity-100 font-bold">[CLICK TO ENLARGE]</span>
                </div>
              </div>
            </div>

            {/* 3. Yellow Sticky Note (Clickable -> Opens Modal!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'stickynote',
                id: 'card-sticky',
                title: 'INVESTIGATION OBSERVATION',
                tag: 'FIELD MANUSCRIPT NOTE',
                quote: '"WHY HERE? WHO KNEW? PURE ENDURANCE."',
                notes: 'Written after 8 hours in the saddle climbing towards the Atlas ridge. No cheering crowds, no support vehicles. Just pedal stroke after pedal stroke.'
              })}
            >
              <div className="bg-[#feee91] p-3 pt-4 rounded shadow-md text-[#2b1c11] font-handwriting text-base font-bold rotate-[-2deg] border border-[#d9c75f] relative group-hover:shadow-xl">
                <RedPushPin pinId="card-sticky" className="absolute top-2.5 left-5" />
                <div className="text-[10px] font-typewriter font-bold text-[#72191a] uppercase pl-4">
                  INVESTIGATION NOTE:
                </div>
                <div className="mt-1 leading-snug">
                  WHY HERE? WHO KNEW?<br />
                  <span className="underline decoration-[#72191a] text-[#72191a]">PURE ENDURANCE.</span>
                </div>
                <div className="text-[9px] font-typewriter text-[#72191a]/70 text-right mt-1 font-bold">
                  [CLICK TO ENLARGE]
                </div>
              </div>
            </div>

            {/* 4. Manila Case File Pocket (Clickable -> Opens Modal!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'casefile',
                id: 'card-envelope',
                title: 'EXPEDITION INTELLIGENCE CASE: 014-EXP',
                tag: 'CLASSIFIED CASE DOSSIER',
                subject: 'HAMZA WAHMANE',
                location: 'HIGH ATLAS, MOROCCO',
                status: '100% UNSTOPPABLE',
                badge: 'CONFIDENTIAL',
                details: [
                  'RECORD 01: Mount Toubkal Summit (4,167m) — Winter ascent completed.',
                  'RECORD 02: 167 km Road & Gravel Cycle Tour — 48-hour continuous stage run.',
                  'RECORD 03: Mount Oukaïmeden Ascent (3,200m) — High altitude peak ride.',
                  'RECORD 04: Lalla Takerkoust Lake & Dam Trail — Desert gravel circuit completed.'
                ]
              })}
            >
              <div className="bg-[#decb9e] p-3.5 pt-4 rounded-md shadow-lg border-2 border-[#5c4028]/60 text-[#2b1c11] font-typewriter text-xs rotate-[2deg] relative group-hover:shadow-xl">
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
                <div className="text-[9px] text-[#5c4028] text-right mt-1 font-bold opacity-75 group-hover:opacity-100">
                  [INSPECT FULL CASE FILE]
                </div>
              </div>
            </div>

            {/* 5. Polaroid 4: Lalla Takerkoust (Red Pin INSIDE top polaroid margin!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({ type: 'polaroid', ...polaroids[3] })}
            >
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

            {/* Field Reconnaissance & Expedition Rig Dossier (Clickable -> Opens Modal!) */}
            <div
              className="relative group pt-1 cursor-pointer transition-transform duration-200 hover:scale-[1.015]"
              onClick={() => setSelectedEvidence({
                type: 'rig',
                id: 'card-rig',
                title: 'FIELD RECONNAISSANCE & EXPEDITION SPEC',
                tag: 'OFFICIAL TECHNICAL DOSSIER',
                badge: 'VERIFIED DISPATCH',
                mapImg: './trips/vintage_folded_map.png',
                bikeImg: './trips/vintage_bicycle_sketch.png',
                mapSpecs: [
                  'ROUTE: Marrakech → High Atlas passes',
                  'TERRAIN: Rough gravel, mountain single-track & rocky scree',
                  'BEARING: 31°12\'N • Elevation Gain +3,200m'
                ],
                bikeSpecs: [
                  'SETUP: High-Altitude All-Terrain Touring Spec',
                  'ENDURANCE: 167 km stage run over 2 consecutive days',
                  'SADDLE: Proven under extreme Moroccan Atlas conditions'
                ],
                quote: '"SOME ROADS DON\'T FADE. THEY TEST YOU."'
              })}
            >
              <div className="bg-[#f4ebd0] p-3.5 sm:p-4 rounded-md shadow-2xl border-2 border-[#54381e] text-[#241508] relative rotate-[-0.5deg]">
                {/* Red pushpin inside card top margin */}
                <RedPushPin pinId="card-rig" className="absolute top-2 left-6 z-30" />

                {/* Header Strip */}
                <div className="border-b-2 border-[#54381e]/30 pb-2 mb-3 pl-8 sm:pl-10 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="font-poster text-xs sm:text-sm font-black tracking-widest uppercase text-[#1c1209]">
                      FIELD RECONNAISSANCE & EXPEDITION SPEC
                    </div>
                    <div className="font-typewriter text-[9px] sm:text-[10px] text-[#694828] font-bold">
                      ARCHIVE REF: MA-CYCLING-167KM • HIGH ATLAS CORRIDOR
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-typewriter text-[#8a1718] font-bold opacity-75 group-hover:opacity-100">[CLICK TO ENLARGE]</span>
                    <div className="border-2 border-[#8a1718] text-[#8a1718] font-poster text-[10px] sm:text-[11px] px-2 py-0.5 rounded tracking-wider uppercase rotate-1 font-black bg-[#8a1718]/5">
                      VERIFIED DISPATCH
                    </div>
                  </div>
                </div>

                {/* Two-Column Artifacts: Folded Mini Map (Image 3) + Adventure Bicycle (Image 2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                  
                  {/* Item 1: Folded Mini Trail Map (Image 3) */}
                  <div className="bg-[#ede1c2] p-2.5 rounded border border-[#6b4728]/40 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#6b4728]/25 pb-1 mb-2">
                        <span className="font-poster text-[11px] tracking-wider uppercase text-[#1a1107] font-bold">
                          TOPO TRAIL MAP
                        </span>
                        <span className="font-typewriter text-[8.5px] text-[#8a1718] font-bold">
                          QUADRANT 3
                        </span>
                      </div>
                      
                      <div className="bg-[#f7eed6] border border-[#a88a5e]/50 rounded p-1 flex items-center justify-center overflow-hidden mb-2 shadow-inner">
                        <img
                          src="./trips/vintage_folded_map.png"
                          alt="Vintage Folded Expedition Trail Map"
                          className="w-full max-h-36 object-contain filter contrast-110 sepia-[0.3]"
                        />
                      </div>
                    </div>

                    <div className="font-typewriter text-[9.5px] text-[#3d2817] space-y-0.5 leading-tight">
                      <div><strong className="text-[#1a1107]">ROUTE:</strong> MARRAKECH → HIGH ATLAS</div>
                      <div><strong className="text-[#1a1107]">TERRAIN:</strong> GRAVEL & MOUNTAIN TRACK</div>
                      <div><strong className="text-[#1a1107]">BEARING:</strong> 31°12'N • GAIN +3,200M</div>
                    </div>
                  </div>

                  {/* Item 2: Vintage Adventure Bicycle Rig (Image 2) */}
                  <div className="bg-[#ede1c2] p-2.5 rounded border border-[#6b4728]/40 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#6b4728]/25 pb-1 mb-2">
                        <span className="font-poster text-[11px] tracking-wider uppercase text-[#1a1107] font-bold">
                          ENDURANCE RIG SPEC
                        </span>
                        <span className="font-typewriter text-[8.5px] text-[#8a1718] font-bold">
                          167 KM STAGE
                        </span>
                      </div>
                      
                      <div className="bg-[#f7eed6] border border-[#a88a5e]/50 rounded p-1 flex items-center justify-center overflow-hidden mb-2 shadow-inner">
                        <img
                          src="./trips/vintage_bicycle_sketch.png"
                          alt="Vintage Expedition Bicycle Rig Sketch"
                          className="w-full max-h-36 object-contain filter contrast-110 sepia-[0.3]"
                        />
                      </div>
                    </div>

                    <div className="font-typewriter text-[9.5px] text-[#3d2817] space-y-0.5 leading-tight">
                      <div><strong className="text-[#1a1107]">SETUP:</strong> HIGH-ALTITUDE TOURING SPEC</div>
                      <div><strong className="text-[#1a1107]">ENDURANCE:</strong> 167 KM (2 CONSECUTIVE DAYS)</div>
                      <div><strong className="text-[#1a1107]">SADDLE:</strong> TESTED UNDER EXTREME WINDS</div>
                    </div>
                  </div>

                </div>

                {/* Bottom Footer Bar with Quote */}
                <div className="mt-3 pt-2.5 border-t border-[#54381e]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="font-handwriting text-sm sm:text-base text-[#3d2412] font-bold">
                    "SOME ROADS DON'T FADE. THEY TEST YOU."
                  </div>
                  <div className="font-typewriter text-[9.5px] text-[#8a1718] font-bold uppercase tracking-wider">
                    [DISPATCH LOG BELOW ⬇]
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Instagram Field Archive Dispatch (User Image 4 Authentic Taped Parchment) */}
            <div
              className="relative group cursor-pointer transition-transform duration-200 hover:scale-[1.01] hover:z-30 filter drop-shadow-[0_8px_18px_rgba(25,12,4,0.18)]"
              onClick={() => setSelectedEvidence({
                type: 'instagram',
                id: 'card-instagram',
                title: 'EXPEDITION INSTAGRAM ARCHIVE // @WAHMANE.HAMZA',
                tag: 'OFFICIAL FIELD DISPATCH LOG',
                quote: '"SOME ROADS DON\'T FADE. THEY TEST YOU."',
                notes: 'Photographic trail evidence, mountain pass telemetry, and endurance expedition logs documented in real time across the High Atlas, Toubkal, and Moroccan peaks.',
                link: socials.instagram
              })}
            >
              {/* Authentic Taped Parchment Background (User Image 4 with Real Masking Tape) */}
              <div className="relative min-h-[170px] p-4 sm:p-5 flex flex-col justify-between">
                <img
                  src="./assets/insta_paper_scrap.png"
                  alt="Instagram Taped Parchment Scrap"
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none filter contrast-105"
                />

                {/* Content typed directly on the taped parchment */}
                <div className="relative z-10 space-y-1.5 pt-1 pl-12 sm:pl-16 pr-3">
                  <div className="flex items-center justify-between border-b border-[#5c3e21]/30 pb-1.5">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-[#8a1718]" />
                      <span className="font-poster text-xs sm:text-sm font-black uppercase text-[#1a1107] tracking-wider">
                        INSTAGRAM FIELD ARCHIVE
                      </span>
                    </div>
                    <span className="font-typewriter text-[9px] text-[#8a1718] font-bold border border-[#8a1718] px-1.5 py-0.5 uppercase rotate-1 bg-[#8a1718]/5 shrink-0">
                      LIVE LOG
                    </span>
                  </div>

                  <p className="font-typewriter text-[11px] sm:text-xs text-[#2e1d0f] font-medium leading-relaxed pt-0.5">
                    Continuous photographic trail evidence, mountain passes, and endurance cycling logs documented on location across the Atlas.
                  </p>
                </div>

                {/* Bottom Bar typed on the paper */}
                <div className="relative z-10 pt-2 mt-2 border-t border-[#5c3e21]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pl-3 pr-2">
                  <span className="font-typewriter text-[10px] text-[#4a321b] font-bold">
                    DISPATCH REF: @WAHMANE.HAMZA
                  </span>
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#8a1718] hover:bg-[#6e1011] text-[#fbf5e5] font-typewriter text-[11px] font-bold uppercase tracking-wider rounded-sm shadow transition-all hover:scale-105 shrink-0"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>OPEN INSTAGRAM ARCHIVE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ==================================================== */}
          {/* COLUMN 3: RIGHT CLUSTER (Packed & nested evidence)  */}
          {/* ==================================================== */}
          <div className="lg:col-span-3 space-y-3.5">
            
            {/* 1. Polaroid 1: Toubkal Summit (Clickable -> Opens Modal!) */}
            <div
              className="relative group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'polaroid',
                ...polaroids[0],
                notes: 'Summit of Jbel Toubkal (4,167m) — the highest peak in North Africa and the Atlas Mountain chain. Pushed through sub-zero winds and treacherous scree above the clouds.'
              })}
            >
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

            {/* 2. Sticky Altitude Note (Clickable -> Opens Modal!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'altitude',
                id: 'card-altitude',
                title: 'ALTIMETER TELEMETRY REPORT',
                tag: 'HIGH-ALTITUDE SENSOR LOG',
                altitude: '4,167 METERS',
                notes: 'Barometric pressure dropped severely above 3,500m. Oxygen saturation low, cadence sustained despite freezing Atlas headwind. Altimeter confirmed apex elevation at 4,167m.'
              })}
            >
              <div className="bg-[#ecdcb9] p-2.5 pt-3.5 rounded shadow border border-[#a89163] text-[#2b1c11] font-typewriter text-xs rotate-[-2deg] relative group-hover:shadow-xl">
                <RedPushPin pinId="card-altitude" className="absolute top-2 left-5" />
                <div className="text-[9px] font-bold text-[#8a1718] uppercase pl-4">ALTITUDE REPORT</div>
                <div className="font-bold text-sm text-[#1a140e] mt-0.5">4,167 METERS</div>
                <div className="text-[9px] text-[#5a4430]">OXYGEN THIN • CADENCE HIGH</div>
                <div className="text-[9px] text-[#8a1718] text-right font-bold opacity-75 group-hover:opacity-100">[ENLARGE]</div>
              </div>
            </div>

            {/* 3. Polaroid 2: Cycling 167km (Clickable -> Opens Modal!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'polaroid',
                ...polaroids[1],
                notes: 'Continuous 167 km route ridden over 2 consecutive days across steep Atlas foothills, mountain passes, and desert plateaus. Zero external vehicle support.'
              })}
            >
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

            {/* 4. Evidence Tag (Clickable -> Opens Modal!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'evidencetag',
                id: 'card-tag',
                title: 'OFFICIAL EVIDENCE TAG // 27B-7',
                tag: 'SEALED EVIDENCE ARTIFACT',
                location: 'HIGH ATLAS MOUNTAIN PASSES',
                notes: 'Verified field reconnaissance artifacts. Documented pedal logs, GPS trail breadcrumbs, and summit photo proof. 100% self-supported solo logistics.'
              })}
            >
              <div className="evidence-tag p-2.5 pt-3.5 rounded shadow text-[#2b1c11] font-typewriter text-xs rotate-[-3deg] relative group-hover:shadow-xl">
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
                <div className="text-[9px] text-[#72191a] text-right font-bold opacity-75 group-hover:opacity-100">[ENLARGE]</div>
              </div>
            </div>

            {/* 5. Sticky Note: "NO WITNESSES" (Clickable -> Opens Modal!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'stickynote',
                id: 'card-nowitness',
                title: 'FIELD CADENCE PHILOSOPHY',
                tag: 'PERSONAL EXPEDITION NOTE',
                quote: '"NO WITNESSES. NO CONFESSION. JUST PURE CADENCE."',
                notes: 'The authentic athlete tests himself when nobody is watching. In the desolate passes of the Atlas, honesty is measured only in distance and elevation.'
              })}
            >
              <div className="bg-[#fff9e6] p-2 pt-3 rounded shadow border border-[#cfbe95] text-[#2b1c11] font-handwriting text-sm font-bold rotate-[2deg] relative group-hover:shadow-xl">
                <RedPushPin pinId="card-nowitness" className="absolute top-1.5 left-4" />
                <div className="pl-4">
                  "NO WITNESSES. NO CONFESSION. JUST PURE CADENCE."
                </div>
                <div className="text-[9px] font-typewriter text-[#8a6e45] text-right mt-1 font-bold opacity-75 group-hover:opacity-100">[ENLARGE]</div>
              </div>
            </div>

            {/* 6. Polaroid 3: Oukaïmeden (Clickable -> Opens Modal!) */}
            <div
              className="relative -mt-1 group cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:z-30"
              onClick={() => setSelectedEvidence({
                type: 'polaroid',
                ...polaroids[2],
                notes: 'Climb to Mount Oukaïmeden (3,200m) — resting high above the sea of clouds in the Moroccan Atlas. Steep switchbacks and alpine isolation.'
              })}
            >
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

      {/* ======================================================== */}
      {/* EXPEDITION EVIDENCE INSPECTION LIGHTBOX (Image 5 style)  */}
      {/* Enlarges ANY card clicked on Page 3 for full readability */}
      {/* ======================================================== */}
      {selectedEvidence && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-3 sm:p-5 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedEvidence(null)}
        >
          <div
            className="relative max-w-xl w-full bg-[#fbf5e5] p-5 sm:p-7 rounded-lg shadow-2xl space-y-4 font-typewriter text-[#2b1c11] border-2 border-[#54381e] my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedEvidence(null)}
              className="absolute top-3.5 right-3.5 p-1.5 bg-[#2b1c11] text-[#fbf5e5] rounded-full hover:bg-[#8a1718] transition-colors shadow z-30"
              title="Close Evidence Viewer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header Strip */}
            <div className="border-b-2 border-[#54381e]/30 pb-2.5 flex items-center justify-between pr-8">
              <div>
                <span className="text-[10px] font-bold text-[#8a1718] uppercase tracking-widest block">
                  {selectedEvidence.tag || "EVIDENCE ARCHIVE // 014-EXP"}
                </span>
                <h3 className="font-poster text-lg sm:text-xl font-black uppercase text-[#1a1209] tracking-wide mt-0.5">
                  {selectedEvidence.title}
                </h3>
              </div>
              {selectedEvidence.badge && (
                <span className="font-typewriter text-[9.5px] font-bold text-[#8a1718] border border-[#8a1718] px-2 py-0.5 uppercase tracking-wider rotate-1 bg-[#8a1718]/5">
                  {selectedEvidence.badge}
                </span>
              )}
            </div>

            {/* CONTENT BASED ON EVIDENCE TYPE */}
            {/* 1. Polaroid Photo Type */}
            {selectedEvidence.type === 'polaroid' && (
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-black overflow-hidden rounded border border-[#3d2716]/40 shadow-inner">
                  <img
                    src={selectedEvidence.img}
                    alt={selectedEvidence.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#ede1c4] p-3 rounded border border-[#8c6f48]/40 space-y-1">
                  {selectedEvidence.elevation && (
                    <div className="text-xs font-bold text-[#8a1718] uppercase">
                      ELEVATION / TIME: {selectedEvidence.elevation}
                    </div>
                  )}
                  <p className="font-handwriting text-xl text-[#1f140b] font-bold">
                    "{selectedEvidence.caption}"
                  </p>
                  {selectedEvidence.notes && (
                    <p className="text-xs text-[#422e1b] font-typewriter pt-1 leading-relaxed border-t border-[#8c6f48]/30">
                      {selectedEvidence.notes}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* 2. Newspaper Clipping Type */}
            {selectedEvidence.type === 'newspaper' && (
              <div className="newsprint p-4 sm:p-5 rounded border border-[#a89063] space-y-3">
                <div className="border-b-2 border-[#1f1c19] pb-1.5 flex justify-between items-baseline text-xs text-[#5c4028] font-bold">
                  <span>{selectedEvidence.header || "THE ATLAS HERALD • EXTRA DISPATCH"}</span>
                  <span>MOROCCO // OCT 2026</span>
                </div>
                <h4 className="font-poster text-xl sm:text-2xl font-black uppercase tracking-wide text-[#1a140e] leading-tight">
                  {selectedEvidence.headline}
                </h4>
                <div className="text-xs text-[#5c4028] italic border-l-2 border-[#8a1718] pl-2 font-bold">
                  {selectedEvidence.subhead}
                </div>
                <p className="text-xs sm:text-sm text-[#241a12] leading-relaxed font-typewriter pt-1">
                  {selectedEvidence.article}
                </p>
              </div>
            )}

            {/* 3. Case File Envelope Type */}
            {selectedEvidence.type === 'casefile' && (
              <div className="bg-[#decb9e] p-4 sm:p-5 rounded border-2 border-[#5c4028]/70 space-y-3">
                <div className="border-b border-[#5c4028]/40 pb-2 flex justify-between items-center">
                  <span className="font-poster text-sm font-black text-[#1a140e]">EXPEDITION INTELLIGENCE DOSSIER</span>
                  <span className="stamp-confidential text-[10px] px-2 py-0.5 border-2">CONFIDENTIAL</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <div>SUBJECT: <span className="text-[#8a1718]">{selectedEvidence.subject}</span></div>
                  <div>LOCATION: <span>{selectedEvidence.location}</span></div>
                  <div>CASE FILE: <span>014-EXP</span></div>
                  <div>STATUS: <span className="text-[#8a1718]">{selectedEvidence.status}</span></div>
                </div>
                <div className="pt-2 border-t border-[#5c4028]/30 space-y-1.5 text-xs">
                  <div className="font-bold text-[#1a140e] uppercase">RECORDED EXPEDITION MILESTONES:</div>
                  {selectedEvidence.details?.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#8a1718] font-bold">✔</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Field Note / Handwritten Sticky Type */}
            {(selectedEvidence.type === 'fieldnote' || selectedEvidence.type === 'stickynote') && (
              <div className="bg-[#fff9e6] p-5 rounded border border-[#b8a679] shadow-inner space-y-3">
                <div className="font-handwriting text-2xl sm:text-3xl text-[#8a1718] font-bold leading-snug">
                  {selectedEvidence.quote}
                </div>
                <div className="text-xs text-[#3d2716] font-typewriter leading-relaxed pt-2 border-t border-[#cfbe95]">
                  {selectedEvidence.notes}
                </div>
              </div>
            )}

            {/* 5. Altimeter / Telemetry Report Type */}
            {selectedEvidence.type === 'altitude' && (
              <div className="bg-[#ebd9b2] p-5 rounded border border-[#8a6e42] space-y-3">
                <div className="flex items-baseline justify-between border-b border-[#8a6e42]/40 pb-2">
                  <span className="text-xs font-bold text-[#8a1718]">BAROMETRIC SENSOR REPORT</span>
                  <span className="font-poster text-2xl font-black text-[#1a140e]">{selectedEvidence.altitude}</span>
                </div>
                <div className="text-xs text-[#3a2614] font-typewriter leading-relaxed">
                  {selectedEvidence.notes}
                </div>
              </div>
            )}

            {/* 6. Evidence Tag Type */}
            {selectedEvidence.type === 'evidencetag' && (
              <div className="evidence-tag p-5 rounded border border-[#a89163] space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-[#72191a] border-b border-[#a89163]/40 pb-2">
                  <span>OFFICIAL CHAIN OF CUSTODY</span>
                  <span className="px-2 py-0.5 bg-[#2b1c11] text-white rounded">27B-7</span>
                </div>
                <div className="font-poster text-lg font-black text-[#1a140e]">
                  {selectedEvidence.location}
                </div>
                <div className="text-xs text-[#3a2614] font-typewriter leading-relaxed">
                  {selectedEvidence.notes}
                </div>
              </div>
            )}

            {/* 7. Field Rig & Mini Map Type */}
            {selectedEvidence.type === 'rig' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-[#ede1c2] p-3 rounded border border-[#6b4728]/40 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="font-poster text-xs font-bold uppercase text-[#1a1107] border-b border-[#6b4728]/25 pb-1 mb-2">
                        TOPO TRAIL MAP • QUADRANT 3
                      </div>
                      <div className="bg-[#f7eed6] border border-[#a88a5e]/50 rounded p-1 mb-2">
                        <img
                          src={selectedEvidence.mapImg}
                          alt="Folded Map"
                          className="w-full max-h-44 object-contain filter contrast-110"
                        />
                      </div>
                    </div>
                    <div className="font-typewriter text-[10px] text-[#3d2817] space-y-0.5">
                      {selectedEvidence.mapSpecs?.map((spec, i) => (
                        <div key={i}>• {spec}</div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#ede1c2] p-3 rounded border border-[#6b4728]/40 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="font-poster text-xs font-bold uppercase text-[#1a1107] border-b border-[#6b4728]/25 pb-1 mb-2">
                        ENDURANCE RIG SPEC • 167 KM
                      </div>
                      <div className="bg-[#f7eed6] border border-[#a88a5e]/50 rounded p-1 mb-2">
                        <img
                          src={selectedEvidence.bikeImg}
                          alt="Bicycle Rig"
                          className="w-full max-h-44 object-contain filter contrast-110"
                        />
                      </div>
                    </div>
                    <div className="font-typewriter text-[10px] text-[#3d2817] space-y-0.5">
                      {selectedEvidence.bikeSpecs?.map((spec, i) => (
                        <div key={i}>• {spec}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedEvidence.quote && (
                  <div className="font-handwriting text-base text-[#3d2412] font-bold text-center border-t border-[#54381e]/30 pt-2">
                    {selectedEvidence.quote}
                  </div>
                )}
              </div>
            )}

            {/* 8. Instagram Dispatch Type */}
            {selectedEvidence.type === 'instagram' && (
              <div className="bg-[#fff9e6] p-5 rounded border border-[#b8a679] shadow-inner space-y-3">
                <div className="flex items-center justify-between border-b border-[#b8a679]/40 pb-2">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-[#8a1718]" />
                    <span className="font-poster text-base font-bold text-[#1a140e] uppercase">
                      {selectedEvidence.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#8a1718] border border-[#8a1718] px-2 py-0.5 uppercase">
                    FIELD LOG
                  </span>
                </div>
                <div className="font-handwriting text-2xl text-[#8a1718] font-bold">
                  {selectedEvidence.quote}
                </div>
                <div className="text-xs text-[#3d2716] font-typewriter leading-relaxed pt-1">
                  {selectedEvidence.notes}
                </div>
                <div className="pt-2 border-t border-[#b8a679]/40 flex justify-end">
                  <a
                    href={selectedEvidence.link || socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#8a1718] hover:bg-[#6e1011] text-[#fbf5e5] font-typewriter text-xs font-bold uppercase tracking-wider rounded shadow flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Open Instagram Profile (@wahmane.hamza)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Modal Bottom Dispatch Footer */}
            <div className="pt-3 border-t border-[#54381e]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-[#5a4430] font-typewriter">[AUTHENTIC DISPATCH ARCHIVE]</span>
              
              <div className="relative inline-block group">
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="torn-grid-paper torn-paper-slip px-3.5 py-1.5 border-2 border-[#8a1718] text-[#8a1718] hover:text-[#52090a] font-typewriter font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 transition-all hover:-translate-y-0.5 hover:shadow"
                >
                  <Instagram className="w-4 h-4 text-[#8a1718]" />
                  <span>Open Instagram Archive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Bottom Navigation Buttons */}
      <div className="pt-4 border-t-2 border-[#1f1c19] flex flex-col sm:flex-row items-center justify-between gap-4 font-typewriter">
        <div className="relative inline-block group">
          <button
            onClick={() => onSwitchTab('projects')}
            className="torn-grid-paper torn-paper-slip px-4 py-2 text-xs font-bold text-[#3d2716] hover:text-[#1a1209] uppercase tracking-wider border border-[#a89063]/60 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            ⬅ Back to Projects (Page 2)
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative inline-block group">
            <button
              onClick={() => onSwitchTab('general')}
              className="torn-grid-paper torn-paper-slip px-4 py-2 text-xs font-bold text-[#2b1c11] hover:text-[#1a1209] uppercase tracking-wider border border-[#a89063]/60 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Dossier (Page 1)
            </button>
          </div>

          <div className="relative inline-block group">
            <button
              onClick={onOpenContact}
              className="torn-grid-paper torn-paper-slip px-4 py-2 text-xs font-bold text-[#8a1718] hover:text-[#52090a] uppercase tracking-wider border-2 border-[#8a1718]/70 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Send Dispatch ✉
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

