import React, {useState} from "react";
import { Formik } from 'formik';
import SignUpCss from '../../components/styles/Sign-in.module.css'

import Background1 from '../../components/img/background1.png'
import {Link, useNavigate } from 'react-router-dom'

function SignUp(props) {
let navigate =  useNavigate();
const [showModal, setShowModal] = useState(false)


    return (

<div>
<section className={SignUpCss.signInHero}>
      <div className={SignUpCss.background}>
        <div className= {SignUpCss.left}>
          <div className={SignUpCss.card}>
            <h1>Sign Up Free</h1>
            
            <p id="message"></p>
            <Formik
      initialValues={{ patientId:'' }}
      validate={values => {
        const errors = {};
       

        if(!values.patientId){
          errors.patientId = 'Identification Required'
        }

        return errors;
        } 
       
        
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          navigate('/signupno')

          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
            
            id="username"
            className="usenameSignin"
            placeholder="Patient ID"
            type="text"
            name="patientId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.patientId}
          />
          <div style={{color:"red"}}>{errors.patientId && touched.patientId && errors.patientId}</div>          
            <button type="submit " className={SignUpCss.signInBtn}  disabled={isSubmitting}> CONFIRM</button> 
          
           <p className='not-reg'>Not registered with the Hospital? <br/>
           <Link to="/signupno" style={{  color: '#0ab1e4'}} > Sign up here </Link>
           
           </p>

           
          
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

export default SignUp
