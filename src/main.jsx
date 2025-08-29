import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./routes/home";
import ErrorPage from "./routes/error_page";
import AboutUs from './routes/about_us';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about_us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
