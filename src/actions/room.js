import { CALL_API } from 'redux-api-middleware';
import { browserHistory } from 'react-router';
import {
  LOAD_ROOMSCOL_REQUEST,LOAD_ROOMSCOL_SUCCESS,LOAD_ROOMSCOL_FAILURE,
  CREATE_ROOMSCOL_REQUEST,CREATE_ROOMSCOL_SUCCESS,CREATE_ROOMSCOL_FAILURE,
  CREATE_ROOMS_REQUEST,CREATE_ROOMS_SUCCESS,CREATE_ROOMS_FAILURE,
  DELETE_ROOMS_REQUEST,DELETE_ROOMS_SUCCESS,DELETE_ROOMS_FAILURE,
  DELETE_ROOMSCOL_REQUEST,DELETE_ROOMSCOL_SUCCESS,DELETE_ROOMSCOL_FAILURE,
  LOAD_ROOMS_REQUEST,LOAD_ROOMS_SUCCESS,LOAD_ROOMS_FAILURE,
  LOAD_ROOMCOL_REQUEST,LOAD_ROOMCOL_SUCCESS,LOAD_ROOMCOL_FAILURE,
  CREATE_RESERVE_REQUEST,CREATE_RESERVE_SUCCESS,CREATE_RESERVE_FAILURE,
  LOAD_RESERVE_REQUEST,LOAD_RESERVE_SUCCESS,LOAD_RESERVE_FAILURE

} from '../constants/actionTypes';
import { addInfo,getInfo,getInfoById,delInfo,updateInfo,delTable } from '../Auth/auth';

export function loadRoomcol(id){
  return dispatch=>{
    dispatch(loadRoomcolRequest());
    getInfoById('roomscol',id)
    .then((snap)=>{
      dispatch(loadRoomcolSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadRoomcolFailure());
      })
  }
}

function loadRoomcolRequest(){
  return{
    type:LOAD_ROOMCOL_REQUEST
  }
}
function loadRoomcolSuccess(roomcol){
  return{
    type:LOAD_ROOMCOL_SUCCESS,
    payload:roomcol
  }
}
function loadRoomcolFailure(){
  return{
    type:LOAD_ROOMCOL_FAILURE
  }
}

export function loadRoomscol(){
  return dispatch=>{
      dispatch(loadRoomscolRequest());
      getInfo('roomscol')
      .then((snap)=>{
        dispatch(loadRoomscolSuccess(snap.val()))
      })
      .catch((error)=>{
        dispatch(loadRoomscolFailure());
      })
  }
}

function loadRoomscolRequest(){
  return{
    type:LOAD_ROOMSCOL_REQUEST
  }
}
function loadRoomscolSuccess(roomscol){
  return{
    type:LOAD_ROOMSCOL_SUCCESS
  }
}
function loadRoomscolFailure(){
  return{
    type:LOAD_ROOMSCOL_FAILURE
  }
}

export function loadRooms(){
  return dispatch=>{
    dispatch(loadRoomsRequest());
    getInfo('rooms')
    .then((snap)=>{
      dispatch(loadRoomsSuccess(snap.val()));
    })
    .catch((error)=>{
      dispatch(loadRoomsFailure());
    })
  }
}
function loadRoomsRequest(){
  return{
    type:LOAD_ROOMS_REQUEST
  }
}
function loadRoomsSuccess(rooms){
  return{
    type:LOAD_ROOMS_SUCCESS,
    payload:rooms
  }
}
function loadRoomsFailure(){
  return{
    type:LOAD_ROOMS_FAILURE
  }
}

function createRooms(values){
  return dispatch=>{
    dispatch(createRoomsRequest());
    addInfo('rooms',values)
    .then((snap)=>{
      dispatch(createRoomsSuccess());
    })
    .catch((error)=>{
      dispatch(createRoomsFailure());
    })
  }
}
function createRoomsRequest(){
  return{
    type:CREATE_ROOMS_REQUEST
  }
}
function createRoomsSuccess(){
  return{
    type:CREATE_ROOMS_SUCCESS
  }
}
function createRoomsFailure(){
  return{
    type:CREATE_ROOMS_FAILURE
  }
}

export function cleanRooms(){
  return dispatch=>{
    dispatch(cleanRoomsRequest());
    delTable('rooms')
    .then((snap)=>{
      dispatch(cleanRoomsSuccess());
    })
    .catch((error)=>{
      dispatch(cleanRoomsFailure());
    })
  }
}
function cleanRoomsRequest(){
  return{
    type:DELETE_ROOMS_REQUEST
  }
}
function cleanRoomsSuccess(){
  return{
    type:DELETE_ROOMS_SUCCESS,
    payload:{
      status:true
    }
  }
}
function cleanRoomsFailure(){
  return{
    type:DELETE_ROOMS_FAILURE
  }
}

