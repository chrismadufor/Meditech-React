import React from "react";
import img from "../../../img/Logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div>
          <Link to="./">
            <img className="logo" src={img} alt="logo" />
          </Link>
        </div>
        <div className="btn-flex">
          <Link to="/signin">
            <Button name="SIGN IN" />
          </Link>
          <Link to="/signup">
            <Button name="GET STARTED" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
