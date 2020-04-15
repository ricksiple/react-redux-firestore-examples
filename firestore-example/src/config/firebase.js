import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBKi9CJKsGed5b_Xq36Xfvd6Ijvu74g3mY",
    authDomain: "fossil-record-alpha.firebaseapp.com",
    databaseURL: "https://fossil-record-alpha.firebaseio.com",
    projectId: "fossil-record-alpha",
    storageBucket: "fossil-record-alpha.appspot.com",
    messagingSenderId: "563686739456",
    appId: "1:563686739456:web:e3dd94c22d1d568129d2e5",
    measurementId: "G-TE8ZEWPMQ8"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
