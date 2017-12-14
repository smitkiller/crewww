import {
  LOAD_DATAS_SUCCESS,
  LOAD_DATA_SUCCESS
} from '../constants/actionTypes'

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_DATAS_SUCCESS:
      return action.payload.title
      break;
    case LOAD_DATA_SUCCESS:
      return [action.payload]
      break;
    default:
      return state
  }
}

