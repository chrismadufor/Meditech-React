import React, {useContext} from 'react';
import { Formik } from 'formik';
import SignInCss from '../../components/styles/Sign-in.module.css'
import Background from '../../components/img/background.png'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'
// import {AuthContext, AuthProvider} from '../../redux/authContext'
import {useDispatch} from 'react-redux'
import {UPDATE_USER_DETAILS} from '../../theStore/constants'



function SignIn(props) {
  let navigate =  useNavigate();
  // const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const dispatch = useDispatch()
  const getUserInfo = (values) => {
      axios.post('auth/signin', values)
        .then (res => {
          localStorage.setItem('token', res.data.accessToken)
          const userData = res.data.data
          dispatch({
            type: UPDATE_USER_DETAILS,
            payload: userData
          })
          // setIsLoggedIn(true)
        }) 
        .catch (err => console.log(err))
  }

  return (
   
    <div>
      <section className= {SignInCss.signInHero}>
        <div className={SignInCss.background}>
          <div className={SignInCss.left}>
            <div className={SignInCss.card}>
              <h1>Welcome!</h1>
              <p>
                Don't have an account? 
                <Link to="/signup"  className={SignInCss.goToSignup}>   Sign Up Free!</Link>
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

                  if (!values.password) {
                    errors.password = 'Password Required';
                  } 

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const data = {
                    email: values.email,
                    password: values.password
                  }
                  getUserInfo(data)
                  
                    setTimeout(() => {
                      navigate('/dashboard')
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

                    <div style={{color:"red"}}> 
                    {errors.password && touched.password && errors.password}
                    </div>
                    
                    <button type="submit" className={SignInCss.signInBtn} disabled={isSubmitting}   >SIGN IN</button>
                  
                    
                  </form>

                  
                )}
              </Formik>
            </div>
          </div>

          <div className={SignInCss.right}>
            <div className={SignInCss.backgroundImage}>
              <img src={Background} alt="background" />
            </div>
          </div>
        </div>
      </section>
    </div>
   
    
  )
}

export default SignIn;