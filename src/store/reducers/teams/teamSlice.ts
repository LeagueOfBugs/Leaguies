import {createSlice} from '@reduxjs/toolkit';
import {seedTeams} from '../../../thunks/seedTeamThunk';

const initialState: Teams = {
  teams: [],
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    createTeam: (state, action) => {
      const newTeamModel = action.payload;
      state.teams.push(newTeamModel);
      console.log('state in team slice', state);
      return state;
    },
    editTeam: (state, action) => {
      return {
        ...state,
        teams: [...action.payload],
      };
    },
    deleteTeam: (state, action) => {
      return {
        ...state,
        teams: [...action.payload],
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(seedTeams.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(seedTeams.fulfilled, (state, action) => {
        state.loading = false;
        const {data} = action.payload;
        state.teams = data;
      })
      .addCase(seedTeams.rejected, (state, action) => {
        const {data} = action.payload;
        state.loading = false;
        state.error = data;
      });
  },
});
export const {createTeam, editTeam, deleteTeam} = teamSlice.actions;
export default teamSlice.reducer;
