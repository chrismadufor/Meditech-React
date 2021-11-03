import React from "react";
import { Formik } from 'formik';
import '../../components/styles/Sign-in.css';
import Background1 from '../../components/img/background1.png'
import { Link } from 'react-router-dom'

function SignUp() {
    return (

<div>
<section className="sign-in-hero">
      <div className="background">
        <div className="left">
          <div className="card">
            <h1>Sign Up Free</h1>
            <p>Registered with the Hospital?</p>
            {/* <div className="yesorno">
              <a className="no" href="./signup-no-page.html"><p>No</p></a>
              <a className="yes" href="/"><p>Yes</p></a>
            </div> */}
            <p id="message"></p>
            <Formik
      initialValues={{ email: '', password: '', name: '',  hospitalId:''}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
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
            type="text"
            name="name"
            id="username"
             placeholder="Name"
            className="usenameSignin"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}


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
          {errors.email && touched.email && errors.email}
          {/* <p className="usernameErr" style={{color: 'red', textAlign: 'left'}}></p> */}


          <input
            
            id="username"
            className="usenameSignin"
            placeholder="Hospital ID"
            type="text"
            name="hospitalId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}


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
          {errors.password && touched.password && errors.password}
          {/* <p class="passwordErr" style={{color: 'red', textAlign: 'left'}}></p> */}

          <button type="submit" className="signInBtn"  onSubmit={isSubmitting}><Link to="/signin">SIGN UP</Link></button>
          
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

        // <div>
        //    <h1>This is the sign up page!</h1> 
        //    <Link to="/signin">Sign in</Link>
        // </div>
    )
}

export default SignUp
