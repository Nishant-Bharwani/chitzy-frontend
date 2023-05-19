import { configureStore } from "@reduxjs/toolkit";
import { registerUserSlice } from "./registeredUserSlice";
export const { addUser, removeUser } = registerUserSlice.actions;
export default configureStore({
  reducer: { registeredUserReducer: registerUserSlice.reducer },
});
