// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sppukar-ff5a6.firebaseapp.com",
  projectId: "sppukar-ff5a6",
  storageBucket: import.meta.env.VITE_FIREBASE_BUCKET,
  messagingSenderId: "246715122196",
  appId: "1:246715122196:web:befa9eee0d3cd40a189d01",
  measurementId: "G-XPCG5SYTP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
