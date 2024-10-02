import { lazy } from "react";
import App from "../App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Features = lazy(() => import("../pages/features"));
const Saved = lazy(() => import("../pages/saved"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="features/" element={<Features />} />
        <Route path="about/" element={<About />} />
        <Route path="saved/" element={<Saved />} />
        <Route path="contact/" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
