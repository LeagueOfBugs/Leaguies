// leagueSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {seedLeagues} from '../../../thunks/seedLeagueThunk';
import {proximityLocations} from '../../../thunks/proximityLocations';
const initialState = {
  leagues: [],
  nearbyTeams: [],
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
      return {...state, leagues: action.payload};
    },
    addTeam: (state, action) => {
      return {
        ...state,
        leagues: action.payload,
      };
    },
    terminateLeague: (state, action) => {
      return {
        ...state,
        leagues: action.payload,
      };
    },
    editLeagues: (state, action) => {
      return {
        ...state,
        leagues: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(seedLeagues.fulfilled, (state, action) => {
      const {data} = action.payload;
      state.leagues = data;
    });
    builder.addCase(proximityLocations.fulfilled, (state, action) => {
      const {data} = action.payload;
      const teamIds = data.map(hash => hash.id);
      state.nearbyTeams = teamIds;
    });
  },
});

export const {createLeague, deleteTeam, addTeam, terminateLeague, editLeagues} =
  leagueSlice.actions;
export default leagueSlice.reducer;
