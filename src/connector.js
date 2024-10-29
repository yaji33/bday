// src/connector.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // or getDatabase for Realtime Database
import firebaseConfig from "./config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (or Realtime Database if needed)
const db = getFirestore(app); // or getDatabase(app) for Realtime Database

export { db };
