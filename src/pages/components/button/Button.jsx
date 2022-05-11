import React from 'react'
import SpinLoading from '../../images/Double Ring-1s-200px.svg'
import './Button.css'

export default ({
  type,
  content,
  onClick,
  onSubmit,
  isLoading,
  isDisabled
}) => {
  return (
    <button
      className="input-button flex justify-center items-center disabled:opacity-50"
      type={type ? type : 'submit'}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={isLoading || isDisabled}
    >
      {isLoading ? (
        <img className="h-full" src={SpinLoading} alt="" />
      ) : (
        content
      )}
    </button>
  )
}
