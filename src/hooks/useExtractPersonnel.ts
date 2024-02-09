import {useSelector} from 'react-redux';
import {selectPlayerByIdBulk} from '../selectors/playerSelectors';

export const useExtractPersonnel = rosterIds => {
  const playerModels = useSelector(selectPlayerByIdBulk(rosterIds));
  return playerModels;
};
