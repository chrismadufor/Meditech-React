// import React, {useState, useEffect} from "react";
import {useSelector} from 'react-redux'
import TopNav from "./layouts/TopNav";
import Profilecss from "../styles/profile.module.css";
import { useNavigate } from "react-router-dom";
import profilePic from '../img/patient.jpg'
// import {Image} from "cloudinary-react"

function Profile() {

  let navigate = useNavigate();
  
  const user = useSelector((state) => state.authReducer.userDetails)
  console.log(user)
  const role = useSelector(state => state.authReducer.userDetails.userType)

  return (
    <div className={Profilecss.main}>
      <TopNav name="Profile" />
      <div className={Profilecss.mainContent}>
        <div className={Profilecss.mainContentWrap}>
          <div className={Profilecss.profilePicture}>
            <img className={Profilecss.profileImg} src={user.profilePhoto ? user.profilePhoto : profilePic } alt="" />
            
          </div>
          <div className={Profilecss.profileWrap}>
            <h2>Basic Information</h2>
              <div className={`${Profilecss.basicInfo}, ${Profilecss.flex}`}>
                <div className={Profilecss.first}>
                  <div className={Profilecss.infoItem}>
                    <p className={Profilecss.infoItemTitle}>Full Name</p>
                    <p className={Profilecss.profileName}>{user.fullName}</p>
                  </div>
                  <div className={Profilecss.infoItem}>
                    <p className={Profilecss.infoItemTitle}>
                      {role === 'patient' ? 'Hospital ID' : role === 'doctor' ? 'Doctor ID' : null}
                    </p>
                    <p className={Profilecss.profileHosID}>{user.hospitalId}</p>
                  </div>
                </div>
                <div className={Profilecss.wide}>
                  <div className={Profilecss.infoItem}>
                    <p className={Profilecss.infoItemTitle}>Email</p>
                    <p className={Profilecss.profileEmail}>{user.email} </p>
                  </div>
                  <div className={Profilecss.infoItem}>
                    <p className={Profilecss.infoItemTitle}>Phone Number</p>
                    <p className={Profilecss.profilePhone}>{user.phone}</p>
                  </div>
                </div>

                <button
                  className={Profilecss.editProfile}
                  onClick={() => {
                    navigate("/dashboard/profile-edit");
                  }}
                >
                  <i class="fas fa-pencil"></i>Edit Profile
                </button>
              </div>
            

            <hr />
            <h2 className={Profilecss.h2}>Other Information</h2>
            <div className={`${Profilecss.otherInfo}, ${Profilecss.flex}`}>
              <div className={Profilecss.first}>
                <div className={Profilecss.infoItem}>
                  <p className={Profilecss.infoItemTitle}>Date of birth</p>
                  <p className={Profilecss.profileDOB}>{user.dateOfBirth ? (user.dateOfBirth.substring(0, 10)): null}</p>
                </div>
                <div className={Profilecss.infoItem}>
                  <p className={Profilecss.infoItemTitle}>City</p>
                  <p className={Profilecss.profileCity}>{user.city}</p>
                </div>
              </div>
              <div className={Profilecss.wide}>
                <div className={Profilecss.infoItem}>
                  <p className={Profilecss.infoItemTitle}>Nationality</p>
                  <p className={Profilecss.profileNation}>{user.nationality}</p>
                </div>
                <div className={Profilecss.infoItem}>
                  <p className={Profilecss.infoItemTitle}>Address</p>
                  <p className={Profilecss.profileAdd}>{user.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
