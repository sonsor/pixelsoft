import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'


const Root = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const element = document.getElementById('root')
ReactDOM.render(<Root />, element);

