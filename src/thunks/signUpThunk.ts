import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const REGISTER_USER_ENDPOINT =
  'https://bcvrht92wl.execute-api.us-east-2.amazonaws.com/Alpha/register';

interface NewUser {
  username: string;
  email: string;
  password: string;
}

export const signUpUser = createAsyncThunk(
  'user/singUpUser',
  async (newUser: NewUser) => {
    const {username, email, password} = newUser;
    try {
      const response = await axios.post(REGISTER_USER_ENDPOINT, {
        username,
        email,
        password,
      });

      if (response.data.statusCode === 200) {
        /*
      Create the User model to save to store -->
        id: string;
        name: string;
        email: string;
        settings: object;
        preferences: object;
        role: string;
        active: boolean;r
        playerId: string;
        verified: boolean;
      */
        const {body} = response.data;
        const data = JSON.parse(body);
        const userId = data.response.UserSub;
        const verified = data.response.UserConfirmed;
        return {
          id: userId,
          name: username,
          email: email,
          settings: {},
          preferences: {},
          role: 'player',
          playerId: userId,
          verified: verified,
          active: false,
        };
      } else {
        throw new Error('Somethig went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  },
);
