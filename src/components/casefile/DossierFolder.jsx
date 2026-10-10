import React, { useState } from 'react';
import PageGeneral from './PageGeneral';
import PageProjects from './PageProjects';
import PageCycling from './PageCycling';
import DossierContactModal from './DossierContactModal';
import { portfolioData } from '../../data/portfolioData';
import { Instagram, Github, Linkedin, Mail, FileText, Code2, Compass } from 'lucide-react';

export default function DossierFolder() {
  const [activeTab, setActiveTab] = useState('general'); // 'general' | 'projects' | 'cycling'
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { socials } = portfolioData;

  const tabs = [
    { id: 'general', label: 'PAGE 1: DOSSIER', tag: 'SUMMARY', icon: FileText },
    { id: 'projects', label: 'PAGE 2: SYSTEMS', tag: 'PROJECTS', icon: Code2 },
    { id: 'cycling', label: 'PAGE 3: CYCLING', tag: 'EXPEDITIONS', icon: Compass },
  ];

  return (
    <div className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Top Archival Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 pb-4 border-b border-[#3d2817]/60 text-xs font-typewriter text-[#c2b083]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#b82728] animate-pulse" />
          <span className="font-bold tracking-widest uppercase">
            RESTRICTED ACCESS • MOROCCAN INTELLIGENCE ARCHIVE
          </span>
        </div>

        {/* Quick Social Badges */}
        <div className="flex items-center gap-2.5">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#faf4e4] hover:bg-[#ebdcb5] text-[#24170a] hover:text-[#8a1718] border border-[#a89063]/60 text-xs font-bold transition-all shadow-sm"
          >
            <Instagram className="w-3.5 h-3.5 text-[#8a1718]" />
            <span>@wahmane.hamza</span>
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-sm bg-[#faf4e4] hover:bg-[#ebdcb5] text-[#24170a] hover:text-[#8a1718] border border-[#a89063]/60 transition-all shadow-sm"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-sm bg-[#faf4e4] hover:bg-[#ebdcb5] text-[#24170a] hover:text-[#0a66c2] border border-[#a89063]/60 transition-all shadow-sm"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setIsContactOpen(true)}
            className="px-2.5 py-1 bg-[#faf4e4] hover:bg-[#8a1718] hover:text-white text-[#8a1718] border-2 border-[#8a1718]/70 rounded-sm text-xs font-black uppercase transition-all shadow-sm"
          >
            Dispatch ✉
          </button>
        </div>
      </div>

      {/* Mobile Top Tabs (Visible on small screens) */}
      <div className="grid grid-cols-3 gap-1.5 mb-3 lg:hidden font-typewriter text-xs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-1 text-center font-bold uppercase rounded-t border transition-all ${
              activeTab === tab.id
                ? 'bg-[#faf3de] text-[#1a140e] border-[#1f1c19] border-b-0 shadow'
                : 'bg-[#cbba88] text-[#3d2817] border-[#8a7248]'
            }`}
          >
            <div className="truncate">{tab.tag}</div>
          </button>
        ))}
      </div>

      {/* The Manila Case Folder (Matches Reference Image 1 & 2!) */}
      <div className="relative flex items-stretch">
        
        {/* Main Folder Paper Board */}
        <div className="manila-folder-container rounded-2xl p-2 sm:p-4 w-full shadow-2xl relative z-10">
          
          {/* Inner Weathered Case Paper Sheet */}
          <div className="case-sheet rounded-xl p-5 sm:p-8 lg:p-10 min-h-[640px]">
            
            {/* Active Page View */}
            {activeTab === 'general' && (
              <PageGeneral
                onSwitchTab={(t) => setActiveTab(t)}
                onOpenContact={() => setIsContactOpen(true)}
              />
            )}

            {activeTab === 'projects' && (
              <PageProjects
                onSwitchTab={(t) => setActiveTab(t)}
                onOpenContact={() => setIsContactOpen(true)}
              />
            )}

            {activeTab === 'cycling' && (
              <PageCycling
                onSwitchTab={(t) => setActiveTab(t)}
                onOpenContact={() => setIsContactOpen(true)}
              />
            )}

          </div>

        </div>

        {/* Right Edge Manila Folder Tabs (Exact replica of Image 1!) */}
        <div className="hidden lg:flex flex-col justify-start pt-14 -ml-1 z-0 space-y-2 font-typewriter">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-6 px-3 rounded-r-xl border-t-2 border-r-2 border-b-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 select-none flex flex-col items-center gap-2 ${
                  isActive
                    ? 'bg-[#faf3de] text-[#1a140e] border-[#1f1c19] shadow-lg translate-x-2 pl-4 z-20 font-black'
                    : 'bg-[#cbba88] text-[#4a3320] border-[#8a7248] hover:bg-[#d9c99b] hover:translate-x-1 pl-2.5 z-0'
                }`}
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                }}
                title={tab.label}
              >
                <span className="tracking-widest">{tab.tag}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Bottom Dispatch / Contact Modal */}
      <DossierContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Discreet footer */}
      <div className="mt-8 text-center font-typewriter text-xs text-[#a69279]">
        DOSSIER ARCHIVE HW-1337 • KINGDOM OF MOROCCO • CONFIDENTIAL SUBJECT PROFILE
      </div>

    </div>
  );
}
