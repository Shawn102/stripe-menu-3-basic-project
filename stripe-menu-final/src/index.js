import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProviderContext } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviderContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviderContext>
  </React.StrictMode>
);
