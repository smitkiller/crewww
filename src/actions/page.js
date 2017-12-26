import { CALL_API } from 'redux-api-middleware';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { addInfo,getInfo,getInfoById,delInfo,updateInfo } from '../Auth/auth';
import {
  LOAD_PAGES_REQUEST,LOAD_PAGES_SUCCESS,LOAD_PAGES_FAILURE,
  LOAD_PAGE_REQUEST,LOAD_PAGE_SUCCESS,LOAD_PAGE_FAILURE,
  CREATE_PAGE_REQUEST,CREATE_PAGE_SUCCESS,CREATE_PAGE_FAILURE,
  DELETE_PAGE_REQUEST,DELETE_PAGE_SUCCESS,DELETE_PAGE_FAILURE,
  UPDATE_PAGE_REQUEST,UPDATE_PAGE_SUCCESS,UPDATE_PAGE_FAILURE
} from '../constants/actionTypes'


export function loadPages(){
  return dispatch=>{
    dispatch(loadPagesRequest());
    getInfo('pages')
    .then((snap)=>{
      dispatch(loadPagesSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadPagesFailure());
      })
  }
} 

export function loadPage(id){
  return dispatch=>{
    dispatch(loadPageRequest());
    getInfoById('pages','id',id)
    .then((snap)=>{
      dispatch(loadPageSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadPageFailure());
      })
  }
} 

export function createPage(values){
  return dispatch=>{
    dispatch(createPageRequest());
    addInfo('pages',values)
    .then(()=>{
      dispatch(createPageSuccess())
      .then(function(res){
          browserHistory.push('/pages')
      })
      //dispatch(pushState(null, '/app'));
    })
      .catch((error)=>{
        dispatch(createPageFailure());
      })
  }
} 

export function deletePage(id){
  return dispatch=>{
    dispatch(deletePageRequest());
    delInfo('pages',id)
    .then(()=>{
      dispatch(deletePageSuccess());
      dispatch(loadPages());
    })
      .catch((error)=>{
        dispatch(deletePageFailure());
      })
  }
} 

export function updatePage(values){
  return dispatch=>{
    dispatch(updatePageRequest());
    updateInfo('pages',values)
    .then(()=>{
      dispatch(updatePageSuccess())
          .then(function(res){
          browserHistory.push('/pages')
      })
    })
      .catch((error)=>{
        dispatch(updatePageFailure());
      })
  }
} 

function deletePageRequest(){
   return{
      type:DELETE_PAGE_REQUEST
   }
}

function deletePageSuccess(){
   return{
      type:DELETE_PAGE_SUCCESS
   }
}

function deletePageFailure(){
   return{
      type:DELETE_PAGE_FAILURE
   }
} 

function createPageRequest(){
   return{
      type:CREATE_PAGE_REQUEST
   }
}

function createPageSuccess(){
   return{
      type:CREATE_PAGE_SUCCESS
   }
}

function createPageFailure(){
   return{
      type:CREATE_PAGE_FAILURE
   }
} 

function loadPagesRequest(){
   return{
      type:LOAD_PAGES_REQUEST
   }
}

function loadPagesSuccess(pages){
   return{
      type:LOAD_PAGES_SUCCESS,
      payload:pages
   }
}

function loadPagesFailure(){
   return{
      type:LOAD_PAGES_FAILURE
   }
} 


function loadPageRequest(){
   return{
      type:LOAD_PAGE_REQUEST
   }
}

function loadPageSuccess(page){
   return{
      type:LOAD_PAGE_SUCCESS,
      payload:page
   }
}

function loadPageFailure(){
   return{
      type:LOAD_PAGE_FAILURE
   }
}

function updatePageRequest(){
   return{
      type:UPDATE_PAGE_REQUEST
   }
}

function updatePageSuccess(){
   return{
      type:UPDATE_PAGE_SUCCESS
   }
}

function updatePageFailure(){
   return{
      type:UPDATE_PAGE_FAILURE
   }
}


