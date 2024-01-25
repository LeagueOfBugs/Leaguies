import {useDispatch} from 'react-redux';
import useLeagueDispatch from '../hooks/useLeagueDispatch';
import {createSeason} from '../store/reducers/seasons/seasonSlice';

function useSeasonDispatch() {
  const dispatch = useDispatch();
  const {addSeasonToLeague} = useLeagueDispatch();

  const makeSeason = (
    seasonObj: Season,
    leagues: League[],
    leagueId: string,
  ) => {
    addSeasonToLeague(seasonObj, leagues, leagueId);
    dispatch(createSeason(seasonObj));
  };

  return {makeSeason};
}

export default useSeasonDispatch;
