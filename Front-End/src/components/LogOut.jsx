import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Component - Header
 * @returns {React.ReactElement} JSX.Element - header component
 */

function LogOut() {


  return (
    <>
      
        <Link
          className="main-nav-item"
          
          to="/"
        >
          <i className="fa-solid fa-arrow-right-from-bracket" />
          Sign Out
        </Link>
     
    </>
  )
}

export default LogOut
