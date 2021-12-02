import React from 'react'
import TopNavCSS from "../../styles/TopNav.module.css"
import {useSelector} from 'react-redux'
import patient from '../../img/patient.jpg'

function TopNav({name}) {

    const profilePicture = useSelector(state => state.authReducer.userDetails.profilePhoto)
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
          <img src={profilePicture ? profilePicture : patient} alt="" className="top-img" />
        </div>
      </div>
    )
}

export default TopNav
