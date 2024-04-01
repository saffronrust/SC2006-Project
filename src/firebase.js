import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAR1UkYZ8gW6iWg00DCfaifqlDxGPOc2dM",
    authDomain: "simplystay-47876.firebaseapp.com",
    projectId: "simplystay-47876",
    storageBucket: "simplystay-47876.appspot.com",
    messagingSenderId: "1006326958985",
    appId: "1:1006326958985:web:c626938818ae5a00b12f58",
    measurementId: "G-276D8ZFB25"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  db,
  googleProvider,
};