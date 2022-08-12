import React from 'react'
import Header from '../../navigation/header';
import Button from '../../common/button';
import Flat from '../../../static/flat.png'
import BlueObject from '../../../static/blue_object.png'
import YellowObject from '../../../static/yellow_object.png'
import style from './style.module.css'

function Heading() {
  return (
    <>
      <div className={style.base}>
        <div className='container'>
          <Header />
          <div className={style.text}>
            <h1>Lightning fast prototyping</h1>
            <span>
              Most calendars are designed for teams. Slate is
              designed for freelancers.
            </span>
          </div>
          <div className={style.shape}>
            <img src={BlueObject} alt="shape" />
            <img src={YellowObject} alt="shape" />
          </div>
          <div className={style.buttonList}>
            <Button color="blue">Get Started</Button>
            <Button color="white">Try For Free</Button>
          </div>
          <div className={style.image}>
            <img src={Flat} alt="flat browser" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Heading;