import { createSlice } from "@reduxjs/toolkit";

const registeredUserInitialState = { user: {}, isLoggedIn: false };

export const registerUserSlice = createSlice({
  name: "registeredUserSlice",
  initialState: registeredUserInitialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    removeUser(state, action) {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});
