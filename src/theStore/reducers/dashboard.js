import { ADD_SINGLE_APPOINNTMENT, ADD_ALL_APPOINNTMENT, SET_APPOINTMENT_STATUS } from '../constants'

const INITIAL_STATE = {
    appointments : [
      {
        id: 0,
          doctor: 'Marylyn Monroe',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Pending',
          
      },
      {
        id: 1,
          doctor: 'Jack Monroe',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Completed'
      },
      {
        id: 2,
          doctor: 'Jumoke Ajoke',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Pending'
      },
      {
        id: 3,
          doctor: 'Jimmy Kimmel',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Cancelled'
      },
      {
        id: 4,
        doctor: 'Jack Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Completed'
    },
    {
      id: 5,
        doctor: 'Jumoke Ajoke',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Pending'
    },
    {
      id: 6,
        doctor: 'Jimmy Kimmel',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Cancelled'
    },
      {
        id: 7,
          doctor: 'Tasha Conrad',
          date: '12-11-2012',
          time: '2:30pm',
          contact: '08032888201',
          status: 'Pending'
      },
      {
        id: 8,
        doctor: 'Jack Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Completed'
    },
    {
      id: 9,
        doctor: 'Jumoke Ajoke',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
        status: 'Pending'
    },
    {
      id: 10,
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
        return {...state, appointments: [action.payload, ...state.appointments]}
      case ADD_ALL_APPOINNTMENT:
          return {...state, appointments: [...action.payload]}
      case SET_APPOINTMENT_STATUS:
        const index = state.appointments.filter(val => val.id === action.payload.id);
      const newArray = [...state.appointments];
      newArray.map(el => {
        if(el.id === index[0].id){
          console.log(el)
          el.status = action.payload.data
        }
      })
        return {...state, appointments: newArray};
      default:
        return state;
    }
  };

export default dashboardReducer