// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// SDKs for Firebase Authentication
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbhIl6NZy5nUTTstiDYGilzBRgwMirQ8Y",
  authDomain: "udemy-clone-8c35d.firebaseapp.com",
  projectId: "udemy-clone-8c35d",
  storageBucket: "udemy-clone-8c35d.appspot.com",
  messagingSenderId: "1028078712209",
  appId: "1:1028078712209:web:00e50c9d7bfba2c2e29630"
};
        
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
