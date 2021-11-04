import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../components/dashboard/Home'
import SideNav from '../components/dashboard/layouts/SideNav'
import TopNav from '../components/dashboard/layouts/TopNav'
import Appointments from '../components/dashboard/Appointments'
import HealthTips from '../components/dashboard/HealthTips'
import Profile from '../components/dashboard/Profile'
import Notifications from '../components/dashboard/Notifications'
import Settings from '../components/dashboard/Settings'
import '../components/styles/dashboard-template.css'
import '../components/styles/appointments.css'
import '../components/styles/patient-dashboard.css'
import '../components/styles/settings.css'
import '../components/styles/notifications.css'

function Dashboard() {
    return (
        <Router>
            <div className='container'>
                <SideNav />
                <div className='main'>
                    <TopNav />
                    <div className='main-content'>
                        <Switch>
                            <Route exact path='/dashboard/' component={Home}></Route>
                            <Route exact path='/dashboard/appointments' component={Appointments}></Route>
                            <Route exact path='/dashboard/health-tips/' component={HealthTips}></Route>
                            <Route exact path='/dashboard/profile/' component={Profile}></Route>
                            <Route exact path='/dashboard/notifications/' component={Notifications}></Route>
                            <Route exact path='/dashboard/settings/' component={Settings}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Dashboard
