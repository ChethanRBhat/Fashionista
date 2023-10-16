// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkw1Ihc7U2U9pa2tBXEn7q2KG4N8WCyP4",
    authDomain: "fashionista-b4efa.firebaseapp.com",
    projectId: "fashionista-b4efa",
    storageBucket: "fashionista-b4efa.appspot.com",
    messagingSenderId: "350632305051",
    appId: "1:350632305051:web:687dad338f0f68777dc13e",
    measurementId: "G-TF4L64401C"
  };

  const firebaseApp=  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth};