import {useSelector} from 'react-redux';
import {selectUser} from '../selectors/userSelector';
import {selectSeasonsObjById} from '../selectors/seasonSelector';
import {selectLeagueById} from '../selectors/leagueSelector';
import {selectTeamById} from '../selectors/teamsSelector';
import {selectPlayerById} from '../selectors/playerSelectors';

const usePlayerDetails = () => {
  const {user} = useSelector(selectUser);
  console.log('user', user)
  const player = useSelector(selectPlayerById(user.id));
  console.log('player', player)
  const team = useSelector(selectTeamById(player.team));
  const league = useSelector(selectLeagueById(team.league));
  const season = useSelector(selectSeasonsObjById(league.seasonId));
  return {user, player, team, league, season};
};

export default usePlayerDetails;
