import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteError from "./components/layout/RouteError";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register/Register";
import Posts from "./components/posts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "register",
    element: <Register />,
  },

  {
    path: "posts",
    element: <Posts />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
