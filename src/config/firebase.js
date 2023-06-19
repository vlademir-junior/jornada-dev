// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyAWlabCenT6Q7QcNajiVQUnXMGQ9kPfYKs",
  authDomain: "tiktoklone.firebaseapp.com",
  projectId: "tiktoklone",
  storageBucket: "tiktoklone.appspot.com",
  messagingSenderId: "246627468670",
  appId: "1:246627468670:web:29541104f39a82c6da9f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;