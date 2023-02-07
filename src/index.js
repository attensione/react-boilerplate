import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App_users';
//import App from './App_currencies';
import App from './App_random_users';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//import reportWebVitals from './reportWebVitals';
//reportWebVitals(console.log);
