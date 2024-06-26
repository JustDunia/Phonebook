import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './operations';
import { logIn } from './operations';
import { logOut } from './operations';
import { refreshUser } from './operations';

const slice = createSlice({
  name: 'authorization',
  initialState: {
    user: { username: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { username: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = slice.reducer;
