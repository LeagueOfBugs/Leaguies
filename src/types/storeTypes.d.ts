/* RootState types  --- STARTS */

interface RootState {
  leagues: Leagues;
  teams: Teams;
  players: Players;
}
/* RootState types  --- STARTS */

/* Player types  --- STARTS */
type Agency = 'restricted' | 'freeAgent';

interface Players {
  players: Player[];
}

interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  league: string;
  agency: Agency;
}
/* Player types  --- ENDS */

/* Team types  --- STARTS */
interface Teams {
  teams: Team[];
}

interface Team {
  id: string;
  name: string;
  players: Player[];
  league: string;
  record: string;
}
/* Team types  --- ENDS */

/* League types  --- STARTS */
interface Leagues {
  // id: string;
  // name: string;
  leagues: League[];
}

interface League {
  id: string;
  name: string;
  teams: Team[];
}
/* League types  --- ENDS */
