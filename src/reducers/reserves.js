import {
  LOAD_RESERVE_SUCCESS,
} from '../constants/actionTypes'


const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_RESERVE_SUCCESS:
    return action.payload
    break;
    default:
      return state
  }
}

