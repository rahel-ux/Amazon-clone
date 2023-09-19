// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBLjmL820uYSJ6bDZMmkETt_zQsp8hylqY",
  authDomain: "clone1-2aeaa.firebaseapp.com",
  projectId: "clone1-2aeaa",
  storageBucket: "clone1-2aeaa.appspot.com",
  messagingSenderId: "665754640394",
  appId: "1:665754640394:web:69615205d25511637dbff3",
  measurementId: "G-RY1J3ZXL7D",
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

// export {auth}
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db}