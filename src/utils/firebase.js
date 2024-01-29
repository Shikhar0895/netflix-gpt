// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNqYevJxl4E5XHRWGt-MNuvpF1n5XT4Co",
  authDomain: "netflixgpt-3df26.firebaseapp.com",
  projectId: "netflixgpt-3df26",
  storageBucket: "netflixgpt-3df26.appspot.com",
  messagingSenderId: "322993383321",
  appId: "1:322993383321:web:a79fc7a6bb89ed61a99508",
  measurementId: "G-VHCH9LP7CK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
