import React from 'react'
import TopNav from './layouts/TopNav'
import '../styles/patient-profile.css'

function Profile() {
    return (
      <div className='main'>
        <TopNav name= 'Profile'/>
        <div className='main-content'>
          <div className="main-content-wrap">
              <div className="profile-picture">
                <img className="profile-img" src="" alt="" />
              </div>
              <div className="profile-wrap">
                <h2>Basic Information</h2>
                <div className="basic-info flex">
                  <div>
                    <div className="info-item">
                      <p className="info-item-title patient-name">Full Name</p>
                      <p className="profileName"></p>
                    </div>
                    <div className="info-item">
                      <p className="info-item-title patient-id">Hospital ID</p>
                      <p className="profileHosID"></p>
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
