// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhv_cocXjKDIaOAObezZ3yuiusIhyJA34",
    authDomain: "mindful-support.firebaseapp.com",
    projectId: "mindful-support",
    storageBucket: "mindful-support.appspot.com",
    messagingSenderId: "917569009335",
    appId: "1:917569009335:web:929f8d746476bc0d77bf32",
    measurementId: "G-4X3KQH2Q2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export auth
export { auth }; // Remove the duplicate export
