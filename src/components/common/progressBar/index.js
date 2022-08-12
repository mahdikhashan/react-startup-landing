import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function ProgressBar ({ value, max }) {
  return (
    <>
      <progress id="progress_bar" value={value} max={max} >
        { value }
      </progress>
    </>
  )
}

ProgressBar.defaultProps = {
  value: 0,
  max: 100,
}

ProgressBar.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
}

export default ProgressBar;
