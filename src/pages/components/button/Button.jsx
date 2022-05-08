import React from 'react'
import './Button.css'

export default ({ type, content, onClick, onSubmit }) => {
  return (
    <input
      className="input-button"
      type={type ? type : 'submit'}
      value={content}
      onClick={onClick}
      onSubmit={onSubmit}
    />
  )
}
