import React from "react";
import {Link} from 'react-router-dom'
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
          <Link to="/signup">
            <button>Get Started</button>
          </Link>
        </div>
        <img className="heroimage" src={img} alt="Hero Background" />
      </div>
    </section>
  );
};

export default Hero;
