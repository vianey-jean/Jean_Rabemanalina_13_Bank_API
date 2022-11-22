import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logingOut } from "../features/token/loginSlice";
import { profileOut } from "../features/token/profileSlice";

/**
 * Component - Header
 * @returns {React.ReactElement} JSX.Element - header component
 */

function LogOut() {
  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  function ClearLocalStorage() {
    localStorage.clear();

    dispatch(logingOut());
    dispatch(profileOut());
  }

  return (
    <>
      {isAuth && (
        <Link
          className="main-nav-item"
          onClick={() => ClearLocalStorage()}
          to="/"
        >
          <i className="fa-solid fa-arrow-right-from-bracket" />
          Sign Out
        </Link>
      )}
    </>
  );
}

export default LogOut;
