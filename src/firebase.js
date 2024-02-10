
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBL2cljoOOu2qil9V2uB-P5PY3IRI-xDIg",
  authDomain: "portfolio-ri-90609.firebaseapp.com",
  projectId: "portfolio-ri-90609",
  storageBucket: "portfolio-ri-90609.appspot.com",
  messagingSenderId: "202836645020",
  appId: "1:202836645020:web:fee5b75767b40d17cfc959"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);