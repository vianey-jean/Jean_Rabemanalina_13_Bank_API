//@ts-check
import { useDispatch } from 'react-redux'
// @ts-ignore
import { logingOut } from '../pages/loginPage/loginSlice'


export function ClearLocalStorage() {
  const dispatch = useDispatch()
  localStorage.removeItem('token')
  localStorage.removeItem('firstName')
  localStorage.removeItem('lastName')
  dispatch(logingOut())
}
