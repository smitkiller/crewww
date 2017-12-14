import {
  LOAD_ROOMSCOL_SUCCESS,
  LOAD_ROOMCOL_SUCCESS,
} from '../constants/actionTypes'
import _ from 'lodash';

const initialState = [];

export default (state=initialState, action) => {
  switch(action.type) {
    case LOAD_ROOMSCOL_SUCCESS:
      return action.payload
      break;
    case LOAD_ROOMCOL_SUCCESS:
      return [action.payload]
      break;
    default:
      return state
  }
}

export const getRoomcolById = (state, id) => (
 // console.log('gooooooodddd',id)
  //state.pages.find((page,key) => key === +id) || { title: '', content: '' }
 _.find(state.roomscol,(roomcol,key)=> key === id) 
 // state.pages.find((page,key) => key === +id) || {title: '' , content: '' }
)
