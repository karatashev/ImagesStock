import React from 'react'
import "./Footer.css"
import footerImg from "../../assets/Vector.svg"

const Footer = () => {
  return (
    <footer>
      <img className='footer-image' src={footerImg} alt="camera-pic" />
    </footer>
  )
}

export default Footer