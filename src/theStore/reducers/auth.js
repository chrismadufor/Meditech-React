import { UPDATE_USER_DETAILS } from '../constants'
import { USER_LOGGED_IN } from '../constants'

let INITIAL_STATE = {
  userDetails: {},
  isLoggedIn: false,
}


let authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UPDATE_USER_DETAILS:
        return {
          ...state, userDetails: action.payload
        };
      case USER_LOGGED_IN:
        return {
          ...state, isLoggedIn: action.payload
        }
      default:
        return state;
    }
  };

export default authReducer
