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
      action: PayloadAction<{id?: string; name: string; teams: Team[]}>,
    ): Leagues => {
      const {id, name, teams} = action.payload;
      const newLeague = {
        id: id || uuid.v4().toString(),
        name: name,
        teams: teams,
      };
      state.leagues.push(newLeague);
      return state;
    },
    // addTeam: (state, action: PayloadAction<{team: Team}>): Leagues => {
    //   const {team} = action.payload;
    //   return {
    //     ...state,
    //     teams: [...state.teams, team],
    //   };
    // },
    // deleteTeam: (state, action: PayloadAction<{teamId: string}>): Leagues => {
    //   const {teamId} = action.payload;
    //   return {
    //     ...state,
    //     teams: state.teams.filter(team => team.id !== teamId),
    //   };
    // },
  },
});

export const {createLeague} = leagueSlice.actions;
export default leagueSlice.reducer;
