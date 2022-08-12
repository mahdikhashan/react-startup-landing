import React from "react";
import './style.css'
import classNames from "../../../utils/classNames";

function Input({ type, placeholder }) {
  const classes = {
    'input': true,
    [`input-${type}`]: !!type,
  }

  return (
    <>
      <input className={classNames(classes)} type={type} placeholder={placeholder} />
    </>
  )
}

export default Input;