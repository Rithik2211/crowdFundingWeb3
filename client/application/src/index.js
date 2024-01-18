import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {StateContextProvider} from './context/index';
import { Provider } from 'react-redux';
import storeReducer from './store/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={storeReducer}>
  <React.StrictMode>
      <App/>
  </React.StrictMode>
  // </Provider>
);