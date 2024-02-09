import {useDispatch} from 'react-redux';
import {signInUser} from '../thunks/signInThunk';
import {signUpUser} from '../thunks/signUpThunk';
import {validateNewUser} from '../thunks/registerValidationThunk';
import {retrieveUser} from '../thunks/retrieveUserThunk';
import storeInDb from '../service/saveToDb';
import useAsyncStorage from './useAsyncStorage';
import resetPasswordAPI from '../service/resetPasswordAPI';

interface setUserProps {
  username: string;
  password: string;
}

interface Credentials {
  username: string;
  verificationCode: string;
}

interface NewUser {
  username: string;
  email: string;
  password: string;
}

function useUserDispatch() {
  const dispatch = useDispatch();
  const {getValue} = useAsyncStorage();

  const setUser = (credentials: setUserProps) => {
    dispatch(signInUser(credentials) as any);
    // dispatch thunk to retrieve user from dynamo using username to match

    // create user model here
    // set up reducer to set user in user slice -- update redux
  };

  // register user
  // create new user model
  // save model to user table in Dynamo - updates DB
  // call set user reducer as above to set user to app - updates redux
  const registerUser = (newUser: NewUser) => {
    dispatch(signUpUser(newUser) as any);
  };

  const saveUserToDB = async (user: User) => {
    const {iT} = await getValue('user');
    // need to create API route to add to db
    const tableName = 'users';
    const eventName = 'create';
    const Model = user;
    await storeInDb(eventName, tableName, Model, iT);
  };

  /*
  validate user after registration
  */
  const validateRegisteredUser = (creds: Credentials) => {
    dispatch(validateNewUser(creds) as any);
  };
  /*
  on login, retrieve user information from dynamo db
  and set state in redux
  */
  const retrieveUserDetails = (email: string) => {
    // retrieve user
    // user settings and preferences
    dispatch(retrieveUser(email) as any);
  };

  const resetUserCredentials = (
    username: string,
    newPass: string,
    verificationCode: string,
  ) => {
    resetPasswordAPI(username, newPass, verificationCode);
  };

  return {
    setUser,
    registerUser,
    saveUserToDB,
    retrieveUserDetails,
    validateRegisteredUser,
    resetUserCredentials,
  };
}

export default useUserDispatch;
