// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANMmq1mv7k7TLQsjcV5GDUYxF287-jeAo",
  authDomain: "subtrackr-cb6f1.firebaseapp.com",
  projectId: "subtrackr-cb6f1",
  storageBucket: "subtrackr-cb6f1.appspot.com",
  messagingSenderId: "253170557845",
  appId: "1:253170557845:web:437d4e37a8ffdf99354c9c",
  measurementId: "G-QJ37KRYZ2G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
