/* RootState types  --- STARTS */

interface RootState {
  user: User;
  leagues: Leagues;
  teams: Teams;
  players: Players;
  seasons: Seasons;
  matches: Matches;
}
/* RootState types  --- STARTS */

/* Player types  --- STARTS */
interface Players {
  players: Player[];
}

interface Player {
  id: string;
  name: string;
  teams: string[];
  position: string;
  leagues: string[];
  agency: string;
  image: string;
}
/* Player types  --- ENDS */

/* Team types  --- STARTS */
interface Teams {
  teams: Team[];
}

interface Team {
  id: string;
  badge: string;
  image: string;
  name: string;
  players?: string[];
  league: string;
  record: number[] | undefined;
  limit: number;
  location: string;
  active: boolean;
}
/* Team types  --- ENDS */

/* League types  --- STARTS */
interface Leagues {
  leagues: League[];
  nearbyTeams: string[];
}

interface League {
  id?: string;
  admin: string[];
  badge?: string | undefined;
  competition: string;
  fee: string;
  image?: string | undefined;
  limit: string;
  location: string | undefined;
  name: string;
  seasonId?: string | undefined;
  sports: string;
  teams?: string[] | undefined;
  type: string;
  visibility: string;
}
/* League types  --- ENDS */

/* Seasons types  --- ENDS */
interface Seasons {
  seasons: Season[];
}
interface Season {
  id?: string;
  name: string;
  admins: string[];
  leagueId: string;
  start?: string;
  end?: string;
  games?: number;
  cadence?: string;
  matches?: string[] | undefined;
}
/* Seasons types  --- ENDS */

/* Match types  --- ENDS */
interface Matches {
  matches: Match[];
}

interface Match {
  id?: string;
  seasonId: string;
  leagueId: string;
  name: string;
  homeTeam: string;
  awayTeam: string;
  date?: string;
  time?: string;
  location?: string;
  officiating?: string[] | undefined;
}
/* Match types  --- ENDS */

/* User types  --- ENDS */
interface User {
  id: string;
  name: string;
  email: string;
  settings: object;
  preferences: object;
  role: string;
  active: boolean;
  playerId: string;
  verified: boolean;
}
/* User types  --- ENDS */

// Should create a config file with all endpoints tha
// can be retrieve as a first step, then all services take from this
// would need to provide fallback as this strat has one point of fault
