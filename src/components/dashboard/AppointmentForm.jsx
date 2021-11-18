import React from "react";
import TopNav from "./layouts/TopNav";
import Appointment from "../styles/bookAppointment.module.css";

function Appointments() {
  return (
    <div className="main">
      <TopNav name="Appointments" />
      <div className="main-content" style={{ display: "none" }}>
        <div className="tableComponent">
          <div className="tableTopRow">
            <div> 
              <select name="label" className="filterOption">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <img src="./img/Elipses (3).png" className="elipses" alt="" />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Doctor Assigned</th>
                <th>Date</th>
                <th>Time</th>
                <th>Contact</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="table-body-ad"></tbody>
          </table>
          <div className="tableControls">
            <div className="control-box">
              <p>
                {" "}
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-left"></i>{" "}
              </p>
            </div>
            <div className="control-box">
              <p>
                {" "}
                <i className="fas fa-chevron-left"></i>{" "}
              </p>
            </div>
            <div className="control-box">
              <p>1</p>
            </div>
            <div className="control-box">
              <p>
                {" "}
                <i className="fas fa-chevron-right"></i>{" "}
              </p>
            </div>
            <div className="control-box">
              <p>
                {" "}
                <i className="fas fa-chevron-right"></i>
                <i className="fas fa-chevron-right"></i>{" "}
              </p>
            </div>
          </div>
          <button className="afterTable">
            <a href="/patient-appointment.html">View all</a>
          </button>
        </div>
      </div>

      <div className={Appointment.background}>
        <div className={Appointment.mainBackground}>
          <h1>Book an Appointment</h1>
          <div className={Appointment.formInput}>
            <label className={Appointment.label} for="department">Department</label>
            <select name="department" id="department">
              <option value="">Choose a department</option>
              <option value="gynaecology">Gynaecology</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>
          <div className={Appointment.formInput}>
            <label className={Appointment.label} for="appointment-date">Date</label>
            <input type="date" id="appointment-date" />
          </div>
          <div className={Appointment.formInput}>
            <label className={Appointment.label} for="appointment-time">Time</label>
            <input type="time" id="appointment-time" />
          </div>
          <div className={Appointment.formInput}>
            <label className={Appointment.label} for="appointment-details">
              Appointment Details (Optional)
            </label>
            <textarea name="appointment-details" id="" cols="30" rows="4"></textarea>
          </div>
          <input
            type="button"
            value="BOOK APPOINTMENT"
            class={Appointment.submitForm}
            onclick="bookAnAppointment();"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
