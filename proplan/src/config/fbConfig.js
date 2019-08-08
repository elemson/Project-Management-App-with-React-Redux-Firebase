import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAGgOjdifXrHBROMZK72rE8mn1YR7J7Ywg",
  authDomain: "proplan-d39c4.firebaseapp.com",
  databaseURL: "https://proplan-d39c4.firebaseio.com",
  projectId: "proplan-d39c4",
  storageBucket: "proplan-d39c4.appspot.com",
  messagingSenderId: "500329115389",
  appId: "1:500329115389:web:a43580fc901fa51c"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
