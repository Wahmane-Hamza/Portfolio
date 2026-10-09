import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Cpu, Wrench, Check } from 'lucide-react';

export default function Skills() {
  const { skillCategories } = portfolioData;

  const categoryIcons = [Code, Server, Cpu, Wrench];

  const toolsCommands = [
    { tool: "C/C++ Compiler", cmd: "gcc / g++ -Wall -Wextra -Werror", desc: "Strict standard compliance" },
    { tool: "Debugging", cmd: "valgrind --leak-check=full", desc: "Zero memory leaks guarantee" },
    { tool: "Containers", cmd: "docker compose up -d", desc: "Multi-service orchestration" },
    { tool: "Frontend Build", cmd: "vite build", desc: "Optimized modern client bundle" },
    { tool: "Version Control", cmd: "git rebase / git worktree", desc: "Clean branch histories" },
    { tool: "Networking", cmd: "ip / netstat / wireshark", desc: "Traffic analysis & routing" },
  ];

  return (
    <section id="skills" className="py-20 relative bg-dark-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical Skills & Toolchain
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A comprehensive toolbox spanning modern full-stack development and low-level computer systems engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Code;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/50 via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-dark-800/80 text-slate-200 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      <Check className="w-3 h-3 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Tooling & Workflow Terminal Bar */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-slate-400 ml-2">toolchain.sh — Daily Engineering Standards</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsCommands.map((item, idx) => (
              <div key={idx} className="bg-dark-900/70 p-3.5 rounded-xl border border-white/5">
                <div className="text-xs font-semibold text-slate-300 mb-1">{item.tool}</div>
                <div className="font-mono text-xs text-cyan-400 bg-dark-800/60 px-2 py-1 rounded border border-white/5 truncate">
                  $ {item.cmd}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
