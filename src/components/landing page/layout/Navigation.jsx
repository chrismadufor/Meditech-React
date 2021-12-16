import React from "react";
import img from "../../../img/Logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Navbar
        bg="mybg"
        variant="dark"
        sticky="top"
        expand="sm"
      >

        
        <Navbar.Brand className="mgn">
          <img className="logo" src={img} alt='' />
        </Navbar.Brand>

        <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Link to="/signin">
                <button className="styl">Sign in</button>
              </Link>
              <Link to="/signupno">
                <button className="styl">Get Started</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
