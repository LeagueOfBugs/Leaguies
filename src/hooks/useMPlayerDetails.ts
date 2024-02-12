import {useSelector} from 'react-redux';
import {selectPlayerByIdBulk} from '../selectors/playerSelectors';

const useMPlayerDetails = ids => {
  return useSelector(selectPlayerByIdBulk(ids));
};

export default useMPlayerDetails;
