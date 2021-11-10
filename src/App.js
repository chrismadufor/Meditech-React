// import './App.css';
import LandingPage from './pages/LandingPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import SignUpNo from './pages/auth/SignUpNo'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" component = {LandingPage}></Route>
            <Route exact path="/signin" component = {SignIn}></Route>
            <Route exact path="/signup" component = {SignUp}></Route>
            <Route exact path="/signupno" component = {SignUpNo}></Route>
            <Route exact path="/dashboard" component = {Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
