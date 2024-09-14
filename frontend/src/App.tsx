import { useContext, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <Suspense fallback="Translations are loading...">
      <div
        className={`${isDark ? `dark bg-dark` : `light bg-light`
          } text-foreground bg-background min-h-full md:grid xl:grid-rows-[auto_1fr_auto] xl:justify-items-center xl:grid-cols-8 md:grid-cols-6 antialiased`}
      >
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
