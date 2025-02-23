import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/Route.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      toastClassName="toastBody"
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
