import React from "react";
import Button from "../../common/button";
import style from './style.module.css'

function Pricing () {
  return (
    <>
      <div className={style.base}>
        <div className={style.content}>
          <h2>Pricing</h2>
          <p>
            Most calendars are designed for teams. Slate is 
            designed for freelancers who want a simple 
            way to plan their schedule.
          </p>
        </div>
        <div className={style.trial}>
          <span>30-DAY FREE TRIAL</span>
          <div className={style.trailFee}>
            <span>$5</span>
            <span>
              <span>/month per</span>
              <span>user</span>
            </span>
          </div>
          <p>Most calendars are designed for teams.</p>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  )
}

export default Pricing;