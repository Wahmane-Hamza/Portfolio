import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Code2 } from 'lucide-react';

export default function Footer() {
  const { personal, socials } = portfolioData;

  return (
    <footer className="border-t border-white/5 py-12 bg-dark-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Note */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white text-sm font-mono">{personal.name}</p>
              <p className="text-[11px] text-slate-500">Full-Stack Engineer • 1337 (42 Network)</p>
            </div>
          </div>


          {/* Right: Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-slate-500 font-mono">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
