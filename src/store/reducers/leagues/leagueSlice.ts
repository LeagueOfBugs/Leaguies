// leagueSlice.js
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
const initialState: Leagues = {
  leagues: [],
};

const leagueSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    createLeague: (
      state,
      action: PayloadAction<{
        id?: string;
        name: string;
        badge?: string;
        image?: string;
        teams?: string[];
        limit: string;
      }>,
    ): Leagues => {
      const newLeague = {
        id: action.payload.id || uuid.v4().toString(),
        teams: [],
        badge: '/Users/andres/Desktop/UIPractice/leaguies/src/assets/badge1.png',
        image: '/Users/andres/Desktop/UIPractice/leaguies/src/assets/badge1.png',
        ...action.payload,
      };
      state.leagues.push(newLeague);
      return state;
    },
    deleteTeam: (state, action) => {
      return action.payload;
    },
    addTeam: (state, action) => {
      return action.payload;
    },
  },
});

export const {createLeague, deleteTeam, addTeam} = leagueSlice.actions;
export default leagueSlice.reducer;
