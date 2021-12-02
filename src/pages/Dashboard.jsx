import { useEffect, useState } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {SyncLoader} from 'react-spinners'
import {css} from '@emotion/react'
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
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/signin")
        }
        const config = {
            headers : {
                Authorization : 'Bearer ' + token
            }
        }
        axios.get('users/profile', config)
            .then(res => {
                dispatch(updateUserDetails(res.data))
                dispatch(userLoggedIn(true))
                setLoading(false)
                
            })
            .catch(err => console.log(err))
            return () => {
            
            }
    }, [])

    const LoaderCss = css`
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    
    return (
        
        <div className={DashboardCSS.container}>
            {loading ? <SyncLoader loading = {loading} css={LoaderCss} size= {20} color = ' #00a8db'/> :
            <>
                <SideNav />
                <Outlet />
            </>}
        </div>  

    )
}

export default Dashboard;
