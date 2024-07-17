import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

import Router from "./routes/Router";
import ThemeContextProvider from "./contexts/ThemeContext";
import { SavedWordsProvider } from "./contexts/SavedWordsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeContextProvider>
        <SavedWordsProvider>
          <Router />
        </SavedWordsProvider>
      </ThemeContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
