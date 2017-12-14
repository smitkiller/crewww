import {
  LOAD_PAGES_SUCCESS,
  LOAD_PAGE_SUCCESS
} from '../constants/actionTypes'
import _ from 'lodash';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PAGES_SUCCESS:
     //const paaaase = _.map(action.payload)
     //console.log('xxxxxxxxxxx',paaaase)
     // _ / lodash แปลงข้อมูลเป็น array
      //return _.map(action.payload)
      return action.payload
      break;
    case LOAD_PAGE_SUCCESS:
      //return [_.map(action.payload)]
      return [action.payload]
      break;
    default:
      return state
  }
}

export const getPageById = (state, id) => (
 // console.log('gooooooodddd',id)
  //state.pages.find((page,key) => key === +id) || { title: '', content: '' }
 _.find(state.pages,(page,key)=> key === id) || {title: '' , content: '' , id : ''}
 // state.pages.find((page,key) => key === +id) || {title: '' , content: '' }
)
