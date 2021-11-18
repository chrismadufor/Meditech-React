import React from 'react'
import TopNav from './layouts/TopNav'
import Profilecss from '../styles/profile.module.css'

function Profile() {
    return (
      <div className={Profilecss.main}>
        <TopNav name= 'Profile'/>
        <div className={Profilecss.mainContent}>
          <div className={Profilecss.mainContentWrap}>
              <div className={Profilecss.profilePicture}>
                <img className={Profilecss.profileImg} src="" alt="" />
              </div>
              <div className={Profilecss.profileWrap}>
                <h2>Basic Information</h2>
                <div className={`${Profilecss.basicInfo}, ${Profilecss.flex}`}>
                  <div>
                    <div className={Profilecss.infoItem}>
                      <p className={`${Profilecss.infoItemTitle}, ${Profilecss.patientName}`}>Full Name</p>
                      <p className={Profilecss.profileName}></p>
                    </div>
                    <div className={Profilecss.infoItem}>
                      <p className={`${Profilecss.infoItemTitle}, ${Profilecss.patientId}`}>Hospital ID</p>
                      <p className={Profilecss.profileHosID}></p>
                    </div>
                  </div>
                  <div className="wide">
                    <div className="info-item">
                      <p className="info-item-title patient-email">Email</p>
                      <p className="profileEmail"></p>
                    </div>
                    <div className="info-item">
                      <p className="info-item-title patient-phone">Phone Number</p>
                      <p className="profilePhone"></p>
                    </div>
                  </div>
                </div>
                <hr />
                <h2>Other Information</h2>
                <div className="other-info flex">
                  <div>
                    <div className="info-item">
                      <p className="info-item-title">Date of birth</p>
                      <p className="profileDOB"></p>
                    </div>
                    <div className="info-item">
                      <p className="info-item-title">City</p>
                      <p className="profileCity"></p>
                    </div>
                  </div>
                  <div className="wide">
                    <div className="info-item">
                      <p className="info-item-title">Nationality</p>
                      <p className="profileNation"></p>
                    </div>
                    <div className="info-item">
                      <p className="info-item-title">Address</p>
                      <p className="profileAdd">
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Profile
