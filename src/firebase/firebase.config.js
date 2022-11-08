// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzB7oDI2Oidy2HfVmTzJ-fMqcBA31m8bM",
  authDomain: "raw-photography.firebaseapp.com",
  projectId: "raw-photography",
  storageBucket: "raw-photography.appspot.com",
  messagingSenderId: "110099311765",
  appId: "1:110099311765:web:008e494640142a10e33f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;