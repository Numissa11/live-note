import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC075OJ6INqyxzm6SsIg0WNhJRdLi1Nbtk",
  authDomain: "live-note-48615.firebaseapp.com",
  projectId: "live-note-48615",
  storageBucket: "live-note-48615.appspot.com",
  messagingSenderId: "118739036553",
  appId: "1:118739036553:web:8cb5822bc4bac26cf75958",
  measurementId: "G-THPK1D232E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

const root = ReactDOM.createRoot(document.getElementById('evernote-container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
