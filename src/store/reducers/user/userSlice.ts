// authSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {signInUser} from '../../../thunks/signInThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signUpUser} from '../../../thunks/signUpThunk';
import {validateNewUser} from '../../../thunks/registerValidationThunk';
import {retrieveUser} from '../../../thunks/retrieveUserThunk';

interface AuthState {
  user: User | null;
  temp: any;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  temp: null,
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
        const {data} = action.payload;
        state.loading = false;
        const aT = data.accessToken;
        const iT = data.idToken;
        const rT = data.refreshToken;
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
        state.user = null;
        state.error = action.payload as string;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.temp = action.payload;
      })
      .addCase(retrieveUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(validateNewUser.fulfilled, (state, action) => {
        state.user = state.temp;
        if (state.user) {
          state.user.verified = action.payload.verified;
          state.user.verified = false;
          state.user.active = true;
        }
        state.temp = null;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
