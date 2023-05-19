import { createSlice } from "@reduxjs/toolkit";

const registeredUserInitialState = { user: {} };

export const registerUserSlice = createSlice({
  name: "registeredUserSlice",
  initialState: registeredUserInitialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state, action) {
      state.user = {};
    },
  },
});
