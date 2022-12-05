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
    // création fonction (seulement une state)
    profilePending: (state) => { //fonctionalité de profil pending
      state.isLoading = true; // chargement vrai
    },
    // création fonction (une state et une action)
    profileFirstName: (state, action) => {// fonctionalité de prénom
      state.isLoading = false; // chagmenet faux
      state.firstName = action.payload; //Ajout du prénom
      state.error = ""; //erreur vide
    },
    // création fonction (une state et une action)
    profileLastName: (state, action) => { //fonctionalité de nom
      state.isLoading = false; //chargement faux
      state.lastName = action.payload; //ajout du nom
      state.error = "";//erreur faux
    },
    // création fonction (une state et une action)
    profileError: (state, action) => {// fonctionalité de profil erreur
      state.isLoading = false; //chargement faux
      state.error = action.payload; //montrer erreur
    },
    // création fonction (seulement une state)
    profileOut: (state) => { //fonctionbalité pour le profil sur deconnecter
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
