import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDLtL8R1qYRF0wgXDXm-LkX5QylMh7bFQ",
  authDomain: "unichat-c9dc2.firebaseapp.com",
  projectId: "unichat-c9dc2",
  storageBucket: "unichat-c9dc2.appspot.com",
  messagingSenderId: "867846154147",
  appId: "1:867846154147:web:83b22db239d9fab1309c16",
  measurementId: "G-X4G9JFBPC6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebaseApp.firestore()

export {auth, db}