import React from 'react'

function TopNav() {
    return (
        <div className='top-nav'>
           <div className="page-name">
            <i className="fas fa-bars"></i>
            <p>Dashboard</p>
          </div> 
          <div className="profile-details">
            <div className="notification-icons">
              <div className="message-icon">
                <i className="fas fa-cog"></i>
              </div>
              <div className="bell-icon">
                <i className="fas fa-bell"></i>
              </div>
            </div>
            {/* <img src="img/patient.jpg" alt="" className="top-img" /> */}
            <i className='top-img fas fa-user'></i>
          </div>
        </div>
    )
}

export default TopNav
