
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABcc5oeZsYNeMJbJAwzxNSsokk4sTcmNc",
  authDomain: "react-project-6aaa0.firebaseapp.com",
  projectId: "react-project-6aaa0",
  storageBucket: "react-project-6aaa0.appspot.com",
  messagingSenderId: "916175809435",
  appId: "1:916175809435:web:3f638fc514a1bba98bcf3e",
  measurementId: "G-949KTD1PC0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();


export {auth, db};