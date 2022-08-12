import React from 'react'
import Logo from '../../logo'
import Button from '../../common/button'
import './style.css'

function Header() {
  return (
    <>
      <div className='header'>
        <Logo />
        <div>
          <ul>
            <li><a href='#' target="blank" refer="noopener">Home</a></li>
            <li><a href='#' target="blank" refer="noopener">Product</a></li>
            <li><a href='#' target="blank" refer="noopener">About</a></li>
            <li><a href='#' target="blank" refer="noopener">Contact</a></li>
          </ul>
        </div>
        <Button variant='border'>Login</Button>
      </div>
    </>
  )
}

export default Header;