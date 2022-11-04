import "styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { store } from "store";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "modules/common/layout/MainLayout";
import EventAddFormProvider from "modules/events/layout/EventAddFormProvider";
import { appWithTranslation } from "next-i18next";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <EventAddFormProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </EventAddFormProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
