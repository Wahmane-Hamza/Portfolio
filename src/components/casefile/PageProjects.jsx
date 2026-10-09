import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Github, ExternalLink, Terminal, Code2, Cpu, Check, Layers } from 'lucide-react';

export default function PageProjects({ onSwitchTab, onOpenContact }) {
  const { socials } = portfolioData;

  const exhibits = [
    {
      code: "EXHIBIT A: CONCURRENCY",
      name: "Philosophers",
      lang: "C • POSIX Threads • Mutexes",
      summary: "Solved the classic Dining Philosophers concurrency dilemma. Engineered strict mutex locks, microsecond-accurate timekeeping, and starvation prevention with zero race conditions.",
      tag: "1337-SYSTEMS-01"
    },
    {
      code: "EXHIBIT B: ALGORITHMIC OPTIMIZATION",
      name: "Push_swap",
      lang: "C • Algorithms • Two-Stack Complexity",
      summary: "High-performance algorithmic integer sorting engine. Engineered an optimized chunk-sort algorithm minimizing instruction count within rigorous execution thresholds.",
      tag: "1337-ALGO-02"
    },
    {
      code: "EXHIBIT C: INFRASTRUCTURE & STORAGE",
      name: "eff_cloud",
      lang: "Docker Compose • Linux • JavaScript",
      summary: "Containerized cloud storage architecture with multi-container orchestration, persistent volume management, and user data isolation.",
      tag: "DEVOPS-03"
    },
    {
      code: "EXHIBIT D: REAL-TIME ARCHITECTURE",
      name: "Real-Time Multiplayer Game",
      lang: "Node.js • Express • Socket.io • WebSockets",
      summary: "Interactive multiplayer game server utilizing low-latency bidirectional WebSockets for room creation, matchmaking, and synchronized client state.",
      tag: "FULLSTACK-04"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1f1c19] pb-3 text-xs tracking-wider">
        <div className="font-typewriter text-sm sm:text-base font-bold text-[#1f1c19]">
          CASE FILE: <span className="underline decoration-1 underline-offset-4">EVIDENCE LOG — CODE & SYSTEMS</span>
        </div>
        <div className="font-typewriter text-xs text-[#5a4430] mt-1 sm:mt-0">
          ARCHIVE REF: <span className="font-bold text-[#1f1c19]">SECTION 02-PROG</span>
        </div>
      </div>

      {/* Main Title & Stamp */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-typewriter text-2xl sm:text-3xl font-black text-[#1a140e] uppercase">
            PROGRAMMER PROFILE & TECHNICAL EXHIBITS
          </h2>
          <p className="font-typewriter text-xs text-[#72191a] font-bold tracking-widest uppercase mt-0.5">
            Systems Engineering • Concurrent Computing • Full-Stack Web
          </p>
        </div>

        <div className="stamp-confidential text-xs sm:text-sm self-start sm:self-auto">
          VERIFIED ARTIFACTS
        </div>
      </div>

      {/* Technical Skill Competencies Checklist */}
      <div className="bg-[#f6ebd0] p-4 sm:p-5 rounded-lg border border-[#2b1c11]/30 font-typewriter">
        <div className="font-bold text-xs uppercase tracking-wider text-[#72191a] mb-3 flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span>TECHNICAL COMPETENCY MATRIX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[#2b1c11]">
          <div className="space-y-1">
            <span className="font-bold text-[#1a140e] block">LOW-LEVEL SYSTEMS:</span>
            <div>✔ C & C++ (OOP & STL)</div>
            <div>✔ POSIX Threads & Mutexes</div>
            <div>✔ Unix APIs & Memory Safety</div>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#1a140e] block">FULL-STACK WEB:</span>
            <div>✔ React.js & Tailwind CSS</div>
            <div>✔ Node.js & Express APIs</div>
            <div>✔ Socket.io & WebSockets</div>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#1a140e] block">DEVOPS & WORKFLOW:</span>
            <div>✔ Docker & Docker Compose</div>
            <div>✔ Linux System Administration</div>
            <div>✔ Git & GitHub Architecture</div>
          </div>
        </div>
      </div>

      {/* 4 Case Exhibits Grid */}
      <div className="space-y-3 font-typewriter">
        <div className="font-bold text-xs uppercase tracking-wider text-[#1a140e]">
          DOCUMENTED CODE EXHIBITS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exhibits.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#fffdf8] border-2 border-[#2b1c11]/40 rounded shadow-sm hover:border-[#8a1718] transition-colors relative"
            >
              <div className="flex items-center justify-between text-[10px] text-[#72191a] font-bold mb-1">
                <span>{item.code}</span>
                <span className="px-1.5 py-0.5 bg-[#eadbb5] text-[#1a140e] rounded">{item.tag}</span>
              </div>

              <h3 className="font-bold text-base text-[#1a140e] mb-1">
                {item.name}
              </h3>

              <div className="text-[11px] font-bold text-[#5a4430] mb-2">
                ⚙ {item.lang}
              </div>

              <p className="text-xs text-[#2b1c11] leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main GitHub Dispatch (As requested: clean central link to GitHub!) */}
      <div className="p-6 bg-[#2b1c11] text-[#faf2db] rounded-lg border-2 border-[#8a1718] font-typewriter shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-[#faf2db] flex items-center justify-center text-[#2b1c11] shrink-0 mx-auto md:mx-0 shadow">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#dec796] tracking-widest block">
                PRIMARY CODE ARCHIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#fffdf8]">
                FULL GITHUB REPOSITORIES
              </h3>
              <p className="text-xs text-[#eadbb5] mt-1">
                Access all 25+ public repositories, commit logs, and systems code directly on GitHub.
              </p>
            </div>
          </div>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#b82728] hover:bg-[#8a1718] text-[#fffdf8] font-bold text-xs uppercase tracking-widest rounded transition-all shadow inline-flex items-center gap-2 shrink-0"
          >
            <span>Open GitHub (@Wahmane-Hamza)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Footer Navigation */}
      <div className="pt-6 border-t-2 border-[#1f1c19] flex flex-col sm:flex-row items-center justify-between gap-4 font-typewriter">
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
