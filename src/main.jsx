import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwbaP1oaI88NKjJTrE8wd2iz0vuKw1e28",
  authDomain: "mypcstore1010.firebaseapp.com",
  projectId: "mypcstore1010",
  storageBucket: "mypcstore1010.appspot.com",
  messagingSenderId: "130935678041",
  appId: "1:130935678041:web:50aef38290fed2f8b27d48",
  measurementId: "G-4K5SWRR976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
