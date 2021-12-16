import React, {useState} from 'react'
import TopNav from './layouts/TopNav'
import { useSelector, useDispatch } from "react-redux";
import { GenericModal } from '../layout/GenericModal';
import { addDoctors, resolveAppointment } from '../../theStore/actions'
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
        let url = role === 'admin' ? 'bookings/getall' : 
        'bookings/user'
        await axios.get(`https://meditech-hospital-app.herokuapp.com/${url}`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(val => {
            console.log("Val", val.data)
            // dispatch(addMultipleAppointments(val.data))
            setBookings(val.data)
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
        <tr className={AppointmentStyles.tRow} key = {index}>
                <td><p>{item.doctor}</p></td><td  className={AppointmentStyles.Test}><p>{item.date}</p></td><td  className={AppointmentStyles.Test}><p>{item.time}</p></td><td><p>{item.contact}</p></td><td onClick={e=>handleShowModal(e, item)} className={AppointmentStyles[item.status]}><p>{item.status}</p></td>
            </tr>
        );
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
                                {role === 'doctor' ? 'Patient Assigned' : 'Doctor Assigned'}
                            </th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Contact</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="table-body-ad">
                    {role !== 'admin' ? 
                            bookings.map(item => 
                            (<tr data-item={item.id} id={item.id}>
                                <td><p>{role === 'patient' ? item.doctorName : item.patientName}</p></td>
                                {role === 'admin' ? (<td><p>{item.doctorName}</p></td>) : null}
                                <td><p>{(item.date).substring(0, 10)}</p></td>
                                <td><p>{item.time + ((item.time >= 9 ) ? 'AM' : 'PM')}</p></td>
                                <td><p>{role === 'patient' ? item.doctorContact : item.patientContact}</p></td>
                                <td onClick={e=>handleShowModal(e, item)}><p>{item.status}</p></td>
                            </tr>)
                            ) : null}
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
