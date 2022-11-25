import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logingSuccess,logingOut} from "../features/token/loginSlice";

/**
 * Component - PrivateRoute
 */

function PrivateRoute() { //création private routes
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")|| sessionStorage.getItem('token');

  // keeps you logged in while refreshing
  if (token) {
    dispatch(logingSuccess()); //si le token est en loginsucces
  }
  const { isAuth } = useSelector((state) => state.login) ;// si je suis connecter, alors je suis dirriger vers user
  if(!isAuth){  // si non, j'efface le locastorage et la sessions
    localStorage.clear()
    sessionStorage.clear()
    dispatch(logingOut()) //puis  c'est changer vers loginout
    return <Navigate to="/signIn" /> // enfin dirriger vers singin.
   
  }
  return <Outlet/>//restitue les routes enfants
}


export default PrivateRoute;
