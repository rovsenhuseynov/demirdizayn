import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import LazyLoad from "./assets/LazyLoad";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LazyLoad>
        <App />
      </LazyLoad>
    </BrowserRouter>
  </React.StrictMode>
);
