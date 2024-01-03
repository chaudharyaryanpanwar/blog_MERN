import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9mPTCRM_woBnX0rZmjDXvMcUZu4H1Ir0",
  authDomain: "my-react-blog-73711.firebaseapp.com",
  projectId: "my-react-blog-73711",
  storageBucket: "my-react-blog-73711.appspot.com",
  messagingSenderId: "190323787092",
  appId: "1:190323787092:web:1b6216c2a4a60dc2b534c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


