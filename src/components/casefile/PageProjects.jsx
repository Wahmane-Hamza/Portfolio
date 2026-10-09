import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Github, ExternalLink, Terminal, Server, Trophy, Globe, Code2, Check, ArrowRight } from 'lucide-react';

export default function PageProjects({ onSwitchTab, onOpenContact }) {
  const { socials, projects } = portfolioData;

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

      {/* 4 Case Exhibits Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-bold text-xs uppercase tracking-wider text-[#1a140e]">
            OFFICIAL CASE EXHIBITS (4 ARCHIVED ORGANIZATIONS & PLATFORMS)
          </span>
          <span className="text-[10px] text-[#5a4430]">CLICK REPO / APP TO INSPECT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 bg-[#fffdf8] border-2 border-[#2b1c11]/40 rounded-lg shadow-sm hover:border-[#8a1718] transition-all flex flex-col justify-between space-y-4 relative group"
            >
              {/* Exhibit Code & Badge */}
              <div className="flex items-center justify-between border-b border-[#2b1c11]/20 pb-2">
                <span className="text-xs text-[#72191a] font-black tracking-wider">
                  {item.code}
                </span>
                <span className="px-2 py-0.5 bg-[#eadbb5] border border-[#8a1718]/40 text-[#8a1718] font-bold text-[10px] rounded uppercase shadow-sm">
                  {item.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-[#f4ebd0] rounded border border-[#2b1c11]/20">
                    {getProjectIcon(item.id)}
                  </div>
                  <h3 className="font-bold text-lg text-[#1a140e] group-hover:text-[#8a1718] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="text-xs text-[#5a4430] font-semibold italic pl-0.5">
                  {item.subtitle}
                </div>
              </div>

              {/* Role & Team Metadata Box */}
              <div className="p-3 bg-[#f8f2e1] border border-[#2b1c11]/20 rounded text-xs space-y-1.5">
                <div>
                  <span className="font-bold text-[#72191a]">RESPONSIBILITY: </span>
                  <span className="text-[#1a140e]">{item.role}</span>
                </div>
                {item.team && (
                  <div className="text-[11px] text-[#5a4430]">
                    <span className="font-bold text-[#2b1c11]">CONTRIBUTORS: </span>
                    <span>{item.team}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-[#2b1c11] leading-relaxed">
                {item.description}
              </p>

              {/* Key Features Bullet List */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-bold text-[#72191a] uppercase tracking-wider block">
                  TECHNICAL CAPABILITIES & IMPLEMENTATION:
                </span>
                <ul className="space-y-1 text-xs text-[#2b1c11]/90">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <span className="text-[#8a1718] font-bold shrink-0">✔</span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2 py-0.5 bg-[#eadbb5]/60 border border-[#2b1c11]/20 rounded text-[#1a140e] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#2b1c11]/20 flex flex-wrap items-center gap-3">
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
          ))}
        </div>
      </div>

      {/* Main GitHub Dispatch (Clean central link to Hamza's GitHub archive) */}
      <div className="p-6 bg-[#2b1c11] text-[#faf2db] rounded-lg border-2 border-[#8a1718] shadow-md">
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
                FULL GITHUB PROFILE & REPOSITORIES
              </h3>
              <p className="text-xs text-[#eadbb5] mt-1">
                Access all 25+ public repositories, 42 school projects, commit logs, and systems code directly on GitHub.
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
