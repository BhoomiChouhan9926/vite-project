import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'
const Navbar = () => {
  return (
     <nav className="navbar">
      <div className="nav-left">
        <h2>MemoryNest</h2>
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/">Features</Link>
        <Link to="/">About</Link>
      </div>

      <div className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
