// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDNTlGPXwQT91LLkZXcv2Dg3PZEDiuPok",
  authDomain: "github-performance-719cd.firebaseapp.com",
  projectId: "github-performance-719cd",
  storageBucket: "github-performance-719cd.appspot.com",
  messagingSenderId: "861190177807",
  appId: "1:861190177807:web:b16066b44980bf2f294f7a",
  measurementId: "G-GYSWZPKG13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);