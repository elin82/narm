// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6ywHG7CI3hdHIgVDaG3N1tiwreNIOMv0",
  authDomain: "narm-b2bcf.firebaseapp.com",
  projectId: "narm-b2bcf",
  storageBucket: "narm-b2bcf.firebasestorage.app",
  messagingSenderId: "56250998901",
  appId: "1:56250998901:web:1f9704f230ab031085183c",
  measurementId: "G-ZL55184L9P"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {auth,db}
