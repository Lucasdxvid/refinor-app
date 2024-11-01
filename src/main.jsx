import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./components/Login";
import Navbar from "./components/nav/Navbar";
import adminMenu from "./components/nav/AdminMenu";

import "./styles/style.css";

createRoot(document.getElementById("root")).render(
  <div>
    <Login />
    <Navbar menuItems={adminMenu} />
  </div>
);
