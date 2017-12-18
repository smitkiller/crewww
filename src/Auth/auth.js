import { ref, firebaseAuth,database } from '../constants/configAuth'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
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

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export function addInfo(table,values){
  return ref.child(table).push()
          .set(values).then(()=>values)
}

export function getInfo(table){
  return database.ref(`/${table}`).once("value")
}

export function getInfoById(table,id){
  return database.child(`/${table}`).child(`/${id}`)
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