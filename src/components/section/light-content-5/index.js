import React from "react";
import style from './style.module.css'
import ScreenLaptop from '../../../static/screen_laptop.png'
import CurvedObject from '../../../static/shape_blue_curved.png'

function LightContent5() {
  return (
    <>
      <div className={style.base}>
        <div className="container flex flex-row">
          <div className={style.text}>
            <h3>OpenType features</h3>
            <p>
              Most calendars are designed for teams.
              Slate is designed for freelancers who
              want a simple way to plan their
              schedule.
            </p>
            <a href="#">LEARN MORE</a>
          </div>
          <div className={style.shape}>
            <img src={CurvedObject} alt="shape" />
          </div>
          <div className={style.image}>
            <img src={ScreenLaptop} alt="content" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LightContent5;