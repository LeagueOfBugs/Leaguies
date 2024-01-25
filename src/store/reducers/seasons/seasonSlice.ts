// seasonSlice.js
import {createSlice} from '@reduxjs/toolkit';
const initialState: Seasons = {
  seasons: [],
};

const seasonSlice = createSlice({
  name: 'seasons',
  initialState,
  reducers: {
    createSeason: (state, action) => {
      state.seasons.push(action.payload);
      console.log('state: ', state.seasons);
      return state;
    },
    editSeason: (state, action) => {
      return {
        ...state,
        seasons: action.payload,
      };
    },
    deleteSeason: (state, action) => {
      return {
        ...state,
        seasons: action.payload,
      };
    },
  },
});

export const {createSeason, editSeason, deleteSeason} = seasonSlice.actions;
export default seasonSlice.reducer;
