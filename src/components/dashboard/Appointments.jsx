import React from 'react'
import TopNav from './layouts/TopNav'
import Styles from '../styles/Appointments.module.css'
import { useSelector } from "react-redux";
import axios from 'axios'

function Appointments() {
    let [page, setPage] = React.useState(1)
    let [bookings, setBookings] = React.useState([])
    let [showAll, setShowAll] = React.useState(false)
    let [currentPage, setCurrentPage] = React.useState([])
    const dummyData = useSelector((state) => state.dashboardReducer.appointments);
    
    let renderTableRows = () => {
        let rows = []
        if(showAll){
            rows = bookings.length === 0 ? dummyData : bookings
        } else {
            rows = currentPage
        }
        return rows.map(item =>
            <tr className={Styles.tRow}>
                <td><p>{item.doctor}</p></td><td  className={Styles.Test}><p>{item.date}</p></td><td  className={Styles.Test}><p>{item.time}</p></td><td><p>{item.contact}</p></td><td className={Styles[item.status]}><p>{item.status}</p></td>
            </tr>
        );
    }
    let showAllRows = (e) => {
        e.preventDefault()
        setShowAll(!showAll)
    }

    let fetchAppointments = async () => {
        await axios.get('bookings/getall', {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(val => {
            console.log(val)
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
        </div>
    )
}

export default Appointments
