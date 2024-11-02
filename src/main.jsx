import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import TransactionLists from "./pages/TransactionLists";

createRoot(document.getElementById("root")).render(<TransactionLists />);
