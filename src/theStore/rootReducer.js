import { combineReducers } from 'redux'
import authReducer from './reducers/auth'
import dashboardReducer from './reducers/dashboard'
import doctorReducer from './reducers/doctors'


const rootReducer = combineReducers(
  {
    authReducer,
    dashboardReducer,
    doctorReducer
  }
)

export default rootReducer