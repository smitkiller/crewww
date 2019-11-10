import { login,logout } from '../Auth/auth';
import { browserHistory } from 'react-router';
import {loadUser} from '../actions';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from '../constants/actionTypes'
import { getInfoByUid } from '../Auth/auth';
import _ from 'lodash';

export function loginUser(values){
  return dispatch=>{
    dispatch(loginRequest());
    login(values.email,values.password)
    .then((val)=>{
      getInfoByUid('users',val.email,val.uid)
      .then((data)=>{    
          dispatch(loginSuccess(data.val()))
          .then(function(res){
            browserHistory.push('/app')
          })
      })
      //dispatch(pushState(null, '/app'));
    })
    .catch((error)=>{
      dispatch(loginFailure());
    })
  }
}

export function logoutUser(){
   return dispatch=>{
    dispatch(logoutRequest());
    logout()
    .then(()=>{
      dispatch(logoutSuccess())
      .then(function(res){
          browserHistory.push('/')
      })
    })
      .catch((error)=>{
        dispatch(logoutFailure());
      })
  }
}

function logoutRequest(){
 return{
    type:LOGOUT_USER_REQUEST
 }
}

function logoutSuccess(){
 return{
    type:LOGOUT_USER_SUCCESS
 }
}

function logoutFailure(){
 return{
    type:LOGOUT_USER_FAILURE
 }
}

function loginFailure(){
  return{
    type:LOGIN_USER_FAILURE
  }
}
function loginSuccess(data){
 var user=_.map(data,(val)=>val)
  return{
    type:LOGIN_USER_SUCCESS,
    user:user[0]
  }
}
function loginRequest(){
  return{
    type:LOGIN_USER_REQUEST
  }
}
