import React from "react";
import img1 from "../../../img/Group 7.png";
import img2 from "../../../img/Vector.png";
import img3 from "../../../img/Vector (1).png";
import img4 from "../../../img/Vector (2).png";
import img5 from "../../../img/Group.png";

const Quality = () => {
  return (
    <div>
      <section className="quality-system-background">
        <div className="quality-system-header">
          <h1>
            Our Quality System Will <span className="help">Help You</span>
            <span className="dot">...</span>
          </h1>
        </div>
        <div className="quality-system">
          <div className="quality-system-content">
            <img src={img1} alt="qualitySystem" />
            <h1>Book Appointments</h1>
            <p>Book appointments using your</p>
            <p>mobile phone or PC from the</p>
            <p>comfort of your home.</p>
          </div>
          <div className="quality-system-content">
            <img src={img2} alt="qualitySystem" />
            <h1>Track all appointments</h1>
            <p>Have a record of all appointments</p>
            <p>you have had on your dashboard.</p>
          </div>
          <div className="quality-system-content">
            <img src={img1} alt="qualitySystem" />
            <h1>Save Time</h1>
            <p>Only go to the hospital when it is</p>
            <p>your time to. No need to wait on</p>
            <p>queues at the hospital.</p>
          </div>
        </div>
        <div className="quality-system">
          <div className="quality-system-content">
            <img src={img3} alt="qualitySystem" />
            <h1>Pay securely online</h1>
            <p>No need to get to the hospital to pay</p>
            <p>for your appointment. Pay as soon as</p>
            <p>the appointment is booked.</p>
          </div>
          <div className="quality-system-content">
            <img src={img4} alt="qualitySystem" />
            <h1>Get Reminders</h1>
            <p>If you have any re-appointments,</p>
            <p>you get reminders in time so you do </p>
            <p>not miss them.</p>
          </div>
          <div className="quality-system-content">
            <img src={img5} alt="qualitySystem" />
            <h1>Reschedule appointments</h1>
            <p>You can cancel an appointment</p>
            <p>and reschedule if for any reason</p>
            <p>you can not make it</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
