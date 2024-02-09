import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import useAsyncStorage from '../hooks/useAsyncStorage';

const LEAGUE_SEED_ENDPOINT =
  'https://c8f0viuza9.execute-api.us-east-2.amazonaws.com/Alpha/seed';

export const seedTeams = createAsyncThunk(
  'seed/seedTeams',
  async (tableName: string) => {
    const {getValue} = useAsyncStorage();
    const {iT} = await getValue('user');
    try {
      const response = await axios.post(
        LEAGUE_SEED_ENDPOINT,
        {
          tableName,
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
