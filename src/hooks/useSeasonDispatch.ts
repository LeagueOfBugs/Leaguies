import {useDispatch} from 'react-redux';
import useLeagueDispatch from '../hooks/useLeagueDispatch';
import {createSeason} from '../store/reducers/seasons/seasonSlice';
import usePlayerDetails from './usePlayerDetails';
import uuid from 'react-native-uuid';

function useSeasonDispatch() {
  const dispatch = useDispatch();
  const {user, league} = usePlayerDetails();
  const leagueId = league?.id || '';
  const {addSeasonToLeague} = useLeagueDispatch();

  const createSeasonModel = seasonInfo => {
    return {
      ...seasonInfo,
      id: uuid.v4().toString(),
      admin: [user.id],
      cashPrize: '',
      leagueId: leagueId,
      matches: [],
      postSeasonGames: '',
      teams: '',
      winners: '',
    };
  };

  const makeSeason = seasonInfo => {
    const seasonModel = createSeasonModel(seasonInfo);
    addSeasonToLeague(seasonModel, leagueId);
    dispatch(createSeason(seasonModel));
  };

  return {makeSeason};
}

export default useSeasonDispatch;
