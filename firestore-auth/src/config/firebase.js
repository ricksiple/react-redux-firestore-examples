import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVQJvIa00GzdnTdTAPuxXXV_MGyF8qfo8",
    authDomain: "firestore-example-50a9c.firebaseapp.com",
    databaseURL: "https://firestore-example-50a9c.firebaseio.com",
    projectId: "firestore-example-50a9c",
    storageBucket: "firestore-example-50a9c.appspot.com",
    messagingSenderId: "909230457167",
    appId: "1:909230457167:web:8ae1a26e64bab70dcf453a",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;