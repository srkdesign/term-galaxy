import React from "react";
import ReactDOM from "react-dom/client";

import "./utils/i18n";
import "./index.css";

import { NextUIProvider } from "@nextui-org/system";
import ThemeContextProvider from "./contexts/ThemeContext";
import { SavedWordsProvider } from "./contexts/SavedWordsContext";
import { QueryClient, QueryClientProvider } from "react-query";

import Router from "./routes/Router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <ThemeContextProvider>
          <SavedWordsProvider>
            <Router />
          </SavedWordsProvider>
        </ThemeContextProvider>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
