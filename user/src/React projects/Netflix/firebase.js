// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAyqCbSuLKnFAvNVWtFNIS5ra3tx7Irag",
  authDomain: "video-588f6.firebaseapp.com",
  projectId: "video-588f6",
  storageBucket: "video-588f6.appspot.com",
  messagingSenderId: "454281247507",
  appId: "1:454281247507:web:7744d10af453a5c1db78e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;