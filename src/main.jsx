import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import TransactionList from "./pages/TransactionList";
import AccessList from "./pages/AccessList";

createRoot(document.getElementById("root")).render(<AccessList />);