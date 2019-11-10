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
        'admin_page':user.admin_page,
        'room_page':user.room_page
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

export function getInfoByUid(table,email,uid){
  return database.ref(`/${table}`)
  .orderByChild('uid')
  .equalTo(uid)
  .once("value")
}

export function delInfo(table,id){
  return database.ref(`/${table}`).child(id).remove()
}

export function delTable(table){
  return database.ref(`/${table}`).remove()
}

export function delUser(id){
  return 
  var user = firebaseAuth.currentUser;
    user.delete().then(function() {
        database.ref("users/".concat(id, "/")).remove();
    }).catch(function(error) {
      // An error happened.
    });
}

export function updateInfo(table,values){
  return database.ref(`/${table}`).child(values.id)
  .update(values)
}