
import React from 'react';
import { Race } from '../types';
import { isToday, isRaceWeek } from '../utils/time';

interface SmartBannerProps {
  races: Race[];
}

export const SmartBanner: React.FC<SmartBannerProps> = ({ races }) => {
  const todayRace = races.find(r => isToday(r.date));
  const upcomingRaceWeek = races.find(r => isRaceWeek(r.date) && !isToday(r.date));

  let message = "😌 Bu hafta sonu yarış yok";
  let bgColor = "bg-slate-900/50";
  let emoji = "📅";

  if (todayRace) {
    message = "📅 Bugün yarış günü!";
    bgColor = "bg-red-600/20 text-red-400 border-red-500/30";
    emoji = "🔴";
  } else if (upcomingRaceWeek) {
    message = `⏳ Hafta sonu ${upcomingRaceWeek.league} heyecanı var`;
    bgColor = "bg-blue-600/20 text-blue-400 border-blue-500/30";
    emoji = "🔵";
  }

  return (
    <div className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-2xl border text-center text-[9px] sm:text-xs font-black uppercase tracking-widest backdrop-blur-md transition-all duration-500 ${bgColor}`}>
      <span className="mr-2">{emoji}</span>
      {message}
    </div>
  );
};
