import React from "react";

const TableComponent = ({ columns, data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-100 text-gray-500 uppercase text-sm leading-normal">
          {columns.map((col) => (
            <th
              key={col.accessor}
              className="py-3 px-6 text-left font-semibold whitespace-nowrap"
            >
              {col.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-500 text-sm">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {columns.map((col, colIndex) => (
              <td
                key={col.accessor}
                className={`py-3 px-6 text-left whitespace-nowrap ${
                  colIndex === 0 ? "font-semibold text-gray-800" : ""
                }`}
              >
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableComponent;
