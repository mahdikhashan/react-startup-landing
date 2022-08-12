import React from "react";
import style from './style.module.css'
import ProgressBar from '../../common/progressBar';
import Button from "../../common/button";

function LightContent7() {
  return (
    <>
      <div className={style.base}>
        <div className="container flex flex-col max-w-2xl">
          <div className={style.text}>
            <h2>A rethink of how we work</h2>
            <p>
              Being a freelancer is a rollercoaster of emotions. 
              We built Slate to keep your 
            </p>
          </div>
          <div className={style.progressBar}>
            <ProgressBar value={50} max={100} />
          </div>
          <div className={style.buttonList}>
            <Button>Get Started For Free</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LightContent7;