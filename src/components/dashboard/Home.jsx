import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import TopNav from './layouts/TopNav'
import sunrise from '../img/sunrise.png'
import patient from '../img/patient.jpg'
import { useSelector, useDispatch } from "react-redux";
import { GenericModal } from '../layout/GenericModal';
import { resolveAppointment } from '../../theStore/actions'
import AppointmentStyles from '../styles/Appointments.module.css'

function Home() {
    const dispatch = useDispatch()
    const role = useSelector(state => state.authReducer.userDetails.userType)
    let [showModal, setShowModal] = React.useState(false)
    let [item, setItem] = React.useState({})
    const dummyData = useSelector((state) => state.dashboardReducer.appointments);
    const userData = useSelector((state) => (state.authReducer.userDetails))

    let hideModal = () => {
        setShowModal(false)
    }

    let docBtn = () => {
        if(role === 'doctor'){
            return <button  onClick={e=>updateAppointment(e, 'Completed')} className="btn ml-3 btn-success">
        Complete Appointment
        </button>   
        } else {
            return ''
        }
    } 

    let updateAppointment = (e, val) => {
        e.preventDefault()
        let payload = {
            id: item.id,
            data: val
        }
        dispatch(resolveAppointment(payload))
        hideModal()
    }

    let handleShowModal = (e,item) => {
        e.preventDefault()
        setItem(item)
        setShowModal(true)
    }


    let renderTableRows = () => {
        return dummyData.slice(0,4).map((item, index) =>
        <tr className={AppointmentStyles.tRow}>
                <td><p>{item.doctor}</p></td><td  className={AppointmentStyles.Test}><p>{item.date}</p></td><td  className={AppointmentStyles.Test}><p>{item.time}</p></td><td><p>{item.contact}</p></td><td onClick={e=>handleShowModal(e, item)} className={AppointmentStyles[item.status]}><p>{item.status}</p></td>
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
                            <p className={AppointmentStyles.patName}>
                                <span>{role === 'patient' ? 'Hi, ' : ''}</span> 
                                {userData.fullName} 
                            </p>
                            <p className="hosed">Hospital ID: <span className="hos-num">{userData.hospitalId ? userData.hospitalId : 'To be assigned'}</span></p>
                        </div>
                    
                    </div>

                    </div>

                    <div className="total-appointment">
                    <p>Total Appointments</p>
                    <div className="total">
                        <i className="fas fa-hospital fa-4x "></i>
                        <p>{userData.id}</p>
                    </div>
                    
                    </div>

                    <div className={ AppointmentStyles.newAppointments}
                     >
                    <p><Link to="/dashboard/book-appointment"> New Appointment</Link> <i className='fas fa-plus'></i></p>
                    
                    {/* <img src="img/plus sign.png" alt="" /> */}
                    </div>
                </div>
                <GenericModal show={showModal} handleClose={hideModal}>
                        <div className="container-fluid">
                            <div  className="row pb-3">
                                <div className="col">
                                    Doctor's Name: {item.doctor}
                                    </div>
                            </div>
                            <div  className="row pt-3">
                                <div className="col">
                                    Date: {item.date}
                                    </div>
                                    <div className="col">
                                    Time: {item.time}
                                    </div>
                            </div>
                            <div  className="row pt-4">
                                <div className="col-sm-6 mt-2 btn-lg">
                                    <button onClick={e=>updateAppointment(e, 'Cancelled')} className="btn mr-3 btn-danger">
                                    Cancel Appointment
                                    </button>
                                    {docBtn()}
                                    </div>
                            </div>
                        </div>
                    </GenericModal>
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
