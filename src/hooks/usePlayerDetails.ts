import {useSelector} from 'react-redux';
import {selectUser} from '../selectors/userSelector';
import {selectSeasonByIdBulk} from '../selectors/seasonSelector';
import {selectLeagueByIdBulk} from '../selectors/leagueSelector';
import {selectPlayerById} from '../selectors/playerSelectors';
import {selectTeamByIdBulk} from '../selectors/teamsSelector';

const usePlayerDetails = () => {
  const {user} = useSelector(selectUser);
  const player = useSelector(selectPlayerById(user.id));
  const teams = useSelector(selectTeamByIdBulk(player.teams));
  const teamLeagues = teams.filter(team => team.league.length > 0);
  const leagueIds = teamLeagues.map(team => team.league);
  const leagues = useSelector(selectLeagueByIdBulk(leagueIds));
  const getSeasons = leagues.filter(league => league.seasonId.length > 0);
  const seasonIds = getSeasons.map(season => season.seasonId);
  const seasons = useSelector(selectSeasonByIdBulk(seasonIds));
  return {user, player, teams, leagues, seasons};
};

export default usePlayerDetails;
