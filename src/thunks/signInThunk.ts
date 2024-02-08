import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_ENDPOINT =
  'https://bcvrht92wl.execute-api.us-east-2.amazonaws.com/Alpha/login';

interface Credentials {
  username: string;
  password: string;
}

export const signInUser = createAsyncThunk(
  'user/singInUser',
  async (creds: Credentials) => {
    const {username, password} = creds;
    try {
      const response = await axios.post(LOGIN_ENDPOINT, {
        username: username,
        password: password,
      });

      if (response.data.statusCode === 200) {
        /*
    Create the User model to save to temp. Need user to verify to move to main user model -->
      id: string; must retrieve from cognito
      name: string;
      email: string;
      settings: object;
      preferences: object;
      role: string;
      active: boolean;
      playerId: string;
      verified: boolean;
    */
        const data = JSON.parse(response.data.body);
        const {accessToken, idToken, refreshToken} = data;
        return {
          name: username,
          settings: {},
          preferences: {},
          role: '',
          verified: true,
          data: {
            accessToken,
            idToken,
            refreshToken,
          },
        };
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error with user auth', error);
      throw error;
    }
  },
);
