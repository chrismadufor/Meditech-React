import React, { useState } from 'react'
import TopNav from './layouts/TopNav'
import Styles from '../styles/Appointments.module.css'
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { GenericModal } from '../layout/GenericModal';
import { resolveAppointment, addMultipleAppointments } from '../../theStore/actions'
import {SyncLoader} from 'react-spinners'
import {css} from '@emotion/react'

function Appointments() {
    const dispatch = useDispatch()
    const role = useSelector(state => state.authReducer.userDetails.userType)
    let [page, setPage] = React.useState(1)
    let [showModal, setShowModal] = React.useState(false)
    let [bookings, setBookings] = React.useState([])
    let [item, setItem] = React.useState({})
    let [showAll, setShowAll] = React.useState(true)
    let [currentPage, setCurrentPage] = React.useState([])
    const [loading, setLoading] = useState(true)
    
    let hideModal = () => {
        setShowModal(false)
    }

    let docBtn = () => {
        if(role === 'doctor'){
            return <button  onClick={e=>updateAppointment(e, 'Completed', item)} className="btn ml-3 btn-success">
        Complete Appointment
        </button>   
        } else {
            return ''
        }
    } 

    let updateAppointment = (e, val, item) => {
        console.log(item)
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



    const renderTableRows = () => {
        let rows = []
        rows = bookings;
        if(role === 'admin'){
            return rows.map(item => 
                (<tr className={Styles.tRow} data-item={item.id} id={item.id}>
                     {role === 'admin' ? (<td><p>{item.patientName}</p></td>) : null}
                    <td><p>{item.doctorName}</p></td>
                    <td className={Styles.Test}><p>{modifyDate(item.date)}</p></td>
                    <td className={Styles.Test}><p>{item.time + ((item.time >= 9 ) ? 'AM' : 'PM')}</p></td>
                    <td className={Styles[item.status]}><p>{item.status}</p></td>
                </tr>)
            );
        } else {
            return rows.map(item => 
                (<tr className={Styles.tRow} data-item={item.id} id={item.id}>
                    <td><p>{role === 'patient' ? item.doctorName : item.patientName}</p></td>
                    {role === 'admin' ? (<td><p>{item.doctorName}</p></td>) : null}
                    <td className={Styles.Test}><p>{modifyDate(item.date)}</p></td>
                    <td className={Styles.Test}><p>{item.time + ((item.time >= 9 ) ? 'AM' : 'PM')}</p></td>
                    <td><p>{role === 'patient' ? item.doctorContact : item.patientContact}</p></td>
                    <td onClick={e=>handleShowModal(e, item)} className={Styles[item.status]}><p>{item.status}</p></td>
                </tr>)
            );
        }
    }
    let showAllRows = (e) => {
        e.preventDefault()
        setShowAll(!showAll)
    }

    let updateAnAppointment = async (data) => {
        await axios.put(`https://meditech-hospital-app.herokuapp.com/bookings/update/${data.id}`, data.payload, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            console.log(response)
           // dispatch(addMultipleAppointments(val.data.data))
           // setBookings(val.data.data)
        }).catch(err => {
            console.log({err})
        })
    }

    let deleteAppointment = async (data) => {
        await axios.get(`https://meditech-hospital-app.herokuapp.com/bookings/delete/${data}`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(val => {
            console.log(val)
           // dispatch(addMultipleAppointments(val.data.data))
           // setBookings(val.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    let modifyDate = (old) => {
        let format = new Date(old)
        return format.toDateString()
    } 

    let fetchAppointments = async () => {
        let url = role === 'admin' ? 'bookings/getall' : role === 'patient' ? 'bookings/patient': 'bookings/doctor'
        await axios.get(`https://meditech-hospital-app.herokuapp.com/${url}`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(val => {
            // console.table(val)
            if(role === 'admin'){
                dispatch(addMultipleAppointments(val.data.data))
                setBookings(val.data.data)
                setLoading(false)
            } else {
                dispatch(addMultipleAppointments(val.data))
                setBookings(val.data)
                setLoading(false)
            }
        }).catch(err => {
            console.log(err)
        })
    }


    let modifyTime = old => {
        if(old === 12 || old < 5){
            return `${old}pm`
        } else {
            return `${old}am`
        }
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
        setCurrentPage(bookings.slice(first, last))
    }

    React.useEffect(() => {
        fetchAppointments()
        setCurrentPage(bookings.slice(0, 4))
    }, [])

    const LoaderCss = css`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

    return (
        <div className='main'>
        <TopNav name='Appointments'/>
        {loading ? <SyncLoader loading = {loading} css={LoaderCss} size= {15} color = ' #00a8db'/> :
        <>
            <div className='main-content' >
                { bookings.length === 0 ? (<p style = {{margin: '0 auto', width: '400px', textAlign: 'center'}}>No appointments yet</p>) : (<div className="tableComponent">
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
                            
                                {role === 'patient' ? "Doctor's Name" : "Patient's Name"}: {role === 'patient' ? item.doctorName : item.patientName}
                                    </div>
                            </div>
                            <div  className="row pt-3">
                                <div className="col">
                                    Date: {modifyDate(item.date)    }
                                    </div>
                                    <div className="col">
                                    Time: {modifyTime(item.time)}
                                    </div>
                            </div>
                            <div  className="row pt-4">
                                <div className="col-sm-6 mt-2 btn-lg">
                                    <button onClick={e=>updateAppointment(e, 'Cancelled', item)} className="btn btn-danger">
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
                    <div className="tableControls">
                    <button className="control-box"  onClick={e=>flipPage(e, 'prev')} disabled={page===1}>
                        <i className='fas fa-chevron-left'></i>
                    </button>
                    <div className="control-box">
                    <p>{page}</p>
                    </div>
                    <button className="control-box" disabled={page>=bookings.length/4} onClick={e=>flipPage(e, 'next')}>
                         <i className='fas fa-chevron-right'></i>
                    </button>
                    </div>
                    {/* <button className="afterTable"  onClick={e=>showAllRows(e)}>
                    <a href="/patient-appointment.html">
                    {`${showAll?'View less':'View all'}`}
                    </a>
                    </button> */}
                </div>)}
            </div>
            <div>
              <img src="./img/Elipses (3).png" className="elipses" alt="" />
            </div>
        </>}
        </div>
          
  );
}

export default Appointments;
