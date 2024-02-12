import {useSelector} from 'react-redux';
import {selectMatchesByIdBulk} from '../selectors/matchSelector';

const useExtractMatches = matchIds => {
  return useSelector(selectMatchesByIdBulk(matchIds));
};

export default useExtractMatches;
