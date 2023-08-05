// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
   const firebaseConfig = {
  apiKey: 'AIzaSyB5JoI6mPDv-el1Xaz-mivaAlJvIAMV_e4',
  authDomain: 'shebait.firebaseapp.com',
  projectId: 'shebait',
  storageBucket: 'shebait.appspot.com',
  messagingSenderId: '146078786827',
  appId: '1:146078786827:web:6bbd749f63c7b3634f2e0e',
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;