import React from 'react'
import Logo from '../../logo'
import Twitter from '../../../static/twitter.png'
import Linkedin from '../../../static/linkedin.png'
import Facebook from '../../../static/facebook.png'
import style from './style.module.css'

function Footer() {
  return (
    <>
      <div className='container'>
        <div className={style.footer}>
          <div className={style.logo}>
            <Logo />
            <p>Just type what's on your mind</p>
          </div>
          <div>
            <ul>
              <li><button>Home</button></li>
              <li><button>Product</button></li>
              <li><button>About</button></li>
              <li><button>Contact</button></li>
            </ul>
          </div>
          <div className={style.icons}>
            <img src={Twitter} alt='twitter' />
            <img src={Linkedin} alt='linkedin' />
            <img src={Facebook} alt='facebook' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;