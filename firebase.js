// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJe2uv57ERmeiu_pwJRrJqjSoq_mXyLiw",
  authDomain: "insta-clone-react-native-2cda4.firebaseapp.com",
  projectId: "insta-clone-react-native-2cda4",
  storageBucket: "insta-clone-react-native-2cda4.appspot.com",
  messagingSenderId: "734009383478",
  appId: "1:734009383478:web:a560838ed4248307d81697",
  measurementId: "G-FNZ0ST040Y"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// !firebaseConfig.apps.length ? firebaseConfig.initializeApp(firebaseConfig) : firebaseConfig.app();
// const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

export { db, auth };