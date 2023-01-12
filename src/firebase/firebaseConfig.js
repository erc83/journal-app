// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPgBFmCsBbVG0bHiPyQ6h6xhuLYy2wQpo",
    authDomain: "journal-app-3329b.firebaseapp.com",
    databaseURL: "https://journal-app-3329b-default-rtdb.firebaseio.com",
    projectId: "journal-app-3329b",
    storageBucket: "journal-app-3329b.appspot.com",
    messagingSenderId: "696595254113",
    appId: "1:696595254113:web:089820235d17046a5cd320",
    measurementId: "G-T6BPTRYMX8"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export {
    db,
    googleAuthProvider,
    auth
}
