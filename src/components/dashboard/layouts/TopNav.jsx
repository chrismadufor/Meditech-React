import React from 'react'
import TopNavCSS from "../../styles/TopNav.module.css"
import patient from '../../img/patient.jpg'

function TopNav({name}) {
    return (
      <div className={TopNavCSS.topNav}>
          <div className={TopNavCSS.pageName}>
          <p>{name}</p>
        </div> 
        <div className={TopNavCSS.profileDetails}>
          <div className={TopNavCSS.notificationIcons}>
            <div className={TopNavCSS.messageIcon}>
              <i className="fas fa-cog"></i>
            </div>
            <div className="bell-icon">
              <i className="fas fa-bell"></i>
            </div>
          </div>
          <img src={patient} alt="" className="top-img" />
        </div>
      </div>
    )
}

export default TopNav
