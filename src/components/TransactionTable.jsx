// TransactionTable.js
import React from "react";

const TransactionTable = ({ tableInstance }) => {
  const {
    getTableProps,
    getTableBodyProps,
    page,
    prepareRow,
  } = tableInstance;

  return (
    <div {...getTableProps()} className="row d-flex align-items-center">
      {page.map((row) => {
        prepareRow(row);
        return (
          <div {...row.getRowProps()} className="col-md-12">
            <div className="card box-shadow my-2">
              <div className="card-body py-2 px-3">
                <div
                  className="row d-flex align-items-center"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => (
                    <div key={cell.column.id} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionTable;
