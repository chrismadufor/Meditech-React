import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div>
            <h1>This is the sign-in page!</h1>
           <Link to="/signup">Sign up</Link>
           <Link to="/dashboard">Dashboard Page</Link>
        </div>
    )
}

export default SignIn
