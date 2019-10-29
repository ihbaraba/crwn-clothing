import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5wwlLrq5DHgK_AXMXzUcYUpTfvFopE9k",
  authDomain: "crwn-db-62565.firebaseapp.com",
  databaseURL: "https://crwn-db-62565.firebaseio.com",
  projectId: "crwn-db-62565",
  storageBucket: "crwn-db-62565.appspot.com",
  messagingSenderId: "63849807671",
  appId: "1:63849807671:web:6daab2748274787fc264b2",
  measurementId: "G-QHTVT92W50"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
