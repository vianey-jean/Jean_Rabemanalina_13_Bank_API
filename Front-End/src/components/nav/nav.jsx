//@ts-check
import React from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import './nav.scss'


function Nav() {
  return (
    <nav className="main-nav">
    <Link className="main-nav-logo" to ="/">
   
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
     </Link>
      <h1 className="sr-only">Argent Bank</h1>

    <div>
      <Link className="main-nav-item" to="/logIn">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
  )
}

export default Nav
