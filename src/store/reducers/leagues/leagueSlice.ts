// leagueSlice.js
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
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
        teams?: string[] | undefined;
        limit: string;
      }>,
    ): Leagues => {
      const newLeague = {
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
