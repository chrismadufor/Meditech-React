import React from 'react'

function Appointments() {
    return (
        <div>
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
                    <th>
                    Doctor Assigned</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Contact</th>
                    <th>Status</th>
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
    )
}

export default Appointments
