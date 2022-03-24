import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig.js';

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const auth = firebase.auth();
const firestoredb = firebase.firestore(); 

export { db, auth, firestoredb };
