// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVsnCzcSUjlNQJRcE9CjfJNbc8-8y-jTA",
  authDomain: "pijournal-27.firebaseapp.com",
  projectId: "pijournal-27",
  storageBucket: "pijournal-27.appspot.com",
  messagingSenderId: "585697882221",
  appId: "1:585697882221:web:02e7f4e7d1183d10a24f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;