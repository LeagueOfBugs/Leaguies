import {useDispatch} from 'react-redux';
import {createSeason} from '../store/reducers/seasons/seasonSlice';
import {signInUser} from '../thunks/signInThunk';
interface setUserProps {
  username: string;
  password: string;
}
function useUserDispatch() {
  const dispatch = useDispatch();
  const setUser = (credentials: setUserProps) => {
    dispatch(signInUser(credentials));
  };
  return {setUser};
}

export default useUserDispatch;
