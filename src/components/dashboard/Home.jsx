import React from 'react'
import TopNav from './layouts/TopNav'
import sunrise from '../img/sunrise.png'
import patient from '../img/patient.jpg'

function Home() {
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
                        <img src={patient} alt="" className="patient-img" />

                    <div className="patient-details">
                        <p className="pat-name">Abiola Odeyemi </p>
                    <p className="hosed">Hospital ID: <span className="hos-num">TKI545</span></p>
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
                    
                    </tbody>
                    </table>
                    <div className="tableControls">
                    <div className="control-box">
                        <p> &lt&lt </p>
                    </div>
                    <div className="control-box">
                        <p> &lt </p>
                    </div>
                    <div className="control-box">
                    <p>1</p>
                    </div>
                    <div className="control-box">
                        <p> &gt </p>
                    </div>
                    <div className="control-box">
                        <p> &gt&gt </p>
                    </div>
                    </div>
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
