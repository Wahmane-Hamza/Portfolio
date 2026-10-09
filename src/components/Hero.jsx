import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Github, Linkedin, ArrowRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenTerminal }) {
  const { personal, socials, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personal.status}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Sparkles className="w-3 h-3" />
                1337 / 42 Network
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs text-slate-400 bg-white/5 border border-white/10">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personal.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">{personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-cyan-300/90 font-medium">
                &lt;Full-Stack Developer & Systems Programmer /&gt;
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Bridging the gap between <strong>low-level systems engineering</strong> (C, C++, concurrency, Unix internals) and <strong>modern full-stack web applications</strong> (React, Node.js, WebSockets, Docker). Trained in peer-to-peer problem solving at 1337 Coding School.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-dark-900 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-sm text-cyan-300 bg-dark-800/80 hover:bg-dark-700/80 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:-translate-y-0.5"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>$ ./hamza_cli</span>
              </button>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/30 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Code Card & Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-2xl glass-panel p-5 shadow-2xl relative border border-cyan-500/20 group">
              {/* Header bar of the code card */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">profile.config.ts</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  42-CURSUS
                </span>
              </div>

              {/* Avatar + Quick Summary */}
              <div className="flex items-center gap-4 mb-4 p-3 rounded-xl bg-dark-900/60 border border-white/5">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-14 h-14 rounded-full ring-2 ring-cyan-400/50 object-cover shadow-md"
                />
                <div>
                  <h2 className="font-semibold text-white text-base flex items-center gap-1.5">
                    {personal.name}
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">1337 Student / Engineer</p>
                  <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                    <span>●</span> Ready to contribute
                  </p>
                </div>
              </div>

              {/* Code representation */}
              <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto bg-dark-900/80 p-3.5 rounded-xl border border-white/5">
<code>{`const developer = {
  name: "Hamza Wahmane",
  school: "1337 (42 Network)",
  coreStack: [
    "C / C++",
    "React & Tailwind",
    "Node.js & Express",
    "Docker & Linux"
  ],
  interests: [
    "Systems Programming",
    "Distributed Web",
    "High-Performance Code"
  ],
  passion: () => "Turning complex problems into clean code"
};`}</code>
              </pre>

              {/* Micro badge bottom */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-cyan-400">gcc -Wall -Wextra -Werror</span>
                <span className="text-emerald-400">PASS (100%)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-4 rounded-xl border border-white/5 text-center hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
