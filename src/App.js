// import './App.css';
import LandingPage from './pages/LandingPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/Dashboard'
// import { Provider } from "react-redux";
// import configureStore from "store";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" component = {LandingPage}></Route>
            <Route exact path="/signin" component = {SignIn}></Route>
            <Route exact path="/signup" component = {SignUp}></Route>
            <Route exact path="/dashboard" component = {Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
