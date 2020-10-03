import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBXTsuXKR8zClLkhbUQ_FIQdmVBj7syh6k",
    authDomain: "reactappconsolidacao.firebaseapp.com",
    databaseURL: "https://reactappconsolidacao.firebaseio.com",
    projectId: "reactappconsolidacao",
    storageBucket: "reactappconsolidacao.appspot.com",
    messagingSenderId: "928978302727",
    appId: "1:928978302727:web:05e58e78573a989caff7a2",
    measurementId: "G-RETML5DFPB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;