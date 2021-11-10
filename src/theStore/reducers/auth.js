import { UPDATE_USER_DETAILS } from '../constants'

const INITIAL_STATE = {
  userDetails: {
    idUser: 0,
    fullName: '',
    email: '',
    address: '',
    gender: '',
    enrollmentId: '',
    dateOfBirth: '',
    profilePhoto: '',
    userType: ''
  }
}

let authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UPDATE_USER_DETAILS:
        return {
          ...state, userDetails: action.payload
        };
      default:
        return state;
    }
  };

export default authReducer