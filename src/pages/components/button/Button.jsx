import React from 'react'
import SpinLoading from '../../images/Double Ring-1s-200px.svg'
import './Button.css'

export default ({ type, content, onClick, onSubmit, isLoading }) => {
  return (
    <button
      className="input-button flex justify-center items-center"
      type={type ? type : 'submit'}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={isLoading}
    >
      {isLoading ? <img className='h-full' src={SpinLoading} alt="" /> : content}
    </button>
  )
}
