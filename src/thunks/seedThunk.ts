import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_ENDPOINT =
  'https://c8f0viuza9.execute-api.us-east-2.amazonaws.com/Alpha/seed';

const AUTH_TOKEN = '';

export const fetchInitialMatches = createAsyncThunk(
  'matches/fetchInitialMatches',
  async (params: string) => {
    try {
      const response = await axios.post(LOGIN_ENDPOINT, {
        tableName: params,
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      return response.data.body;
    } catch (error) {
      console.error('Error fetching initial matches:', error);
      throw error;
    }
  },
);
