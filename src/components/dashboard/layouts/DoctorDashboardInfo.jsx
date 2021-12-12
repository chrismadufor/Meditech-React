import React from 'react'
import sunrise from '../../img/sunrise.png'
import { useSelector } from "react-redux";
import styles from '../../styles/doctorDashboardInfo.module.css'

function DoctorDashboardInfo() {
    const userData = useSelector((state) => (state.authReducer.userDetails))
    return (
        <div>
            <div className={styles.greet}>
                <div className={styles.inner}>
                <img src={sunrise} alt="" />
                    <h3>Good Morning, Dr. <span className={styles.doctorName}> {userData.fullName} </span></h3>
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
                        <h1>8</h1>

                        
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>   
                        

                        <h4> Completed Appointments</h4>
                        <h1>23</h1>
                        </div>
                        
                    
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>   
                        

                        <h4>Cancelled Appointments</h4>
                        <h1>11</h1>
                        </div>
                        
                    
                </div>  
                <div className={styles.card}>
                    <div className={styles.cardBody}>   
                        
                        <h4>All Appointments</h4>
                        <h1>42</h1>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboardInfo
