import React, {useState} from "react";
import { Formik } from 'formik';
import SignUpCss from '../../components/styles/Sign-in.module.css'
import Background1 from '../../components/img/background1.png'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'



function SignUpNo(props) {
let navigate =  useNavigate();

return (

  <div>
      <section className={SignUpCss.signInHero}>
          <div className= {SignUpCss.background}>
              <div className={SignUpCss.left}>
                <div className={SignUpCss.card}>
                  <h1>Sign Up Free</h1>
                  {/* <p>Registered with the Hospital?</p>
                  <div className="yesorno">
                    <Link to="/signup" className="no" ><p>Yes</p></Link>
                  </div>
                  <p id="message"></p> */}
                  <Formik
            initialValues={{ email: '', name: '',  password: '', confirmPassword:''}}
            validate={values => {
              const errors = {};

              if(!values.name){
                errors.name = 'Name Required'
              }

              if(!values.password){
                errors.password = 'Password Required'
              }

              if(!values.confirmPassword){
                errors.confirmPassword = 'Please Confirm your password'
              }

            if(values.password !== values.confirmPassword){
              errors.confirmPassword = 'Password does not match'


            }

              if (!values.email) {
                errors.email = 'Email Required';
              
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
              
            }}
            onSubmit={(values, { setSubmitting }) => {
              const data = {
                fullName: values.name,
                email: values.email,
                password: values.password,
                userType: 'patient'
              }
              axios.post('auth/signup', data) //add role
                .then (res => {
                  if(res.status === 200) {
                    navigate('/signin');
                    setSubmitting(false); 
                  }
                })
                .catch ((err) => console.log(err))
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
                
                <input
                  type="text"
                  name="name"
                  id="username"
                  placeholder="Full Name"
                  className="usenameSignin"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              <div style={{color:"red"}}>  {errors.name && touched.name && errors.name} </div>


                <input
                  
                  id="username"
                  className="usenameSignin"
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div style={{color:"red"}}>{errors.email && touched.email && errors.email}</div>


                <input

                  id="password"
                  className="passwordSignin"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div style={{color:"red"}}>{errors.password && touched.password && errors.password}</div>

                <input
                  id="password"
                  className="passwordSignin"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />

                <div style={{color:"red"}}>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</div>

                
                <button type="submit " className={SignUpCss.signInBtn}  disabled={isSubmitting}> SIGN UP </button> 
                
              </form>

              
            )}
          </Formik>


                </div>
              </div>
              <div className={SignUpCss.right}>
                <div className={SignUpCss.backgroundImage}>
                  <img src={Background1} alt="background" />
                </div>
                </div>
                </div>
      </section>
  </div>
  )
}

export default SignUpNo
