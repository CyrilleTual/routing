import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom' // utilisation d'un alias


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Router>
    <App />
  </Router>
  
);

reportWebVitals();
