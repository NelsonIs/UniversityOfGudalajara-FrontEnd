import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { App } from "./App";
import { SessionContextProvider } from "./contexts/SessionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
