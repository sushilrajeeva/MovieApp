import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/NavBar.css"


function NavBar() {
  return (
    <nav className="navbar">
      <div className='nav-brand'>
        <NavLink to="/" > Movie App </NavLink>
      </div>
      <div className='nav-links'>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
            Home
        </NavLink>

        <NavLink
            to="/favourites"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
            Favourites
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar