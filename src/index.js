import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DocumentTitle from "react-document-title";
 

ReactDOM.render(
  <React.StrictMode>
    <App />
    <DocumentTitle title="Sweet Stock" />
  </React.StrictMode>,
  document.getElementById('root')
);

