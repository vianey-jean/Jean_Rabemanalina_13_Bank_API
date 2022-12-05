import { createSlice } from '@reduxjs/toolkit'

const initialState = {//initialstate
  isLoading: false, //loading faux
  isAuth: false, //autehtifié faux
  isRemember: false,
  error: '', //erreur vide
}

const loginSlice = createSlice({ //création slice login
  name: 'login',
  initialState,
  reducers: { // Objet
    // création fonction (seulement une state)
    logingPending: (state) => { //fonctionnalité logingPening
      state.isLoading = true //chargement vrai
    },
    // création fonction (seulement une state)
    logingSuccess: (state) => { //fonctionalité login succes
      state.isLoading = false
      state.isAuth = true //authetifier vrai
      state.error = '' //erreur vide
    },
    // création fonction (une state et une action)
    logingError: (state, action) => { //fonctionnalité login erreur
      state.isLoading = false //chargement faux
      state.error = action.payload // montrer l'erreur 
    },
    // création fonction (une state et une action)
    logingRemember: (state, action) => { //fonctionalité loging remember
      state.isRemember = action.payload
    },
    // création fonction (seulement une state)
    logingOut: (state) => {// fonctionalité logout
      state.isAuth = false //authetifié erreur
    },
  },
})
const { actions, reducer } = loginSlice
export const {
  logingPending,
  logingSuccess,
  logingError,
  logingOut,
  logingRemember,
} = actions
export default reducer
