// We make the necessary imports of the SDKs for the project
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// We make the configurations with the firabase keys
const firebaseConfig = {
  apiKey: "AIzaSyAk1aEInoB-JMJuXLnA7w-VaTtlvcz-uK4",
  authDomain: "github-performance-db2a8.firebaseapp.com",
  projectId: "github-performance-db2a8",
  storageBucket: "github-performance-db2a8.appspot.com",
  messagingSenderId: "226763484288",
  appId: "1:226763484288:web:4fad4c1b037f7245e78a65",
  measurementId: "G-DX9B6K9QZZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);