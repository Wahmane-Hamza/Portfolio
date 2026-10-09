import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Instagram, Github, Linkedin, Compass } from 'lucide-react';

export default function VintageFooter() {
  const { personal, socials } = portfolioData;

  return (
    <footer className="py-12 bg-[#ebdcb8] border-t-2 border-[#b8860b]/40 text-[#4a3320]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Brand Calligraphy */}
        <div>
          <span className="font-script text-4xl text-[#2b1c11] block">
            {personal.name}
          </span>
          <span className="font-cinzel text-xs tracking-widest text-[#7c5737] uppercase block mt-1">
            Cyclist & Explorer • 1337 / 42 School Software Craftsman
          </span>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 text-[#8b261e] text-xs">
          <span>~ ⚜ ~</span>
          <Compass className="w-4 h-4 text-[#8b261e]" />
          <span>~ ⚜ ~</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#fcf8ec] text-[#8b261e] hover:bg-[#8b261e] hover:text-[#fffdfa] border border-[#b8860b]/40 transition-colors shadow-sm"
            title="Instagram: @wahmane.hamza"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#fcf8ec] text-[#2b1c11] hover:bg-[#2b1c11] hover:text-[#fffdfa] border border-[#b8860b]/40 transition-colors shadow-sm"
            title="GitHub: @Wahmane-Hamza"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#fcf8ec] text-[#2b1c11] hover:bg-[#8b261e] hover:text-[#fffdfa] border border-[#b8860b]/40 transition-colors shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Location */}
        <p className="font-typewriter text-xs text-[#7c5737] pt-4 border-t border-[#b8860b]/20">
          © {new Date().getFullYear()} {personal.name} • Kingdom of Morocco • All rights reserved.
        </p>

      </div>
    </footer>
  );
}
