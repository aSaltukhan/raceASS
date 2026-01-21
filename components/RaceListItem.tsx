
import React from 'react';
import { Race } from '../types';
import { formatLocalTime, isToday } from '../utils/time';
import { ICS_LINKS } from '../constants';
import { CountdownDisplay } from './CountdownDisplay';

interface RaceListItemProps {
  race: Race;
  isFocused?: boolean;
  expanded?: boolean;
}

export const RaceListItem: React.FC<RaceListItemProps> = ({ race, isFocused, expanded }) => {
  const icsLink = ICS_LINKS[race.league];
  const raceTime = new Date(race.date).getTime();
  const now = new Date().getTime();
  const isPast = raceTime < now;
  const isTodayRace = isToday(race.date);

  return (
    <div 
      id={`race-${race.id}`}
      className={`relative overflow-hidden bg-slate-900/30 border transition-all duration-700 rounded-[2.5rem] p-6 sm:p-10 ${
        isFocused ? 'border-red-500/60 bg-slate-900/80 shadow-[0_0_50px_rgba(220,38,38,0.1)] ring-1 ring-red-500/10' : 'border-slate-800/40 hover:border-slate-700/60'
      } ${isPast ? 'opacity-40 grayscale-[0.8]' : ''}`}
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Üst Kısım: Detaylar ve Takvime Ekle */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {race.isTest && (
                <span className="px-2.5 py-1.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[8px] sm:text-[9px] font-black uppercase tracking-widest">
                  🛠️ TEST SEANSI
                </span>
              )}
              {isTodayRace ? (
                <span className="px-2.5 py-1.5 rounded-xl bg-red-600 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest animate-pulse">
                  🔴 BUGÜN
                </span>
              ) : isPast ? (
                <span className="px-2.5 py-1.5 rounded-xl bg-slate-800 text-slate-500 text-[8px] sm:text-[9px] font-black uppercase tracking-widest">
                  ⚫ TAMAMLANDI
                </span>
              ) : (
                <span className="px-2.5 py-1.5 rounded-xl bg-green-500/10 text-green-400 border border-green-500/10 text-[8px] sm:text-[9px] font-black uppercase tracking-widest">
                  🟢 YAKLAŞIYOR
                </span>
              )}
            </div>
            
            <div className="flex items-start gap-3 sm:gap-5">
              <span className="text-3xl sm:text-4xl filter drop-shadow-md shrink-0 leading-none pt-1">{race.flag}</span>
              <div className="space-y-1 sm:space-y-2">
                {/* Yabancı özel adlarda uppercase/transform yasaklandı */}
                <h3 className="text-xl sm:text-3xl font-brand italic text-white tracking-normal leading-snug break-words">
                  {race.name}
                </h3>
                <div className="flex flex-col gap-1.5 text-slate-400 text-[10px] sm:text-[11px] font-bold tracking-wider">
                  <span className="opacity-70 flex items-start gap-2 leading-tight">
                    <span className="text-red-500 text-xs shrink-0">📍</span>
                    <span className="break-words font-medium">{race.circuit}</span>
                  </span>
                  <span className="opacity-70 flex items-center gap-2 leading-tight">
                    <span className="text-blue-500 text-xs shrink-0">🌍</span>
                    <span className="font-medium">{race.country}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a 
            href={icsLink}
            className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/5 text-white hover:bg-red-600 hover:text-white transition-all active:scale-90 border border-white/5 group shadow-xl shrink-0 h-fit flex items-center justify-center"
            title="Bu yarışı takvimine ekle."
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
          </a>
        </div>

        {expanded && (
          <div className="py-6 border-y border-white/5 bg-slate-950/40 rounded-[1.5rem] sm:rounded-[2rem] px-6 animate-in zoom-in-95 fade-in duration-500">
             <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                  {race.isTest ? '🧪 Seans Akışı' : '🏁 Planlama'}
                </p>
             </div>
             <div className="grid gap-4">
               {[
                 { day: race.isTest ? 'G1' : 'Cuma', event: race.isTest ? 'Veri Toplama' : 'Antrenman' },
                 { day: race.isTest ? 'G2' : 'Cmt', event: race.isTest ? 'Aero & Lastik' : 'Sıralama' },
                 { day: race.isTest ? 'G3' : 'Pazar', event: race.isTest ? 'Uzun Sürüş' : 'Yarış' }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center justify-between text-[11px] font-bold group">
                   <span className="text-slate-500 uppercase tracking-widest">{item.day}</span>
                   <div className="h-px flex-1 bg-white/5 mx-4"></div>
                   <span className={idx === 2 ? 'text-red-500' : 'text-slate-200'}>{item.event}</span>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* Alt Kısım: Zaman ve Geri Sayım Kutusu */}
        <div className="flex flex-col gap-6">
          <div className="w-full space-y-1 text-center sm:text-left pl-1">
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">
              {race.isTest ? 'Seans başlangıcı' : 'Yarış saati'}
            </p>
            <div className="text-sm font-bold text-white tracking-wide">
              {formatLocalTime(race.date)}
            </div>
          </div>

          {!isPast && (
            <div className="w-full bg-slate-950/60 p-5 sm:p-8 rounded-[2rem] border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
              <CountdownDisplay targetDate={race.date} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
