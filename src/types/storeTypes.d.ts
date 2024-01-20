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
  id: string;
  image: string;
  badge: string;
  name: string;
  teams: string[];
  limit: number;
}
/* League types  --- ENDS */
