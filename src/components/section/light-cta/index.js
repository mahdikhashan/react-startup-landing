import React from "react";
import Button from "../../common/button";
import style from './style.module.css'

function LightCTA () {
  return (
    <>
      <div className={style.base}>
        <div className={style.text}>
          <span>Just type</span>
          <h2>Fastest way to navigate</h2>
          <p>
            Most calendars are designed for teams. 
            <br/>
            Slate is designed for freelancers.
          </p>
        </div>
        <div className={style.buttonList}>
          <Button color="blue">Download</Button>
          <Button color="border">See Walkthrough</Button>
        </div>
      </div>
    </>
  )
}

export default LightCTA;