export function cleanRoomsCol(){
  return dispatch=>{
    dispatch(cleanRoomsColRequest());
    delTable('roomscol')
    .then((snap)=>{
      dispatch(cleanRoomsColSuccess());
    })
    .catch((error)=>{
      dispatch(cleanRoomsColFailure());
    })
  }
}

function cleanRoomsColRequest(){
  return{
    type:DELETE_ROOMSCOL_REQUEST
  }
}
function cleanRoomsColSuccess(){
  return{
    type:DELETE_ROOMSCOL_SUCCESS,
    payload:{
      status:true
    }
  }
}
function cleanRoomsColFailure(){
  return{
    type:DELETE_ROOMSCOL_FAILURE
  }
}


function createRoomscol(values){
  return dispatch=>{
    dispatch(createRoomscolRequest());
    addInfo('roomscol',values)
    .then((snap)=>{
      dispatch(createRoomscolSuccess(snap.val()))
    })
    .catch((error)=>{
      dispatch(createRoomscolFailure())
    })
  }
}
function createRoomscolRequest(){
  return{
    type:CREATE_ROOMSCOL_REQUEST
  }
}
function createRoomscolSuccess(roomscol){
  return{
    type:CREATE_ROOMSCOL_SUCCESS,
    payload:roomscol
  }
}
function createRoomscolFailure(){
  return{
    type:CREATE_ROOMSCOL_FAILURE
  }
}



export const updateRoomscol=(values,level)=>(
   (dispatch)=>{
            var statusRooms;
            var statusRoomsCol;
            var data=[];
            var newValue=[];
            var total=0;
            for(var i=0;i<level;i++){
              total=Number(total)+Number(values[i]);
            }

              data = {
                          totalLevel:level,
                          levelRooms:values,
                          totalRooms:total
                    }

              //  roomsNum(data)
               dispatch(manageRooms(data))
               dispatch(manageRoomsCol(data))
               browserHistory.push('/roomcol')
             //console.log('ssssssmit',data[0])
      }
   
  )

const manageRooms = (data) =>(
  (dispatch)=>{
      dispatch(cleanRooms())
      .then(function(result){
          if(result.payload.status===true){
            dispatch(createRooms(data));
          }        
        })
       .catch((error)=>{
        console.log('error',error);
      })

    }
    
  )

const manageRoomsCol = (data) =>(
    (dispatch)=>{
      dispatch(cleanRoomsCol())
      .then(function(result){
          if(result.payload.status===true){
            dispatch(createRoomscol(data));           
            }        
      })
      .catch((error)=>{
            console.log('error',error)
      })
    }
  )

export const addRomms = (values) =>(
  (dispatch)=>{
  var statusRooms;
  var statusRoomsCol;
  var data=[];
  var newValue=[];
  var total=0;
  for(var i=0;i<values.length;i++){
    total=Number(total)+Number(values[i]);
  }

    data = {
                totalLevel:values.length,
                levelRooms:values,
                totalRooms:total
          }

    //  roomsNum(data)
   dispatch(manageRooms(data))
   dispatch(manageRoomsCol(data))
   browserHistory.push('/roomcol')
  }

)


function roomsNum(values){
      var data = []; 
      for(var i=0;i<values.totalLevel;i++){        
          for(var j=0;j<values.levelRooms[i];j++){
              var rows=(i+1).toString();
              var col=(j+1).toString();            
              var numRooms=pad(col, 3);
              var numberRoom = rows.concat(numRooms);
              data.push({id:numberRoom,level:i+1});
             
          }

      }
         /*   var lev=[];
      for(var m=0;m<values.totalLevel;m++){
        lev.push([]);
      } */
      
      return data;
}

function pad(str, max) {
return str.length < max ? pad("0" + str, max) : str;
}
 
//  /////////////////////////  Reserve ////////////////////////////

export function addReserve(values){
  return dispatch=>{
    dispatch(addReserveRequest());
    addInfo('reserve',values)
    .then((snap)=>{
      dispatch(addReserveSuccess());
    })
    .catch((error)=>{
      dispatch(addReserveFailure());
    })
  }
}
function addReserveRequest(){
  return{
    type:CREATE_RESERVE_REQUEST
  }
}
function addReserveSuccess(){
  return{
    type:CREATE_RESERVE_SUCCESS
  }
}
function addReserveFailure(){
  return{
    type:CREATE_RESERVE_FAILURE
  }
}

export function loadReserve(){
  return dispatch=>{
    dispatch(loadReserveRequest());
    getInfo('reserve')
    .then((snap)=>{
      dispatch(loadReserveSuccess(snap.val()));
    })
    .catch((error)=>{
      dispatch(loadReserveFailure());
    })
  }
}
function loadReserveRequest(){
  return{
    type:LOAD_RESERVE_REQUEST
  }
}
function loadReserveSuccess(reserve){
  return{
    type:LOAD_RESERVE_SUCCESS,
    payload:reserve
  }
}
function loadReserveFailure(){
  return{
    type:LOAD_RESERVE_FAILURE
  }
}
