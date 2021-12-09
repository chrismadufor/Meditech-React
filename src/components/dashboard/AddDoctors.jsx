import React, { useState } from "react";
import TopNav from "./layouts/TopNav";
import doctorsCss from "../styles/manageDoctors.module.css";
import axios from "axios";
import { addDoctors } from "../../theStore/actions";
import { Formik } from "formik";
import {  useNavigate } from 'react-router-dom'

function AddDoctors() {
  // const [state, setState] = useState({});
  let navigate = useNavigate();

 

   const onClick =(e, user)=>{
    const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

    axios.post(
      "https://meditech-hospital-app.herokuapp.com/users/add-doctor",
      user, config)
    .then((res) => {
      console.log(res.data);
      navigate('./ManageDoctors')
    });
    }
   
  

  
  

  return (
    <div className="main">
      <TopNav name="Add doctors" />
      <div className={doctorsCss.mainContent}>
      <div><h1>Add New Doctor</h1></div>
        <Formik
          initialValues={{ name: "", email: "", department:"" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.name) {
              errors.name = "Name Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
        
           const  user={
                fullName: values.name,
                email: values.email,
                department: values.department
              }
             
            
            onClick(user);

            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <label for="doctor-name">Name: </label>
              <input
                id="username"
                className={doctorsCss.formInput}
                placeholder="FullName"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div style={{ color: "red" }}>
                {errors.name && touched.name && errors.name}
              </div>
              <label for="doctor-email">Email: </label>
              <input
                className={doctorsCss.formInput}
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <div style={{ color: "red" }}>
                {errors.email && touched.email && errors.email}
              </div>

              <div>
                <label for="doctor-dept">Department: </label>

                <select
                  name="department"
                  id="doctor-dept"
                  className={doctorsCss.select}
                >
                  <option>Enter department</option>
                  <option value="gynaecology">Gynaecology</option>
                  <option value="paediatrics">Paediatrics</option>
                </select>
              </div>

              <button
                type="submit"
                className={doctorsCss.submitForm}
                disabled={isSubmitting}
              >
                ADD DOCTOR
              </button>
            </form>
          )}
        </Formik>

        
      </div>
    </div>
  );
}

export default AddDoctors;
