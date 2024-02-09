import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Profil from "./page/profil";
import ErrorPage from "./page/error-profil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profil />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
