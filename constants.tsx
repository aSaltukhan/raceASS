
import { LeagueType, Race } from './types';

export const ICS_LINKS = {
  [LeagueType.F1]: "https://ics.ecal.com/ecal-sub/6970978e6299ff000220ac34/Formula%201.ics",
  [LeagueType.MOTOGP]: "http://ics.ecal.com/ecal-sub/697098c5d6a6dc0002c99933/MotoGP.ics"
};

export const RACES: Race[] = [
  // --- FORMULA 1 2026 ---
  { id: 'f1-26-test-01', league: LeagueType.F1, name: 'Aramco Pre-Season Testing 1', circuit: 'Bahrain International Circuit', country: 'Bahreyn', flag: '🇧🇭', date: '2026-02-11T09:00:00Z', isTest: true },
  { id: 'f1-26-test-02', league: LeagueType.F1, name: 'Aramco Pre-Season Testing 2', circuit: 'Bahrain International Circuit', country: 'Bahreyn', flag: '🇧🇭', date: '2026-02-18T09:00:00Z', isTest: true },
  { id: 'f1-26-01', league: LeagueType.F1, name: 'Australian Grand Prix', circuit: 'Albert Park Circuit', country: 'Avustralya', flag: '🇦🇺', date: '2026-03-08T05:00:00Z' },
  { id: 'f1-26-02', league: LeagueType.F1, name: 'Chinese Grand Prix', circuit: 'Shanghai International Circuit', country: 'Çin', flag: '🇨🇳', date: '2026-03-15T07:00:00Z' },
  { id: 'f1-26-03', league: LeagueType.F1, name: 'Japanese Grand Prix', circuit: 'Suzuka Circuit', country: 'Japonya', flag: '🇯🇵', date: '2026-03-29T05:00:00Z' },
  { id: 'f1-26-04', league: LeagueType.F1, name: 'Bahrain Grand Prix', circuit: 'Bahrain International Circuit', country: 'Bahreyn', flag: '🇧🇭', date: '2026-04-12T15:00:00Z' },
  { id: 'f1-26-05', league: LeagueType.F1, name: 'Saudi Arabian Grand Prix', circuit: 'Jeddah Corniche Circuit', country: 'Suudi Arabistan', flag: '🇸🇦', date: '2026-04-19T17:00:00Z' },
  { id: 'f1-26-06', league: LeagueType.F1, name: 'Miami Grand Prix', circuit: 'Miami International Autodrome', country: 'ABD', flag: '🇺🇸', date: '2026-05-03T19:30:00Z' },
  { id: 'f1-26-07', league: LeagueType.F1, name: 'Emilia Romagna Grand Prix', circuit: 'Imola Circuit', country: 'İtalya', flag: '🇮🇹', date: '2026-05-17T13:00:00Z' },
  { id: 'f1-26-08', league: LeagueType.F1, name: 'Monaco Grand Prix', circuit: 'Circuit de Monaco', country: 'Monako', flag: '🇲🇨', date: '2026-05-24T13:00:00Z' },
  { id: 'f1-26-09', league: LeagueType.F1, name: 'Spanish Grand Prix', circuit: 'Circuit de Barcelona-Catalunya', country: 'İspanya', flag: '🇪🇸', date: '2026-06-07T13:00:00Z' },
  { id: 'f1-26-10', league: LeagueType.F1, name: 'Canadian Grand Prix', circuit: 'Circuit Gilles Villeneuve', country: 'Kanada', flag: '🇨🇦', date: '2026-06-14T18:00:00Z' },
  { id: 'f1-26-11', league: LeagueType.F1, name: 'Austrian Grand Prix', circuit: 'Red Bull Ring', country: 'Avusturya', flag: '🇦🇹', date: '2026-06-28T13:00:00Z' },
  { id: 'f1-26-12', league: LeagueType.F1, name: 'British Grand Prix', circuit: 'Silverstone Circuit', country: 'Birleşik Krallık', flag: '🇬🇧', date: '2026-07-05T14:00:00Z' },
  { id: 'f1-26-13', league: LeagueType.F1, name: 'Belgian Grand Prix', circuit: 'Circuit de Spa-Francorchamps', country: 'Belçika', flag: '🇧🇪', date: '2026-07-19T13:00:00Z' },
  { id: 'f1-26-14', league: LeagueType.F1, name: 'Hungarian Grand Prix', circuit: 'Hungaroring', country: 'Macaristan', flag: '🇭🇺', date: '2026-07-26T13:00:00Z' },
  { id: 'f1-26-15', league: LeagueType.F1, name: 'Dutch Grand Prix', circuit: 'Circuit Zandvoort', country: 'Hollanda', flag: '🇳🇱', date: '2026-08-23T13:00:00Z' },
  { id: 'f1-26-16', league: LeagueType.F1, name: 'Spanish Grand Prix', circuit: 'Circuito de Madrid', country: 'İspanya', flag: '🇪🇸', date: '2026-09-13T13:00:00Z' },
  { id: 'f1-26-17', league: LeagueType.F1, name: 'Azerbaijan Grand Prix', circuit: 'Baku City Circuit', country: 'Azerbaycan', flag: '🇦🇿', date: '2026-09-26T11:00:00Z' },
  { id: 'f1-26-18', league: LeagueType.F1, name: 'Singapore Grand Prix', circuit: 'Marina Bay Street Circuit', country: 'Singapur', flag: '🇸🇬', date: '2026-10-11T12:00:00Z' },
  { id: 'f1-26-19', league: LeagueType.F1, name: 'United States Grand Prix', circuit: 'Circuit of the Americas', country: 'ABD', flag: '🇺🇸', date: '2026-10-25T19:00:00Z' },
  { id: 'f1-26-20', league: LeagueType.F1, name: 'Mexico City Grand Prix', circuit: 'Autódromo Hermanos Rodríguez', country: 'Meksika', flag: '🇲🇽', date: '2026-11-01T20:00:00Z' },
  { id: 'f1-26-21', league: LeagueType.F1, name: 'São Paulo Grand Prix', circuit: 'Interlagos Circuit', country: 'Brezilya', flag: '🇧🇷', date: '2026-11-08T17:00:00Z' },
  { id: 'f1-26-22', league: LeagueType.F1, name: 'Las Vegas Grand Prix', circuit: 'Las Vegas Strip Circuit', country: 'ABD', flag: '🇺🇸', date: '2026-11-21T06:00:00Z' },
  { id: 'f1-26-23', league: LeagueType.F1, name: 'Qatar Grand Prix', circuit: 'Lusail International Circuit', country: 'Katar', flag: '🇶🇦', date: '2026-11-29T17:00:00Z' },
  { id: 'f1-26-24', league: LeagueType.F1, name: 'Abu Dhabi Grand Prix', circuit: 'Yas Marina Circuit', country: 'BAE', flag: '🇦🇪', date: '2026-12-06T13:00:00Z' },

  // --- MOTOGP 2026 ---
  { id: 'mgp-26-test-01', league: LeagueType.MOTOGP, name: 'Sepang Shakedown Test', circuit: 'Sepang International Circuit', country: 'Malezya', flag: '🇲🇾', date: '2026-01-30T03:00:00Z', isTest: true },
  { id: 'mgp-26-test-02', league: LeagueType.MOTOGP, name: 'Sepang Official Test', circuit: 'Sepang International Circuit', country: 'Malezya', flag: '🇲🇾', date: '2026-02-05T03:00:00Z', isTest: true },
  { id: 'mgp-26-01', league: LeagueType.MOTOGP, name: 'Grand Prix of Qatar', circuit: 'Lusail International Circuit', country: 'Katar', flag: '🇶🇦', date: '2026-03-08T17:00:00Z' },
  { id: 'mgp-26-02', league: LeagueType.MOTOGP, name: 'Grand Prix of Portugal', circuit: 'Autódromo Internacional do Algarve', country: 'Portekiz', flag: '🇵🇹', date: '2026-03-22T13:00:00Z' },
  { id: 'mgp-26-03', league: LeagueType.MOTOGP, name: 'Grand Prix of Argentina', circuit: 'Termas de Río Hondo', country: 'Arjantin', flag: '🇦🇷', date: '2026-04-05T18:00:00Z' },
  { id: 'mgp-26-04', league: LeagueType.MOTOGP, name: 'Grand Prix of the Americas', circuit: 'Circuit of the Americas', country: 'ABD', flag: '🇺🇸', date: '2026-04-12T19:00:00Z' },
  { id: 'mgp-26-05', league: LeagueType.MOTOGP, name: 'Grand Prix of Spain', circuit: 'Circuito de Jerez', country: 'İspanya', flag: '🇪🇸', date: '2026-04-26T12:00:00Z' },
  { id: 'mgp-26-06', league: LeagueType.MOTOGP, name: 'Grand Prix of France', circuit: 'Le Mans', country: 'Fransa', flag: '🇫🇷', date: '2026-05-10T12:00:00Z' },
  { id: 'mgp-26-07', league: LeagueType.MOTOGP, name: 'Grand Prix of Italy', circuit: 'Mugello Circuit', country: 'İtalya', flag: '🇮🇹', date: '2026-05-24T12:00:00Z' },
  { id: 'mgp-26-08', league: LeagueType.MOTOGP, name: 'Grand Prix of Catalunya', circuit: 'Circuit de Barcelona-Catalunya', country: 'İspanya', flag: '🇪🇸', date: '2026-06-07T12:00:00Z' }
];

export const LEAGUE_META = {
  [LeagueType.F1]: {
    label: 'Formula 1',
    icon: '🏎️',
    color: 'from-red-600 via-red-800 to-slate-950',
    description: 'Yeni nesil motorların ve aerodinamik devrimin yılı.'
  },
  [LeagueType.MOTOGP]: {
    label: 'MotoGP',
    icon: '🏍️',
    color: 'from-blue-700 via-blue-900 to-slate-950',
    description: 'İki tekerlek üzerindeki en saf ve teknolojik adrenalin.'
  }
};
