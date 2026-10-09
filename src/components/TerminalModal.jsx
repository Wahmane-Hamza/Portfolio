import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Hamza Wahmane\'s interactive terminal shell (1337-sh v1.0.0).' },
    { type: 'system', text: 'Type "help" to view available commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cmdHistory, setCmdHistory] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'prompt', text: `guest@hamza-portfolio:~$ ${trimmed}` }];
    const lower = trimmed.toLowerCase();

    switch (lower) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  help        - Show this help menu
  about       - Overview of Hamza Wahmane
  skills      - List core technical competencies
  projects    - Summary of top highlighted repositories
  1337        - Information on 1337 Coding School / 42
  socials     - View LinkedIn, GitHub, Twitter links
  github      - Open Hamza's GitHub profile
  linkedin    - Open Hamza's LinkedIn profile
  clear       - Clear screen
  exit        - Close this terminal modal`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Name: Hamza Wahmane
Role: Full-Stack Developer & Systems Programmer
Base: Morocco
School: 1337 (42 Network)
Bio: Bridging high-performance C/C++ systems engineering with modern React & Node.js web applications.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Core Tech Stack:
- Low-Level: C, C++, POSIX Threads, Mutexes, Unix API, Valgrind
- Frontend: React, JavaScript, Tailwind CSS, HTML5, CSS3, Vite
- Backend: Node.js, Express, Socket.io, REST APIs, Python
- DevOps: Docker, Docker Compose, Git, Linux, Bash`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `Featured Projects:
1. eff_cloud               [Docker / Containerized Storage]
2. Online Multiplayer Game [Node.js / Socket.io / WebSockets]
3. Bus Reservation App     [React / Tailwind / Router]
4. Philosophers            [C / Multithreading / Concurrency]
5. Push_swap               [C / Custom Sorting Algorithm]
6. so_long                 [C / 2D Tile Graphics Engine]
7. pipex                   [C / Unix Pipeline & Process Redirection]`
        });
        break;

      case '1337':
        newHistory.push({
          type: 'output',
          text: `  _ _____ _____ _____ 
 / |___ /|___ /|___  |
 | | |_ \\| |_ \\   / / 
 | |___) |___) | / /  
 |_|____/|____/ /_/   

1337 is Morocco's premier peer-to-peer coding school (part of 42 Network).
No teachers, no courses, 100% project-driven problem solving and rigorous peer reviews.`
        });
        break;

      case 'socials':
        newHistory.push({
          type: 'output',
          text: `GitHub:   ${portfolioData.socials.github}
LinkedIn: ${portfolioData.socials.linkedin}
Twitter:  ${portfolioData.socials.twitter}`
        });
        break;

      case 'github':
        window.open(portfolioData.socials.github, '_blank');
        newHistory.push({ type: 'output', text: 'Opening GitHub profile in a new tab...' });
        break;

      case 'linkedin':
        window.open(portfolioData.socials.linkedin, '_blank');
        newHistory.push({ type: 'output', text: 'Opening LinkedIn profile in a new tab...' });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case 'sudo':
      case 'sudo rm -rf /':
        newHistory.push({
          type: 'error',
          text: 'Permission denied: Nice try! You are in read-only sandbox mode.'
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${trimmed}". Type "help" for a list of commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl h-[520px] bg-dark-900 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-dark-800 px-4 py-3 flex items-center justify-between border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
              title="Close"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <div className="ml-3 flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>guest@hamza-portfolio: ~ (bash)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[10px] font-mono bg-dark-900 px-2 py-0.5 rounded border border-white/5">
              Press ESC to exit
            </span>
            <button
              onClick={onClose}
              className="p-1 hover:text-white rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 bg-dark-950/90 text-slate-200 cursor-text"
        >
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.type === 'prompt'
                  ? 'text-cyan-400 font-semibold'
                  : line.type === 'error'
                  ? 'text-rose-400'
                  : line.type === 'system'
                  ? 'text-slate-400'
                  : 'text-slate-300 whitespace-pre-wrap'
              }`}
            >
              {line.text}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <span>guest@hamza-portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-slate-100 outline-none border-none p-0 focus:ring-0 font-mono text-xs sm:text-sm"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Suggestions Footer */}
        <div className="bg-dark-900 px-4 py-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400">
          <span className="text-slate-500 text-[11px]">Quick:</span>
          {['help', 'about', 'skills', 'projects', '1337', 'github', 'linkedin', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-dark-800 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/5 transition-colors text-[11px]"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
