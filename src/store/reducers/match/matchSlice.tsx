// matchSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState: Matches = {
  matches: [],
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    createMatch: (state, action) => {
      state.matches.push(action.payload);
      console.log('state: ', state.matches);
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
});

export const {createMatch, editMatch, deleteMatch} = matchesSlice.actions;
export default matchesSlice.reducer;
