import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'
import { USERS_ENDPOINT } from '../constants/endpoints'
import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,

  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,

  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,

  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE

} from '../constants/actionTypes'
import { addInfo,getInfo,getInfoById,delInfo,updateInfo,delTable,saveUser,auth } from '../Auth/auth';
import { browserHistory } from 'react-router';

export function loadUsers(){
  return dispatch=>{
    dispatch(loadUsersRequest());
    getInfo('users')
    .then((snap)=>{
      dispatch(loadUsersSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadUsersFailure());
      })
  }
} 

function loadUsersRequest(){
  return{
    type:LOAD_USERS_REQUEST
  }
}
function loadUsersSuccess(data){
  return{
    type:LOAD_USERS_SUCCESS,
    payload:data
  }
}
function loadUsersFailure(){
  return{
    type:LOAD_USERS_FAILURE
  }
}




export function createUser(values){
  return dispatch=>{
    dispatch(createUserRequest());
    auth(values)
    .then(()=>{
      dispatch(createUserSuccess());
      browserHistory.push('/users');
    })
    .catch((error)=>{
      dispatch(createUserFailure());
    })
  }
}



function createUserRequest(){
  return{
    type:CREATE_USER_REQUEST
  }
}

function createUserSuccess(){
  return{
    type:CREATE_USER_SUCCESS
  }
}

function createUserFailure(){
  return{
    type:CREATE_USER_FAILURE
  }
}
