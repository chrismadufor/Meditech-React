import { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'
import DashboardCSS from '../components/styles/Dashboard.module.css'
import SideNav from '../components/dashboard/layouts/SideNav'
import '../components/styles/dashboard-template.css'
import '../components/styles/appointments.css'
import '../components/styles/patient-dashboard.css'
import '../components/styles/settings.css'
import '../components/styles/notifications.css'
// import axios from 'axios'
// import authReducer from '../theStore/reducers/auth'

function Dashboard() {
    const userData = useSelector((state) => (state.authReducer.userDetails))
    useEffect(() => {
        console.log(userData)
        // axios.get('user')
        //     .then(res => {
        //         console.log(res)
        //         //setUserData(res.data)
        //     })
        //     .catch (err => console.log(err))
    })
    
    return (
        <div className={DashboardCSS.container}>
            <SideNav />
            <Outlet />
        </div>
    )
}

export default Dashboard
