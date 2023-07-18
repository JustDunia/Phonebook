import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'authorization',
  initialState: {
    user: { username: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: {},
});
