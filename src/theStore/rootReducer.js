import { combineReducers } from 'redux'
import authReducer from './reducers/auth'
import dashboardReducer from './reducers/dashboard'

const rootReducer = combineReducers(
  {
    authReducer,
    dashboardReducer
  }
)

export default rootReducer