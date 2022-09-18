// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBIw0oSdneg35NF5dCeqTCsTheHAp2W338",

  authDomain: "curso-de-react-pablo.firebaseapp.com",

  projectId: "curso-de-react-pablo",

  storageBucket: "curso-de-react-pablo.appspot.com",

  messagingSenderId: "236466283472",

  appId: "1:236466283472:web:ab4ba5f68816be00f2cfd5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)