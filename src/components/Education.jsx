import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Terminal } from 'lucide-react';

export default function Education() {
  const milestones = [
    {
      level: "Core Algorithms & C",
      desc: "Recreated standard C libraries from scratch (libft, get_next_line), pointer arithmetic, custom memory allocators."
    },
    {
      level: "Concurrency & Multithreading",
      desc: "Synchronized concurrent threads and processes in C using mutexes, avoiding deadlocks in Philosophers."
    },
    {
      level: "Unix Systems & Architecture",
      desc: "Replicated Unix pipeline execution (pipex), process forks, file descriptor manipulation, signal handling."
    },
    {
      level: "C++ & Object-Oriented Programming",
      desc: "Comprehensive OOP mastery: Canonical class forms, subtype polymorphism, dynamic cast, template classes."
    },
    {
      level: "Full-Stack & Networking",
      desc: "Web development with React, Node.js, WebSockets, Docker containerization, and TCP/IP routing practice."
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-dark-900/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-violet-400 uppercase bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
            Education & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            1337 Coding School (42 Network)
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A peer-to-peer software engineering school that fosters extreme autonomy, critical thinking, and technical resilience.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Card */}
          <div className="lg:col-span-6 glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <GraduationCap className="w-32 h-32 text-cyan-400" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">1337 Coding School</h3>
                <p className="text-xs font-mono text-cyan-400">Part of 42 Network • Morocco</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              1337 operates without teachers, lectures, or grades. The curriculum is entirely project-based and peer-evaluated. Progression is based on merit, practical problem solving, and rigorous automated testing against edge cases and memory leaks.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
              <div className="bg-dark-900/80 p-3 rounded-xl border border-white/5">
                <span className="text-cyan-400 block font-semibold mb-1">0 Teachers</span>
                100% Peer-to-Peer Learning
              </div>
              <div className="bg-dark-900/80 p-3 rounded-xl border border-white/5">
                <span className="text-emerald-400 block font-semibold mb-1">Zero Leaks</span>
                Strict Valgrind verification
              </div>
              <div className="bg-dark-900/80 p-3 rounded-xl border border-white/5">
                <span className="text-violet-400 block font-semibold mb-1">Norminette</span>
                Code style & standard enforcement
              </div>
              <div className="bg-dark-900/80 p-3 rounded-xl border border-white/5">
                <span className="text-amber-400 block font-semibold mb-1">Real Systems</span>
                Unix, Networks & Algorithms
              </div>
            </div>
          </div>

          {/* Curriculum Milestones */}
          <div className="lg:col-span-6 space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Core Curriculum Milestones</span>
            </h4>

            {milestones.map((ms, idx) => (
              <div
                key={idx}
                className="bg-dark-900/60 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-3"
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">{ms.level}</h5>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{ms.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
