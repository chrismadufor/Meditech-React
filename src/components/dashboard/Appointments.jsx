import React from 'react'
import TopNav from './layouts/TopNav'
import Styles from '../styles/Appointments.module.css'
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { GenericModal } from '../layout/GenericModal';
import { resolveAppointment } from '../../theStore/actions'

function Appointments() {
    const dispatch = useDispatch()
    const role = useSelector(state => state.authReducer.userDetails.userType)
    let [page, setPage] = React.useState(1)
    let [showModal, setShowModal] = React.useState(false)
    let [bookings, setBookings] = React.useState([])
    let [item, setItem] = React.useState({})
    let [showAll, setShowAll] = React.useState(false)
    let [currentPage, setCurrentPage] = React.useState([])
    const dummyData = useSelector((state) => state.dashboardReducer.appointments);
    
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
        let rows = []
        if(showAll){
            rows = bookings.length === 0 ? dummyData : bookings
            console.log('bookings', bookings)
        } else {
            rows = currentPage
        }
        return rows.map(item =>
            <tr className={Styles.tRow}>
                <td><p>{item.doctor}</p></td><td  className={Styles.Test}><p>{item.date}</p></td><td  className={Styles.Test}><p>{item.time}</p></td><td><p>{item.contact}</p></td><td onClick={e=>handleShowModal(e, item)} className={Styles[item.status]}><p>{item.status}</p></td>
            </tr>
        );
    }
    let showAllRows = (e) => {
        e.preventDefault()
        setShowAll(!showAll)
    }

    let fetchAppointments = async () => {
        await axios.get('bookings/user', {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(val => {
            console.log('Val', val)
            setBookings(val.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    let flipPage = (e, val) => {
        e.preventDefault()
       if(val === 'next'){
        setPage(++page)
       } else {
        setPage(--page)
       }
        const first = (page * 4) - 4
        const last = (page * 4)
        setCurrentPage(dummyData.slice(first, last))
    }

    React.useEffect(() => {
        setCurrentPage(dummyData.slice(0, 4))
        fetchAppointments()
    }, [])
    return (
        <div className='main'>
            <TopNav name='Appointments'/>
            <div className='main-content' >
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
                                    <button onClick={e=>updateAppointment(e, 'Cancelled')} className="btn btn-danger">
                                    Cancel Appointment
                                    </button>
                                    {docBtn()}
                                    </div>
                            </div>
                        </div>
                    </GenericModal>
                    <table>
                    <thead>
                        <tr>
                            <th>
                                {role === 'patient' ? 'Doctor Assigned' : role === 'doctor' ? 'Patient Assigned' : null}
                            </th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Contact</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="table-body-ad">
                        { renderTableRows() }
                    </tbody>
                    </table>
                    <div className="tableControls">
                    <button className="control-box"  onClick={e=>flipPage(e, 'prev')} disabled={page===1}>
                        <i className='fas fa-chevron-left'></i>
                    </button>
                    <div className="control-box">
                    <p>{page}</p>
                    </div>
                    <button className="control-box" disabled={page>=dummyData.length/4} onClick={e=>flipPage(e, 'next')}>
                         <i className='fas fa-chevron-right'></i>
                    </button>
                    </div>
                    <button className="afterTable"  onClick={e=>showAllRows(e)}>
                    <a href="/patient-appointment.html">
                    {`${showAll?'View less':'View all'}`}
                    </a>
                    </button>
                </div>
            </div>
            <div>
              <img src="./img/Elipses (3).png" className="elipses" alt="" />
            </div>
        </div>
          
  );
}

export default Appointments;
