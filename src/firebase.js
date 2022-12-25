import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4s2QHkHRHTpDe84AG-SsPXhHwbB9JyGM",
  authDomain: "netflix-clone-180b6.firebaseapp.com",
  projectId: "netflix-clone-180b6",
  storageBucket: "netflix-clone-180b6.appspot.com",
  messagingSenderId: "915165434347",
  appId: "1:915165434347:web:947b75ea5f5143918449ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
