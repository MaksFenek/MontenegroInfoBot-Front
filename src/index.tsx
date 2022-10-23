import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";
import LocationProvider from "./modules/common/providers/LocationProvider";
import { store } from "./store";
import { Provider } from "react-redux";

import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <LocationProvider>
            <Routes />
          </LocationProvider>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
