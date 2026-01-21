
import { LeagueType, Race } from './types';

export const ICS_LINKS = {
  [LeagueType.F1]: "https://ics.ecal.com/ecal-sub/6970978e6299ff000220ac34/Formula%201.ics",
  [LeagueType.MOTOGP]: "http://ics.ecal.com/ecal-sub/697098c5d6a6dc0002c99933/MotoGP.ics"
};

export const RACES: Race[] = [
  // --- FORMULA 1 2026 (Resmi Görsel Verileri) ---
  { id: 'f1-26-test-01', league: LeagueType.F1, name: 'Bahrain Testing 1', circuit: 'Bahrain International Circuit', country: 'Bahreyn', flag: '🇧🇭', date: '2026-02-13T16:00:00Z', isTest: true },
  { id: 'f1-26-test-02', league: LeagueType.F1, name: 'Bahrain Testing 2', circuit: 'Bahrain International Circuit', country: 'Bahreyn', flag: '🇧🇭', date: '2026-02-20T16:00:00Z', isTest: true },
  { id: 'f1-26-01', league: LeagueType.F1, name: 'Australia Grand Prix', circuit: 'Albert Park Circuit', country: 'Avustralya', flag: '🇦🇺', date: '2026-03-08T05:00:00Z' },
  { id: 'f1-26-02', league: LeagueType.F1, name: 'China Grand Prix', circuit: 'Shanghai International Circuit', country: 'Çin', flag: '🇨🇳', date: '2026-03-15T07:00:00Z' },
  { id: 'f1-26-03', league: LeagueType.F1, name: 'Japan Grand Prix', circuit: 'Suzuka Circuit', country: 'Japonya', flag: '🇯🇵', date: '2026-03-29T05:00:00Z' },
  { id: 'f1-26-04', league: LeagueType.F1, name: 'Bahrain Grand Prix', circuit: 'Bahrain International Circuit', country: 'Bahreyn', flag: '🇧🇭', date: '2026-04-12T15:00:00Z' },
  { id: 'f1-26-05', league: LeagueType.F1, name: 'Saudi Arabia Grand Prix', circuit: 'Jeddah Corniche Circuit', country: 'Suudi Arabistan', flag: '🇸🇦', date: '2026-04-19T17:00:00Z' },
  { id: 'f1-26-06', league: LeagueType.F1, name: 'Miami Grand Prix', circuit: 'Miami International Autodrome', country: 'ABD', flag: '🇺🇸', date: '2026-05-03T19:30:00Z' },
  { id: 'f1-26-07', league: LeagueType.F1, name: 'Canada Grand Prix', circuit: 'Circuit Gilles Villeneuve', country: 'Kanada', flag: '🇨🇦', date: '2026-05-24T18:00:00Z' },
  { id: 'f1-26-08', league: LeagueType.F1, name: 'Monaco Grand Prix', circuit: 'Circuit de Monaco', country: 'Monako', flag: '🇲🇨', date: '2026-06-07T13:00:00Z' },
  { id: 'f1-26-09', league: LeagueType.F1, name: 'Barcelona-Catalunya Grand Prix', circuit: 'Circuit de Barcelona-Catalunya', country: 'İspanya', flag: '🇪🇸', date: '2026-06-14T13:00:00Z' },
  { id: 'f1-26-10', league: LeagueType.F1, name: 'Austria Grand Prix', circuit: 'Red Bull Ring', country: 'Avusturya', flag: '🇦🇹', date: '2026-06-28T13:00:00Z' },
  { id: 'f1-26-11', league: LeagueType.F1, name: 'Great Britain Grand Prix', circuit: 'Silverstone Circuit', country: 'Birleşik Krallık', flag: '🇬🇧', date: '2026-07-05T14:00:00Z' },
  { id: 'f1-26-12', league: LeagueType.F1, name: 'Belgium Grand Prix', circuit: 'Circuit de Spa-Francorchamps', country: 'Belçika', flag: '🇧🇪', date: '2026-07-19T13:00:00Z' },
  { id: 'f1-26-13', league: LeagueType.F1, name: 'Hungary Grand Prix', circuit: 'Hungaroring', country: 'Macaristan', flag: '🇭🇺', date: '2026-07-26T13:00:00Z' },
  { id: 'f1-26-14', league: LeagueType.F1, name: 'Netherlands Grand Prix', circuit: 'Circuit Zandvoort', country: 'Hollanda', flag: '🇳🇱', date: '2026-08-23T13:00:00Z' },
  { id: 'f1-26-15', league: LeagueType.F1, name: 'Italy Grand Prix', circuit: 'Monza Circuit', country: 'İtalya', flag: '🇮🇹', date: '2026-09-06T13:00:00Z' },
  { id: 'f1-26-16', league: LeagueType.F1, name: 'Spain (Madrid) Grand Prix', circuit: 'Madrid Street Circuit', country: 'İspanya', flag: '🇪🇸', date: '2026-09-13T13:00:00Z' },
  { id: 'f1-26-17', league: LeagueType.F1, name: 'Azerbaijan Grand Prix', circuit: 'Baku City Circuit', country: 'Azerbaycan', flag: '🇦🇿', date: '2026-09-26T11:00:00Z' },
  { id: 'f1-26-18', league: LeagueType.F1, name: 'Singapore Grand Prix', circuit: 'Marina Bay Street Circuit', country: 'Singapur', flag: '🇸🇬', date: '2026-10-11T12:00:00Z' },
  { id: 'f1-26-19', league: LeagueType.F1, name: 'United States Grand Prix', circuit: 'Circuit of the Americas', country: 'ABD', flag: '🇺🇸', date: '2026-10-25T19:00:00Z' },
  { id: 'f1-26-20', league: LeagueType.F1, name: 'Mexico Grand Prix', circuit: 'Autódromo Hermanos Rodríguez', country: 'Meksika', flag: '🇲🇽', date: '2026-11-01T20:00:00Z' },
  { id: 'f1-26-21', league: LeagueType.F1, name: 'Brazil Grand Prix', circuit: 'Interlagos Circuit', country: 'Brezilya', flag: '🇧🇷', date: '2026-11-08T17:00:00Z' },
  { id: 'f1-26-22', league: LeagueType.F1, name: 'Las Vegas Grand Prix', circuit: 'Las Vegas Strip Circuit', country: 'ABD', flag: '🇺🇸', date: '2026-11-21T06:00:00Z' },
  { id: 'f1-26-23', league: LeagueType.F1, name: 'Qatar Grand Prix', circuit: 'Lusail International Circuit', country: 'Katar', flag: '🇶🇦', date: '2026-11-29T17:00:00Z' },
  { id: 'f1-26-24', league: LeagueType.F1, name: 'Abu Dhabi Grand Prix', circuit: 'Yas Marina Circuit', country: 'BAE', flag: '🇦🇪', date: '2026-12-06T13:00:00Z' },

  // --- MOTOGP 2026 (Resmi Görsel Verileri) ---
  { id: 'mgp-26-01', league: LeagueType.MOTOGP, name: 'Thailand Grand Prix', circuit: 'Buriram', country: 'Tayland', flag: '🇹🇭', date: '2026-03-01T08:00:00Z' },
  { id: 'mgp-26-02', league: LeagueType.MOTOGP, name: 'Brazil Grand Prix', circuit: 'Goiânia', country: 'Brezilya', flag: '🇧🇷', date: '2026-03-22T17:00:00Z' },
  { id: 'mgp-26-03', league: LeagueType.MOTOGP, name: 'USA Grand Prix', circuit: 'Austin', country: 'ABD', flag: '🇺🇸', date: '2026-03-29T19:00:00Z' },
  { id: 'mgp-26-04', league: LeagueType.MOTOGP, name: 'Qatar Grand Prix', circuit: 'Lusail', country: 'Katar', flag: '🇶🇦', date: '2026-04-12T17:00:00Z' },
  { id: 'mgp-26-05', league: LeagueType.MOTOGP, name: 'Spain Grand Prix', circuit: 'Jerez', country: 'İspanya', flag: '🇪🇸', date: '2026-04-26T12:00:00Z' },
  { id: 'mgp-26-06', league: LeagueType.MOTOGP, name: 'France Grand Prix', circuit: 'Le Mans', country: 'Fransa', flag: '🇫🇷', date: '2026-05-10T12:00:00Z' },
  { id: 'mgp-26-07', league: LeagueType.MOTOGP, name: 'Catalonia Grand Prix', circuit: 'Barcelona', country: 'İspanya', flag: '🇪🇸', date: '2026-05-17T12:00:00Z' },
  { id: 'mgp-26-08', league: LeagueType.MOTOGP, name: 'Italy Grand Prix', circuit: 'Mugello', country: 'İtalya', flag: '🇮🇹', date: '2026-05-31T12:00:00Z' },
  { id: 'mgp-26-09', league: LeagueType.MOTOGP, name: 'Hungary Grand Prix', circuit: 'Balaton', country: 'Macaristan', flag: '🇭🇺', date: '2026-06-07T12:00:00Z' },
  { id: 'mgp-26-10', league: LeagueType.MOTOGP, name: 'Czechia Grand Prix', circuit: 'Brno', country: 'Çekya', flag: '🇨🇿', date: '2026-06-21T12:00:00Z' },
  { id: 'mgp-26-11', league: LeagueType.MOTOGP, name: 'Netherlands Grand Prix', circuit: 'Assen', country: 'Hollanda', flag: '🇳🇱', date: '2026-06-28T12:00:00Z' },
  { id: 'mgp-26-12', league: LeagueType.MOTOGP, name: 'Germany Grand Prix', circuit: 'Sachsenring', country: 'Almanya', flag: '🇩🇪', date: '2026-07-12T12:00:00Z' },
  { id: 'mgp-26-13', league: LeagueType.MOTOGP, name: 'Great Britain Grand Prix', circuit: 'Silverstone', country: 'Birleşik Krallık', flag: '🇬🇧', date: '2026-08-09T13:00:00Z' },
  { id: 'mgp-26-14', league: LeagueType.MOTOGP, name: 'Aragon Grand Prix', circuit: 'Alcañiz', country: 'İspanya', flag: '🇪🇸', date: '2026-08-30T12:00:00Z' },
  { id: 'mgp-26-15', league: LeagueType.MOTOGP, name: 'San Marino Grand Prix', circuit: 'Misano', country: 'San Marino', flag: '🇸🇲', date: '2026-09-13T12:00:00Z' },
  { id: 'mgp-26-16', league: LeagueType.MOTOGP, name: 'Austria Grand Prix', circuit: 'Spielberg', country: 'Avusturya', flag: '🇦🇹', date: '2026-09-20T12:00:00Z' },
  { id: 'mgp-26-17', league: LeagueType.MOTOGP, name: 'Japan Grand Prix', circuit: 'Motegi', country: 'Japonya', flag: '🇯🇵', date: '2026-10-04T05:00:00Z' },
  { id: 'mgp-26-18', league: LeagueType.MOTOGP, name: 'Indonesia Grand Prix', circuit: 'Mandalika', country: 'Endonezya', flag: '🇮🇩', date: '2026-10-11T07:00:00Z' },
  { id: 'mgp-26-19', league: LeagueType.MOTOGP, name: 'Australia Grand Prix', circuit: 'Phillip Island', country: 'Avustralya', flag: '🇦🇺', date: '2026-10-25T05:00:00Z' },
  { id: 'mgp-26-20', league: LeagueType.MOTOGP, name: 'Malaysia Grand Prix', circuit: 'Sepang', country: 'Malezya', flag: '🇲🇾', date: '2026-11-01T07:00:00Z' },
  { id: 'mgp-26-21', league: LeagueType.MOTOGP, name: 'Portugal Grand Prix', circuit: 'Portimao', country: 'Portekiz', flag: '🇵🇹', date: '2026-11-15T13:00:00Z' },
  { id: 'mgp-26-22', league: LeagueType.MOTOGP, name: 'Valencia Grand Prix', circuit: 'Cheste', country: 'İspanya', flag: '🇪🇸', date: '2026-11-22T13:00:00Z' }
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
