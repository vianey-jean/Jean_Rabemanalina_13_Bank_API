import { createSlice } from '@reduxjs/toolkit'

const initialState = {//initialstate
  isLoading: false, //loading faux
  isAuth: false, //autehtifié faux
  isRemember: false,
  error: '', //erreur vide
}

const loginSlice = createSlice({ //création login
  name: 'login',
  initialState,
  reducers: {
    logingPending: (state) => {
      state.isLoading = true //chargement vrai
    },
    logingSuccess: (state) => { //login succes
      state.isLoading = false
      state.isAuth = true //authetifier vrai
      state.error = '' //erreur vide
    },
    logingError: (state, action) => { //login erreur
      state.isLoading = false //chargement faux
      state.error = action.payload // montrer l'erreur 
    },
    logingRemember: (state, action) => {
      state.isRemember = action.payload
    },
    logingOut: (state) => {//logout
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
