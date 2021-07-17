import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import './index.css';
import App from './App';

moment().format('LLL');    // July 17, 2021 11:13 PM

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
