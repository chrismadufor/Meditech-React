import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import TopNav from "./layouts/TopNav";
import Appointment from "../styles/bookAppointment.module.css";
import { addAppointment } from '../../theStore/actions'

function AppointmentForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    contact: '08099192347',
    date: '',
    time: '',
    doctor: 'Chika Ukoh',
    status: 'Pending'
  })
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const submitForm = () => {
    dispatch(addAppointment(data))
    navigate('/dashboard/appointments')
  }
  return (
    <div className="main">
      <TopNav name="Appointments" />
      <div className={Appointment.background}>
        <div className={Appointment.mainBackground}>
          <h1>Book an Appointment</h1>
          <div className={Appointment.formInput}>
            <label className={Appointment.label} for="department">Department</label>
            <select name="dept" id="department">
              <option value="">Choose a department</option>
              <option value="gynaecology">Gynaecology</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>
          <div className={Appointment.formInput}>
            <label className={Appointment.label} for="appointment-date">Date</label>
            <input type="date" id="appointment-date" name = "date" onChange = {handleChange} value = {data.date}/>
          </div>
          <div className={Appointment.formInput}>
            <label className={Appointment.label} for="appointment-time">Time</label>
            <input type="time" id="appointment-time" name="time" onChange = {handleChange} value = {data.time}/>
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
            onClick= {submitForm}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
