import React from "react";
// import {useSelector} from 'react-redux'
import TopNav from "./layouts/TopNav";
import Profilecss from "../styles/profile.module.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();

  return (
    <div className={Profilecss.main}>
      <TopNav name="Profile" />
      <div className={Profilecss.mainContent}>
        <div className={Profilecss.mainContentWrap}>
          <div className={Profilecss.profilePicture}>
            <img className={Profilecss.profileImg} src="" alt="" />
          </div>
          <div className={Profilecss.profileWrap}>
            <h2>Basic Information</h2>
              <div className={`${Profilecss.basicInfo}, ${Profilecss.flex}`}>
                <div className={Profilecss.wide}>
                  <div className={Profilecss.infoItem}>
                    <p className={Profilecss.infoItemTitle}>Full Name</p>
                    <p className={Profilecss.profileName}></p>
                  </div>
                  <div className={Profilecss.infoItem}>
                    <p className={Profilecss.infoItemTitle}>Hospital ID</p>
                    <p className={Profilecss.profileHosID}></p>
                  </div>
                </div>
                <div className={Profilecss.wide}>
                  <div className={Profilecss.infoItem}>
                    <p className={Profilecss.infoItemTitle}>Email</p>
                    <p className={Profilecss.profileEmail}></p>
                  </div>
                  <div className={Profilecss.infoItem}>
                    <p className={Profilecss.infoItemTitle}>Phone Number</p>
                    <p className={Profilecss.profilePhone}></p>
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
              <div>
                <div className={Profilecss.infoItem}>
                  <p className={Profilecss.infoItemTitle}>Date of birth</p>
                  <p className={Profilecss.profileDOB}></p>
                </div>
                <div className={Profilecss.infoItem}>
                  <p className={Profilecss.infoItemTitle}>City</p>
                  <p className={Profilecss.profileCity}></p>
                </div>
              </div>
              <div className="wide">
                <div className={Profilecss.infoItem}>
                  <p className={Profilecss.infoItemTitle}>Nationality</p>
                  <p className={Profilecss.profileNation}></p>
                </div>
                <div className={Profilecss.infoItem}>
                  <p className={Profilecss.infoItemTitle}>Address</p>
                  <p className={Profilecss.profileAdd}></p>
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
