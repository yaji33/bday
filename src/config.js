// config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAM8FEf5_m5AAtAfnBiQsY0egVRm8Ed5oI",
    authDomain: "bday-k.firebaseapp.com",
    projectId: "bday-k",
    storageBucket: "bday-k.appspot.com",
    messagingSenderId: "506134369458",
    appId: "1:506134369458:web:59b601cc8618d25f0225ab"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
