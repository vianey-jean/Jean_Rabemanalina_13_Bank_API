import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { profileFirstName } from "../features/token/profileSlice";

/**
 * Component - Header
 * @returns {React.ReactElement} JSX.Element - header component
 */


function LogIn() { //mise en place le login et les lien
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const { firstName } = useSelector((state) => state.profile);
  const localStorageFirstName = localStorage.getItem("firstName");

  useEffect(() => {
    if (localStorageFirstName) {
      dispatch(profileFirstName(localStorageFirstName));
    }
  }, [dispatch, localStorageFirstName]);

  return (
    <>
      {isAuth ? ( //si ce n'est pas connecter, alors affiche icon et singin
        
          <Link className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </Link>
   
        
      ) : (
        <Link className="main-nav-link" to="/signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </>
  );
}

export default LogIn;
