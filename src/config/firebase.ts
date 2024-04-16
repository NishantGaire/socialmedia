// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQQtU-5rxWKIir6nKmP5sMgB5HCfmpTdQ",
  authDomain: "react-course-673cc.firebaseapp.com",
  projectId: "react-course-673cc",
  storageBucket: "react-course-673cc.appspot.com",
  messagingSenderId: "363731950383",
  appId: "1:363731950383:web:0074fbaa1aa3db0054dfda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);