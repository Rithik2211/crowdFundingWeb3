import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {StateContextProvider} from './context/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <App/>
    </StateContextProvider> 
  </React.StrictMode>
);