import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logingSuccess,logingOut} from "../features/token/loginSlice";

function PrivateRoute() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")|| sessionStorage.getItem('token');

  // keeps you logged in while refreshing
  if (token) {
    dispatch(logingSuccess());
  }
  const { isAuth } = useSelector((state) => state.login) ;
  if(!isAuth){ 
    localStorage.clear()
    sessionStorage.clear()
    dispatch(logingOut())
    return <Navigate to="/signIn" />
    //Navigate ("/loginPage/signIn")
  }
  return <Outlet/>//restitue les routes enfants
  //return isAuth ? <Outlet /> : <Navigate to="/loginPage/signIn" />;
}


export default PrivateRoute;
