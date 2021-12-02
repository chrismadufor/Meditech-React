import React from "react";
import Button from "../styles/button.module.css";



const Button = ({ name }) => {
  return ( 
    <button className={Button.btn}>{name}</button>
  );
};



export default Button;
