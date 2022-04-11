import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DocumentTitle from "react-document-title";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <DocumentTitle title="Sweet Stock" />
  </React.StrictMode>,
  document.getElementById("root")
);
