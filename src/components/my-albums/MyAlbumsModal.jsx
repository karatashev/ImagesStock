import React from 'react'
import "./MyAlbumsModal.css"
import { Link } from "react-router-dom";

const MyAlbumsModal = () => {
  return (
    <div className='my-albums-modal'>
      <Link style={{textDecoration: "none", color: "inherit"}} to="/images/album">
      <p>My Album One</p>
      </Link>
      <p>My Album Two</p>
      <p>My Album Three</p>
      <p>My Album Four</p>
    </div>
  )
}

export default MyAlbumsModal