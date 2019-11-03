import React from "react";
import "../../styles/components/Table.scss";
import TableContext from "./TableContext";
import useTableState from "./useTableState";
export default function Table(props: any) {
  const [headers, setHeaders] = useTableState();
  return (
    <TableContext.Provider
      value={{
        tableHeaders: headers,
        addTableHeader: (header: string) =>
          setHeaders([...headers.concat(header)])
      }}
    >
      <table className="ys-table">{props.children}</table>
    </TableContext.Provider>
  );
}
