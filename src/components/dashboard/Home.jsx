import React, {useState, useEffect} from 'react'
import TopNav from './layouts/TopNav'
import sunrise from '../img/sunrise.png'
import patient from '../img/patient.jpg'
import { useSelector } from "react-redux";
import AppointmentStyles from '../styles/Appointments.module.css'

function Home() {
    // const [user, setUser] = useState({})
    const dummyData = useSelector((state) => state.dashboardReducer.appointments);
    const userData = useSelector((state) => (state.authReducer.userDetails))

    let renderTableRows = () => {
        return dummyData.slice(0,4).map((item, index) =>
        <tr className={AppointmentStyles.tRow}>
                <td><p>{item.doctor}</p></td><td  className={AppointmentStyles.Test}><p>{item.date}</p></td><td  className={AppointmentStyles.Test}><p>{item.time}</p></td><td><p>{item.contact}</p></td><td className={AppointmentStyles[item.status]}><p>{item.status}</p></td>
            </tr>
        );
    }
    
    return (
        <div className='main'>
            <TopNav name='Dashboard'/>
            <div className='main-content'>
                <div className="patient-info">
                    <div className="patient">

                    <div className="patient-greet">
                    <p>Good Morning</p> <br />
                    <img src={sunrise} alt="" />
                    </div>
                    

                    <div className="patient-name">
                        <img src={userData.profilePhoto ? userData.profilePhoto : patient} alt="" className="patient-img" />

                    <div className="patient-details">
                        <p className="pat-name">{userData.fullName} </p>
                    <p className="hosed">Hospital ID: <span className="hos-num">{userData.hospitalId ? userData.hospitalId : 'To be assigned'}</span></p>
                    </div>
                    
                    </div>

                    </div>

                    <div className="total-appointment">
                    <p>Total Appointments</p>
                    <div className="total">
                        <i className="fas fa-hospital fa-4x "></i>
                        <p>12</p>
                    </div>
                    
                    </div>

                    <div className="new-appointments">
                    <p><a href="/book-appointment.html"> New Appointment</a></p>
                    <i className='fas fa-plus'></i>
                    {/* <img src="img/plus sign.png" alt="" /> */}
                    </div>
                </div>
                <div className="tableComponent">
                    <div className="tableTopRow">
                    <div>
                        <select name="label"  className="filterOption">
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div>
                        <img src="./img/Elipses (3).png" className="elipses" alt=''/>
                    </div> 
                    </div>
                    <table>
                    <thead>
                        <tr>
                            <th>
                            Doctor Assigned</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Contact</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="table-body-ad">
                    {
                        renderTableRows()
                    }
                    </tbody>
                    </table>
                    <button className="afterTable">
                    <a href="/patient-appointment.html">
                    View all
                    </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
