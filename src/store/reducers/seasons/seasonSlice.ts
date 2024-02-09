// seasonSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {seedSeasons} from '../../../thunks/seedSeasonThunk';
const initialState: Seasons = {
  seasons: [],
};

const seasonSlice = createSlice({
  name: 'seasons',
  initialState,
  reducers: {
    createSeason: (state, action) => {
      state.seasons.push(action.payload);
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
  extraReducers: builder => {
    builder
      .addCase(seedSeasons.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(seedSeasons.fulfilled, (state, action) => {
        state.loading = false;
        const {data} = action.payload;
        state.seasons = data;
      })
      .addCase(seedSeasons.rejected, (state, action) => {
        const {data} = action.payload;
        state.loading = false;
        state.error = data;
      });
  },
});

export const {createSeason, editSeason, deleteSeason} = seasonSlice.actions;
export default seasonSlice.reducer;
