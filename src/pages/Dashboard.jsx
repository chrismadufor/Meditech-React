import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../components/dashboard/Home'
import SideNav from '../components/dashboard/layouts/SideNav'
import Appointments from '../components/dashboard/Appointments'
import HealthTips from '../components/dashboard/HealthTips'
import Profile from '../components/dashboard/Profile'
import Notifications from '../components/dashboard/Notifications'
import Settings from '../components/dashboard/Settings'
import DashboardCSS from '../components/styles/Dashboard.module.css'
import '../components/styles/dashboard-template.css'
import '../components/styles/appointments.css'
import '../components/styles/patient-dashboard.css'
import '../components/styles/settings.css'
import '../components/styles/notifications.css'

function Dashboard() {

    return (
        <Router>
            <div className={DashboardCSS.container}>
                <SideNav />
                <Switch>
                    <Route exact path='/dashboard' component={Home}></Route>
                    <Route exact path='/appointments' component={Appointments}></Route>
                    <Route exact path='/health-tips' component={HealthTips}></Route>
                    <Route exact path='/profile' component={Profile}></Route>
                    <Route exact path='/notifications' component={Notifications}></Route>
                    <Route exact path='/settings' component={Settings}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Dashboard
