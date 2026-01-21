
import React from 'react';
import { LeagueType, Race } from '../types';
import { LEAGUE_META } from '../constants';
import { CountdownDisplay } from './CountdownDisplay';

interface LeagueCardProps {
  type: LeagueType;
  nextRace: Race | null;
  onViewSchedule: (type: LeagueType) => void;
}

export const LeagueCard: React.FC<LeagueCardProps> = ({ type, nextRace, onViewSchedule }) => {
  const meta = LEAGUE_META[type];

  return (
    <div className={`relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br ${meta.color} p-8 sm:p-10 shadow-2xl transition-all duration-700 hover:shadow-red-950/10 group`}>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-colors duration-1000"></div>
      
      <div className="flex justify-between items-start mb-6 sm:mb-8 relative z-10">
        <div className="space-y-2">
          {/* Yabancı marka isimlerinde uppercase yasaklandı, Title Case korunuyor */}
          <h2 className="text-4xl sm:text-5xl font-brand italic text-white tracking-tighter leading-none">{meta.label}</h2>
          <div className="flex items-center gap-2">
             <div className="h-1 w-6 sm:w-8 bg-white/20 rounded-full"></div>
             <p className="text-white/40 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">2026 Sezonu</p>
          </div>
          <p className="text-white/70 text-sm max-w-[280px] mt-3 sm:mt-4 font-medium leading-relaxed hidden sm:block">{meta.description}</p>
        </div>
        <span className="text-5xl sm:text-6xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">{meta.icon}</span>
      </div>

      {nextRace ? (
        <div className="space-y-6 sm:space-y-8 relative z-10">
          <div className="bg-slate-950/40 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border border-white/5 shadow-inner">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
              <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black">SIRADAKİ DURAK</p>
            </div>
            <h3 className="text-2xl sm:text-3xl font-brand italic text-white tracking-tight mb-2 leading-tight">{nextRace.name}</h3>
            <p className="text-white/50 text-[10px] sm:text-xs mb-6 sm:mb-8 font-bold uppercase tracking-widest italic opacity-80 line-clamp-1">{nextRace.circuit}</p>
            <div className="flex justify-center scale-90 sm:scale-100">
               <CountdownDisplay targetDate={nextRace.date} />
            </div>
          </div>
          
          <button 
            onClick={() => onViewSchedule(type)}
            className="w-full bg-white text-slate-950 py-5 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-xs shadow-2xl active:scale-95 transition-all hover:bg-slate-100 flex items-center justify-center gap-3 sm:gap-4 tracking-[0.15em] sm:tracking-[0.2em] group"
          >
            TAKVİME GÖZ AT
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="py-12 sm:py-16 text-center opacity-30 italic text-white text-xs sm:text-sm font-bold border-2 border-dashed border-white/10 rounded-[2rem] sm:rounded-[2.5rem]">
          Güncelleniyor...
        </div>
      )}
    </div>
  );
};
