import {useRoute} from '@react-navigation/native';
import usePlayerDetails from './usePlayerDetails';

const useWhichLeague = () => {
  const {leagues} = usePlayerDetails();
  const route = useRoute();
  console.log('route in usewhichleague', route.params);
  const {leagueId} = route.params;
  const league = leagues.find(league => league.id === leagueId);
  return league;
};

export default useWhichLeague;
