import React from "react";
import TopNav from "./layouts/TopNav";
import Appointment from "../styles/bookAppointment.module.css";

function AppointmentForm() {
  return (
    <div className="main">
      <TopNav name="Appointments" />
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

export default AppointmentForm;
