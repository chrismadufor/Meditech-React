// import { addDoctors } from "../actions";
import{ ADD_ALL_DOCTORS} from '../constants'

let initialState ={
  doctors :[]
  
}

let doctorReducer= (state= initialState, action) =>{

  switch (action.type) {
    case ADD_ALL_DOCTORS:
      return {
        ...state, doctors:[...action.payload]
      }
  
    default:
      return state

  }
}

export default doctorReducer