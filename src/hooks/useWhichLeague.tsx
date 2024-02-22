import {useRoute} from '@react-navigation/native';
import {useLeagues, usePlayer, useUser} from './usePlayerDetails';
import {useMemo} from 'react';

const useWhichLeague = () => {
  const {user} = useUser();
  const player = usePlayer(user.id);
  const leagues = useLeagues(player.leagues);
  const route = useRoute();
  const {leagueId} = route.params;
  const leagueModel = useMemo(() => {
    console.log('in memo');
    return leagues.find(league => league.id === leagueId);
  }, [leagues, leagueId]);

  return leagueModel;
};

export default useWhichLeague;
