import React from 'react'
import TopNav from './layouts/TopNav'

function Appointments() {
    return (
        <div className='main'>
            <TopNav name='Appointments'/>
            <div className='main-content' style = {{display: "none"}}>
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
                        <p> <i className='fas fa-chevron-left'></i><i className='fas fa-chevron-left'></i> </p>
                    </div>
                    <div className="control-box">
                        <p> <i className='fas fa-chevron-left'></i> </p>
                    </div>
                    <div className="control-box">
                    <p>1</p>
                    </div>
                    <div className="control-box">
                        <p> <i className='fas fa-chevron-right'></i> </p>
                    </div>
                    <div className="control-box">
                        <p> <i className='fas fa-chevron-right'></i><i className='fas fa-chevron-right'></i> </p>
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

export default Appointments
