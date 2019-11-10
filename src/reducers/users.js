import {
  LOAD_USERS_SUCCESS
} from '../constants/actionTypes'
import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_USERS_SUCCESS:
      return action.payload
      break;
    default:
      return state
  }
}

export const getUserById = (state, id) => (
 _.find(state.users,(user,key)=> key === id)
)
