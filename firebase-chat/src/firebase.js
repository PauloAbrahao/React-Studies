import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8SUWNHMXmamHoxgaDNrXJwZ0qL78Kreg",
  authDomain: "fir-chat-application-619b6.firebaseapp.com",
  projectId: "fir-chat-application-619b6",
  storageBucket: "fir-chat-application-619b6.appspot.com",
  messagingSenderId: "868437678261",
  appId: "1:868437678261:web:c872033b63b49381dfc6fc",
  measurementId: "G-K2R0PW958W",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };