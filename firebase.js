// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmdEL_4OrPc1KnCBxQQSPYl58UphSO9ac",
  authDomain: "instagram-clone-96463.firebaseapp.com",
  projectId: "instagram-clone-96463",
  storageBucket: "instagram-clone-96463.appspot.com",
  messagingSenderId: "180103993191",
  appId: "1:180103993191:web:b7f14e5dad74dcc51a41c2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
