import React from 'react'
import TopNav from './layouts/TopNav'
import doctorsCss from '../styles/manageDoctors.module.css'


function AddDoctors() {
    return (
        <div className='main'>
            <TopNav name = "Add doctors"/>
            <div className= {doctorsCss.mainContent}>

            <form action="#">
            <h1>Add New Doctor</h1>
            <p id="response"></p>
            <div class="form-input">
                <label for="doctor-name">Name:  </label>
                <input
                  type="text"
                  id="doctor-name"
                  placeholder="Enter Name"
                />
            </div>
            <div class="form-input">
                <label for="doctor-email">Email:  </label>
                <input
                  type="text"
                  id="doctor-email"
                  placeholder="Enter Email" 
                />
              </div>
             
              <div class="form-input">
                <label for="doctor-dept">Department:  </label>
                
                <select name="department"  id="doctor-dept" className={doctorsCss.select} >
                  <option value="gynaecology">Enter department</option>
                  <option value="gynaecology">Gynaecology</option>
                  <option value="paediatrics">Pediatrics</option>
                </select> 
              </div>
              <button type="submit"  className={doctorsCss.submitForm} onclick="addDoctor();">ADD DOCTOR</button>
          </form>
            </div>
        </div>
    )
}

export default AddDoctors
