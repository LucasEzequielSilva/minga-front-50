import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Mangas from "../pages/Mangas";
import Layout from "../layouts/Layout";
import Details from "../pages/Details";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mangas",
        element: <Mangas />,
      },
      {
        path: "/mangas/:page",
        element: <Mangas />,
      },
      {
        path: "/prueba",
        element: <h1>Probando tercer ruta</h1>,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },

    ],
  },
]);

export default router;
