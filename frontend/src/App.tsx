import "./App.css";

import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full md:grid md:grid-rows-[auto_1fr_auto] md:place-items-center">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
