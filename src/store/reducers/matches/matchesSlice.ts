// matchesSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {seedMatches} from '../../../thunks/seedMatchesThunk';

const initialState: Matches = {
  matches: [],
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    createMatch: (state, action) => {
      console.log('action.payload', action.payload)
      state.matches.push(action.payload);
      return state;
    },
    editMatch: (state, action) => {
      return {
        ...state,
        matches: action.payload,
      };
    },
    deleteMatch: (state, action) => {
      return {
        ...state,
        matches: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(seedMatches.fulfilled, (state, action) => {
      state.loading = false;
      const {data} = action.payload;
      state.matches = data;
    });
  },
});

export const {createMatch, editMatch, deleteMatch} = matchesSlice.actions;
export default matchesSlice.reducer;
