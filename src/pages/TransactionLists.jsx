import React from "react";
import TableComponent from "../components/tables/TableComponent";
import Layout from "./Layout";
import { AmountMoney } from "../components/AmountMoney";

const TransactionLists = () => {
  // Definición de las columnas
  const columns = [
    { Header: "Transacción", accessor: "transaccion" },
    { Header: "Vendedor", accessor: "vendedor" },
    { Header: "Fecha", accessor: "fecha" },
    { Header: "Punto Refinor", accessor: "puntoRefinor" },
    { Header: "Usuario", accessor: "usuario" },
    { Header: "Empresa", accessor: "empresa" },
    { Header: "Tipo", accessor: "tipo" },
    { Header: "Monto", accessor: "monto" },
  ];

  // Datos de ejemplo
  const data = [
    {
      transaccion: "A2343FDSG",
      vendedor: "Juan Perez",
      fecha: "1/2/2024",
      puntoRefinor: "Altos del Valle",
      usuario: "Julian Veneziano",
      empresa: "La Gaceta",
      tipo: "Beneficio",
      monto: "$10.000",
    },
    {
      transaccion: "A235GH4HF",
      vendedor: "Rodrigo Mora",
      fecha: "31/1/2024",
      puntoRefinor: "Estación El Bajo",
      usuario: "Pablo Caro",
      empresa: "Usuario Refinor",
      tipo: "Carga manual",
      monto: "$7.500",
    },
    {
      transaccion: "432ZVGHD",
      vendedor: "Javier Lopez",
      fecha: "27/1/2024",
      puntoRefinor: "Aris GNC",
      usuario: "Maxi Bravo",
      empresa: "Usuario Final",
      tipo: "Devolución",
      monto: "$15.000",
    },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-6">Listado de Transacciones</h1>
      <AmountMoney />
      <TableComponent columns={columns} data={data} />
    </Layout>
  );
};

export default TransactionLists;
