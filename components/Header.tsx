
import React from 'react';

interface HeaderProps {
  onGoHome?: () => void;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onGoHome, showBack }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5 px-6 py-5 flex items-center justify-between">
      <div 
        onClick={onGoHome} 
        className="flex items-center gap-2 cursor-pointer group active:scale-95 transition-transform"
      >
        <span className="font-brand text-2xl tracking-tighter italic text-white group-hover:text-red-500 transition-colors">raceASS</span>
      </div>
      {showBack && (
        <button 
          onClick={onGoHome}
          className="text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
          Geri
        </button>
      )}
    </header>
  );
};
