import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'


let firebaseConfig = {
    apiKey: "AIzaSyAtH6vG0nrUXe7Wm-OmbzsUhA-JItNefSw",
    authDomain: "sistemadeprontuarios.firebaseapp.com",
    projectId: "sistemadeprontuarios",
    storageBucket: "sistemadeprontuarios.appspot.com",
    messagingSenderId: "782027586670",
    appId: "1:782027586670:web:bb68bcb92fa3140cb4ba7f",
    measurementId: "G-MXCNP8J8S6"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;