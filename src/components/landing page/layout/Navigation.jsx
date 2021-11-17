 import React from "react";
import img from "../../../img/Logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

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
              <Nav.Link href="/signin">
                <button className="styl">Sign in</button>
              </Nav.Link>
              <Nav.Link href="/signup">
                <button className="styl">Get Started</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
