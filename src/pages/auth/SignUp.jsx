import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div>
           <h1>This is the sign up page!</h1> 
           <Link to="/signin">Sign in</Link>
        </div>
    )
}

export default SignUp
