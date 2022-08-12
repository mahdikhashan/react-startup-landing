import React from "react";
import style from './style.module.css'
import ScreenCode from '../../../static/screen_code.png'
import CurvedObject from '../../../static/shape_yellow_curved.png'

function LightContent6() {
  return (
    <>
      <div className={style.base}>
        <div className="container flex flex-row-reverse">
          <div className={style.text}>
            <h3>Variable fonts</h3>
            <p>
              Most calendars are designed for 
              teams. Slate is designed for 
              freelancers 
            </p>
            <button href="#">LEARN MORE</button>
          </div>
          <div className={style.shape}>
            <img src={CurvedObject} alt="shape" />
          </div>
          <div className={style.image}>
            <img src={ScreenCode} alt="content" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LightContent6;