import React from 'react'
import "./Navbar.css"
import logo from "../../assets/Site Logo.svg"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="site-logo" />
    </nav>
  )
}

export default Navbar