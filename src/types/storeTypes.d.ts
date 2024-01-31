/* RootState types  --- STARTS */

interface RootState {
  user: any;
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
  team: string;
  position: string;
  league: string;
  agency: string;
  image: string;
  onlineStatus: boolean;
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
  active: boolean;
}
/* Team types  --- ENDS */

/* League types  --- STARTS */
interface Leagues {
  leagues: League[];
}

interface League {
  id?: string;
  name: string;
  image?: string | undefined;
  badge?: string | undefined;
  teams?: string[] | undefined;
  limit: string;
  seasonId?: string | undefined;
}
/* League types  --- ENDS */

/* Seasons types  --- ENDS */
interface Seasons {
  seasons: Season[];
}
interface Season {
  id?: string;
  name: string;
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
