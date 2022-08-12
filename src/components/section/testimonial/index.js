import React from 'react';
import style from './style.module.css'
import IBM from '../../../static/ibm.png';
import Button from '../../common/button';
import Avatar from '../../common/avatar';

function Testimonial () {
  return (
    <>
      <div className={style.base}>
        <div className={style.wrapper}>
          <div className={style.text}>
            <h3>Testimonials</h3>
            <img src={IBM} alt="ibm" />
            <p>
              Being a freelancer is a rollercoaster of emotions. 
              We built Slate to keep your freelance business less stressful. 
              We'd love to show you what we're building...
            </p>
          </div>
          <div className={style.avatar}>
            <Avatar />
            <span>
              <span>Esther Webb</span>
              <span>Designer</span>
            </span>
          </div>
          <div className={style.buttonList}>
            <Button>All Testimonials</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial;