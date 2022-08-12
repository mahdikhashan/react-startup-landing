import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import classNames from '../../../utils/classNames'
import avatar from './avatar.png'

function Avatar ({ src, alt }) {
  Avatar.defaultProps = {
    src: avatar,
    alt: 'default avatar alt',
  }

  Avatar.propTypes = {
    src: PropTypes.object,
    alt: PropTypes.string,
  }

  const imgClasses = {
    'image': true,
  }

  return (
    <>
      <div className={classNames(imgClasses)}>
        <img src={src ?? avatar} alt={alt} />
      </div>
    </>
  )
}

export default Avatar;