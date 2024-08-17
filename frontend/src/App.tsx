import "./App.css";

import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`${
        isDark ? `dark` : `light`
      } text-foreground bg-background min-h-full md:grid md:grid-rows-[auto_1fr_auto] md:justify-items-center`}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
