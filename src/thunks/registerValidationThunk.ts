import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_ENDPOINT =
  'https://bcvrht92wl.execute-api.us-east-2.amazonaws.com/Alpha/validate';

interface Credentials {
  username: string;
  verificationCode: string;
}

export const validateNewUser = createAsyncThunk(
  'user/userRegisterVerification',
  async (creds: Credentials) => {
    const {username, verificationCode} = creds;
    try {
      const response = await axios.post(LOGIN_ENDPOINT, {
        username: username,
        verificationCode: verificationCode,
      });

      if (response.data.statusCode === 200) {
        return {verified: true};
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error with user auth', error);
      throw error;
    }
  },
);
