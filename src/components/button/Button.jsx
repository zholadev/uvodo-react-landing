import React from 'react'
import './button.sass'

const Button = (props) => {
  const { small, big, border, text, violet, onClick, width, dark } = props

  return big ? (
    <button
      onClick={onClick}
      style={{ width: `${width}px` }}
      className={violet ? 'btn btn-violet btn-big' : 'btn btn-dark btn-big'}
    >
      {text}
    </button>
  ) : small ? (
    <button
      style={{ width: `${width}px` }}
      className={
        border
          ? 'btn btn-small border-violet'
          : dark
          ? 'btn btn-small btn-dark'
          : 'btn btn-small btn-violet'
      }
    >
      {text}
    </button>
  ) : null
}

export default Button
