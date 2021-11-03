import React from 'react'
import { Link } from 'react-router-dom'
// import { patientSideNavLinks } from '../SideNavLinks'

function SideNav() {
    return (
        <div>
            <Link to='/dashboard/appointments'><i className='fas fa-search'></i> Appointments</Link>
            <Link to='/dashboard/health-tips'>Health Tips</Link>
            <Link to='/dashboard/profile'>Profile</Link>
            <Link to='/dashboard/notifications'>Notifications</Link>
            {/* Check the link below to be sure it redirects to the proper sign-in page */}
            <Link to='/signin'>Log out</Link> 
            dashboard template!!!!
        </div>
    )
}

export default SideNav
