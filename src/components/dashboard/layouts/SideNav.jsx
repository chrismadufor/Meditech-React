import '../../styles/dashboard-template.css'
import '../../img/logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'
// import { patientSideNavLinks } from '../SideNavLinks'

function SideNav() {
    return (
        <div className='side-nav'>
            <div class="header">
                <img src="../../img/logo.svg" alt="#" />
                <h2>MEDITECH</h2>
            </div>
            <Link to='/dashboard/appointments'><i className='fas fa-search'></i> Appointments</Link>
            {/* Check the link below to be sure it redirects to the proper sign-in page */}
            <Link to='/signin'>Log out</Link> 
           
        </div>
    )
}

export default SideNav
