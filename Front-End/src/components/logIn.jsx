import React from 'react'
import { Link } from 'react-router-dom'



function LogIn() {


  return (
    <>
   
        <Link className="main-nav-link" to="/loginPage/signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
     
    </>
  )
}

export default LogIn
