import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import useAsyncStorage from '../hooks/useAsyncStorage';

const USER_DB_ENDPOINT =
  'https://1zb907ecw7.execute-api.us-east-2.amazonaws.com/Alpha/getUser';

export const retrieveUser = createAsyncThunk(
  'user/getUser',
  async (userName: string) => {
    const {getValue} = useAsyncStorage();
    const {iT} = await getValue('user');
    try {
      const response = await axios.post(
        USER_DB_ENDPOINT,
        {
          userName,
        },
        {
          headers: {
            Authorization: iT,
          },
        },
      );

      if (response.data.statusCode === 200) {
        return {
          data: JSON.parse(response.data.body),
        };
      }
      return new Error('Something went wrong');
    } catch (error) {
      console.error('Error with user auth', error);
      throw error;
    }
  },
);
