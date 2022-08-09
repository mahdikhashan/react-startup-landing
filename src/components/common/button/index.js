import React from 'react'
import './style.css'
import classNames from '../../../utils/classNames'

function Button({ onClick, variant, color, children }) {  
  const classes = {
    'button': true,
    [`button-${variant}`]: !!variant,
    [`button-${color}`]: !!color,
  }

  return (
    <>
      <button className={classNames(classes)} type="button" onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export default Button;