import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyChvAf--oVxeQ_l2guJC5WVlRqdbQACesQ",
    authDomain: "cre-redux.firebaseapp.com",
    databaseURL: "https://cre-redux.firebaseio.com",
    projectId: "cre-redux",
    storageBucket: "cre-redux.appspot.com",
    messagingSenderId: "585333449053"
  };
  firebase.initializeApp(config);
export const database= firebase.database();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
