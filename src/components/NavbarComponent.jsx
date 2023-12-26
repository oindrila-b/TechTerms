import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import image from './assets/logoRm.png'
import imageEnd from './assets/logoEnd.png'
import '../components/Navbar.css'
import { useState } from 'react'

export const NavbarComponent = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <Link className="title" to="/home">
        <img src={image} width="250" height="80" alt="" />
      </Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to={"/allTerms"}>
            All Terms
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contribute"}>
            Contribute
          </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

