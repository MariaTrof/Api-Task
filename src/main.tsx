import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import ErrorBoundary from "./ErrorBoundary";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
