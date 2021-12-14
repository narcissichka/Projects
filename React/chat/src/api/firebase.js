import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyAtgkAzl6dKbm3txuaZXCnqfB3-QcVDrsU",
  authDomain: "chatik-27fb9.firebaseapp.com",
  databaseURL:
    "https://chatik-27fb9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatik-27fb9",
  storageBucket: "chatik-27fb9.appspot.com",
  messagingSenderId: "919807808882",
  appId: "1:919807808882:web:81fa9fae7b03d5b9ecb9eb",
  measurementId: "${config.measurementId}",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.database();
