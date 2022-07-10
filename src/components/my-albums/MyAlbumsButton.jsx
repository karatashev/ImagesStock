import React, { useState } from 'react'
import "./MyAlbumsButton.css"
import MyAlbumsModal from "../my-albums/MyAlbumsModal"

const MyAlbumsButton = () => {

  const [isOpen, setIsOpen] = useState(false)

  const openModalHandler = (e) => {
    setIsOpen(current => !current)
  }

  return (
    <>
    <button onClick={openModalHandler} className='my-albums-button'>MY ALBUMS</button>
    {isOpen && <MyAlbumsModal />}
    </>
  )
}

export default MyAlbumsButton