//@ts-check
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// @ts-ignore
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import "./nav.scss";

function Nav() {
  const token = useSelector((state) => state.token.value);

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {/* Anonyme */}
        {token === 0 && (
          <>
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </>
        )}

        {/* Connecté */}
        {token !== 0 && (
          <>
            <NavLink to="/profil" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
            </NavLink>
            <NavLink to="/logout" className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
