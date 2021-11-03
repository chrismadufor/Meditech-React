import React from 'react'
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        <div>
            <h1>This is the landing page!</h1>
            <Link to='/signin'>Sign in</Link>
            <Link to='/signup'>Sign up</Link>
        </div>
    )
}

export default LandingPage
