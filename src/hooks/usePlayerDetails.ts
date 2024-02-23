import {useSelector} from 'react-redux';
import {selectUser} from '../selectors/userSelector';
import {selectSeasonByIdBulk, selectSeasonsObjById} from '../selectors/seasonSelector';
import {
  selectLeagueById,
  selectLeagueByIdBulk,
} from '../selectors/leagueSelector';
import {selectPlayerById} from '../selectors/playerSelectors';
import {selectTeamByIdBulk} from '../selectors/teamsSelector';

const usePlayerDetails = () => {
  const {user} = useSelector(selectUser);
  const player = useSelector(selectPlayerById(user.id));
  const teams = useSelector(selectTeamByIdBulk(player.teams));
  // const teamLeagues = teams.filter(team => team.league.length > 0);
  const leagueIds = player.leagues;
  const leagues = useSelector(selectLeagueByIdBulk(leagueIds));
  const getSeasons = leagues.filter(league => league.seasonId.length > 0);
  const seasonIds = getSeasons.map(season => season.seasonId);
  const seasons = useSelector(selectSeasonByIdBulk(seasonIds));
  return {user, player, teams, leagues, seasons};
};

export default usePlayerDetails;

export const useUser = () => {
  return useSelector(selectUser);
};

export const usePlayer = (userId: string) => {
  const {user} = useUser();
  return useSelector(selectPlayerById(user.id));
};

export const useTeams = (teamIds: string[]) => {
  return useSelector(selectTeamByIdBulk(teamIds));
};

export const useLeagues = (leagueIds: string[]) => {
  return useSelector(selectLeagueByIdBulk(leagueIds));
};

export const useLeague = (leagueId: string) => {
  return useSelector(selectLeagueById(leagueId));
};

export const useSeasons = (seasonIds: string[]) => {
  return useSelector(selectSeasonByIdBulk(seasonIds));
};

export const useSeason = (seasonId: string) => {
  return useSelector(selectSeasonsObjById(seasonId));
};
