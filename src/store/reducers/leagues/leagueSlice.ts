// leagueSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {seedApp} from '../../../thunks/seedLeagueThunk';
const initialState = {
  leagues: [],
  loading: false,
  error: null,
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
    builder
      .addCase(seedApp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(seedApp.fulfilled, (state, action) => {
        state.loading = false;
        const {statusCode, data} = action.payload;
        if (statusCode === 200) {
          state.leagues = data;
        }
      })
      .addCase(seedApp.rejected, (state, action) => {
        const {data} = action.payload;
        state.loading = false;
        state.error = data;
      });
  },
});

export const {createLeague, deleteTeam, addTeam, terminateLeague, editLeagues} =
  leagueSlice.actions;
export default leagueSlice.reducer;
