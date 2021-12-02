import React from 'react'
import TopNav from './layouts/TopNav'
import '../styles/manage-doctors.css'
function ManageDoctors() {
    return (
        <div className='main'>
            <TopNav name = "Manage doctors"/>
          
        
        <div class="main-content">
          
          <div class="doctor-header">
            <p>All Doctors</p>
            <a href="add-doctors.html"><button><i class="fas fa-user user"></i>Add Doctors</button></a>
          </div>
          <div class="doctor-list" id="doctor-profile-container">
            <div class="card">
              <div class="doctor-image">
                <img src="./img/doctor-image.png" alt=""/>
              </div>
              <div class="doctor-text">
                <p class="name">Jessica Alaba</p>
                <p class="department">Gynaecology</p>
              </div>
              <div class="hamburger">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
            
            <div class="card">
              <div class="doctor-image">
                <img src="./img/Ellipse 35.png" alt=""/>
              </div>
              <div class="doctor-text">
                <p class="name">Hamzat Aliyu</p>
                <p class="department">Paediatric</p>
              </div>
              <div class="hamburger">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
           
            
            <div class="card">
              <div class="doctor-image">
                <img src="./img/Ellipse 35 (1).png" alt=""/>
              </div>
              <div class="doctor-text">
                <p class="name">Joy Ogedengbe</p>
                <p class="department">Gynaecology</p>
              </div>
              <div class="hamburger">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
            <div class="card">
              <div class="doctor-image">
                <img src="./img/Ellipse 35 (2).png" alt=""/>
              </div>
              <div class="doctor-text">
                <p class="name">Chinedum Nwachukwu</p>
                <p class="department">Gynaecology</p>
              </div>
              <div class="hamburger">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
            <div class="card">
              <div class="doctor-image">
                <img src="./img/Ellipse 35 (3).png" alt=""/>
              </div>
              <div class="doctor-text">
                <p class="name">Martin Bayo</p>
                <p class="department">Gynaecology</p>
              </div>
              <div class="hamburger">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
            <div class="card">
              <div class="doctor-image">
                <img src="./img/Ellipse 35 (4).png" alt=""/>
              </div>
              <div class="doctor-text">
                <p class="name">Ezinne Agu</p>
                <p class="department">Gynaecology</p>
              </div>
              <div class="hamburger">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="tableControls">
          <div class="control-box">
            <p style={{fontWeight: "700"}}>{ '>>'}</p>
          </div>
          <div class="control-box">
            <p style={{fontWeight:' bold'}}>{'>'}</p>
          </div>
          <div class="control-box">
           <p>1</p>
          </div>
          <div class="control-box">
            <p style={{fontWeight: "700"}}>{'<'}</p>
          </div>
          <div class="control-box">
            <p style={{fontWeight: "700"}}>{'<<'}</p>
          </div>
        </div>

        <div class="modal" id="modal">
          <div class="log-out-wrap">
            <p>Are you sure you want to log out?</p>
            <div class="button-wrap">
              <button class="warning" onclick="signOut();">Yes</button>
              <button class="blue" onclick="modal();">No</button>
            </div>
          </div>
        </div>
        
        </div>
    )
}

export default ManageDoctors
