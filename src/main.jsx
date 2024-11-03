import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import TransactionList from "./pages/TransactionList";

createRoot(document.getElementById("root")).render(<TransactionList />);
