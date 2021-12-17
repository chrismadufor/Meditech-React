import React, {useState} from 'react'
import TopNav from './layouts/TopNav'
import { useSelector, useDispatch } from "react-redux";
import { GenericModal } from '../layout/GenericModal';
import { addDoctors, resolveAppointment, addMultipleAppointments } from '../../theStore/actions'
import AppointmentStyles from '../styles/Appointments.module.css'
import PatientDashboardInfo from './layouts/PatientDashboardInfo';
import DoctorDashboardInfo from './layouts/DoctorDashboardInfo';
import AdminDashboardInfo from './layouts/AdminDashboardInfo';
import axios from 'axios'

function Home() {
    
    let [bookings, setBookings] = React.useState([])
    const dispatch = useDispatch()
    const role = useSelector(state => state.authReducer.userDetails.userType)
    let [showModal, setShowModal] = React.useState(false)
    let [item, setItem] = React.useState({})
    const dummyData = useSelector((state) => state.dashboardReducer.appointments);

    let fetchAppointments = async () => {
        let url = role === 'admin' ? 'bookings/getall' : role === 'patient' ? 'bookings/patient': 'bookings/doctor'
        await axios.get(`https://meditech-hospital-app.herokuapp.com/${url}`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(val => {
            console.log("Val", val.data)
            if(role === 'admin'){
                dispatch(addMultipleAppointments(val.data.data))
                setBookings(val.data.data)
            } else {
                dispatch(addMultipleAppointments(val.data))
                setBookings(val.data)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    if(role === 'admin') {
        const token = localStorage.getItem('token');

        const config = {
            headers : {
                Authorization : 'Bearer ' + token
            }
        }
        axios.get('https://meditech-hospital-app.herokuapp.com/users/all-doctors', config)
        .then((res) =>{
        dispatch(addDoctors(res.data.data))
        sessionStorage.setItem('doctors', JSON.stringify(res.data.data))
        // console.log("Response", res.data.data)
    
        })
        .catch(err =>{
        console.log(err)
        })
    }

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

    let updateAppointment = (e, val, item) => {
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

    let modifyDate = (old) => {
        let format = new Date(old)
        return format.toDateString()
    } 

    const renderTableRows = () => {
        console.log(bookings)
        let rows = []
        rows = bookings;
        if(role === 'admin'){
            return rows.slice(0,3).map(item => 
                (<tr className={AppointmentStyles.tRow} data-item={item.id} id={item.id}>
                     {role === 'admin' ? (<td><p>{item.patientName}</p></td>) : null}
                    <td><p>{item.doctorName}</p></td>
                    <td className={AppointmentStyles.Test}><p>{modifyDate(item.date)}</p></td>
                    <td className={AppointmentStyles.Test}><p>{item.time + ((item.time >= 9 ) ? 'AM' : 'PM')}</p></td>
                    <td className={AppointmentStyles[item.status]}><p>{item.status}</p></td>
                </tr>)
            );
        } else {
            return rows.slice(0,3).map(item => 
                (<tr className={AppointmentStyles.tRow} data-item={item.id} id={item.id}>
                    <td><p>{role === 'patient' ? item.doctorName : item.patientName}</p></td>
                    {role === 'admin' ? (<td><p>{item.doctorName}</p></td>) : null}
                    <td className={AppointmentStyles.Test}><p>{modifyDate(item.date)}</p></td>
                    <td className={AppointmentStyles.Test}><p>{item.time + ((item.time >= 9 ) ? 'AM' : 'PM')}</p></td>
                    <td><p>{role === 'patient' ? item.doctorContact : item.patientContact}</p></td>
                    <td onClick={e=>handleShowModal(e, item)} className={AppointmentStyles[item.status]}><p>{item.status}</p></td>
                </tr>)
            );
        }
    }

    React.useEffect(() => {
        // setCurrentPage(bookings.slice(0, 4))
        fetchAppointments()
    }, [])
    
    return (
        <div className='main'>
            <TopNav name='Dashboard'/>
            <div className='main-content'>
                {role === 'patient' ? <PatientDashboardInfo /> : role === 'doctor' ? <DoctorDashboardInfo /> : role === 'admin' ? <AdminDashboardInfo /> : null}
                <GenericModal show={showModal} handleClose={hideModal}>
                        <div className="container-fluid">
                            <div  className="row pb-3">
                                <div className="col">
                                {role === 'patient' ? "Doctor's Name" : "Patient's Name"}: {role === 'patient' ? item.doctorName : item.patientName}
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
                                    <button onClick={e=>updateAppointment(e, 'Cancelled', item)} className="btn mr-3 btn-danger">
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
                                {role === 'doctor' || role === 'admin' ? 'Patient Assigned' : 'Doctor Assigned'}
                            </th>
                            {
                                role === 'admin' ?  <th>
                                Doctor Assigned
                                </th>  : null
                            }
                            <th>Date</th>
                            <th>Time</th>
                            {
                             role === 'doctor' || role === 'patient' ?   <th>Contact</th> : ''   
                            }
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
                    <a href="/Appointments.html">
                    View all
                    </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
