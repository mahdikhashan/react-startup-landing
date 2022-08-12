import React from "react";
import Button from "../../common/button";
import style from './style.module.css'

function Content2() {
  return (
    <>
      <div className={style.base}>
        <div className={style.wrapper}>
          <div className={style.content}>
            <p>
              We focus on ergonomic
              <br />
              meeting
            </p>
          </div>
          <div className={style.getStarted}>
            <p>
              Being a freelancer is a rollercoaster of emotions.
              <br />
              We built Slate to keep your freelance business
              <br />
              building...
              <br />
              <br />
              Being a freelancer is a rollercoaster of emotions.
              <br />
              We built Slate to keep your freelance business
              <br />
              building...
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content2;