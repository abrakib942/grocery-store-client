// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Cf51KzNAFLCTtXEvbU-hjqSbEtwpFdc",
  authDomain: "grocery-store-cbc0a.firebaseapp.com",
  projectId: "grocery-store-cbc0a",
  storageBucket: "grocery-store-cbc0a.appspot.com",
  messagingSenderId: "1013399420312",
  appId: "1:1013399420312:web:1afd96d37d3267fe213fed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
