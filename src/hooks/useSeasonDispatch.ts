import {useDispatch} from 'react-redux';
import {createSeason} from '../store/reducers/seasons/seasonSlice';
import usePlayerDetails from './usePlayerDetails';
import uuid from 'react-native-uuid';
import useLeagueDispatch from './useLeagueDispatch';

function useSeasonDispatch() {
  const dispatch = useDispatch();
  const {user} = usePlayerDetails();
  const {addSeasonToLeague} = useLeagueDispatch();

  const createSeasonModel = seasonInfo => {
    return {
      ...seasonInfo,
      id: uuid.v4().toString(),
      admin: [user.id],
      cashPrize: '',
      matches: [],
      postSeasonGames: '',
      teams: '',
      winners: '',
    };
  };

  const makeSeason = seasonInfo => {
    const seasonModel = createSeasonModel(seasonInfo);
    const leagueId = seasonInfo.leagueId;
    console.log('leaguesId' , leagueId)
    addSeasonToLeague(seasonModel, leagueId);
    dispatch(createSeason(seasonModel));
  };

  return {makeSeason};
}

export default useSeasonDispatch;
