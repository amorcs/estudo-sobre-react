import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCw3dexeVM0dr5EhXZNfZbMjHYga0HozMQ",
    authDomain: "create-auth-react.firebaseapp.com",
    databaseURL: "https://create-auth-react.firebaseio.com",
    projectId: "create-auth-react",
    storageBucket: "create-auth-react.appspot.com",
    messagingSenderId: "494948870433",
    appId: "1:494948870433:web:4b365ce479d110b0def660",
    measurementId: "G-Z441GLV3PZ"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;