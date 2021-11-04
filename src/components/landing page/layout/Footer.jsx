import React from "react";
import img from "../../../img/Logo.png";


const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer-background">
          <div className="register">
            <img src={img} alt="logo" />
            <p className="slogan">making your health better...</p>
            <p className="para">Register to start using the</p>
            <p className="para">application TODAY!</p>
            <a href="./signup-yes-page.html" target="_blank">
              <button>Get Started</button>
            </a>
          </div>
          <div className="contact">
            <h2>connect with us</h2>
            <p>
              <span>
                <i className="fas fa-map-marker-alt footer-icon"></i>
              </span>
              Plot 25, Kadir Salami Street, Wuse 2, Abuja
            </p>
            <p>
              <span>
                <i className="fas fa-phone footer-icon"></i>
              </span>
              08033776699
            </p>
            <p>
              <span>
                <i className="fab fa-twitter footer-icon"></i>
              </span>
              meditech
            </p>
            <p>
              <span>
                <i className="fab fa-instagram footer-icon"></i>
              </span>
              meditech
            </p>
          </div>
          <div className="get-in-touch">
            <h1>Drop a message</h1>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Enter your Message"
            />
            <a href="#">
              <button>submit</button>
            </a>
          </div>
        </div>
        <div className="footer-text">
          <p>Powered by Codarchs 2021</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
