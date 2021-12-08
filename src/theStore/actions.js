import 
    {   SET_APPOINTMENT_STATUS,
        ADD_SINGLE_APPOINNTMENT, 
        ADD_ALL_APPOINNTMENT,
        UPDATE_USER_DETAILS,
        USER_LOGGED_IN ,
        ADD_ALL_DOCTORS
    }
     from './constants'

export const addAppointment = (payload) => {
    return {
        type: ADD_SINGLE_APPOINNTMENT,
        payload: payload
    }
}

export const resolveAppointment = (payload) => {
    return {
        type: SET_APPOINTMENT_STATUS,
        payload: payload
    }
}

export const addMultipleAppointments = (payload) => {
    return {
        type: ADD_ALL_APPOINNTMENT,
        payload: payload
    }
}

export const updateUserDetails = (payload) => {
    return {
        type: UPDATE_USER_DETAILS,
        payload: payload
    }
}

export const userLoggedIn = (payload) => {
    return {
        type: USER_LOGGED_IN,
        payload: payload
    }
}

export const addDoctors = (payload) => {
    return {
        type: ADD_ALL_DOCTORS,
        payload: payload
    }
}