import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./components/Login";
import "./styles/style.css";
import Navbar from "./components/Navbar";

createRoot(document.getElementById("root")).render(
  <div>
    <Login />
    <Navbar />
  </div>
);
