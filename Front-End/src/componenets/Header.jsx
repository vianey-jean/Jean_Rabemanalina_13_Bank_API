//@ts-check
import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import argentBankLogo from "../assets/img/argentBankLogo.png";
import LogOut from "./LogOut";
import LogIn from "./logIn";

/**
 * Component - Header
 * @returns {React.ReactElement} JSX.Element - header component
 */

function Header() { //mise en place le header avec le logo et mettre si c'est login ou logout
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="main-nav-item">
          <LogIn />
          <LogOut />
        </div>
      </nav>
    </header>
  );
}

export default Header;
