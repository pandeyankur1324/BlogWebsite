import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import SignupForm from "./components/Forms/SignupForm.jsx";
import LoginForm from "./components/Forms/LoginForm.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Hero />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="signup" element={<SignupForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
