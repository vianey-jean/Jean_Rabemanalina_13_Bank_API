import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/token/loginSlice";
import profileReducer from "../features/token/profileSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;
