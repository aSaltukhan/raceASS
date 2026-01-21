
export enum LeagueType {
  F1 = 'F1',
  MOTOGP = 'MOTOGP'
}

export enum SessionType {
  PRACTICE = 'PRACTICE',
  QUALIFYING = 'QUALIFYING',
  SPRINT = 'SPRINT',
  RACE = 'RACE'
}

export interface RaceSession {
  type: SessionType;
  date: string; // ISO format
}

export interface Race {
  id: string;
  name: string;
  circuit: string;
  country: string;
  flag: string; // Emoji flag
  date: string; // ISO format for the main race
  league: LeagueType;
  sessions?: RaceSession[]; // Optional session data
  isTest?: boolean; // Yarışın bir test seansı olup olmadığını belirtir
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}
