// import './App.css';
import LandingPage from './pages/LandingPage'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
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
import AppointmentForm from './components/dashboard/AppointmentForm'
import AddDoctors from './components/dashboard/AddDoctors'
import ManageDoctors from './components/dashboard/ManageDoctors'

function App() {
  const role = useSelector(state => state.authReducer.userDetails.userType)
  console.log('From App.jsx', role)
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
            <Route path = '/dashboard/book-appointment' element = {role === 'patient' ? <AppointmentForm /> : <Navigate to= '/dashboard/home' />}></Route>
            <Route path = '/dashboard/add-doctors' element = {role === 'admin' ? <AddDoctors /> : <Navigate to= '/dashboard/home' />}></Route>
            <Route path = '/dashboard/manage-doctors' element = {role === 'admin' ? <ManageDoctors /> : <Navigate to= '/dashboard/home' />}></Route>
            <Route path='/dashboard/health-tips' element={role === 'patient' ? <HealthTips /> : <Navigate to= '/dashboard/home' /> }></Route>
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
