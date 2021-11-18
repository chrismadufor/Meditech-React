import { UPDATE_USER_DETAILS } from '../constants'

const INITIAL_STATE = {
  userDetails: {
    idUser: 0,
    fullName: 'Chris',
    email: 'name@email.com',
    address: 'address',
    gender: '',
    enrollmentId: '1234',
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