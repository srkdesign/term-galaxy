import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

import Router from "./routes/Router";
import ThemeContextProvider from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
