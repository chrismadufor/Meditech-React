import React from 'react'
import {Link} from 'react-router-dom'
import sunrise from '../../img/sunrise.png'
import patient from '../../img/patient.jpg'
import { useSelector } from "react-redux";
import styles from '../../styles/patientDashboardInfo.module.css'

function PatientDashboardInfo() {
    const userData = useSelector((state) => (state.authReducer.userDetails))
    const appointments = useSelector((state) => (state.dashboardReducer.appointments))

    return (
        <div className="patient-info">
                    <div className="patient">

                    <div className="patient-greet">
                    <p>Good Day,</p> <br />
                    <img src={sunrise} alt="" />
                    </div>
                    

                    <div className="patient-name">
                        <img src={userData.profilePhoto ? userData.profilePhoto : patient} alt="" className="patient-img" />

                        <div className="patient-details">
                            <p className={styles.patName}> 
                                {userData.fullName} 
                            </p>
                            <p className= {styles.hosed}>Hospital ID: <span className="hos-num">{userData.hospitalId ? userData.hospitalId : 'To be assigned'}</span></p>
                        </div>
                    
                    </div>

                    </div>

                    <div className="total-appointment">
                    <p>Total Appointments</p>
                    <div className="total">
                        <i className="fas fa-hospital fa-4x "></i>
                        <p>{ appointments.length }</p>
                    </div>
                    
                    </div>

                    <div className={ styles.newAppointments}
                     >
                    <p><Link to="/dashboard/book-appointment"> New Appointment</Link> <i className='fas fa-plus'></i></p>
                    
                    {/* <img src="img/plus sign.png" alt="" /> */}
                    </div>
                </div>
    )
}

export default PatientDashboardInfo
