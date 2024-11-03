import React from "react";
import { Route, Routes } from "react-router-dom";
import TransactionList from "./pages/TransactionList";
import AccessList from "./pages/AccessList";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TransactionList />} />
      <Route path="/listado-transacciones" element={<TransactionList />} />
      <Route path="/listado-acceso" element={<AccessList />} />
    </Routes>
  );
};
