import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/token/loginSlice";
import profileReducer from "../features/token/profileSlice";

const store = configureStore({ //Pour configuration du store
  reducer: { //objet reducer en argument
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;
