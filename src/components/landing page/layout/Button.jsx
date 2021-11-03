import React from "react";


const Button = ({ name }) => {
  return ( 
    <div>
      <div>
        <a href="./patient-signin.html" target="_blank">
          <button className="btn">{name}</button>
        </a>
      </div>
    </div>
  );
};

export default Button;
