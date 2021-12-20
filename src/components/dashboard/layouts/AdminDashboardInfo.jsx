import React from 'react'
import sunrise from '../../img/sunrise.png'
import { useSelector } from "react-redux";
import styles from '../../styles/adminDashboardInfo.module.css'

function AdminDashboardInfo() {

    // const userData = useSelector((state) => (state.authReducer.userDetails))

    return (
        <div>
           <div className={styles.welcomeFilter}>
                <div className={styles.greeting}>
                    <img src={sunrise} alt="" />
                    <h3>Good day, Admin</h3>
                </div>
                <div className={styles.filter}>
                    <select>
                    <option value="Today">Today</option>
                    <option value="Yesterday">Yesterday</option>
                    <option value="Last Week">Last Week</option>
                    </select>
                </div>
            </div>
            <div className={styles.dashboardCards}>
                <div className={styles.dashCard}>
                    <p>All Patients</p>
                    <h1>206</h1>
                </div>
                <div className={styles.dashCard}>
                    <p>All Doctors</p>
                    <h1>52</h1>
                </div>
                <div className={styles.dashCard}>
                    <p>All Appointments</p>
                    <h1>625</h1>
                </div>
                <div className={styles.dashCard}>
                    <p>Pending Accounts</p>
                    <h1>10</h1>
                </div>
            </div> 
        </div>
    )
}

export default AdminDashboardInfo
