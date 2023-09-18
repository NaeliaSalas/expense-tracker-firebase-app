// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMWgXROW4bLZ4FkthZhxQ3v93u-rHE9kY",
  authDomain: "expense-tracker-a6bb9.firebaseapp.com",
  projectId: "expense-tracker-a6bb9",
  storageBucket: "expense-tracker-a6bb9.appspot.com",
  messagingSenderId: "742666917951",
  appId: "1:742666917951:web:fcc9ce58b14433a816408a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

//firebase login
//firebase init
//firebase deploy