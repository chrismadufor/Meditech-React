import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../components/dashboard/Home'
import SideNav from '../components/dashboard/layouts/SideNav'
import TopNav from '../components/dashboard/layouts/TopNav'
import Appointments from '../components/dashboard/Appointments'
import HealthTips from '../components/dashboard/HealthTips'
import Profile from '../components/dashboard/Profile'
import Notifications from '../components/dashboard/Notifications'
// import SignIn from './auth/SignIn'
// import SignUp from './auth/SignUp'

function Dashboard() {
    return (
        <Router>
            <div>
                <SideNav />
                <TopNav />
                <Switch>
                    <Route exact path='/dashboard/' component={Home}></Route>
                    <Route exact path='/dashboard/appointments/' component={Appointments}></Route>
                    <Route exact path='/dashboard/health-tips/' component={HealthTips}></Route>
                    <Route exact path='/dashboard/profile/' component={Profile}></Route>
                    <Route exact path='/dashboard/notifications/' component={Notifications}></Route>
                    {/* <Route exact path="/signin" component = {SignIn}></Route> */}
                    {/* <Route exact path="/signup" component = {SignUp}></Route> */}
                </Switch>
            </div>
        </Router>
    )
}

export default Dashboard
