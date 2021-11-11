import React from "react";
import { Formik } from 'formik';
import '../../components/styles/Sign-up.css';
import Background1 from '../../components/img/background1.png'
import {Link} from 'react-router-dom'

function SignUp(props) {
    return (

<div>
<section className="sign-in-hero">
      <div className="background">
        <div className="left">
          <div className="card">
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
          props.history.push('/signupno')

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
            <button type="submit " className="signInBtn"  disabled={isSubmitting}> CONFIRM</button> 
          
           <p className='not-reg'>Not registered with the Hospital? <br/>
           <Link to="/signupno" style={{  color: '#0ab1e4'}} > Sign up here </Link>
           
           </p>

           
          
        </form>

        
      )}
    </Formik>


          </div>
        </div>
        <div className="right">
          <div className="background-image">
            <img src={Background1} alt="background" />
          </div>
        </div>
      </div>
    </section>
    
  </div>
    )
}

export default SignUp
