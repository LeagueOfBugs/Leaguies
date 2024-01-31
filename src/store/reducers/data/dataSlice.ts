// itemsSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '../../store'; // Assuming you have a store configuration
import {fetchMatches} from '../../../thunks/seedThunk';

interface ItemsState {
  data: Teams[]; // Replace YourItemType with the actual type of your items
  loading: boolean;
  error: string;
}

const initialState: ItemsState = {
  data: [],
  loading: false,
  error: '',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // Other reducers...
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMatches.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default itemsSlice.reducer;
