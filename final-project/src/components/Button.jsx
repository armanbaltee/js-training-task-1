import React from "react";
import arrow from "../assets/images/arrow.svg";
import "../assets/css/button.css";

const Button = () => {
  return (
    <div className="button">
      <p>Contact Us</p>
      <div className="svg-img">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Button;
