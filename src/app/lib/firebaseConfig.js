// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANxoLqblbY-nFSnNx17dhqvGzewh2qOPA",
  authDomain: "chickhen-road.firebaseapp.com",
  projectId: "chickhen-road",
  storageBucket: "chickhen-road.firebasestorage.app",
  messagingSenderId: "695200268096",
  appId: "1:695200268096:web:babfe9441c201f445ac4a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;