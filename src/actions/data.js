import { CALL_API } from 'redux-api-middleware';
import { DATAS_ENDPOINT } from '../constants/endpoints';
import {
  LOAD_DATAS_REQUEST,
  LOAD_DATAS_SUCCESS,
  LOAD_DATAS_FAILURE
} from '../constants/actionTypes';
// import { ref, firebaseAuth } from '../constants/configAuth'

export const loadDatas = () => ({
  [CALL_API]: {
    endpoint: DATAS_ENDPOINT,
    method: 'GET',
    types: [LOAD_DATAS_REQUEST, LOAD_DATAS_SUCCESS, LOAD_DATAS_FAILURE]
  }
})

/*
export function loadDatas(){
  return dispatch=>{
    dispatch(datasRequest());
    return ref.child(`pages`).on('value',snap =>{
    var	key= ref.push().key();
  	var datas = snap.val();

  	console.log('xxxxxxxxxxxxxxxxxxxx',key)
        dispatch(datasSuccess(datas))
  })
      .catch((error)=>{
        dispatch(datasFailure());
      })
  }
}

function datasRequest(){
	return{
		type:LOAD_DATAS_REQUEST
	}
}

function datasSuccess(datas){
	return{
		type:LOAD_DATAS_SUCCESS,
		payload:datas
	}
//console.log("xxxxxxx",datas)
}

function datasFailure(){
	return{
		type:LOAD_DATAS_FAILURE
	}
}

*/