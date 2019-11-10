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
  UPDATE_USER_FAILURE,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE

} from '../constants/actionTypes'
import { addInfo,
  getInfo,
  getInfoById,
  getInfoByUid,
  delInfo,
  updateInfo,
  delTable,
  saveUser,
  auth,
  resetPassword,
  delUser } from '../Auth/auth';
import { browserHistory } from 'react-router';

export function loadUser(email,uid){
  return dispatch=>{
    dispatch(loadUserRequest());
    getInfoByUid('users',email,uid)
    .then((snap)=>{
      dispatch(loadUserSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadUserFailure());
      })
  }
} 

function loadUserRequest(){
  return{
    type:LOAD_USER_REQUEST
  }
}
function loadUserSuccess(data){
  return{
    type:LOAD_USER_SUCCESS,
    payload:data
  }
}
function loadUserFailure(){
  return{
    type:LOAD_USER_FAILURE
  }
}

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

export function resetPass(values){
  return dispatch=>{
    dispatch(resetPassRequest());
    resetPassword(values.email)
    .then((data)=>{
        console.log('=-===========>',data.val())
    })

  }
}

function resetPassRequest(){
  return{
    type:RESET_PASSWORD_REQUEST
  }
}
function resetPassSuccess(){
  return{
    type:RESET_PASSWORD_SUCCESS
  }
}
function resetPassFailure(){
  return{
    type:RESET_PASSWORD_FAILURE
  }
}

export function deleteUser(id){
  return dispatch=>{
      dispatch(deleteUserRequest());
      delUser(id)
      .then(()=>{
        dispatch(deleteUserSuccess());
      })
      .catch((error)=>{
        dispatch(deleteUserFailure());
      })
  }
}

function deleteUserRequest(){
  return{
    type:DELETE_USER_REQUEST
  }
}
function deleteUserSuccess(){
  return{
    type:DELETE_USER_SUCCESS
  }
}
function deleteUserFailure(){
  return{
    type:DELETE_USER_FAILURE
  }
}