import {
  registerUserApi,
  loginUserApi,
  logOutUserApi,
  fetchCurrentUserApi,
  token,
} from 'services/Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (form, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(form);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logOutUserApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh/token',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const refreshToken = state.auth.token;

    if (refreshToken === null) {
      return rejectWithValue();
    }
    token.set(refreshToken);
    try {
      const data = await fetchCurrentUserApi();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
