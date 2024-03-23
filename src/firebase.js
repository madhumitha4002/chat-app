import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
  
  
  apiKey: "AIzaSyAqXYrwHW-cgquVSpBp7KRRS0vJ1sanO-w",
  authDomain: "chat-5ed08.firebaseapp.com",
  projectId: "chat-5ed08",
  storageBucket: "chat-5ed08.appspot.com",
  messagingSenderId: "783893187303",
  appId: "1:783893187303:web:9331620c637de264bd7042"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
