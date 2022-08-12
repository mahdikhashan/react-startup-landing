import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import classNames from '../../utils/classNames'

function Logo ({ dark }) {
  const darkLogo = require('../../static/logo_dark.png')
  const whiteLogo = require('../../static/logo.png')

  const altLogo = "Company's Logo"

  const logoClasses = {
    'logo': true,
  }

  Logo.propTypes = {
    dark: PropTypes.bool,
  }

  Logo.defaultProps = {
    dark: false,
  }

  return (
    <>
      <div className={classNames(logoClasses)}>
        <img src={dark ? darkLogo : whiteLogo} alt={altLogo} />
      </div>
    </>
  )
}

export default Logo;
