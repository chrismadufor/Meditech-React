import { ADD_SINGLE_APPOINNTMENT, ADD_ALL_APPOINNTMENT, SET_APPOINTMENT_STATUS } from '../constants'

const INITIAL_STATE = {
    appointments : [
      {
          doctor: 'Marylyn Monroe',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Pending',
          
      },
      {
          doctor: 'Jack Monroe',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Completed'
      },
      {
          doctor: 'Jumoke Ajoke',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Pending'
      },
      {
          doctor: 'Jimmy Kimmel',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Cancelled'
      },
      {
        doctor: 'Jack Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Completed'
    },
    {
        doctor: 'Jumoke Ajoke',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Pending'
    },
    {
        doctor: 'Jimmy Kimmel',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Cancelled'
    },
      {
          doctor: 'Tasha Conrad',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Pending'
      },
      {
        doctor: 'Jack Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Completed'
    },
    {
        doctor: 'Jumoke Ajoke',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Pending'
    },
    {
        doctor: 'Jimmy Kimmel',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Cancelled'
    }
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