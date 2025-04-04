import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCoFZM2lKyvUwwj0kyvyxhMWO1TeykbfU0",
  authDomain: "fin-tech-ed9da.firebaseapp.com",
  projectId: "fin-tech-ed9da",
  storageBucket: "fin-tech-ed9da.appspot.com",
  messagingSenderId: "132329855462",
  appId: "1:132329855462:web:bcb7a19af7b617ebbcde27",
  measurementId: "G-BGH7DJB6XV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, createUserWithEmailAndPassword };