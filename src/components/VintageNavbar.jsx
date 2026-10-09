import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, Instagram, Github, Linkedin, Menu, X, Mail } from 'lucide-react';

export default function VintageNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal, socials } = portfolioData;

  const navLinks = [
    { name: 'Expeditions', href: '#expeditions' },
    { name: 'The Craft', href: '#engineering' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Dispatch', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f4ebd0]/90 backdrop-blur-md border-b-2 border-[#b8860b]/40 shadow-md shadow-[#4a3320]/10">
      {/* Decorative top gold hairline */}
      <div className="h-1 bg-gradient-to-r from-[#8b261e] via-[#c59b27] to-[#8b261e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          
          {/* Logo / Title in Antique Calligraphy */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#8b261e] border-2 border-[#c59b27] flex items-center justify-center text-[#fdf8ee] shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-[#fdf8ee]" />
            </div>
            <div>
              <span className="font-script text-2xl sm:text-3xl font-bold text-[#2b1c11] tracking-wide block leading-none">
                {personal.name}
              </span>
              <span className="font-cinzel text-[10px] tracking-widest text-[#7c5737] uppercase block mt-1">
                Cyclist • Explorer • Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-cinzel text-xs tracking-wider text-[#4a3320]">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-1.5 hover:text-[#8b261e] font-semibold transition-colors uppercase relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#8b261e] group-hover:w-3/4 transition-all" />
                </a>
                {idx < navLinks.length - 1 && <span className="text-[#b8860b]/60 select-none">✦</span>}
              </React.Fragment>
            ))}
          </nav>

          {/* Right Action Icons (Instagram + GitHub + Email) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Adventures"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-cinzel bg-[#8b261e]/10 hover:bg-[#8b261e] text-[#8b261e] hover:text-[#fffdfa] border border-[#8b261e]/40 transition-all shadow-sm"
              title="Instagram: @wahmane.hamza"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@wahmane.hamza</span>
            </a>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[#4a3320] hover:text-[#8b261e] hover:bg-[#b8860b]/15 rounded-full border border-[#b8860b]/30 transition-colors"
              title="GitHub Archive"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              aria-label="Send Dispatch"
              className="p-2 text-[#4a3320] hover:text-[#8b261e] hover:bg-[#b8860b]/15 rounded-full border border-[#b8860b]/30 transition-colors"
              title="Dispatch Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#8b261e] bg-[#8b261e]/10 rounded-full"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4a3320] hover:text-[#8b261e]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf5e6] border-b-2 border-[#b8860b]/50 px-4 py-4 space-y-2 font-cinzel text-xs text-[#2b1c11]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-[#eadabe] text-center uppercase tracking-wider font-semibold"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#b8860b]/30 flex justify-center gap-4">
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#8b261e] font-semibold"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#2b1c11] font-semibold"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
