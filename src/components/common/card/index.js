import React from "react";
import './style.css'
import classNames from "../../../utils/classNames";

function Card({ children }) {
  const classes = {
    'card': true,
  }

  return (
    <>
      <div className={classNames(classes)}>
        {children}
      </div>
    </>
  )
}

export default Card;