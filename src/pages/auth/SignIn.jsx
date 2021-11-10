import React from 'react';
import { Formik } from 'formik';
import '../../components/styles/Sign-in.css'
import Background from '../../components/img/background.png'
import { Link } from 'react-router-dom'


function SignIn(props) {


    return (

<div>
    <section className="sign-in-hero">
      <div className="background">
        <div className="left">
          <div className="card">
            <h1>Welcome!</h1>
            <p>
              Don't have an account? 
              <Link to="/signup"  className='goToSignup'>   Sign Up Free!</Link>
            </p>
     
            <Formik 
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
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
                setTimeout(() => {

                  props.history.push('/dashboard')
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
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <div style={{color:"red"}}>  
                  {errors.email && touched.email && errors.email}
                  </div>

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
                   
                  <button type="submit" className="signInBtn" disabled={isSubmitting}   >SIGN IN</button>
                
                  
                </form>

                
              )}
            </Formik>
          </div>
        </div>

        <div className="right">
          <div className="background-image">
            <img src={Background} alt="background" />
          </div>
        </div>
      </div>
    </section>


        </div>
    )
}

export default SignIn
