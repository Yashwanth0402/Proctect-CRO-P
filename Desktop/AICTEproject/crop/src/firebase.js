import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMMukUyICCVg2PYObluVY9d88Glg8wYv8",
  authDomain: "crop-challenge-37d58.firebaseapp.com",
  projectId: "crop-challenge-37d58",
  storageBucket: "crop-challenge-37d58.appspot.com",
  messagingSenderId: "145077883049",
  appId: "1:145077883049:web:e03431c7d2f090a20399b8",
  measurementId: "G-YZLD8PE1FP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };