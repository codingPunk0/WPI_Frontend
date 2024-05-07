import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StateProvider } from "./globalState/stateProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutedApp } from "./Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <Router>
        <RoutedApp />
      </Router>
    </StateProvider>
  </React.StrictMode>
);
