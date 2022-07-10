import React from 'react'
import "./Message.css"

const Message = ({open, onClose}) => {
  if(!open) return null
  return (
    <div onClick={(e) => e.stopPropagation()} className='message'>
      <p>This is a success message!</p>
    </div>
  )
}

export default Message