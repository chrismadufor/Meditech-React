import { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom'
import {Provider, useDispatch, useSelector} from 'react-redux'
import configureStore from '../theStore/store'
import DashboardCSS from '../components/styles/Dashboard.module.css'
import SideNav from '../components/dashboard/layouts/SideNav'
import '../components/styles/dashboard-template.css'
import '../components/styles/appointments.css'
import '../components/styles/patient-dashboard.css'
import '../components/styles/settings.css'
import '../components/styles/notifications.css'
import axios from 'axios'
import { updateUserDetails } from '../theStore/actions'
import { userLoggedIn } from '../theStore/actions'


function Dashboard() {
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('users/profile')
            .then(res => {
                dispatch(updateUserDetails(res.data))
                dispatch(userLoggedIn(true))
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        
        <div className={DashboardCSS.container}>
       { loading ? <p> Loading </p> :
            <>
                <SideNav />
                <Outlet /> 
            </>
            
        }
        </div>  

    )
}

export default Dashboard
