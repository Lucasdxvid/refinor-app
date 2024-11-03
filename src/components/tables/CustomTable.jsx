import React from "react";

const CustomTable = ({ columns, data, rightAlignedColumns = [] }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-100 text-gray-500 uppercase text-sm leading-normal">
          {columns.map((col) => (
            <th
              key={col.accessor}
              className={`py-3 px-6 font-semibold whitespace-nowrap text-left ${
                rightAlignedColumns.includes(col.accessor) ? "text-right" : ""
              }`}
            >
              {col.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-500 text-sm">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {columns.map((col) => (
              <td
                key={col.accessor}
                className={`py-3 px-6 whitespace-nowrap ${
                  rightAlignedColumns.includes(col.accessor)
                    ? "text-right"
                    : "text-left"
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

export default CustomTable;