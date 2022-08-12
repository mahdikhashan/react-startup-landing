import React from 'react'
import Logo from '../../logo'
import Button from '../../common/button'
import style from './style.module.css'

function Header() {
  return (
    <>
      <div className={style.header}>
        <Logo />
        <div>
          <ul>
            <li><button>Home</button></li>
            <li><button>Product</button></li>
            <li><button>About</button></li>
            <li><button>Contact</button></li>
          </ul>
        </div>
        <Button variant='border'>Login</Button>
      </div>
    </>
  )
}

export default Header;