
import React, { useState, useMemo, useEffect } from 'react';
import { LeagueType } from './types';
import { RACES, ICS_LINKS } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeagueCard } from './components/LeagueCard';
import { RaceListItem } from './components/RaceListItem';
import { SmartBanner } from './components/SmartBanner';
import { getSeasonProgress } from './utils/time';

const App: React.FC = () => {
  const [view, setView] = useState<{ type: 'home' | 'league', leagueId?: LeagueType }>({ type: 'home' });
  const [showDetailed, setShowDetailed] = useState(false);

  const getNextRace = (type: LeagueType) => {
    const now = new Date().getTime();
    const sorted = RACES
      .filter(r => r.league === type)
      .filter(r => !r.isTest)
      .filter(r => new Date(r.date).getTime() > now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return sorted.length > 0 ? sorted[0] : null;
  };

  const handleGoHome = () => setView({ type: 'home' });
  const handleViewSchedule = (type: LeagueType) => setView({ type: 'league', leagueId: type });

  const activeRaces = useMemo(() => {
    if (view.type !== 'league' || !view.leagueId) return [];
    return RACES
      .filter(r => r.league === view.leagueId)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [view]);

  const seasonProgress = useMemo(() => {
    const mainRaces = activeRaces.filter(r => !r.isTest);
    return getSeasonProgress(mainRaces);
  }, [activeRaces]);
  
  const focusedRaceId = useMemo(() => {
    if (view.type !== 'league') return null;
    const now = new Date().getTime();
    const next = activeRaces.find(r => new Date(r.date).getTime() > now);
    return next ? next.id : null;
  }, [activeRaces, view]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-red-600 selection:text-white overflow-x-hidden antialiased">
      <Header onGoHome={handleGoHome} showBack={view.type !== 'home'} />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {view.type === 'home' ? (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 space-y-10 sm:space-y-12">
            <SmartBanner races={RACES} />
            
            <div className="text-center space-y-3 sm:space-y-4">
              <h1 className="text-6xl sm:text-8xl font-brand italic tracking-tighter leading-none select-none">
                race<span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">ASS</span>
              </h1>
              <p className="text-slate-500 font-black text-[9px] sm:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.6em] opacity-60">Geleceğin Yarış Takvimi</p>
            </div>
            
            <div className="grid gap-8 sm:gap-10">
              <LeagueCard 
                type={LeagueType.F1} 
                nextRace={getNextRace(LeagueType.F1)} 
                onViewSchedule={handleViewSchedule}
              />
              
              <LeagueCard 
                type={LeagueType.MOTOGP} 
                nextRace={getNextRace(LeagueType.MOTOGP)} 
                onViewSchedule={handleViewSchedule}
              />
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-12 duration-700 space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 px-2">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 text-[10px] font-black tracking-widest text-slate-400">
                    {view.leagueId === LeagueType.F1 ? '🏎️ FORMULA 1' : '🏍️ MOTOGP'}
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-brand italic text-white tracking-tighter leading-none">
                    2026 TAKVİMİ
                  </h2>
                </div>
                <a 
                  href={view.leagueId ? ICS_LINKS[view.leagueId] : '#'}
                  className="group flex items-center gap-2 text-[10px] font-black uppercase text-red-500 transition-all"
                >
                  <span className="border-b border-red-500/20 group-hover:border-red-500">Takvime Ekle</span>
                  <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>

              <div className="space-y-3 bg-slate-900/20 p-5 sm:p-6 rounded-[2rem] border border-white/5">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-500">
                  <span>Sezonun %{seasonProgress}’i Tamamlandı</span>
                  <span>2026</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900 shadow-inner">
                  <div 
                    className="h-full bg-red-600 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
                    style={{ width: `${seasonProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-2 sm:px-4">
                  <div className="flex items-center gap-2">
                     <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                     </svg>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Detaylı Görünüm</span>
                  </div>
                  <button 
                    onClick={() => setShowDetailed(!showDetailed)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all focus:outline-none ${
                      showDetailed ? 'bg-red-600' : 'bg-slate-800'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-xl transition-all ${
                        showDetailed ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="h-px bg-white/5 w-full"></div>
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8">
              {activeRaces.length > 0 ? (
                activeRaces.map(race => (
                  <RaceListItem 
                    key={race.id} 
                    race={race} 
                    isFocused={race.id === focusedRaceId}
                    expanded={showDetailed}
                  />
                ))
              ) : (
                <div className="py-32 text-center space-y-6 opacity-30">
                  <div className="text-7xl">📡</div>
                  <p className="font-brand italic text-lg tracking-widest uppercase">Takvim Yükleniyor...</p>
                </div>
              )}
            </div>
            
            <button 
              onClick={handleGoHome}
              className="w-full py-6 sm:py-8 bg-slate-900/30 border border-slate-900/50 rounded-[2.5rem] text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] hover:text-white hover:bg-slate-900/50 transition-all active:scale-[0.98]"
            >
              Merkeze Dön
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
