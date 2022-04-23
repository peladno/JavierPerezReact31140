import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsUPOWaBxgySAyX9-wzqF7T3piadOq3Ko",
  authDomain: "javierperezreact31140.firebaseapp.com",
  projectId: "javierperezreact31140",
  storageBucket: "javierperezreact31140.appspot.com",
  messagingSenderId: "826744716756",
  appId: "1:826744716756:web:e5b1b6012c52a696f02a41"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
