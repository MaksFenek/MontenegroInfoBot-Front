import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";
import LocationProvider from "./modules/common/providers/LocationProvider/LocationProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocationProvider>
        <Routes />
      </LocationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
