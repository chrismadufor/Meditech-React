// import './App.css';
import LandingPage from './pages/LandingPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import SignUpNo from './pages/auth/SignUpNo'
import Dashboard from './pages/Dashboard'
import Home from './components/dashboard/Home'
import Appointments from './components/dashboard/Appointments'
import HealthTips from './components/dashboard/HealthTips'
import Profile from './components/dashboard/Profile'
import ProfileEdit from './components/dashboard/ProfileEdit'
import Notifications from './components/dashboard/Notifications'
import Settings from './components/dashboard/Settings'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element = {<LandingPage />}></Route>
          <Route path="/signin" element = {<SignIn />}></Route>
          <Route path="/signup" element = {<SignUp />}></Route>
          <Route path="/signupno" element = {<SignUpNo />}></Route>
          <Route path="/dashboard" element = {<Dashboard />}>
            <Route path='/dashboard/home' element={<Home />}></Route>
            <Route path='/dashboard/appointments' element={<Appointments />}></Route>
            <Route path='/dashboard/health-tips' element={<HealthTips />}></Route>
            <Route path='/dashboard/profile' element={<Profile />}></Route>
            <Route path='/dashboard/profile-edit' element={<ProfileEdit />}></Route>
            <Route path='/dashboard/notifications' element={<Notifications />}></Route>
            <Route path='/dashboard/settings' element={<Settings />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
