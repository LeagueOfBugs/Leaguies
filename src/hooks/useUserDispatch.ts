import {useDispatch} from 'react-redux';
import {createSeason} from '../store/reducers/seasons/seasonSlice';

function useUserDispatch() {
  const dispatch = useDispatch();

  return {};
}

export default useUserDispatch;
