import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import configureStore from "../src/theStore/store";
import axios from 'axios'




axios.defaults.baseURL = 'https://meditech-hospital-app.herokuapp.com/'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
