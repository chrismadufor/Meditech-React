import { ADD_SINGLE_APPOINNTMENT, ADD_ALL_APPOINNTMENT, SET_APPOINTMENT_STATUS } from '../constants'

const INITIAL_STATE = {
    appointments : [
  ]
}

let dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_SINGLE_APPOINNTMENT:
        return {...state, appointments: [...state.appointments, action.payload]}
      case ADD_ALL_APPOINNTMENT:
          return {...state, appointments: [...action.payload]}
      case SET_APPOINTMENT_STATUS:
        const index = state.appointments.find(val => val.id === action.payload.id);
      const newArray = [...state.appointments];
      newArray[index].status = action.payload.data
        return {...state, appointments: newArray};
      default:
        return state;
    }
  };

export default dashboardReducer