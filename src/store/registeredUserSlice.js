import { createSlice } from "@reduxjs/toolkit";

const registeredUserInitialState = {};

export const registerUserSlice = createSlice({
  name: "registeredUserSlice",
  initialState: registeredUserInitialState,
  reducers: {
    addUser(state, action) {
      state = action.payload;
    },
    removeUser(state, action) {
      state = {};
    },
  },
});
