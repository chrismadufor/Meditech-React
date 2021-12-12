import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import TopNav from "./layouts/TopNav";
import Appointment from "../styles/bookAppointment.module.css";
import axios from 'axios';
import { addAppointment } from '../../theStore/actions'

function AppointmentForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    date: '',
    time: '',
    description: '',
  })
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const submitForm = () => {
    // dispatch(addAppointment(data))
    const token = localStorage.getItem('token');
    const config = {
        headers : {
            Authorization : 'Bearer ' + token
        }
    }

    let time = data.time
    let newTime = time.substring(0, time.length - 2)
    const payload = {
       date: data.date,
       time: newTime
    }
    console.log("Payload", payload)

    axios.post('https://meditech-hospital-app.herokuapp.com/bookings/create-booking', payload, config)
         .then((res) =>{   
          console.log(res)
        })
        .catch(err =>{
          console.log(err)
        })
    console.log(data)
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
            {/* <input type="time" id="appointment-time" name="time" onChange = {handleChange} value = {data.time}/> */}
            <select id="appointment-time" name="time" onChange = {handleChange} value = {data.time}>
                <option>Choose a time</option>
                <option>9AM</option>
                <option>10AM</option>
                <option>11AM</option>
                <option>12PM</option>
                <option>1PM</option>
                <option>2PM</option>
                <option>3PM</option>
                <option>4PM</option>
                <option>5PM</option>
            </select>
          </div>
          <div className={Appointment.formInput}>
            <label className={Appointment.label} for="appointment-details">
              Appointment Details (Optional)
            </label>
            <textarea name="description" id="" cols="30" rows="4" onChange = {handleChange} value = {data.description}></textarea>
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
