import {useDispatch, useSelector} from 'react-redux';
import {createMatch} from '../store/reducers/matches/matchesSlice';
import {editSeason} from '../store/reducers/seasons/seasonSlice';
import {selectSeasons} from '../selectors/seasonSelector';

function useMatchDispatch() {
  const dispatch = useDispatch();
  const {seasons} = useSelector(selectSeasons);

  const makeMatch = (newMatchModel: any) => {
    dispatch(createMatch(newMatchModel));
    const newSeasonState = seasons
      .map(season => {
        if (newMatchModel.seasonId === season.id) {
          return {
            ...season,
            matches: [...season.matches, newMatchModel.id],
          };
        }
        return season;
      })
      .filter(season => season !== null);
    dispatch(editSeason(newSeasonState));
  };

  return {makeMatch};
}

export default useMatchDispatch;
