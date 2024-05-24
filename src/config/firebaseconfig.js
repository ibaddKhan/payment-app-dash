import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzv1Ur24OneChlxAlmXW7zE8F8bCRSxnc",
  authDomain: "test-baae8.firebaseapp.com",
  projectId: "test-baae8",
  storageBucket: "test-baae8.appspot.com",
  messagingSenderId: "494348274469",
  appId: "1:494348274469:web:d3dd3825a836ebcf71a8cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
