import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Github, Linkedin, ExternalLink, Terminal, Server, Trophy, Globe, Code2, ChevronDown, ChevronUp, FolderOpen, Folder } from 'lucide-react';

/* Paperclip SVG graphic (matching Folder III in Image 2) */
function MetallicPaperclip({ className = "" }) {
  return (
    <svg className={`drop-shadow-sm pointer-events-none select-none ${className}`} viewBox="0 0 24 40" fill="none">
      <path
        d="M 8 14 L 8 28 C 8 33 16 33 16 28 L 16 8 C 16 4 11 4 11 8 L 11 26 C 11 29 14 29 14 26 L 14 12"
        stroke="#4a3e35"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 8 14 L 8 28 C 8 33 16 33 16 28 L 16 8 C 16 4 11 4 11 8 L 11 26 C 11 29 14 29 14 26 L 14 12"
        stroke="#b8a896"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Fingerprint Graphic (matching Folder II in Image 2) */
function FingerprintGraphic({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none opacity-20 ${className}`}>
      <svg viewBox="0 0 40 50" fill="none" stroke="#1f1811" strokeWidth="1.6" className="w-full h-full">
        <path d="M 20 6 C 13 6 10 11 10 18 C 10 27 13 36 20 42 C 27 36 30 27 30 18 C 30 11 27 6 20 6 Z" strokeDasharray="3 2" />
        <path d="M 20 11 C 15 11 13 15 13 20 C 13 28 16 33 20 37 C 24 33 27 28 27 20 C 27 15 25 11 20 11 Z" strokeDasharray="4 2" />
        <path d="M 20 16 C 17 16 16 18 16 22 C 16 27 18 30 20 33 C 22 30 24 27 24 22 C 24 18 23 16 20 16 Z" />
        <path d="M 20 21 C 19 21 18.5 22 18.5 24 C 18.5 26.5 19.5 28 20 29 C 20.5 28 21.5 26.5 21.5 24 C 21.5 22 21 21 20 21 Z" />
      </svg>
    </div>
  );
}

export default function PageProjects({ onSwitchTab, onOpenContact }) {
  const { socials, projects } = portfolioData;

  // Track which folders are open (minishell open by default)
  const [openFolders, setOpenFolders] = useState({ minishell: true });

  const toggleFolder = (id) => {
    setOpenFolders(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all = {};
    projects.forEach(p => { all[p.id] = true; });
    setOpenFolders(all);
  };

  const collapseAll = () => {
    setOpenFolders({});
  };

  const getProjectIcon = (id) => {
    switch (id) {
      case 'minishell':
        return <Terminal className="w-5 h-5 text-[#8a1718]" />;
      case 'webserv':
        return <Server className="w-5 h-5 text-[#8a1718]" />;
      case 'kouralink':
        return <Trophy className="w-5 h-5 text-[#8a1718]" />;
      case 'allobaba-webscrapy':
        return <Globe className="w-5 h-5 text-[#8a1718]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#8a1718]" />;
    }
  };

  // Roman numeral and visual metadata for each folder (Image 2 style)
  const folderMeta = [
    { roman: 'I', fileNo: '№ 42-01', tabOffset: 'sm:left-6' },
    { roman: 'II', fileNo: '№ 42-02', tabOffset: 'sm:left-44' },
    { roman: 'III', fileNo: '№ 42-03', tabOffset: 'sm:left-[21rem]' },
    { roman: 'IV', fileNo: '№ 42-04', tabOffset: 'sm:left-[31rem]' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-typewriter">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1f1c19] pb-3 text-xs tracking-wider">
        <div className="text-sm sm:text-base font-bold text-[#1f1c19]">
          CASE FILE: <span className="underline decoration-1 underline-offset-4">EVIDENCE LOG — CODE & SYSTEMS</span>
        </div>
        <div className="text-xs text-[#5a4430] mt-1 sm:mt-0">
          ARCHIVE REF: <span className="font-bold text-[#1f1c19]">SECTION 02-PROG</span>
        </div>
      </div>

      {/* Main Title & Stamp */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a140e] uppercase">
            PROGRAMMER PROFILE & ARCHIVED PROJECTS
          </h2>
          <p className="text-xs text-[#72191a] font-bold tracking-widest uppercase mt-0.5">
            Systems Engineering • Web Servers • Full-Stack Platforms • Microservices
          </p>
        </div>

        <div className="stamp-confidential text-xs sm:text-sm self-start sm:self-auto">
          VERIFIED REPOSITORIES
        </div>
      </div>

      {/* Technical Skill Competencies Checklist */}
      <div className="bg-[#f6ebd0] p-4 sm:p-5 rounded-lg border border-[#2b1c11]/30">
        <div className="font-bold text-xs uppercase tracking-wider text-[#72191a] mb-3 flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span>TECHNICAL COMPETENCY MATRIX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[#2b1c11]">
          <div className="space-y-1">
            <span className="font-bold text-[#1a140e] block">LOW-LEVEL SYSTEMS:</span>
            <div>✔ C & C++98 Strict Standard</div>
            <div>✔ POSIX Threads & epoll Multiplexing</div>
            <div>✔ AST Parsing, Lexers & Shell Internals</div>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#1a140e] block">FULL-STACK & DESKTOP:</span>
            <div>✔ React.js, TypeScript & Vite</div>
            <div>✔ Electron Cross-Platform Desktop</div>
            <div>✔ Node.js, Express & WebSockets</div>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#1a140e] block">SYSTEMS ARCHITECTURE:</span>
            <div>✔ HTTP/1.0 Engine & CGI Protocol</div>
            <div>✔ Python Distributed Microservices</div>
            <div>✔ Git Organizations & 42 Peer Reviews</div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MANILA FILE FOLDERS WITH SLIDING DOSSIERS (IMAGE 2 STYLE) */}
      {/* ======================================================== */}
      <div className="space-y-6">
        
        {/* Section Title & Quick Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2b1c11]/30 pb-2">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-[#8a1718]" />
            <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-[#1a140e]">
              OFFICIAL EVIDENCE FOLDERS — CLICK A FILE TO SLIDE OPEN
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={expandAll}
              className="text-[#8a1718] hover:underline font-bold"
            >
              [ + SLIDE ALL OPEN ]
            </button>
            <span className="text-[#8c7456]">•</span>
            <button
              onClick={collapseAll}
              className="text-[#5a4430] hover:underline font-bold"
            >
              [ − COLLAPSE ALL ]
            </button>
          </div>
        </div>

        {/* The 4 Staggered Manila Folders Stack */}
        <div className="space-y-5">
          {projects.map((item, idx) => {
            const isOpen = !!openFolders[item.id];
            const meta = folderMeta[idx] || { roman: `${idx + 1}`, fileNo: `№ ${idx + 1}`, tabOffset: 'sm:left-6' };

            return (
              <div key={item.id} className="relative group/folder transition-all">
                
                {/* 1. Staggered Folder Index Tab (Image 2 style) */}
                <div className="flex items-end pl-2 sm:pl-0">
                  <div
                    onClick={() => toggleFolder(item.id)}
                    className={`cursor-pointer px-4 sm:px-6 py-1.5 sm:py-2 rounded-t-lg font-typewriter text-xs font-bold uppercase tracking-wider transition-all border-t-2 border-l-2 border-r-2 shadow-sm flex items-center gap-2 relative z-10 ${
                      isOpen
                        ? 'bg-[#e4ce9f] text-[#1a140e] border-[#543b24] translate-y-[2px]'
                        : 'bg-[#d2bc8f] hover:bg-[#dcc79b] text-[#3d2716] border-[#6b4e33]/70'
                    }`}
                  >
                    {/* Roman Numeral Badge (I, II, III, IV) */}
                    <span className="px-1.5 py-0.2 bg-[#2b1c11] text-[#fffdf8] rounded text-[10px] font-black">
                      {meta.roman}
                    </span>

                    {/* Tab Title */}
                    <span className="font-black text-xs sm:text-sm">
                      {item.title}
                    </span>

                    {/* Status badge on tab */}
                    <span className="hidden md:inline-block text-[10px] text-[#72191a] font-bold pl-1">
                      [{item.badge}]
                    </span>

                    {/* Paperclip Graphic on Folder III (like in Image 2!) */}
                    {idx === 2 && (
                      <div className="absolute -top-3 right-3 z-30">
                        <MetallicPaperclip className="w-5 h-8" />
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Manila Folder Jacket / Cover (Image 2 Kraft Cardboard) */}
                <div
                  className={`bg-[#dfcca2] border-2 rounded-b-lg rounded-tr-lg p-4 sm:p-5 relative transition-all shadow-md ${
                    isOpen
                      ? 'border-[#543b24] shadow-xl bg-[#e3d1a8]'
                      : 'border-[#6b4e33]/70 hover:border-[#8a1718] hover:bg-[#e1ce9f]'
                  }`}
                >
                  
                  {/* Top Secret Distressed Stamp on Folder I (Image 2 style) */}
                  {idx === 0 && (
                    <div className="absolute top-3 right-4 sm:right-6 pointer-events-none select-none z-10">
                      <div className="border-2 border-[#8a1718] text-[#8a1718] px-2.5 py-0.5 text-[10px] sm:text-xs font-black tracking-widest uppercase rotate-[-6deg] opacity-85 shadow-sm">
                        TOP SECRET • CLASSIFIED
                      </div>
                    </div>
                  )}

                  {/* Fingerprint Smudge on Folder II (Image 2 style) */}
                  {idx === 1 && (
                    <div className="absolute top-2 right-6 w-10 h-12">
                      <FingerprintGraphic className="w-full h-full" />
                    </div>
                  )}

                  {/* Folder Cover Header Bar (Clickable to slide open/close) */}
                  <div
                    onClick={() => toggleFolder(item.id)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#543b24]/30 pb-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-[#cbaf7d] rounded border border-[#543b24]/40 shadow-inner">
                          {getProjectIcon(item.id)}
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-[#72191a] uppercase tracking-widest">
                            {item.code} • {meta.fileNo}
                          </div>
                          <h3 className="font-black text-lg sm:text-xl text-[#1a140e] group-hover/folder:text-[#8a1718] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-xs text-[#4a3420] italic font-semibold pl-1">
                        {item.subtitle}
                      </div>
                    </div>

                    {/* Interactive Slide Control Button */}
                    <div className="flex items-center gap-2 self-start md:self-auto shrink-0 pt-1 md:pt-0">
                      <span className="px-2.5 py-1 bg-[#cbaf7d] border border-[#543b24]/40 rounded text-[10px] font-bold uppercase text-[#2b1c11]">
                        {item.badge}
                      </span>
                      <div className="px-3 py-1 bg-[#2b1c11] text-[#fffdf8] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5 shadow">
                        <span>{isOpen ? 'SLIDE CLOSED' : 'SLIDE OPEN'}</span>
                        {isOpen ? <ChevronUp className="w-3.5 h-3.5 text-[#e3d1a8]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#e3d1a8]" />}
                      </div>
                    </div>
                  </div>

                  {/* 3. The Sliding Evidence Document Inside (Slides out on click!) */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen
                        ? 'max-h-[1600px] opacity-100 mt-4'
                        : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    {/* The Crisp Evidence Sheet (Peeking out from the folder) */}
                    <div className="bg-[#fffef9] border-2 border-[#3d2716]/40 rounded shadow-lg p-5 sm:p-7 relative text-[#1f1c19] space-y-5">
                      
                      {/* Top Paper Header Strip (Torn perforated effect) */}
                      <div className="border-b-2 border-dashed border-[#2b1c11]/30 pb-3 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 font-bold text-[#72191a]">
                          <span>CONFIDENTIAL EXHIBIT FILE</span>
                          <span>•</span>
                          <span>ARCHIVE REF: {meta.fileNo}</span>
                        </div>
                        <div className="stamp-confidential text-[9px] py-0 px-1 border">
                          VERIFIED SUBMISSION
                        </div>
                      </div>

                      {/* Role & Contributors Metadata Box */}
                      <div className="p-3.5 bg-[#fbf6e9] border border-[#2b1c11]/25 rounded text-xs space-y-1.5 shadow-sm">
                        <div>
                          <span className="font-bold text-[#72191a]">RESPONSIBILITY: </span>
                          <span className="text-[#1a140e] font-bold">{item.role}</span>
                        </div>
                        {item.team && (
                          <div className="text-[11px] text-[#5a4430]">
                            <span className="font-bold text-[#2b1c11]">CONTRIBUTORS: </span>
                            <span>{item.team}</span>
                          </div>
                        )}
                      </div>

                      {/* Full Project Description */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#72191a] uppercase tracking-wider block">
                          SYSTEM ARCHITECTURE & OVERVIEW:
                        </span>
                        <p className="text-xs sm:text-sm text-[#2b1c11] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] font-bold text-[#72191a] uppercase tracking-wider block">
                          TECHNICAL CAPABILITIES & IMPLEMENTATION:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#2b1c11]/90">
                          {item.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="text-[#8a1718] font-bold shrink-0 text-sm">✔</span>
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology Tags */}
                      <div className="pt-2">
                        <span className="text-[10px] font-bold text-[#5a4430] uppercase tracking-wider block mb-1.5">
                          SYSTEM STACK & SPECIFICATIONS:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] px-2.5 py-0.5 bg-[#eee3c7] border border-[#2b1c11]/20 rounded text-[#1a140e] font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links (GitHub & Live Platform) */}
                      <div className="pt-4 border-t border-[#2b1c11]/20 flex flex-wrap items-center gap-3">
                        {item.liveUrl && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-[#8a1718] hover:bg-[#a3221a] text-[#fffdf8] font-bold text-xs uppercase tracking-wider rounded transition-colors shadow inline-flex items-center gap-1.5"
                          >
                            <span>Visit Live Platform</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {item.githubUrl && (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-[#2b1c11] hover:bg-[#3d2718] text-[#faf2db] font-bold text-xs uppercase tracking-wider rounded transition-colors shadow inline-flex items-center gap-1.5"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Open GitHub Archive</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </a>
                        )}
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ======================================================== */}
      {/* BOTTOM PROFESSIONAL DISPATCHES (GITHUB & LINKEDIN)       */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        
        {/* 1. GitHub Code Archive Card */}
        <div className="p-5 sm:p-6 bg-[#23170e] text-[#faf2db] rounded-lg border-2 border-[#8a1718] shadow-md flex flex-col justify-between">
          <div className="flex items-start gap-3.5 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#faf2db] flex items-center justify-center text-[#23170e] shrink-0 shadow">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#dec796] tracking-widest block">
                PRIMARY CODE ARCHIVE
              </span>
              <h3 className="text-lg sm:text-xl font-bold uppercase text-[#fffdf8]">
                GITHUB PROFILE & REPOSITORIES
              </h3>
              <p className="text-xs text-[#eadbb5] mt-1 leading-relaxed">
                Access all 25+ public repositories, 42 school projects, commit logs, and systems code.
              </p>
            </div>
          </div>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-[#b82728] hover:bg-[#8a1718] text-[#fffdf8] font-bold text-xs uppercase tracking-widest rounded transition-all shadow flex items-center justify-center gap-2"
          >
            <span>Open GitHub (@Wahmane-Hamza)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2. LinkedIn Professional Network Card */}
        <div className="p-5 sm:p-6 bg-[#1a2228] text-[#faf2db] rounded-lg border-2 border-[#0a66c2]/80 shadow-md flex flex-col justify-between">
          <div className="flex items-start gap-3.5 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#0a66c2] flex items-center justify-center text-white shrink-0 shadow">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#94c4ec] tracking-widest block">
                PROFESSIONAL NETWORK
              </span>
              <h3 className="text-lg sm:text-xl font-bold uppercase text-[#fffdf8]">
                LINKEDIN PROFILE & EXPERIENCE
              </h3>
              <p className="text-xs text-[#d2e5f5] mt-1 leading-relaxed">
                Connect for engineering opportunities, professional endorsements, recommendations, and career background.
              </p>
            </div>
          </div>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-[#0a66c2] hover:bg-[#084e96] text-white font-bold text-xs uppercase tracking-widest rounded transition-all shadow flex items-center justify-center gap-2"
          >
            <span>Open LinkedIn (Hamza Wahmane)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Bottom Footer Navigation */}
      <div className="pt-6 border-t-2 border-[#1f1c19] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onSwitchTab('general')}
          className="text-xs font-bold text-[#5a4430] hover:text-[#1a140e] uppercase tracking-wider"
        >
          ⬅ Back to Dossier (Page 1)
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSwitchTab('cycling')}
            className="px-4 py-2 bg-[#2b1c11] text-[#faf2db] hover:bg-[#8a1718] text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
          >
            View Cycling Expeditions (Page 3) ➔
          </button>
          <button
            onClick={onOpenContact}
            className="px-3 py-2 bg-[#8a1718] text-[#fffdf8] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#a3221a] transition-colors"
          >
            Contact ✉
          </button>
        </div>
      </div>

    </div>
  );
}
