// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9qBU_omCquZevGtJsyxauVZPLq7OjlX8",
  authDomain: "netflixgpt-fd863.firebaseapp.com",
  projectId: "netflixgpt-fd863",
  storageBucket: "netflixgpt-fd863.appspot.com",
  messagingSenderId: "317294377022",
  appId: "1:317294377022:web:b3b20c4395e42d17c2f96f",
  measurementId: "G-W7R6PMJVC0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, analytics, auth };
