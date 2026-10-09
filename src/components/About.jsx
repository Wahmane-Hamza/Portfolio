import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Globe, Terminal, ShieldCheck, ExternalLink, Award } from 'lucide-react';

export default function About() {
  const { personal, socials } = portfolioData;

  const highlights = [
    {
      icon: Terminal,
      title: "1337 School (42 Network)",
      desc: "Trained in an intensive, peer-to-peer software engineering environment with rigorous real-world projects, strict evaluation norms, and zero spoon-feeding."
    },
    {
      icon: Cpu,
      title: "Systems & Algorithms",
      desc: "Deep grasp of C/C++, memory management, thread synchronization, Unix system calls, and data structure complexity."
    },
    {
      icon: Globe,
      title: "Modern Web Architecture",
      desc: "Developing sleek, real-time web applications with React, Tailwind CSS, Node.js, Express, and WebSocket protocols."
    },
    {
      icon: ShieldCheck,
      title: "Reliability & Quality",
      desc: "Committed to bug-free logic, clean code conventions, automated builds, and containerized Docker environments."
    }
  ];

  return (
    <section id="about" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Engineering with Passion & Precision
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a software engineer based in Morocco with a dual focus: 
              <strong className="text-white"> low-level systems programming</strong> and 
              <strong className="text-white"> modern full-stack web applications</strong>.
            </p>

            <p>
              My journey is deeply rooted at <span className="text-cyan-400 font-medium">1337 Coding School</span> (part of the global 42 Network). Through this demanding curriculum, I rebuilt Unix utilities, solved concurrent synchronization puzzles like the Dining Philosophers, wrote 2D game loops, and crafted sorting algorithms from scratch in C and C++.
            </p>

            <p>
              In parallel, I build modern web applications using <span className="text-white">React, Node.js, Socket.io, and Docker</span>. Having a systems background means I don't just use frameworks — I understand how memory, the network stack, asynchronous event loops, and operating systems function beneath the hood.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-medium text-sm transition-all"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium text-sm transition-all"
              >
                <span>Browse GitHub Repos</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
