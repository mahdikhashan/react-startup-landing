import PropTypes from 'prop-types'
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

Button.defaultProps = {
  onClick: () => [],
  variant: 'normal',
  color: 'blue',
  children: <p>Button</p>
}

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
}

export default Button;