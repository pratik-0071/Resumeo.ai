// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP3W7kqBqutj-3O_csXXLYf4fKD57SJFE",
  authDomain: "resumeoai.firebaseapp.com",
  projectId: "resumeoai",
  storageBucket: "resumeoai.appspot.com",
  messagingSenderId: "831739415472",
  appId: "1:831739415472:web:7cb82c26749061ff232475",
  measurementId: "G-4RSW82VQ8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const auth = getAuth(app);
export const auth = getAuth(app);