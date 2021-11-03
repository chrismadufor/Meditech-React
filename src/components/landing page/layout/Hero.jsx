import React from "react";
import img from "../../../img/heroimage.png";

const Hero = () => {
  return (
    <section className="hero-background">
      <div className="hero">
        <div className="heroleft">
          <h1>
            Booking Appointments <br />
            Just Got Easier
          </h1>
          <p>
            <i className="fas fa-check"></i> Book appointments with the click of
            a button.
          </p>
          <p>
            <i className="fas fa-check"></i> Only go to the hospital when it is
            your time.
          </p>
          <p>
            <i className="fas fa-check"></i> Say bye to long queues at the
            hospital.
          </p>
          <a href="./signup-yes-page.html" target="_blank">
            <button>Get Started</button>
          </a>
        </div>
        <img className="heroimage" src={img} alt="Hero Background" />
      </div>
    </section>
  );
};

export default Hero;
