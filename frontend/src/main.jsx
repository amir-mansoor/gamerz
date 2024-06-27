import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import "./globals.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import HomeScreen from "./screens/HomeScreen.jsx";
import NotFound from "./components/NotFound.jsx";
import AuthRoutes from "./components/AuthRoutes.jsx";
import AdminRoutes from "./components/AdminRoutes.jsx";
import AdminDashBoard from "./screens/admin/AdminDashBoard.jsx";
import ExploreScreen from "./screens/ExploreScreen.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="" element={<AuthRoutes />}>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Route>

      <Route path="/explore" element={<ExploreScreen />} />
      <Route path="/" element={<AdminRoutes />}>
        <Route path="/admin/dashboard" element={<AdminDashBoard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
