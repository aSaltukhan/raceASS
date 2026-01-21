
import { CountdownTime, Race } from '../types';

export const calculateCountdown = (targetDate: string): CountdownTime => {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isExpired: false };
};

export const formatLocalTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const isToday = (dateStr: string): boolean => {
  const d = new Date(dateStr);
  const now = new Date();
  return d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();
};

export const isRaceWeek = (dateStr: string): boolean => {
  const raceDate = new Date(dateStr);
  const now = new Date();
  const diffTime = raceDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // If race is within 3 days or it's the week of the race (Fri-Sun)
  return diffDays >= 0 && diffDays <= 3;
};

export const getSeasonProgress = (races: Race[]): number => {
  if (races.length === 0) return 0;
  const now = new Date().getTime();
  const completed = races.filter(r => new Date(r.date).getTime() < now).length;
  return Math.round((completed / races.length) * 100);
};
