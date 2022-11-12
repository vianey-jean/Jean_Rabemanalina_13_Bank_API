//@ts-check
import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import argentBankLogo from "../assets/img/argentBankLogo.png";
import LogOut from "./LogOut";
import LogIn from "./logIn";

function Header() {
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
        <div>
          <LogIn />
          <LogOut />
        </div>
      </nav>
    </header>
  );
}

export default Header;
