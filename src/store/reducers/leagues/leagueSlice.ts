// leagueSlice.js
import {createSlice} from '@reduxjs/toolkit';
const initialState: Leagues = {
  leagues: [],
};

const leagueSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    createLeague: (state, action) => {
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
    terminateLeague: (state, action) => {
      return {
        ...state,
        leagues: action.payload,
      };
    },
    editLeagues: (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        leagues: action.payload,
      };
    },
  },
});

export const {createLeague, deleteTeam, addTeam, terminateLeague, editLeagues} =
  leagueSlice.actions;
export default leagueSlice.reducer;
