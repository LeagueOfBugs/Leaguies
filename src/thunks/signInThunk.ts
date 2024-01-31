import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_ENDPOINT =
  'https://bcvrht92wl.execute-api.us-east-2.amazonaws.com/Alpha/login';

export const signInUser = createAsyncThunk('user/singInUser', async creds => {
  const {username, password} = creds;
  try {
    const response = await axios.post(LOGIN_ENDPOINT, {
      username: username,
      password: password,
    });
    const user = response.data;
    return JSON.parse(user.body);
  } catch (error) {
    console.error('Error with user auth', error);
    throw error;
  }
});
