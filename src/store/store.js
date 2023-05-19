import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { registerUserSlice } from "./registeredUserSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  registeredUserReducer: registerUserSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const { addUser, removeUser } = registerUserSlice.actions;
let store = configureStore({ reducer: persistedReducer });
let persistor = persistStore(store);
export { store, persistor };
