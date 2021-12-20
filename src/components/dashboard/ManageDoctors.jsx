 import React, {useEffect, useState} from 'react'
import TopNav from './layouts/TopNav'
import Managedoctors from '../styles/manageDoctors.module.css'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {addDoctors} from '../../theStore/actions'
import {Link} from 'react-router-dom'
import profilePic from '../img/patient.jpg'
import {SyncLoader} from 'react-spinners'
import {css} from '@emotion/react'


 function ManageDoctors() {
  const doctors = useSelector((state) => state.doctorReducer.doctors)
  console.log(doctors)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  let renderDoctors = () => {

  return doctors.map((item, index) =>
    <div className={Managedoctors.card}>
    <div className={Managedoctors.doctorImage}>
      <img src={item.profilePhoto === null ? profilePic : item.profilePhoto  } alt=""/>
    </div>
    <div className={Managedoctors.doctorText}>
      <p className={Managedoctors.name}>{item.fullName}</p>
      <p className={Managedoctors.department}>{item.departmentName}</p>
    </div>
    <div className={Managedoctors.hamburger}>
      <div className={Managedoctors.dot}></div>
      <div className={Managedoctors.dot}></div>
      <div className={Managedoctors.dot}></div>
      </div>
    </div>
    );
  }

  const getDoctors= ()=>{
    const token = localStorage.getItem('token');

    const config = {
      headers : {
          Authorization : 'Bearer ' + token
      }
  }
    axios.get('https://meditech-hospital-app.herokuapp.com/users/all-doctors', config)
     .then((res) =>{
      dispatch(addDoctors(res.data.data))
      setLoading(false)

      // console.log(res.data.data)
   
    })
    .catch(err =>{
      console.log(err)
    })
  };


  useEffect(() => {
    if(!getDoctors ){
      renderDoctors()
    }else{
      getDoctors()
    }
     
    
  },[]);

  const LoaderCss = css`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `

    return (

        <div className='main' >
        <TopNav name = "Manage doctors"/>
        {loading ? <SyncLoader loading = {loading} css={LoaderCss} size= {15} color = ' #00a8db'/> :
          <>
            <div  className= 'mainContent'>
              
              <div className={Managedoctors.doctorHeader}>
                <p>All Doctors</p>
                <div>
                  <Link to='/dashboard/add-doctors'><button><i className="fas fa-user user"></i>Add Doctors</button></Link>
                  <Link to='/dashboard/schedule-doctors'><button><i className="fas fa-user user"></i>Schedule Doctors</button></Link>
                </div>
                
              </div>
              <div className={Managedoctors.doctorList} id="doctor-profile-container">

              {renderDoctors()}
              

              </div>
                
            <div class="tableControls">
              <div class="control-box">
                <p style={{fontWeight: "700"}}>{ '<<'}</p>
              </div>
              <div class="control-box">
                <p style={{fontWeight:' bold'}}>{'<'}</p>
              </div>
              <div class="control-box">
              <p>1</p>
              </div>
              <div class="control-box">
                <p style={{fontWeight: "700"}}>{'>'}</p>
              </div>
              <div class="control-box">
                <p style={{fontWeight: "700"}}>{'>>'}</p>
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
          </>
        }
     </div>  
 )
}

export default ManageDoctors
