import React from "react";
import CustomTable from "../components/tables/CustomTable";
import Layout from "./Layout";

const AccessList = () => {
  const columns = [
    { Header: "Nombre", accessor: "nombre" },
    { Header: "Puntos refinor asociados", accessor: "puntosAsociados" },
    { Header: "Acceso", accessor: "acceso" },
    { Header: "Acción", accessor: "accion" },
  ];

  const data = [
    {
      nombre: "Tucumán GNC",
      puntosAsociados: "Altos del Valle, Lorem, Ipsum...",
      acceso: "Activo",
      accion: (
        <div className="flex justify-end gap-2">
          <button className="text-green-600">Editar</button>
          <button className="text-red-600">Eliminar</button>
        </div>
      ),
    },
    // ... otros datos
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-6">Listado de Accesos</h1>
      <CustomTable
        columns={columns}
        data={data}
        rightAlignedColumns={["acceso", "accion"]}
      />
    </Layout>
  );
};

export default AccessList;
