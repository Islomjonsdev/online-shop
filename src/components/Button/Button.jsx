import React from "react";
import style from "./Button.module.scss";

const Button = ({ title, ...props }) => {
  return (
    <button className={style.button} {...props}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {title}
    </button>
  );
};

export default Button;
