import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS
} from '../constants/actionTypes';

const initialState = {
          authed:''
        }

export default (state = initialState, action) => {
  switch(action.type) {
  case "persist/REHYDRATE":{
      return {...state, ...action.payload.login}
    } 
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
          'authed': true,
          'userName':action.name,
          'statusText': null
      });
      break;
    case LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
          'authed': false,
          'userName': null,
          'statusText': 'Invalid username/password.'
      });
      break;
     case LOGOUT_USER_SUCCESS:
         return Object.assign({}, state, {
          'authed': false,
          'userName': null,
          'statusText': null
      });
         break;
    default:
      return state
  }
}
