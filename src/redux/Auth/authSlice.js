import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOutUser,
  fetchCurrentUser,
} from './authOperation';
const initialState = {
  user: { name: '', email: null },
  isAuth: false,
  token: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        state.user = {
          name: '',
          email: null,
        };
        state.token = null;
        state.isAuth = false;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      });
  },
});
export default authSlice.reducer;
