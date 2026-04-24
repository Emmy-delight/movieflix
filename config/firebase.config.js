// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "movieflix-78cc6.firebaseapp.com",
  projectId: "movieflix-78cc6",
  storageBucket: "movieflix-78cc6.firebasestorage.app",
  messagingSenderId: "342096940009",
  appId: "1:342096940009:web:255a2d529e17962df09978"
};

// Initialize Firebase
const app =  getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};