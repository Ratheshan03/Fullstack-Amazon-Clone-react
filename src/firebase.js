import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCReeJCNP96WsRowaWrl96sS0uiq12a5vI",
  authDomain: "clone-b18f7.firebaseapp.com",
  projectId: "clone-b18f7",
  storageBucket: "clone-b18f7.appspot.com",
  messagingSenderId: "834217019296",
  appId: "1:834217019296:web:65fd331968a8f49a4206c5",
  measurementId: "G-KET3WE4PZ8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { db, auth };
