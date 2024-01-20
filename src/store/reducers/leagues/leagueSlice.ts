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
        badge: string;
        image: string;
        teams: string[];
        limit: number;
      }>,
    ): Leagues => {
      const {id, name, teams, badge, image, limit} = action.payload;
      const newLeague = {
        id: id || uuid.v4().toString(),
        name: name,
        teams: teams,
        badge: badge,
        image: image,
        limit: limit,
      };
      state.leagues.push(newLeague);
      return state;
    },
  },
});

export const {createLeague} = leagueSlice.actions;
export default leagueSlice.reducer;