import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUJy4aQUO0tg6RAcXZJFPWITCt1g8O4Jc",
  authDomain: "netflix-clone-a1909.firebaseapp.com",
  projectId: "netflix-clone-a1909",
  storageBucket: "netflix-clone-a1909.appspot.com",
  messagingSenderId: "198285579075",
  appId: "1:198285579075:web:86c8f9aaccedaf8b0d55f6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };