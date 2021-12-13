import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TopNav from './layouts/TopNav'
import {useSelector, useDispatch} from 'react-redux'
import Styles from '../styles/DoctorSchedule.module.css'
import {addDoctors} from '../../theStore/actions'
import Feedback from './layouts/Feedback'
import { useNavigate } from 'react-router-dom'


function DoctorSchedule() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    
    const token = localStorage.getItem('token');
    const config = {
        headers : {
            Authorization : 'Bearer ' + token
        }
    }

    useEffect(() => {

        axios.get('https://meditech-hospital-app.herokuapp.com/users/all-doctors', config)
         .then((res) =>{
          dispatch(addDoctors(res.data.data))
    
          console.log(res)
       
        })
        .catch(err =>{
          console.log(err)
        })
    }, [])
    
    const doctors = useSelector((state) => state.doctorReducer.doctors)
    const initialVal = {
        doctor: '',
        date: '',
        period: ''
    }
    // const [id, setId] = useState()
    const [state, setState] = useState(initialVal)
    const currUser = doctors.filter(item => item.fullName === state.doctor)
    // let id = currUser[0].id
    
    const onChange = e => setState({...state, [e.target.name]: e.target.value})
    const createSchedule = e => {
        e.preventDefault()
        const data = {
            dutyDate: state.date,
            period: state.period,
            userId: currUser[0].id
        }

       axios.post('https://meditech-hospital-app.herokuapp.com/calendar/create', data, config)
        .then(res => {
            setShowModal(true)
            setTimeout(() => {
                navigate('/dashboard/manage-doctors')
            }, 4000)
        })
        .catch(err => console.log(err))
       
        setState(initialVal)
    }

    return (
        <div className='main'>
            <TopNav name = "Schedule doctors"/>
            <div className='main-content'>
                {showModal ? <Feedback text = {'Schedule successful'} /> : null}
                <form className={Styles.form}>
                    <select className={Styles.select} name='doctor' onChange= {onChange} value={state.doctor}>
                        <option>Choose a doctor</option>
                        {doctors.map(item => <option>{item.fullName}</option>)}
                    </select>
                    <input type= "date" className={Styles.input} name='date' onChange= {onChange} value={state.date}/>
                    <select className={Styles.select} name='period' onChange= {onChange} value={state.period}>
                        <option>Choose a period</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                    </select>
                    <button className = {Styles.button} onClick={createSchedule}>ADD</button>
                </form>
            </div>
        </div>
    )
}

export default DoctorSchedule
