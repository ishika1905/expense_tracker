// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLgcisVcpb7QY1OXBgtCnCpyNeo02_DY",
  authDomain: "inventory-management-app-bc218.firebaseapp.com",
  projectId: "inventory-management-app-bc218",
  storageBucket: "inventory-management-app-bc218.appspot.com",
  messagingSenderId: "547278320464",
  appId: "1:547278320464:web:0e2950c7e3bcce6884b255",
  measurementId: "G-9RM2CZTV50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app,db };