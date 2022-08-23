import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import 'normalize.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customTheme.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
