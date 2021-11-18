import {Outlet} from 'react-router-dom'
import DashboardCSS from '../components/styles/Dashboard.module.css'
import SideNav from '../components/dashboard/layouts/SideNav'
import '../components/styles/dashboard-template.css'
import '../components/styles/appointments.css'
import '../components/styles/patient-dashboard.css'
import '../components/styles/settings.css'
import '../components/styles/notifications.css'

function Dashboard() {

    return (
        <div className={DashboardCSS.container}>
            <SideNav />
            <Outlet />
        </div>
    )
}

export default Dashboard
