import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  firstName: "",
  lastName: "",
  error: "",
};

const profileSlice = createSlice({ //création slice profil
  name: "profile",
  initialState,
  reducers: {
    profilePending: (state) => {
      state.isLoading = true; // chargement vrai
    },
    profileFirstName: (state, action) => {//prénom
      state.isLoading = false; // chagmenet faux
      state.firstName = action.payload; //Ajout du prénom
      state.error = ""; //erreur vide
    },
    profileLastName: (state, action) => { //nom
      state.isLoading = false; //chargement faux
      state.lastName = action.payload; //ajout du nom
      state.error = "";//erreur faux
    },
    profileError: (state, action) => {
      state.isLoading = false; //chargement faux
      state.error = action.payload; //montrer erreur
    },
    profileOut: (state) => { //pour le profil sur deconnecter
      state.isLoading = false; //chargement faux
      state.firstName = ""; //prénom vide
      state.lastName = ""; //nom vide
      state.error = ""; //erreur vide
    },
  },
});
const { actions, reducer } = profileSlice;
export const {
  profilePending,
  profileFirstName,
  profileLastName,
  profileError,
  profileOut,
} = actions;
export default reducer;
