/* RootState types  --- STARTS */

interface RootState {
  leagues: Leagues;
  teams: Teams;
  players: Players;
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
  players: string[];
  league: string;
  record: number[];
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
  image: string | undefined;
  badge: string | undefined;
  teams: string[];
  limit: string;
  seasonId?: string | undefined;
}
/* League types  --- ENDS */

interface Seasons {
  seasons: Season[];
}

interface Match {
  id: string;
  name: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  location: string;
  leagueId: string;
  officiating: string[];
}

interface Season {
  id: string;
  leagueId: string;
  start: string;
  end: string;
  games: number;
  cadence: string;
  matches: string[];
}
