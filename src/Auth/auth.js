import { ref, firebaseAuth,database } from '../constants/configAuth'

export function auth(user){
   return firebaseAuth().createUserWithEmailAndPassword(user.email,user.password)
   .then((data)=>{
        saveUser(data,user);
   })
}

export function saveUser(data,user){
const val={
       'email': data.email,
      'uid': data.uid,
      'firstname':user.firstname,
      'lastname':user.lastname,
      'tel':user.tel,
      'role':{
        'user_read':user.user_read?true:false,
        'user_write':user.user_write?true:false,
        'room_read':user.room_read?true:false,
        'room_write':user.room_write?true:false
      }
}

  return ref.child(`users`).push()
    .set(val)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}


export function addInfo(table,values){
  return ref.child(table).push()
          .set(values).then(()=>values)
}

export function getInfo(table){
  return database.ref(`/${table}`).once("value")
}

export function getInfoById(table,id,value){
  return database.ref(`/${table}`).orderByChild(id).equalTo(value).once("value")
}

export function delInfo(table,id){
  return database.ref(`/${table}`).child(id).remove()
}

export function delTable(table){
  return database.ref(`/${table}`).remove()
}

export function updateInfo(table,values){
  return database.ref(`/${table}`).child(values.id)
  .update(values)
}