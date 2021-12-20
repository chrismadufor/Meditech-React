import React from 'react'
import sunrise from '../../img/sunrise.png'
import { useSelector } from "react-redux";
import styles from '../../styles/doctorDashboardInfo.module.css'

function DoctorDashboardInfo() {
    const userData = useSelector((state) => (state.authReducer.userDetails))
    const appointments = useSelector((state) => (state.dashboardReducer.appointments))
    const allPending = appointments.filter(val => val.status === 'Pending').length
    const allCompleted = appointments.filter(val => val.status === 'Completed').length
    const allCancelled = appointments.filter(val => val.status === 'Cancelled').length

    // const computeGreeting = () => {
    //     const now = new Date()
    //     if(now.getHours() > )
    // }

    return (
        <div>
            <div className={styles.greet}>
                <div className={styles.inner}>
                <img src={sunrise} alt="" />
                    <h3>Good Day, Dr. <span className={styles.doctorName}> {userData.fullName} </span></h3>
                </div>
                <div>
                    <select className={styles.theDate} name="theDate">
                        <option value="">Today</option>
                    </select>
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>   
                            
                        <h4> Pending Appointments</h4>
                        <h1>{allPending}</h1>

                        
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>   
                        

                        <h4> Completed Appointments</h4>
                        <h1>{allCompleted}</h1>
                        </div>
                        
                    
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>   
                        

                        <h4>Cancelled Appointments</h4>
                        <h1>{allCancelled}</h1>
                        </div>
                        
                    
                </div>  
                <div className={styles.card}>
                    <div className={styles.cardBody}>   
                        
                        <h4>All Appointments</h4>
                        <h1>{appointments.length}</h1>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboardInfo
