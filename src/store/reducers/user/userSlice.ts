// authSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {signInUser} from '../../../thunks/signInThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signInUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = true;
        const aT = action.payload.accessToken;
        const iT = action.payload.idToken;
        const rT = action.payload.refreshToken;
        AsyncStorage.setItem(
          'user',
          JSON.stringify({
            aT,
            iT,
            rT,
          }),
        );
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
