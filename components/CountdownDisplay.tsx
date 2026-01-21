
import React, { useEffect, useState } from 'react';
import { calculateCountdown } from '../utils/time';
import { CountdownTime } from '../types';

interface CountdownDisplayProps {
  targetDate: string;
}

export const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ targetDate }) => {
  const [time, setTime] = useState<CountdownTime>(calculateCountdown(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateCountdown(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (time.isExpired) {
    return (
      <div className="px-6 py-2 rounded-full bg-red-600/10 border border-red-500/30">
        <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.2em] animate-pulse">🔴 YARIŞ BAŞLADI</span>
      </div>
    );
  }

  const Unit = ({ value, label }: { value: number | string, label: string }) => (
    <div className="flex flex-col items-center justify-center w-[50px] sm:w-[65px]">
      <span className="text-2xl sm:text-3xl font-brand italic font-black text-white tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.1em] text-slate-500 mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-0.5 sm:gap-1">
      <Unit value={time.days} label="GÜN" />
      <span className="text-xl font-black text-slate-800 mb-4 sm:mb-5">:</span>
      <Unit value={time.hours} label="SAAT" />
      <span className="text-xl font-black text-slate-800 mb-4 sm:mb-5">:</span>
      <Unit value={time.minutes} label="DAK" />
      <span className="text-xl font-black text-slate-800 mb-4 sm:mb-5">:</span>
      <Unit value={time.seconds} label="SAN" />
    </div>
  );
};
