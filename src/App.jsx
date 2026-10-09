import React from 'react';
import DossierFolder from './components/casefile/DossierFolder';

export default function App() {
  return (
    <div className="min-h-screen bg-[#18120c] text-[#2b1c11] flex flex-col justify-center items-center py-4 font-mono selection:bg-[#b82728]/30 selection:text-[#1a140e]">
      <main className="w-full">
        <DossierFolder />
      </main>
    </div>
  );
}
