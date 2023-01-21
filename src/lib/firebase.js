import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyB9x_s-Y2tAcGFBHHg7ezH59v3LwIFcHPw",
    authDomain: "messaging-board-2554f.firebaseapp.com",
    projectId: "messaging-board-2554f",
    storageBucket: "messaging-board-2554f.appspot.com",
    messagingSenderId: "15246523662",
    appId: "1:15246523662:web:89cd82fc18673a565dab5f",
    measurementId: "G-0HP90P8WLW"
  };

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();

export default db;